import { Button } from "@/components/ui/button";
import { Key, Link, Plus } from "lucide-react";
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

async function getData() {
  return sample_data;
}

export default async function Posts() {
  let data = await getData();
  return (
    <main className="flex justify-center">
      <div className="flex flex-col w-10/12 mt-10  ">
        <div className="flex items-center space-x-5 border-b-2 border-slate-800 w-full p-4">
          <h1 className="font-bold text-4xl md:text-5xl">Post</h1>
          <Button className="bg-slate-800 outline-none" size="icon">
            <Plus />
          </Button>
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
            authors={c.authors}
            category={c.category}
            commentsAmt={c.commentsAmt}
            id={c.id}
            key={c.id}
          />
        ))}
      </div>
    </main>
  );
}
