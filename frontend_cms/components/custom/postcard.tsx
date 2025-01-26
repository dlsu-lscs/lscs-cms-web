import Link from "next/link";
import { SquarePen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
interface PostCardProps {
  title: string;
  authors: [{ _id: string; name: string; email: string }];
  category: string;
  commentsAmt: number;
  id: number;
}

export default function PostCard({
  title,
  authors,
  category,
  commentsAmt,
  id,
}: PostCardProps) {
  const [authorList, setAuthorList] = useState([]);

  useEffect(() => {
    console.log("lo", authors[0].name);
  }, []);
  return (
    <div className="flex flex-col w-full border-b-2 border-slate-800 p-4">
      <Link href={`/posts/${id}`}>
        <h1 className="text-xl font-semibold">{title}</h1>
      </Link>
      <div className="flex mt-2 items-center">
        <p className="text-sm text-slate-700  pr-4">
          {"Authors: "}
          {authors.map((a, i) => {
            if (i + 1 === authors.length) {
              return <span key={a._id}>{a.name}</span>;
            } else {
              return <span key={a._id}>{`${a.name}`}, </span>;
            }
          })}
        </p>
        <p className="text-sm text-slate-400 border-x-2 border-slate-900 px-4">
          {category}
        </p>
        <p
          className={
            commentsAmt > 0
              ? "text-sm text-slate-400 border-x-2 border-slate-900 px-4"
              : "hidden"
          }
        >
          {commentsAmt} comments
        </p>
        <SquarePen className="mx-4 h-5"></SquarePen>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <DotsVerticalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem>
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
