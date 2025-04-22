import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      className="mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-4 text-lg">{children}</div>
    </motion.section>
  );
}
