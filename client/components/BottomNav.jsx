"use client";
import React from "react";
import { House, Calendar, ChartSpline } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const BottomNav = () => {
  const { username } = useParams();

  return (
    <div className="btm-nav bg-transparent hidden lg:flex">
      <div className="">
        <ul className="menu menu-horizontal bg-primary rounded-box w-68 h-20 mb-8 items-center flex justify-center">
          <li>
            <Link href={`/dashboard/${username}`}>
              <House />
            </Link>
          </li>
          <li>
            <Link href={`/dashboard/${username}/myroutines`}>
              <Calendar />
            </Link>
          </li>
          <li>
            <Link href={`/dashboard/${username}/progress`}>
              <ChartSpline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
