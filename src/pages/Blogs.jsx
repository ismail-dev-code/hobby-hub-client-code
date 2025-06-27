import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

// Predefined categories
const categories = [
  "Drawing & Painting",
  "Photography",
  "Video Gaming",
  "Fishing",
  "Running",
  "Cooking",
  "Reading",
  "Writing",
];

// Sample fallback blog data
const fakeBlogs = [
  {
    title: "The Joy of Painting Miniatures",
    author: "Aminul Haque",
    content:
      "Painting miniatures is more than just a hobby. It helps me focus, unwind, and explore creativity in tiny forms.",
    date: "2025-06-10",
    category: "Drawing & Painting",
  },
  {
    title: "How Gardening Cultivated My Passion for Cooking",
    author: "Shirin Akter",
    content:
      "After starting a garden during lockdown, I found peace and purpose. Watching plants grow gives me a deep sense of fulfillment.",
    date: "2025-06-15",
    category: "Cooking",
  },
  {
    title: "Mastering the Art of Origami: A Craft of Patience",
    author: "Kawsar Rahman",
    content:
      "Folding paper into animals and flowers has helped me improve patience and precision. Plus, it's so satisfying!",
    date: "2025-06-20",
    category: "Drawing & Painting",
  },
  {
    title: "Capturing Moments: My Journey into Photography",
    author: "Farhana Sultana",
    content:
      "Photography taught me to see the world differently and appreciate the small moments.",
    date: "2025-06-22",
    category: "Photography",
  },
  {
    title: "Top 5 Video Games to Relax and Unwind",
    author: "Rafiq Ahmed",
    content:
      "Gaming has been my favorite way to relax and connect with friends after a busy day.",
    date: "2025-06-23",
    category: "Video Gaming",
  },
  {
    title: "Fishing Tips for Beginners: Patience and Persistence",
    author: "Tariq Hasan",
    content: "Fishing taught me patience and the joy of being outdoors in nature.",
    date: "2025-06-24",
    category: "Fishing",
  },
  {
    title: "How Running Changed My Perspective on Health",
    author: "Jahanara Begum",
    content: "Running daily boosted my physical and mental health in ways I never imagined.",
    date: "2025-06-25",
    category: "Running",
  },
  {
    title: "Simple Recipes That Anyone Can Cook",
    author: "Nusrat Jahan",
    content: "Cooking simple meals helped me discover my love for food and nutrition.",
    date: "2025-06-26",
    category: "Cooking",
  },
  {
    title: "Why Reading Fiction Expands Your Imagination",
    author: "Sabbir Khan",
    content: "Diving into stories has always been my escape and source of inspiration.",
    date: "2025-06-27",
    category: "Reading",
  },
  {
    title: "The Power of Writing: Expressing Yourself Through Words",
    author: "Ayesha Rahman",
    content: "Writing helped me process my thoughts and share my experiences with others.",
    date: "2025-06-28",
    category: "Writing",
  },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
  });

  // Load blogs on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const savedBlogs = localStorage.getItem("hobbyHubBlogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    } else {
      setBlogs(fakeBlogs.reverse());
      localStorage.setItem("hobbyHubBlogs", JSON.stringify(fakeBlogs));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, content, category } = formData;

    if (!title || !author || !content || !category) {
      toast.error("Please fill in all fields.");
      return;
    }

    const newBlog = {
      ...formData,
      date: new Date().toISOString().split("T")[0],
    };

    const updatedBlogs = [newBlog, ...blogs];
    setBlogs(updatedBlogs);
    localStorage.setItem("hobbyHubBlogs", JSON.stringify(updatedBlogs));
    setFormData({ title: "", author: "", category: "", content: "" });
    toast.success("Blog post added!");
  };

  return (
    <>
      <Helmet>
        <title>Hobby Hub | Blogs</title>
        <meta
          name="description"
          content="Explore inspiring blog posts and share your passion with the Hobby Hub community."
        />
      </Helmet>

      <motion.div
        className="min-h-screen px-4 md:px-10 py-12 bg-base-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2
          variants={fadeIn}
          className="text-2xl text-center font-bold text-primary mb-8"
        >
          Hobby Blogs
        </motion.h2>

        {/* Blog Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn}
          custom={0.1}
          className="p-8 rounded-lg shadow-md mb-10 max-w-2xl mx-auto space-y-5"
        >
          <div>
            <label className="block font-semibold mb-1">Blog Title</label>
            <input
              type="text"
              placeholder="Write your blog title"
              className="input input-bordered w-full"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Author Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full"
              value={formData.author}
              onChange={(e) =>
                setFormData({ ...formData, author: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              className="select select-bordered w-full"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Blog Content</label>
            <textarea
              placeholder="Write your blog content"
              className="textarea textarea-bordered w-full h-40"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="btn btn-primary w-full"
          >
            Submit Blog
          </motion.button>
        </motion.form>

        {/* Blog List */}
        <div className="grid gap-8 lg:grid-cols-2">
          {blogs.length === 0 ? (
            <p className="text-center text-gray-500 col-span-2">No blogs yet.</p>
          ) : (
            blogs.map((blog, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                custom={0.2 + index * 0.1}
                className=" p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  <span className="font-medium">By {blog.author}</span> on {blog.date}
                </p>
                <p className="text-sm text-secondary font-semibold mb-3">
                  Category: {blog.category}
                </p>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {blog.content}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Blogs;
