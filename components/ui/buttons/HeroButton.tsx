import { motion } from "framer-motion";
import Link from "next/link";

const HeroButton = () => {
  return (
    <Link href="/team">
      <motion.button
        className="rounded-full text-background px-14 py-3 font-bold border border-white/20 shadow-xl hover:shadow-2xl"
        style={{ backgroundColor: "var(--color-accent)" }}
        whileHover={{ backgroundColor: "#2F4F3E", scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Who are we?   
      </motion.button>
    </Link>
  );
};

export default HeroButton;