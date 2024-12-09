"use client";
import React from "react";
import { useState } from "react";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

const LoginCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [toastType, setToastType] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (toast) {
      setToast(null);
      setToastType(null);
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (toast) {
      setToast(null);
      setToastType(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username || !password) {
      setToast("Both username and password are required.");
      setToastType("error");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.success === false) {
        setToast(data.error);
        setToastType("error");
      } else {
        setToast(data.error);
        setToastType("success");
      }
    } catch (error) {
      setToast("An error occurred while logging in.");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };
  const handleSignUp = () => {
    router.push("/auth/registration");
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl ">
        <div className="card-body">
          <h2 className="card-title text-4xl text-white mb-6 justify-center font-extrabold">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input
                  type="username"
                  className="grow"
                  placeholder="Enter Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </label>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock-keyhole"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              {loading ? (
                <button className="btn btn-primary ">
                  <Loading />
                </button>
              ) : toast ? (
                <button className={`btn btn-${toastType} text-white `}>
                  {toast}
                </button>
              ) : (
                <button className="btn btn-primary text-white">Login</button>
              )}
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p>Don't have an account?</p>
            <a className="link link-primary" onClick={handleSignUp}>
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
