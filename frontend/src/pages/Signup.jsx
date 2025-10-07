import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fileHandler = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("image", formData.image);
      setloading(true);
      const response = await axios.post(
        "http://localhost:3000/user/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
        <h1 className="text-2xl font-semibold text-center text-white mb-6">
          Create your account
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            onChange={onChangeHandler}
            name="name"
            value={formData.name}
            type="text"
            placeholder="Your name"
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Your email"
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            onChange={onChangeHandler}
            name="password"
            value={formData.password}
            type="password"
            placeholder="Your password"
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            onChange={fileHandler}
            name="image"
            accept="image/*"
            type="file"
            className="p-3 rounded-lg bg-gray-700 text-white file:text-white file:bg-blue-600 file:border-0 file:px-4 file:py-2 file:rounded-lg file:cursor-pointer hover:file:bg-blue-700"
            required
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50"
            disabled={loading}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
