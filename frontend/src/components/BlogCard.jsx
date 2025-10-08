import React from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../lib/api";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="bg-[#111827] text-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/30 transition-shadow duration-300 border border-gray-700">
      <Link to={`/blog/${id}`}>
        <img
          src={imageUrl(image)}
          alt={title}
          className="w-full h-56 object-cover cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
        />
      </Link>

      <div className="p-5">
        <p className="text-sm font-medium text-blue-400 uppercase tracking-wide mb-2">
          {category}
        </p>

       <Link to={`/blog/${id}`}> 
          <h2 className="text-xl font-semibold text-white mb-3 hover:text-blue-500 transition-colors">
            {title}
          </h2>
        </Link>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/images/${author_image}`}
            alt={author_name}
            className="w-10 h-10 rounded-full object-cover border border-gray-500"
          />
          <div className="text-gray-400 text-sm">
            <p className="font-semibold text-gray-200">{author_name}</p>
            <p className="text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
