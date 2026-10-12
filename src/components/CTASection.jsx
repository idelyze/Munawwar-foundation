import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
export default function CTASection({
  title = "Be part of the change.",
  copy = "Support practical work that puts people, skills and dignity at the centre.",
}) {
  return (
    <section className="cta-section">
      <ScrollReveal>
        <div className="eyebrow">Get involved</div>
        <h2>{title}</h2>
        <p>{copy}</p>
        <Link className="button button-light" to="/get-involved">
          Support our work <ArrowUpRight size={17} />
        </Link>
      </ScrollReveal>
    </section>
  );
}
