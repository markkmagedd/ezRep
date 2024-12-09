"use client";
import React from "react";
import { Dumbbell, House, Calendar, ChartSpline } from "lucide-react";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="btm-nav bg-base-100  hidden lg:flex">
      <div className="">
        <ul className="menu menu-horizontal bg-primary rounded-box w-68 h-20 mb-8 items-center flex justify-center">
          <li>
            <Link href="#">
              <House />
            </Link>
          </li>
          <li>
            <Link href="">
              <Dumbbell />
            </Link>
          </li>
          <li>
            <Link href="">
              <Calendar />
            </Link>
          </li>
          <li>
            <Link href="">
              <ChartSpline />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
