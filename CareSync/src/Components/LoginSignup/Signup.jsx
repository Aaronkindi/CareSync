import React from "react";
import bgImage from "../assets/images/bgImg.jpg";
import { Link } from "react-router-dom";
import doctorImg from "../assets/images/doctor.jpg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practiceName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      await axios.post("http://localhost:5000/signup", formData);
      alert("User registered!");
      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      console.error("Signup error", error);
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 max-w-3xl pl-3 ml-[300px]">
        <div className="bg-grey/60 backdrop-blur-md rounded-xl shadow-xl w-full max-w-5xl flex">
          {/* Form Section */}
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Create an account
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Sign up to have access to the best healthcare management system.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                name="practiceName"
                onChange={handleChange}
                placeholder="Name of Practice"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <p className="text-sm text-white-700 mt-6">
              Have an account already?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={doctorImg}
              alt="Doctor"
              className="w-full h-full object-cover rounded-r-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
