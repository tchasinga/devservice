"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Design", href: "/design" },
  { name: "Mobile", href: "/mobile" },
  { name: "Photo", href: "/photo" },
  { name: "WebApplication", href: "/webapplication" },
  { name: "Website", href: "/website" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-3 mt-[10%]">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name}>
              <p className={`cursor-pointer mr-3 ${isActive ? "font-bold" : "text-blue-600"}`}>
                {link.name}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center my-[5%]">
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
