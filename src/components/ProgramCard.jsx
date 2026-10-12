import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";
export default function ProgramCard({ program, index = 0 }) {
  return (
    <motion.article
      className="program-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: index * 0.035 }}
      whileHover={{ y: -6 }}
    >
      <ImagePlaceholder src={program.image} alt={program.title} />
      <div className="program-meta">
        <span>{program.category}</span>
        <span>{program.year || `0${index + 1}`}</span>
      </div>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <Link className="text-link" to={`/work/${program.slug}`}>
        Explore program <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  );
}
