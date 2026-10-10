import { useMemo, useState } from "react";
import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import CTASection from "../components/CTASection";
export default function Work() {
  const cats = ["All", ...new Set(foundation.programs.map((p) => p.category))];
  const [cat, setCat] = useState("All");
  const list = useMemo(
    () =>
      cat === "All"
        ? foundation.programs
        : foundation.programs.filter((p) => p.category === cat),
    [cat],
  );
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Our Work</div>
          <h1>From learning to livelihoods, health to community care.</h1>
          <p className="lead">
            A growing set of programs designed around practical needs and human
            dignity.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="filter-row" aria-label="Program categories">
            {cats.map((c) => (
              <button
                key={c}
                className={cat === c ? "filter active" : "filter"}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="program-grid">
            {list.map((p, i) => (
              <ProgramCard key={p.slug} program={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
