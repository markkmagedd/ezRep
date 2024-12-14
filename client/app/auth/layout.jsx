import React from "react";
import Navbar from "@/components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <div>{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
