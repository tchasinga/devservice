"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Website", href: "/website" },
  { name: "Web application", href: "/webapplication" },
  { name: "Mobile", href: "/mobile" },
  { name: "Photo", href: "/photo" },
  { name: "Design", href: "/design" },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex gap-3 mt-[10%]">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link href={link.href} key={link.name} className="divide-x-2">
              <p
                className={`cursor-pointer mr-3 text-xl font-normal transition-all duration-1000 ${
                  isActive
                    ? "font-bold text-blue-800 underline-animation"
                    : "text-slate-900"
                }`}
              >
                {link.name}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center my-[5%]">
        <div>{children}</div>
      </div>
    </div>
  );
}
