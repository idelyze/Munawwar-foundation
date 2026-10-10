import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import TeamCard from "../components/TeamCard";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";
export default function About() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">About Munawwar Foundation</div>
          <h1>People first. Practical action. Long-term possibility.</h1>
          <p className="lead">{foundation.story.body}</p>
        </div>
      </section>
      <section className="section">
        <div className="container story-layout">
          <ScrollReveal>
            <ImagePlaceholder
              src={foundation.story.image}
              alt="Munawwar Foundation legacy story"
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="eyebrow">Our story</div>
            <h2>Created in memory of Munawwar.</h2>
            <p>{foundation.story.body}</p>
            <div className="values">
              <div>
                <strong>Mission</strong>
                <span>{foundation.mission}</span>
              </div>
              <div>
                <strong>Vision</strong>
                <span>{foundation.vision}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="What guides the work"
            title="Compassion with a practical purpose."
          />
          <div className="focus-grid">
            {foundation.focusAreas.map((item, i) => (
              <div className="focus-item" key={item}>
                <span>0{i + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section team-section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind the work."
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
      <section className="section teen-section">
        <div className="container">
          <SectionHeading
            eyebrow="Teen Squad"
            title="Young people belong in the story too."
          />
          <p className="section-intro">
            The Foundation describes its Teen Squad as young changemakers
            working to promote education, equality and empowerment for children
            and their communities.
          </p>
          <div className="teen-grid">
            {foundation.teenSquad.map((member) => (
              <div className="teen-name" key={member.name}>
                <strong>{member.name}</strong>
                <span>{member.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
