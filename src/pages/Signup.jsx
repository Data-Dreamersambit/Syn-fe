import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
 import { toast } from 'react-toastify';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "", // was fullName before
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatchError(
        name === "password"
          ? value !== formData.confirmPassword && formData.confirmPassword !== ""
          : value !== formData.password
      );
    }
  };

       // Optionally: redirect or clear form

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const { username, email, password } = formData;

      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        { username, email, password }
      );

      toast.success("Signup successful!");
      console.log(res.data);

      // Optionally: redirect or clear form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      const errorMessage = err?.response?.data?.message || "Signup failed!";
      toast.error(errorMessage);
      console.error("Signup failed:", errorMessage);
    }
  };

  return (
      <div className="flex justify-center items-center py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
              <p className="text-gray-600 mt-2">
                Join our platform and get started today
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-2 border rounded-lg outline-none transition-colors ${
                    passwordMatchError
                      ? "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                />
                {passwordMatchError && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>
              <button  
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-600">Already have an account?</span>{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Sign in
              </Link>
            </div>

            
          </div>
        </div>
      </div>
  );
};

export default Signup;