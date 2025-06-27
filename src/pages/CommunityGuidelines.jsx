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

const CommunityGuidelines = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Hobby Hub | Community Guidelines</title>
        <meta
          name="description"
          content="Read our community guidelines to ensure a safe and respectful environment for everyone at Hobby Hub."
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
          Community Guidelines
        </motion.h2>

        <motion.div
          className="bg-white p-6 rounded-lg shadow-md space-y-5 text-gray-700 leading-relaxed"
          variants={fadeIn}
          custom={0.2}
        >
          <p>
            Hobby Hub is a safe space for creators, learners, and hobbyists of all kinds. To keep this environment supportive and inclusive, we ask that you follow our community guidelines.
          </p>

          <h3 className="text-xl font-semibold text-primary">1. Be Respectful</h3>
          <p>
            Treat everyone with kindness. Personal attacks, hate speech, harassment, or bullying will not be tolerated.
          </p>

          <h3 className="text-xl font-semibold text-primary">2. Share Constructively</h3>
          <p>
            Whether you’re giving feedback or asking for help, keep your tone positive and respectful. Constructive discussion helps everyone grow.
          </p>

          <h3 className="text-xl font-semibold text-primary">3. Stay On Topic</h3>
          <p>
            Please keep discussions relevant to hobbies, creativity, and community collaboration. Off-topic or promotional content may be removed.
          </p>

          <h3 className="text-xl font-semibold text-primary">4. No Spam or Self-Promotion</h3>
          <p>
            Avoid posting unsolicited ads, links, or repetitive content. You can share your work, but do so in a genuine and value-adding way.
          </p>

          <h3 className="text-xl font-semibold text-primary">5. Protect Privacy</h3>
          <p>
            Don’t share anyone’s personal information without consent — including your own. Keep all conversations safe and respectful.
          </p>

          <h3 className="text-xl font-semibold text-primary">6. Report Concerns</h3>
          <p>
            If you see behavior that violates these guidelines, report it. We’re committed to reviewing reports and taking appropriate action.
          </p>

          <h3 className="text-xl font-semibold text-primary">7. Have Fun!</h3>
          <p>
            Most importantly, enjoy yourself. Learn something new, share your passions, and inspire others.
          </p>

          <p className="text-sm italic text-gray-500">
            These guidelines may evolve as our community grows. Thank you for helping us keep Hobby Hub a positive and inspiring space.
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CommunityGuidelines;
