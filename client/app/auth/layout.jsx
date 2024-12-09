import React from "react";
import Navbar from "@/components/Navbar";
// Define custom layout for auth pages
const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-base-100 flex items-center justify-center min-h-screen">
        <div>{children}</div>
      </main>
    </>
  );
};

export default AuthLayout;
