import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { foundation, getProgram } from "../data/foundation";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";
import ProgramCard from "../components/ProgramCard";
import Gallery from "../components/Gallery";

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = getProgram(slug);
  if (!program) return <NotFound />;

  const related = foundation.programs
    .filter(
      (item) =>
        item.category === program.category && item.slug !== program.slug,
    )
    .slice(0, 3);
  const gallery =
    program.gallery?.map((src) => ({ src, alt: program.title })) || [];

  return (
    <>
      <section className="detail-hero section">
        <div className="container">
          <Link className="back-link" to="/work">
            <ArrowLeft size={16} /> All programmes
          </Link>
          <div className="detail-grid">
            <ScrollReveal>
              <div className="eyebrow">
                {program.category}
                {program.year ? " · " + program.year : ""}
              </div>
              <h1>{program.title}</h1>
              <p className="lead">{program.description}</p>
            </ScrollReveal>
            <ScrollReveal>
              <ImagePlaceholder
                src={program.image}
                alt={program.image ? program.title : ""}
                category={program.category}
                className="detail-program-image"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section program-detail-section">
        <div className="container content-narrow">
          <ScrollReveal className="program-detail-block">
            <div className="eyebrow">Why it matters</div>
            <h2>Why this work matters</h2>
            <p>{program.why}</p>
          </ScrollReveal>
          <ScrollReveal className="program-detail-block">
            <div className="eyebrow">Who it serves</div>
            <h2>Who the programme serves</h2>
            <p>{program.audience}</p>
          </ScrollReveal>
          <ScrollReveal className="program-detail-block">
            <div className="eyebrow">Programme activities</div>
            <h2>How the programme works</h2>
            <ul className="detail-list">
              {program.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal className="program-detail-block">
            <div className="eyebrow">Intended outcomes</div>
            <h2>What the programme aims to support</h2>
            <p>{program.outcome}</p>
          </ScrollReveal>
          {program.contributor && (
            <ScrollReveal className="program-detail-block">
              <div className="eyebrow">Medical contributors</div>
              <h2>Professional contribution</h2>
              <p>{program.contributor}</p>
            </ScrollReveal>
          )}
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="section gallery-section">
          <div className="container">
            <div className="eyebrow">Programme imagery</div>
            <Gallery items={gallery} />
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="section related-programs-section">
          <div className="container">
            <div className="related-programs-heading">
              <div>
                <div className="eyebrow">Explore this area</div>
                <h2>Related programmes</h2>
              </div>
              <Link className="text-link" to="/work">
                All programmes <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="program-grid">
              {related.map((item, index) => (
                <ProgramCard key={item.slug} program={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function NotFound() {
  return (
    <section className="page-hero section">
      <div className="container narrow">
        <div className="eyebrow">Programme</div>
        <h1>Programme not found.</h1>
        <Link className="button button-dark" to="/work">
          Back to our work <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
