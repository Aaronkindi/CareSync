import React from "react";
import bgImage from "../assets/images/bgImg.jpg";
import { Link, useNavigate } from "react-router-dom";
import doctorImg from "../assets/images/doctor.jpg";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        formData
      );

      // ✅ Extract token and user data from response
      const { token, user } = response.data;

      // ✅ Save JWT token and user info to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("User Logged in!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-10 flex h-full items-center justify-center px-4 max-w-3xl pl-3 ml-[300px]">
        <div className="bg-grey/60 backdrop-blur-md rounded-xl shadow-xl w-full max-w-5xl flex">
          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Sign in
            </h2>
            <p className="text-sm text-gray-600 mb-6 text-center">
              Sign in to access your account and manage your practice.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-2xl bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl font-semibold transition duration-300"
              >
                Sign in
              </button>
            </form>

            <p className="text-sm text-white-700 mt-6">
              Don't have an account already?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>

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

export default Login;
