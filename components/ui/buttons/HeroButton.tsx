import { motion } from "framer-motion";
import Link from "next/link";

const HeroButton = () => {
  return (
    <Link href="/#about">
      <motion.button
        className="cursor-pointer rounded-xl border border-white/35 bg-secondary px-7 py-3 text-sm font-semibold tracking-[0.04em] text-white shadow-lg shadow-black/20 transition-colors"
        whileHover={{ scale: 1.02, backgroundColor: "#2F4F3E" }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      >
        Who are we?   
      </motion.button>
    </Link>
  );
};

export default HeroButton;