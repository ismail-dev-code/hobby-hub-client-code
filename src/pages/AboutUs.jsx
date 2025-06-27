import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const aboutSections = [
  {
    title: "Our Mission",
    description:
      "At Hobby Hub, our mission is to create a thriving digital space where people can come together and explore their hobbies with like-minded individuals. Whether you're into painting, coding, gardening, photography, or crafting, we provide a platform that celebrates creativity and community. Our mission is rooted in connection—bringing passion to life through shared experiences.",
  },
  {
    title: "Who We Are",
    description:
      "Hobby Hub is a diverse global community of hobbyists, creators, and lifelong learners. We're not just a platform; we're a movement that values curiosity, creativity, and connection. From teenagers exploring new passions to retirees rediscovering old ones, everyone is welcome here to share, inspire, and grow together.",
  },
  {
    title: "What We Offer",
    description:
      "We offer an ecosystem where you can create hobby groups, participate in discussions, organize virtual meetups, showcase your skills, and get feedback from others. It’s more than just features—it’s a digital playground where hobbies come alive through interaction and collaboration.",
  },
  {
    title: "Why It Matters",
    description:
      "In today's fast-paced world, hobbies offer a much-needed escape—a way to find inner peace, express identity, and combat loneliness. By building a safe and engaging hobby platform, we aim to provide mental clarity, social belonging, and creative growth to people of all ages.",
  },
  {
    title: "Easy Group Creation",
    description:
      "Creating a group on Hobby Hub is effortless. Choose a hobby, give it a name, set your preferences, and start inviting members. Whether public or private, your group becomes a space to nurture shared passions and drive meaningful interactions.",
  },
  {
    title: "A Safe, Inclusive Community",
    description:
      "We take pride in cultivating an inclusive environment where every user feels respected and valued. Our platform supports all skill levels and backgrounds. Whether you’re a curious beginner or a seasoned expert, there’s a place here for you.",
  },
  {
    title: "Learning and Growth",
    description:
      "Learning is at the heart of every hobby. Hobby Hub encourages organic learning through shared knowledge, tutorials, and live events. You grow as an individual by engaging with others who share your curiosity and creativity.",
  },
  {
    title: "Accessible From Anywhere",
    description:
      "Your hobbies should travel with you. That’s why we designed Hobby Hub to work flawlessly on phones, tablets, and desktops. No matter where you are, you’ll always be a click away from your creative tribe.",
  },
  {
    title: "Our Vision",
    description:
      "We imagine a world where hobbies are not sidelined but celebrated. A world where every individual finds time, space, and encouragement to pursue their passion. Hobby Hub is working every day to make that vision a reality.",
  },
  {
    title: "Get Involved",
    description:
      "We invite you to explore, join, and contribute. Create a group, start a discussion, or simply browse the many amazing things our members are doing. Your next great idea or collaboration could start here.",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us| HobbyHub</title>
      </Helmet>
      <div className="max-w-5xl mx-auto p-6 md:p-10">
        <h1 className="text-2xl font-bold mb-10 text-center text-primary">
          About Us
        </h1>
        <div className="space-y-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-base-100 p-6 rounded-xl shadow-md"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-2xl font-semibold text-secondary mb-2">
                {section.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
