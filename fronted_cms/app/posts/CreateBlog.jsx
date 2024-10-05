//import Editorjs component as a dynamic import where ssr is false
"use client";
import { useState } from "react";

import dynamic from "next/dynamic";
let Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

export default function CreateNewBlog({ data }) {
  const [content, setContent] = useState(null);
  console.log(data);

  return (
    <Editor
      data={content || data}
      onChange={(e) => setContent(e)}
      holder="editor_create"
    />
  );
}
