import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { foundation, getProgram } from "../data/foundation";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";
import ProgramCard from "../components/ProgramCard";
import CTASection from "../components/CTASection";
import Gallery from "../components/Gallery";
export default function ProgramDetail() {
  const { slug } = useParams();
  const program = getProgram(slug);
  if (!program) return <NotFound />;
  const related = foundation.programs
    .filter((p) => p.category === program.category && p.slug !== program.slug)
    .slice(0, 3);
  const gallery = program.gallery?.map((src) => ({
    src,
    alt: program.title,
  })) || [{ src: program.image, alt: program.title }];
  return (
    <>
      <section className="detail-hero section">
        <div className="container">
          <Link className="back-link" to="/work">
            <ArrowLeft size={16} /> All programs
          </Link>
          <div className="detail-grid">
            <ScrollReveal>
              <div className="eyebrow">
                {program.category} · {program.year}
              </div>
              <h1>{program.title}</h1>
              <p className="lead">{program.description}</p>
            </ScrollReveal>
            <ScrollReveal>
              <ImagePlaceholder src={program.image} alt={program.title} />
            </ScrollReveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content-narrow">
          <ScrollReveal>
            <h2>Why this matters</h2>
            <p>{program.why}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>Who we serve</h2>
            <p>{program.audience}</p>
          </ScrollReveal>
          <ScrollReveal>
            <h2>How the program works</h2>
            <ul className="detail-list">
              {program.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal>
            <h2>Observed / stated outcome</h2>
            <p>{program.outcome}</p>
          </ScrollReveal>
          {program.contributor && (
            <ScrollReveal>
              <h2>Community contribution</h2>
              <p>{program.contributor}</p>
            </ScrollReveal>
          )}
        </div>
      </section>
      <section className="section gallery-section">
        <div className="container">
          <div className="eyebrow">Documented imagery</div>
          <Gallery items={gallery} />
        </div>
      </section>
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="eyebrow">Related programs</div>
            <div className="program-grid">
              {related.map((p, i) => (
                <ProgramCard key={p.slug} program={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CTASection title="Help this work go further." />
    </>
  );
}
function NotFound() {
  return (
    <section className="page-hero section">
      <div className="container narrow">
        <div className="eyebrow">Program</div>
        <h1>Program not found.</h1>
        <Link className="button button-dark" to="/work">
          Back to Our Work <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
