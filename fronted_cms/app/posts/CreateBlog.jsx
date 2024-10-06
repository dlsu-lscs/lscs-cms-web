//import Editorjs component as a dynamic import where ssr is false
"use client";
import { useState } from "react";
// Set up the endpoints for the dynamic data
import dynamic from "next/dynamic";
let Editor = dynamic(() => import("./Editor"), {
  ssr: false,
});

export default function CreateNewBlog({ data }) {
  const [content, setContent] = useState(null);

  return (
    <Editor
      data={content || data}
      onChange={(e) => setContent(e)}
      holder="editor_create"
    />
  );
}
