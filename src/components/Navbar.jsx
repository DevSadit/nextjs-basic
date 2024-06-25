"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    // console.log(pathName);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Our Blogs",
      path: "/blogs",
    },
  ];
  return (
    <div className="border w-full bg-blue-600 text-white rounded-full">
      <nav>
        <ul className="flex justify-between items-center p-5">
          <li className="text-2xl font-bold">Next Boss</li>
          <ul className="flex justify-evenly space-x-5">
            {links.map((link) => (
              <li
                key={link.path}
                className={
                  pathName === link.path && "bg-gray-600 rounded-2xl px-1"
                }
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <button className="bg-[#f72585] rounded-lg px-5 py-2">Login</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
