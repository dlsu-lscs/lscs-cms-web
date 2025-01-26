"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import GoogleButton from "@/components/images/googleLogin.svg";
import Image from "next/image";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Redirect to the backend login route
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`;
  };
  return (
    <main className="flex justify-center items-center h-full">
      <button onClick={handleLogin}>
        <Image className="w-64" src={GoogleButton} alt="google"></Image>
      </button>
    </main>
  );
}
