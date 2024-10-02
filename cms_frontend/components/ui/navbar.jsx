"use client";

import lscsLogo from "@/components/images/LSCS-White.png";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex px-8 py-4 items-center w-full">
      <Image src={lscsLogo} alt="Lscs logo" height="57" />
      <div className="ml-4">
        <h2 className="font-semibold text-3xl">Content Manager</h2>
        <p className="font-normal text-base">by La Salle Computer Society</p>
      </div>
      <NavigationMenu className="ml-auto mr-4 bg-slate-950">
        <NavigationMenuList>
          <NavigationMenuItem
            className={
              pathname === "/"
                ? "bg-blue-950 hover:bg-gray-700 rounded-xl"
                : "hover:bg-gray-700 rounded-xl"
            }
          >
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Post
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem
            className={
              pathname === "/comments"
                ? "bg-blue-950 hover:bg-gray-700 rounded-xl"
                : "hover:bg-gray-700 rounded-xl"
            }
          >
            <Link href="/comments" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Comments
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem
            className={
              pathname === "/users"
                ? "bg-blue-950 hover:bg-gray-700 rounded-xl"
                : "hover:bg-gray-700 rounded-xl"
            }
          >
            <Link href="/users" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Users
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <img
        src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
        alt=""
        className="w-8 ml-4"
      />
    </nav>
  );
}
