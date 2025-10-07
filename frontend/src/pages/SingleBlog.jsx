import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext.jsx";
import { imageUrl } from "../lib/api";

const Singleblog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  const blog = blogData.find((b) => b._id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p className="text-xl">Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white py-12 px-4">
      <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto flex flex-col gap-6">
        <img
          className="rounded-xl w-full object-cover max-h-[450px] transition-transform duration-300 hover:scale-[1.03]"
          src={imageUrl(blog.image)}
          alt={blog.title}
        />
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <span className="text-sm text-[#4B6BFB] font-semibold uppercase tracking-wide">
            {blog.category}
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed text-lg">
          {blog.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <img
            className="w-10 h-10 rounded-full border-2 border-[#4B6BFB]"
            src={imageUrl(blog.author?.image)}
            alt={blog.author?.name}
          />
          <div className="text-sm">
            <p className="font-semibold">{blog.author.name}</p>
            <p className="text-gray-400">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleblog;
