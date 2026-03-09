import { motion } from "framer-motion";

const HeroButton = () => {
  return (
    <motion.button
      className="rounded-full text-[var(--color-background)] px-14 py-3 font-bold border border-white shadow-xl"
      style={{ backgroundColor: "var(--color-accent)" }}
      whileHover={{ backgroundColor: "#2F4F3E", scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      View more
    </motion.button>
  );
};

export default HeroButton;