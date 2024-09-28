import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isNotification, setIsNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const navigate = useNavigate();
  const handleLoginRequest = async (e) => {
    e.preventDefault();

    try {
      const userDetails = {
        email: userEmail,
        password: userPassword,
      };

      const validateUser = await axios.post(
        "http://localhost:4005/signin",
        userDetails
      );
      console.log(validateUser.data);

      if (validateUser.data.status !== 200) {
        console.log("Problem in signing the user");
        setIsNotification(true);
        setNotificationMessage("Problem in signing the user");
      } else {
        setUserEmail("");
        setUserPassword("");
        setNotificationMessage(validateUser.data.message);
        navigate("/browse");
      }
    } catch (error) {
      console.log("Error :", error);
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
      {/* Main content */}
      <main className="flex-grow w-full max-w-md mx-auto bg-black text-white px-8 py-10">
        <div className="signin-container">
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <form className="signin-form space-y-4">
            <div className="form-group">
              <input
                type="email"
                placeholder="Email or phone number"
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={userEmail}
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
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-red-600 rounded font-semibold hover:bg-red-700"
              onClick={handleLoginRequest}
            >
              Sign In
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
            <Link to="/" className="text-sm text-gray-400 hover:underline">
              Need help?
            </Link>
          </div>

          {/* Sign up link */}
          <div className="signup-link mt-6 text-gray-400 text-sm">
            <p>
              New to Netflix?{" "}
              <Link to="/signup" className="text-white hover:underline">
                Sign up now
              </Link>
              .
            </p>
          </div>

          {/* ReCAPTCHA notice */}
          <div className="recaptcha-notice mt-4 text-xs text-gray-400">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Link to="/" className="text-blue-500 hover:underline">
                {" "}
                Learn more
              </Link>
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

export default Login;
