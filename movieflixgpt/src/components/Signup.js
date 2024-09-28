import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import Notification from "./Notification";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isNotification, setIsNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const handleSignUpRequest = async (e) => {
    e.preventDefault();
    console.log("User Name :", userName);
    console.log("Email : ", userEmail);
    console.log("Password : ", userPassword);
    const API_URL = "http://localhost:4005/signup";

    const userDetails = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    try {
      const response = await axios.post(API_URL, userDetails);
      console.log(response);
      setNotificationMessage(response.data.message);
      if (response.data.status !== 200) {
        console.log("Errror in signing up the user");
        setIsNotification(true);
      } else {
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        setIsNotification(true);
      }
    } catch (e) {
      console.log("Error in catch : ", e);
    }
  };

  useEffect(() => {
    const removeNotificationBar = setTimeout(() => {
      setIsNotification(false);
    }, 4000);

    return () => {
      clearTimeout(removeNotificationBar);
    };
  });

  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      {/* Header */}
      <Header />
      {isNotification && (
        <div className="absolute top-0 right-0 p-4">
          <Notification message={notificationMessage} />
        </div>
      )}
      ;{/* Main Content */}
      <main className="flex-grow w-full max-w-md mx-auto bg-black text-white px-8 py-10">
        <div className="signup-container">
          <h1 className="text-3xl font-bold mb-6">Sign up</h1>
          <form className="signup-form space-y-4">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your user name"
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={userEmail}
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={userPassword}
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-red-600 rounded font-semibold hover:bg-red-700"
              onClick={handleSignUpRequest}
            >
              Sign Up
            </button>
          </form>

          {/* Additional options */}
          <div className="signin-options flex justify-between items-center mt-4">
            <div className="remember-me flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-400">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Need help?
            </a>
          </div>

          {/* Sign up link */}
          <div className="signup-link mt-6 text-gray-400 text-sm">
            <p>
              Already Have Account?{" "}
              <Link to="/" className="text-white hover:underline">
                Sign in now
              </Link>
              .
            </p>
          </div>
          {/* ReCAPTCHA notice */}
          <div className="recaptcha-notice mt-4 text-xs text-gray-400">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a href="#" className="text-blue-500 hover:underline">
                {" "}
                Learn more
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
