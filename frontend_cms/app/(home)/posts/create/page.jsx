"use client";

import dynamic from "next/dynamic";
import sample_data from "@/components/sample_data";
import { useEffect, useState } from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/custom/uploadImage";
import { type } from "os";
import axios from "axios";

const Editor = dynamic(() => import("@/app/(home)/posts/Editor"), {
  ssr: false,
});

export default function CreateNew({ params }) {
  // Temporary values
  const valuesList = [
    { value: "sports", label: "Sports" },
    { value: "arts", label: "Arts" },
    { value: "academics", label: "Academics" },
    { value: "music", label: "Music" },
    { value: "technology", label: "Technology" },
  ];

  const authorsList = [
    { value: "Zel", label: "Zel" },
    { value: "Xandrei", label: "Xandrei" },
    { value: "Juan", label: "Juan" },
    { value: "Pedro", label: "Pedro" },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [content, setContent] = useState(null);
  const [selectAuthors, setSelectedAuthors] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleChange(e) {
    setContent(e);
    console.log(content);
  }

  // Set up the endpoints for the dynamic data

  return (
    <main className="flex flex-row pt-6 px-16 md:flex-nowrap flex-wrap pb-14 h-full justify-center">
      <div className="col-span-2 md:basis-4/5 basis-3/4 md:px-12">
        <Editor data={content} onChange={handleChange} holder="editor_create" />
      </div>

      <div className="bg-gray-950 md:basis-1/5 basis-1/4 rounded-lg border-2 border-slate-800 p-6 flex flex-col">
        <h3 className="text-slate-400">Post settings</h3>

        <div className="mt-6">
          <h3>Categories</h3>
          <MultiSelect
            options={valuesList}
            onValueChange={setSelectedCategories}
            defaultValue={selectedCategories}
            placeholder="Select categories"
            variant="default"
            animation={2}
            maxCount={2}
            className="border-slate-700 mt-2"
          />
        </div>

        <div className="mt-6">
          <h3>Authors</h3>
          <MultiSelect
            options={authorsList}
            // TODO Get the author from backend and display
            onValueChange={setSelectedAuthors}
            defaultValue={selectAuthors}
            placeholder="Select authors"
            variant="default"
            animation={2}
            maxCount={2}
            className="border-slate-700 mt-2"
          />
        </div>

        <div className="mt-6">
          <h3 className="mb-6">Featured image</h3>
          <div className="relative">
            <UploadImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            ></UploadImage>
          </div>
        </div>
        <div className="mt-auto pt-4">
          {" "}
          <Button
            variant="secondary"
            className="text-black font-semibold mt-auto bg-white"
          >
            Publish
          </Button>
          <p className="text-slate-600 mt-4 text-sm">
            Auto saved. No new changes.
          </p>
        </div>
      </div>
    </main>
  );
}
