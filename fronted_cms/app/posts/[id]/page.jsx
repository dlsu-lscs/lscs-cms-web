"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import sample_data from "@/components/sample_data";
import CreateNewBlog from "./CreateBlog";

export default function CreateNew() {
  const CreateNewBlog = dynamic(() => import("./CreateBlog"), { ssr: false });
  return (
    <main className="grid p-6 grid-cols-2">
      <div className="">
        <CreateNewBlog />
      </div>
      <div>HIIIIIIIIIIII</div>
    </main>
  );
}
