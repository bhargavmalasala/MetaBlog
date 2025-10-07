import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../lib/api";
import { StoreContext } from "../context/StoreContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loginUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.post("/user/login", formData);
      if (response.data.success) {
        const { user, token } = response.data;
        loginUser(user, token);
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0f0f0f] flex items-center justify-center text-white">
      <div className="w-full max-w-md bg-[#1e1e1e] p-6 rounded-lg shadow-md border border-gray-700">
        <h1 className="text-xl font-bold text-center mb-6">
          Login to your account
        </h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-5 mt-5 w-full"
        >
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Your password"
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />

          <button className="w-full py-2 px-6 bg-blue-600 text-white font-medium rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/50 focus:outline-none">
            SignIn
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
