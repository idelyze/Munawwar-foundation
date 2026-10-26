import { motion } from "framer-motion";
import { textLine } from "../animations/variants";
export default function AnimatedText({
  children,
  as = "span",
  className = "",
}) {
  const Tag = as;
  return (
    <Tag className={`text-reveal ${className}`}>
      <motion.span variants={textLine} initial="hidden" animate="visible">
        {children}
      </motion.span>
    </Tag>
  );
}
