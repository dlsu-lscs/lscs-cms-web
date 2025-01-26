"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileButton() {
  const handleLogout = () => {
    // axios
    //   .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res.status);
    //     if (res.status === 200) {
    //       router.push("/login");
    //     }
    //   });
  };

  return (
    <div className="relative inline-block ml-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
            alt="Profile"
            className="w-10 h-10 object-cover"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex justify-center">
          <DropdownMenuItem>
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
