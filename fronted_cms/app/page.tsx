import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex w-10/12 mt-10 p-4 border-b-2 border-slate-800 items-center space-x-5">
        <h1 className="font-bold text-5xl">Post</h1>
        <Button className="bg-slate-800 outline-none" size="icon">
          <Plus />
        </Button>
      </div>
    </main>
  );
}
