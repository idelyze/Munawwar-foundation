import { foundation, foundationObjectives } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import TeamCard from "../components/TeamCard";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">About the Foundation</div>
          <h1>The Story Behind Munawwar Foundation</h1> <h3>A Mission of Compassion. A Future of Hope.</h3>
          <p className="lead">
            Munawwar Foundation works to support education, skills, health
            awareness and community welfare for underserved communities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container story-layout">
          <ScrollReveal>
            <ImagePlaceholder
              src={foundation.story.image}
              alt="Portrait of Munawwar, whose memory inspired the Foundation"
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="eyebrow">Our story</div>
            <h3>{foundation.story.title}</h3>
            {foundation.story.body.map((block, index) => {
              if (block.type === "heading") {
                return <h4 key={index}>{block.text}</h4>;
              }

              return (
                <p key={index}>
                  {block.type === "closing" ? (
                    <strong>{block.text}</strong>
                  ) : (
                    block.text
                  )}
                </p>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            eyebrow="What guides the work"
            title="Compassion with a practical purpose."
          />
          <div className="values-grid">
            <article className="value-card">
              <span className="eyebrow">Our purpose</span>
              <p>{foundation.mission}</p>
            </article>
            <article className="value-card">
              <span className="eyebrow">Our vision</span>
              <p>{foundation.vision}</p>
            </article>
          </div>
          <div className="about-work-link">
            <Link className="text-link" to="/work">
              Explore our programmes <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section objectives-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our wider remit"
            title="Objectives & programme areas."
            description="These broader objectives describe the Foundation’s scope. Current programmes are listed separately under Our Work."
          />
          <div className="objectives-list">
            {foundationObjectives.map((group) => (
              <details className="objective-group" key={group.title}>
                <summary>{group.title}</summary>
                <ul>
                  {group.items.map(([title, description]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <span>{description}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <SectionHeading
            eyebrow="The MF family"
            title="United by purpose. Inspired by humanity."
          />
          <div className="team-grid">
            {foundation.team.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
