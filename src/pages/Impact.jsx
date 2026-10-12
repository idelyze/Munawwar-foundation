import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import ImpactCounter from "../components/ImpactCounter";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
export default function Impact() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Impact</div>
          <h1>Evidence should earn trust.</h1>
          <p className="lead">
            We will publish verified numbers, stories and documents here — not
            estimates dressed up as impact.
          </p>
        </div>
      </section>
      <section className="section impact-dashboard">
        <div className="container">
          <SectionHeading
            eyebrow="Verified figures"
            title="The dashboard is ready. The data belongs to the foundation."
          />
          <div className="impact-grid large">
            <ImpactCounter
              value={foundation.impact.beneficiaries}
              label="People Supported"
            />
            <ImpactCounter
              value={foundation.impact.programs}
              label="Programs"
            />
            <ImpactCounter
              value={foundation.impact.communities}
              label="Communities Reached"
            />
            <ImpactCounter
              value={foundation.impact.trainingParticipants}
              label="Training Participants"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container timeline">
          <SectionHeading
            eyebrow="Work over time"
            title="A clear record of what happened, when and where."
          />
          <div className="timeline-list">
            {[
              "Foundation beginnings",
              "Programs and community initiatives",
              "Verified milestones",
              "Annual reporting",
            ].map((x, i) => (
              <ScrollReveal key={x}>
                <div className="timeline-item">
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{x}</h3>
                    <p>[FOUNDATION INPUT — VERIFIED TIMELINE ENTRY]</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
