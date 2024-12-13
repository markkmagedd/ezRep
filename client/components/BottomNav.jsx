"use client";
import React from "react";
import { House, Calendar, ChartSpline, User, Settings } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const BottomNav = () => {
  const { username } = useParams();

  return (
    <div className="btm-nav bg-transparent hidden lg:flex">
      <div className="">
        <ul className="menu menu-horizontal bg-primary rounded-box w-68 h-20 mb-8 items-center flex justify-center">
          <li>
            <Link href={`/${username}`}>
              <House />
            </Link>
          </li>
          <li>
            <Link href={`/${username}/myroutines`}>
              <Calendar />
            </Link>
          </li>
          <li>
            <Link href={`/${username}/progress`}>
              <ChartSpline />
            </Link>
          </li>
          <li>
            <Link href={`/${username}/progress`}>
              <Settings />
            </Link>
          </li>
          <li>
            <Link href={``}>
              <User />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
