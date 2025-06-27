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

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Hobby Hub | Terms & Conditions</title>
        <meta
          name="description"
          content="Review the terms and conditions for using the Hobby Hub platform responsibly."
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
          Terms & Conditions
        </motion.h2>

        <motion.div
          className="bg-white rounded-lg shadow-md p-6 space-y-5 text-gray-700 leading-relaxed"
          variants={fadeIn}
          custom={0.2}
        >
          <p>
            Welcome to <strong>Hobby Hub</strong>. By accessing or using our platform, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">1. Acceptance of Terms</h3>
          <p>
            By registering or accessing our services, you agree to be bound by these Terms. If you do not agree with any part, you may not use our platform.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">2. User Responsibilities</h3>
          <ul className="list-disc pl-6">
            <li>Maintain the accuracy of your account information.</li>
            <li>Use the platform legally and respectfully.</li>
            <li>Do not post offensive, harmful, or copyrighted content.</li>
          </ul>

          <h3 className="text-xl font-semibold text-primary mt-4">3. Intellectual Property</h3>
          <p>
            All content, trademarks, logos, and designs on Hobby Hub are the intellectual property of their respective owners and may not be used without permission.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">4. Termination</h3>
          <p>
            We reserve the right to terminate accounts that violate our terms or misuse the platform without prior notice.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">5. Changes to Terms</h3>
          <p>
            Hobby Hub may update these terms at any time. Continued use after changes means you accept the revised terms.
          </p>

          <h3 className="text-xl font-semibold text-primary mt-4">6. Contact Us</h3>
          <p>
            For any questions regarding these terms, please contact us via the Contact Us page or email us at{" "}
            <a
              href="mailto:support@hobbyhub.com"
              className="text-primary underline"
            >
              support@hobbyhub.com
            </a>.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TermsAndConditions;
