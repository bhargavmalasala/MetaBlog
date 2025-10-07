import BlogCard from "./BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";

const LatestBlogs = () => {
  const { blogData } = useContext(StoreContext);

  return (
    <div className="bg-gradient-to-b from-black to-black py-12 px-4 sm:px-6 lg:px-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-start text-white mb-10">
        Latest Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog._id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
