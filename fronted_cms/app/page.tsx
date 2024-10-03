import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="px-24 pt-12">
      <div className="flex">
        <h1 className="font-bold text-5xl">Post</h1>
        <Button className="bg-slate-800 outline-none" size="icon">
          <Plus />
        </Button>
      </div>
    </main>
  );
}
