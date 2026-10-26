import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProgramCard({ program, index = 0 }) {
  return (
    <motion.article
      className="program-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, delay: Math.min(index % 3, 2) * 0.05 }}
    >
      <ImagePlaceholder
        src={program.image}
        alt={program.image ? program.title : ""}
        category={program.category}
        className="program-card-image"
      />
      <div className="program-meta">
        <span>{program.category}</span>
        {program.year && <span>{program.year}</span>}
      </div>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <Link className="text-link" to={"/work/" + program.slug}>
        Programme details <ArrowUpRight size={16} />
      </Link>
    </motion.article>
  );
}
