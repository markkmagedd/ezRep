"use client";
import React from "react";
import { useState } from "react";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

const RegistrationCard = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const router = useRouter();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    if (toastMessage) {
      setToastType("");
      setToastMessage("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!username || !password || !mobile || !email) {
      setToastMessage("Please Fill In All Data");
      setToastType("error");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("http://localhost:8080/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email, mobile }),
      });
      const data = await res.json();
      if (data.success === false) {
        setToastType("error");
        setToastMessage(data.error);
      } else {
        setToastType("success");
        setToastMessage("Successfully Registered");
      }
    } catch (error) {
      setToastMessage("An error occurred during registration");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <div className="bg-base-200 flex items-center justify-center min-h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold mb-6 justify-center">
            Registration
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-lock-keyhole"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  className="grow"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <input
                  type="mobile"
                  className="grow"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </label>
            </div>
            <div className="form-control mt-6">
              {loading ? (
                <button className="btn btn-primary ">
                  <Loading />
                </button>
              ) : toastMessage ? (
                <button className={`btn btn-${toastType} text-white`}>
                  {toastMessage}
                </button>
              ) : (
                <button className="btn btn-primary text-white">Register</button>
              )}
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p>Already have an account?</p>
            <a className="link link-primary" onClick={handleLogin}>
              Login Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
