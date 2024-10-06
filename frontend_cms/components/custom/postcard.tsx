import Link from "next/link";
import { SquarePen } from "lucide-react";
interface PostCardProps {
  title: string;
  authors: string[];
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
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex flex-col w-full border-b-2 border-slate-800 p-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex mt-2 items-center">
          <p className="text-sm text-slate-700  pr-4">
            Authors:{" "}
            {authors.map((a, i) => {
              if (i + 1 === authors.length) {
                return a;
              } else {
                return a + ", ";
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
          <SquarePen className="ml-4 h-5"></SquarePen>
        </div>
      </div>
    </Link>
  );
}
