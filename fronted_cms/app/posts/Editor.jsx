// This is my Editorjs component, better if make a seperate component and use it
"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
import Header from "@editorjs/header";

const EDITOR_TOOLS = {
  code: Code,
  header: {
    class: Header,
    shortcut: "CMD+H",
    inlineToolbar: true,
    config: {
      placeholder: "Enter a Header",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  checklist: CheckList,
  inlineCode: InlineCode,
  table: Table,
  list: List,
  quote: Quote,
  delimiter: Delimiter,
  image: {
    class: Image,
    config: {
      endpoints: {
        byFile: "http://localhost:3000/posts", // Your backend file uploader endpoint
        byUrl: "http://localhost:8008/fetchUrl", // Your endpoint that provides uploading by Url
      },
    },
  },
};
function Editor({ data, onChange, holder }) {
  //add a reference to editor
  const ref = useRef();
  //initialize editorjs
  useEffect(() => {
    //initialize editor if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        placeholder: "Start writting here..",
        tools: EDITOR_TOOLS,
        data: data,
        async onChange(api, event) {
          const content = await api.saver.save();
          // console.log(content, "sdfb");
          onChange(content);
        },
      });
      ref.current = editor;
    }

    //add a return function handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div
        id={holder}
        style={{
          width: "100%",
          borderRadius: " 7px",
          background: "fff",
        }}
      />
    </>
  );
}

export default Editor;
