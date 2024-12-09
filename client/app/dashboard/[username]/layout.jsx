import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";

const dashboardLayout = ({ children }) => {
  return (
    <main className="bg-gradient-to-t from-base-100  to-primary min-h-screen">
      <div>
        <Navbar />
        <BottomNav />
      </div>
      {children}
    </main>
  );
};

export default dashboardLayout;
