"use client";
import React from "react";
import { House, Calendar, ChartSpline, User, Settings } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const BottomNav = () => {
  const { username } = useParams();

  return (
    <div className="btm-nav bg-transparent flex ">
      <div>
        <ul className="menu text-white menu-horizontal bg-secondary rounded-box w-68 h-20 mb-8 items-center flex justify-center">
          <li>
            <Link href={`/${username}`}>
              <House /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href={`/${username}/myroutines`}>
              <Calendar />
              <span>Routines</span>
            </Link>
          </li>
          <li>
            <Link href={`/${username}/progress`}>
              <ChartSpline />
              <span>Progress</span>
            </Link>
          </li>
          <li>
            <Link href={`/${username}/progress`}>
              <Settings />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href={``}>
              <User />
              <span>My Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
