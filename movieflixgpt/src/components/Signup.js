import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Signup = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-md mx-auto bg-black text-white px-8 py-10">
        <div className="signup-container">
          <h1 className="text-3xl font-bold mb-6">Sign up</h1>
          <form className="signup-form space-y-4">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your user name"
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email or phone number"
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-red-600 rounded font-semibold hover:bg-red-700"
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
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signup;
