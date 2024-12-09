import React from "react";
import Navbar from "@/components/Navbar";
// Define custom layout for auth pages
const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
