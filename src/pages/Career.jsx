import { useState, useEffect } from "react";
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

const positions = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "Content Writer",
  "Marketing Specialist",
  "Project Manager",
];

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    /^[0-9+\-\s]{7,15}$/.test(phone); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, position, coverLetter } = formData;

    if (!fullName || !email || !phone || !position || !coverLetter) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }


    toast.success("Application submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Hobby Hub | Join The Team</title>
        <meta
          name="description"
          content="Apply to join the Hobby Hub team and be part of our creative community."
        />
      </Helmet>

      <motion.div
        className="min-h-screen px-4 md:px-10 py-12 bg-base-100 max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold text-primary mb-8 text-center"
        >
          Join The Team
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn}
          custom={0.1}
          className=" p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="+8801234567890"
              className="input input-bordered w-full"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Position Interested In</label>
            <select
              className="select select-bordered w-full"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              required
            >
              <option value="" disabled>
                Select a position
              </option>
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Cover Letter</label>
            <textarea
              placeholder="Tell us about yourself and why you'd like to join"
              className="textarea textarea-bordered w-full h-32"
              value={formData.coverLetter}
              onChange={(e) =>
                setFormData({ ...formData, coverLetter: e.target.value })
              }
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="btn btn-primary w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Application
          </motion.button>
        </motion.form>
      </motion.div>
    </>
  );
};

export default Career;
