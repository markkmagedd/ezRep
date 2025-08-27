"use client";
import React from "react";
import { Home, Dumbbell, LineChart, User, Settings } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const BottomNav = () => {
  const { username } = useParams();
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname.includes(path);
  };

  const navItems = [
    { href: `/${username}`, icon: <Home />, label: "Home" },
    { href: `/${username}/myroutines`, icon: <Dumbbell />, label: "Routines" },
    { href: `/${username}/progress`, icon: <LineChart />, label: "Progress" },
    { href: `/${username}/settings`, icon: <Settings />, label: "Settings" },
    { href: `/${username}/profile`, icon: <User />, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
      <div className="bg-zinc-800 rounded-lg shadow-lg border border-zinc-700 flex p-2">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex flex-col items-center px-4 py-2 mx-1 rounded-md transition-colors ${
              isActive(item.href)
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:bg-zinc-700 hover:text-white"
            }`}
          >
            <div className="text-current">{item.icon}</div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
