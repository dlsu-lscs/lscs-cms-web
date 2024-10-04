"use client";

import lscsLogo from "@/components/images/LSCS-White.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MountainIcon } from "lucide-react";
import { X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();

  const menus = [
    { title: "Post", path: "/" },
    { title: "Comments", path: "/comments" },
    { title: "Users", path: "/users" },
  ];

  return (
    <header className="flex px-8 py-4 items-center w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden bg-slate-800 mr-4 ml-0 border-slate-700"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-slate-950 border-slate-800">
          <div className="grid gap-2 py-6">
            {menus.map((c) => (
              <Link
                href={c.path}
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                <p
                  className={
                    pathname === c.path ? "text-blue-400" : "text-white"
                  }
                >
                  {c.title}
                </p>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Image src={lscsLogo} alt="Lscs logo" sizes="icon" />
      <div className="ml-4">
        <h2 className="font-semibold text-lg md:text-3xl ">Content Manager</h2>
        <p className="font-normal text-xs md:text-base">
          by La Salle Computer Society
        </p>
      </div>

      <nav className="hidden lg:flex ml-auto mr-4 bg-slate-950">
        <ul className="grid grid-cols-3 text-center font-medium">
          {menus.map((c) => (
            <Link href={c.path} legacyBehavior passHref>
              <li
                className={
                  pathname === c.path
                    ? "bg-blue-950 hover:bg-gray-700 rounded-xl px-4 py-2 hover:cursor-pointer"
                    : "hover:bg-gray-700 rounded-xl px-4 py-2 hover:cursor-pointer"
                }
              >
                {c.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <img
        src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
        alt=""
        className="w-8 ml-4"
      />
    </header>
  );
}
