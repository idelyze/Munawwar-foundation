import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import StoryCard from "../components/StoryCard";

export default function Stories() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Stories</div>
          <h2>Accounts of care, learning and community support.</h2>
          <p className="lead">
            These stories are based on the Foundation’s annual reports and
            programme material.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="From our work"
            title="Stories from the Foundation."
          />
          {foundation.stories.length ? (
            <div className="story-grid">
              {foundation.stories.map((story, index) => (
                <StoryCard key={story.slug} story={story} index={index} />
              ))}
            </div>
          ) : (
            <p className="empty-state">
              Stories will appear here when approved for publication.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
