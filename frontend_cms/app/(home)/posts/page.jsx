"use client";
import { Button } from "@/components/ui/button";
import { Key, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PostCard from "@/components/custom/postcard";
import sample_data from "@/components/sample_data";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

// posts of an org
async function getData() {
  // return sample_data;
  try {
    const response = await axios.get(
      // static org id for now
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/org/67881f117fd4d453d6c333d9`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log("Fetched posts:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}

async function createPost(postData) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`,
      postData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log("Post created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to create post:", error);
    return null;
  }
}

const getUser = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/user`,
      {
        withCredentials: true,
      }
    );

    console.log("Fetched user:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    return null;
  }
};

export default function Posts() {
  const [data, setData] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getData();
      setData(posts);
    };

    const fetchUser = async () => {
      const res = await getUser();
      setUser(res.user);
    };
    fetchData();
    fetchUser();
  }, []);

  return (
    <main className="flex justify-center">
      <div className="flex flex-col w-10/12 mt-10  ">
        <div className="flex items-center space-x-5 border-b-2 border-slate-800 w-full p-4">
          <h1 className="font-bold text-4xl md:text-5xl">Post</h1>

          <Link
            className="bg-slate-800 outline-none p-1 rounded-md hover:bg-slate-600"
            href={"/posts/create"}
          >
            <Plus />
          </Link>
        </div>

        <div className="p-4">
          <Select>
            <SelectTrigger className="w-[180px] border-slate-800 bg-slate-950">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {data.map((c) => (
          <PostCard
            title={c.title}
            authors={c.author}
            category={c.category}
            commentsAmt={c.comments.length}
            id={c._id}
            key={c._id}
          />
        ))}
      </div>
    </main>
  );
}
