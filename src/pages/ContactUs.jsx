import React, { useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("📨 Your message has been sent successfully!");
    e.target.reset(); // optional: clears the form
  };

  return (
    <>
      <Helmet>
        <title>HobbyHub | Contact Us</title>
        <meta
          name="description"
          content="Reach out to us at Hobby Hub. We're here to help you explore and grow your hobbies!"
        />
      </Helmet>

      <motion.div
        className="min-h-screen bg-base-100 py-12 px-4 md:px-8 lg:px-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div variants={fadeIn} custom={0} className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-2">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn}
            custom={0.1}
            className="space-y-6 p-8 rounded-lg shadow-md"
          >
            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Message subject"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                placeholder="Your message"
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info and Map */}
          <motion.div variants={fadeIn} custom={0.2} className="space-y-8">
            <div className="space-y-4 bg-base-200 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">Reach Out To Us</h3>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                123 Hobby Street, Creative City, Bangladesh
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                +880 1234-567890
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                support@hobbyhub.com
              </p>
            </div>

            <motion.div
              className="rounded-lg overflow-hidden shadow-md"
              variants={fadeIn}
              custom={0.3}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.669225254702!2d90.40419307489428!3d23.83126268453737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c794fb5a0de1%3A0xc82d90a63d20e5e9!2sDhaka!5e0!3m2!1sen!2sbd!4v1719570000000!5m2!1sen!2sbd"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default ContactUs;
