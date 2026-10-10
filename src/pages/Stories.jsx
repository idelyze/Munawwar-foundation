import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import StoryCard from "../components/StoryCard";
import CTASection from "../components/CTASection";
const placeholders = [
  {
    slug: "story-1",
    category: "Beneficiary story",
    date: "Pending",
    title: "A story from the people we serve",
    excerpt: "[FOUNDATION INPUT — STORY]",
  },
  {
    slug: "story-2",
    category: "Program story",
    date: "Pending",
    title: "Inside a Munawwar Foundation program",
    excerpt: "[FOUNDATION INPUT — STORY]",
  },
  {
    slug: "story-3",
    category: "Community update",
    date: "Pending",
    title: "What changed in the community",
    excerpt: "[FOUNDATION INPUT — STORY]",
  },
];
export default function Stories() {
  const stories = foundation.stories.length ? foundation.stories : placeholders;
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Stories</div>
          <h1>Document the work. Let people speak for themselves.</h1>
          <p className="lead">
            These stories are drawn from the Foundation’s own annual reports and
            approved program material.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Latest" title="Stories from the field." />
          <div className="story-grid">
            {stories.map((s, i) => (
              <StoryCard key={s.slug} story={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
