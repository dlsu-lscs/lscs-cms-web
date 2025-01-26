"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/router";
export default function ProfileButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const toggleButton = () => {
    setIsButtonVisible(!isButtonVisible);
  };

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
      <button
        onClick={toggleButton}
        className="rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-expanded={isButtonVisible}
        aria-haspopup="true"
      >
        <img
          src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
          alt="Profile"
          className="w-10 h-10 object-cover"
        />
      </button>
      {isButtonVisible && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
          <Button
            variant="secondary"
            className="w-16 shadow-lg"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      )}
    </div>
  );
}
