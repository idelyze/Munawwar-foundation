import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { foundation, getStory, getProgram } from "../data/foundation";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ScrollReveal from "../components/ScrollReveal";
import Gallery from "../components/Gallery";

export default function StoryDetail() {
  const { slug } = useParams();
  const story = getStory(slug);
  if (!story) return <NotFound />;
  const related = story.relatedProgram
    ? getProgram(story.relatedProgram)
    : null;
  const gallery =
    story.gallery?.map((src) => ({ src, alt: story.title })) || [];

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
              <ImagePlaceholder
                src={story.image}
                alt={story.title}
                category={story.category}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
      <article className="section">
        <div className="container content-narrow story-article">
          {story.body.map((paragraph, index) => (
            <ScrollReveal key={index}>
              <p className={index === 0 ? "article-lead" : ""}>{paragraph}</p>
            </ScrollReveal>
          ))}
          {gallery.length > 0 && <Gallery items={gallery} />}
          {related && (
            <ScrollReveal>
              <div className="story-related">
                <div className="eyebrow">Related programme</div>
                <h2>{related.title}</h2>
                <Link className="text-link" to={"/work/" + related.slug}>
                  Explore the programme <ArrowUpRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </article>
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
          Back to stories
        </Link>
      </div>
    </section>
  );
}
