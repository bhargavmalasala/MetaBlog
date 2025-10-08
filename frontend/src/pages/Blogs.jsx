import BlogCard from "../components/BlogCard";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext.jsx";

const Blogs = () => {
  const { blogData } = useContext(StoreContext);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="h-1 bg-black"></div>
      <h1 className="text-4xl text-center font-bold my-4 glow-text text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse">All Blogs</h1>


      <p className="text-lg leading-7 text-gray-300 max-w-3xl mx-auto px-4 mb-10 text-center">
        Dive into our latest blog posts filled with tech insights, coding tips, and creative stories.
        Stay inspired and keep exploring.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 pb-12">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog._id}
            title={blog.title}
            image={blog.image}
            category={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
