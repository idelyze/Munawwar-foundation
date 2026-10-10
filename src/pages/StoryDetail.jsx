import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { foundation, getStory, getProgram } from "../data/foundation";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";
import CTASection from "../components/CTASection";
import Gallery from "../components/Gallery";
export default function StoryDetail() {
  const { slug } = useParams();
  const story = getStory(slug);
  if (!story) return <NotFound />;
  const related = story.relatedProgram
    ? getProgram(story.relatedProgram)
    : null;
  const gallery = story.gallery?.map((src) => ({ src, alt: story.title })) || [
    { src: story.image, alt: story.title },
  ];
  return (
    <>
      <section className="detail-hero section">
        <div className="container">
          <Link className="back-link" to="/stories">
            <ArrowLeft size={16} /> All stories
          </Link>
          <div className="detail-grid">
            <ScrollReveal>
              <div className="eyebrow">
                {story.category} · {story.date}
              </div>
              <h1>{story.title}</h1>
              <p className="lead">{story.excerpt}</p>
            </ScrollReveal>
            <ScrollReveal>
              <ImagePlaceholder src={story.image} alt={story.title} />
            </ScrollReveal>
          </div>
        </div>
      </section>
      <article className="section">
        <div className="container content-narrow">
          <div className="story-meta">
            {story.date} · {story.category}
          </div>
          {story.body.map((paragraph, i) => (
            <ScrollReveal key={i}>
              <p className={i === 0 ? "article-lead" : ""}>{paragraph}</p>
            </ScrollReveal>
          ))}
          <Gallery items={gallery} />
          {related && (
            <ScrollReveal>
              <div className="story-related">
                <div className="eyebrow">Related program</div>
                <h2>{related.title}</h2>
                <Link className="text-link" to={`/work/${related.slug}`}>
                  Explore the program <ArrowUpRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </article>
      <CTASection />
    </>
  );
}
function NotFound() {
  return (
    <section className="page-hero section">
      <div className="container narrow">
        <div className="eyebrow">Story</div>
        <h1>Story not found.</h1>
        <Link className="button button-dark" to="/stories">
          Back to Stories
        </Link>
      </div>
    </section>
  );
}
