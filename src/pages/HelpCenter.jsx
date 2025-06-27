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

// Sample FAQ data
const faqs = [
  {
    question: "How do I create a new group?",
    answer:
      "To create a new group, navigate to the 'Create Group' page via the navigation menu, fill in the required details, and submit the form.",
  },
  {
    question: "How can I join an existing group?",
    answer:
      "Browse the 'All Groups' page to find groups that interest you, then click 'Join' on the group page to request membership.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "On the login page, click the 'Forgot Password' link and follow the instructions to reset your password via your registered email.",
  },
  {
    question: "Can I edit my group after publishing?",
    answer:
      "Yes, you can edit your group by going to your my group dashboard, selecting the 'my group, and clicking 'Edit'.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support through the 'Contact Us' page or by emailing support@hobbyhub.com directly.",
  },
];

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const results = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(results);

    if (searchTerm && results.length === 0) {
      toast.info("No FAQs match your search.");
    }
  }, [searchTerm]);

  return (
    <>
      <Helmet>
        <title>Hobby Hub | Help Center</title>
        <meta
          name="description"
          content="Find answers to common questions at Hobby Hub's Help Center."
        />
      </Helmet>

      <motion.div
        className="min-h-screen px-4 md:px-10 py-12 bg-base-100 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold text-primary mb-8 text-center"
        >
          Help Center
        </motion.h2>

        <motion.input
          type="text"
          placeholder="Search FAQs..."
          className="input input-bordered w-full max-w-lg mx-auto mb-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variants={fadeIn}
          custom={0.1}
        />

        <div className="space-y-6">
          {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-500">
              No FAQs found. Try a different search term.
            </p>
          ) : (
            filteredFaqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                variants={fadeIn}
                custom={0.2 + idx * 0.1}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <details>
                  <summary className="font-semibold text-lg text-primary cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </details>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </>
  );
};

export default HelpCenter;
