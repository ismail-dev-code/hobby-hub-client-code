import { useEffect } from "react";
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

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Hobby Hub | Privacy Policy</title>
        <meta
          name="description"
          content="Learn how Hobby Hub collects, uses, and protects your personal information."
        />
      </Helmet>

      <motion.div
        className="min-h-screen px-4 md:px-10 py-12 bg-base-100 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2
          variants={fadeIn}
          className="text-3xl font-bold text-primary mb-6 text-center"
        >
          Privacy Policy
        </motion.h2>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 space-y-5 text-gray-700 leading-relaxed"
          variants={fadeIn}
          custom={0.2}
        >
          <p>
            At <strong>Hobby Hub</strong>, your privacy is important to us. This policy explains what information we collect and how we use, share, and protect it.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">1. Information We Collect</h3>
          <ul className="list-disc pl-6">
            <li><strong>Personal Info:</strong> Name, email, profile photo, etc.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, and interactions.</li>
            <li><strong>Device Info:</strong> Browser type, OS, IP address.</li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mt-4">2. How We Use Your Data</h3>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6">
            <li>Provide and personalize our services.</li>
            <li>Improve user experience.</li>
            <li>Send notifications or updates (if you opt-in).</li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mt-4">3. Data Protection</h3>
          <p>
            We implement strong security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">4. Cookies & Tracking</h3>
          <p>
            We may use cookies to enhance site functionality. You can control cookie settings through your browser preferences.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">5. Third-Party Services</h3>
          <p>
            Hobby Hub may use third-party tools (e.g., Google Analytics, Firebase). These services may collect information in accordance with their own privacy policies.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">6. Your Rights</h3>
          <ul className="list-disc pl-6">
            <li>Access or update your information.</li>
            <li>Request deletion of your account or data.</li>
            <li>Withdraw consent to marketing emails at any time.</li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mt-4">7. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy. We encourage users to check this page periodically for changes.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">8. Contact Us</h3>
          <p>
            If you have any questions, please contact us at{" "}
            <a href="mailto:support@hobbyhub.com" className="text-primary underline">
              support@hobbyhub.com
            </a>.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
