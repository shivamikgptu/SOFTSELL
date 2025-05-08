import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        Turn Unused Software into Cash
      </motion.h2>
      <p className="mb-6 text-lg">
        SoftSell helps you resell your software licenses in minutes.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded shadow">
        Get a Quote
      </button>
    </section>
  );
}