import { motion } from "framer-motion";
export default function ImpactCounter({ value, label }) {
  const verified = value !== null && value !== undefined;
  return (
    <motion.div
      className="impact-counter"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {verified ? (
        <div className="impact-value">{value}+</div>
      ) : (
        <div className="impact-value impact-placeholder">0+</div>
      )}
      <div className="impact-label">{label}</div>
      {!verified && <small>Verified figure pending</small>}
    </motion.div>
  );
}
