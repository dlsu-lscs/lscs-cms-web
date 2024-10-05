"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import sample_data from "@/components/sample_data";
import CreateNewBlog from "../CreateBlog";

export default function CreateNew() {
  const CreateNewBlog = dynamic(() => import("../CreateBlog"), { ssr: false });

  return (
    <main className="flex pt-6 px-16 flex-wrap">
      <div className="col-span-2 md:w-4/5 md:px-12">
        <CreateNewBlog data={sample_data[0].data} />
      </div>
      <div className="2fr">HIIIIIIIIIIII</div>
    </main>
  );
}
