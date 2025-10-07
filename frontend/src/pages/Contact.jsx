import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-[#0e0e10] text-white py-12 px-4 sm:px-8 md:px-16 lg:px-32">
      <h1 className="text-4xl text-center font-extrabold uppercase mb-6">
        Get in Touch
      </h1>

      <p className="text-center text-lg max-w-3xl mx-auto text-gray-300 mb-10">
        Whether you have a question, suggestion, or just want to say hello — we're all ears!
        Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded bg-[#1c1c1f] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-[#1c1c1f] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              placeholder="Type your message..."
              rows="5"
              className="w-full p-3 rounded bg-[#1c1c1f] border border-gray-600 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-200 text-white font-semibold py-2 px-6 rounded"
          >
            Send Message
          </button>
        </form>

        <div className="text-center md:text-right">
          <img src={assets.contact} alt="Contact Us" className="w-full max-w-md mx-auto md:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
