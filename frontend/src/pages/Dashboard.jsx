import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";
import api, { imageUrl } from "../lib/api";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const { user } = useContext(StoreContext);
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });
  const [blogs, setBlogs] = useState([]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);
    data.append("image", formData.image);

    try {
      const res = await api.post("/blog/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);
      setFormData({ title: "", category: "", description: "", image: null });
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data.blogs);
      } catch (error) {
        toast.error("Failed to fetch blogs");
      }
    };
    fetchBlogs();
  }, []);

  const removeBlog = async (blogId) => {
    try {
      const res = await api.delete(`/blog/delete/${blogId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(res.data.message);
      setBlogs((prev) => prev.filter((blog) => blog._id !== blogId));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
          Dashboard
        </h2>
        <div className="space-y-4">
          <button
            onClick={() => setActiveTab("post")}
            className={`w-full py-2 px-4 rounded-full transition font-medium ${
              activeTab === "post"
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            📝 Post a Blog
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`w-full py-2 px-4 rounded-full transition font-medium ${
              activeTab === "list"
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-800 hover:bg-gray-700 text-white"
            }`}
          >
            📄 List of Blogs
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-[#000000] text-white">
        {activeTab === "post" ? (
          <div className="max-w-2xl mx-auto bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">
              Post a New Blog
            </h2>
            <form
              onSubmit={submitHandler}
              className="max-w-xl bg-[#121212] p-6 rounded-lg shadow-md space-y-4"
            >
              <input
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
                type="text"
                placeholder="Blog Title"
                className="w-full p-3 border border-gray-600 bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="category"
                value={formData.category}
                onChange={onChangeHandler}
                type="text"
                placeholder="Category"
                className="w-full p-3 border border-gray-600 bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={onChangeHandler}
                rows="5"
                className="w-full p-3 border border-gray-600 bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div>
                <label className="block mb-2 text-gray-300 font-medium">
                  Upload Image
                </label>
                <input
                  onChange={fileHandler}
                  type="file"
                  accept="image/*"
                  className="w-full p-2 border border-gray-600 bg-[#1e1e1e] text-white rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              >
                Post Blog
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Your Blogs</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-[#1e1e1e] rounded-lg shadow-md">
                <thead className="bg-[#2c2c2c] text-white">
                  <tr>
                    <th className="py-3 px-6 text-left">Title</th>
                    <th className="py-3 px-6 text-left">Category</th>
                    <th className="py-3 px-6 text-left">Image</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="border-t border-gray-700 hover:bg-[#292929]"
                    >
                      <td className="px-6 py-4">{blog.title}</td>
                      <td className="px-6 py-4">{blog.category}</td>
                      <td className="px-6 py-4">
                        <img
                          src={imageUrl(blog.image)}
                          alt={blog.title}
                          className="h-16 w-16 object-cover rounded"
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => removeBlog(blog._id)}
                          className="text-red-400 hover:text-red-600 font-semibold"
                        >
                          Remove ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                  {blogs.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-6 text-gray-400"
                      >
                        No blogs found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
