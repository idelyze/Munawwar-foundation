import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { foundation } from "../data/foundation";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import StoryCard from "../components/StoryCard";
import ImpactCounter from "../components/ImpactCounter";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import { stagger, textLine, clipReveal } from "../animations/variants";
import { image } from "framer-motion/m";
const storyPlaceholders = [
  {
    slug: "foundation-story",
    category: "Foundation story",
    date: "Pending",
    title: "Stories from the people and communities we serve",
    excerpt: "[FOUNDATION INPUT — STORY]",
  },
];
export default function Home() {
  const featured = foundation.programs.slice(0, 6);
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <motion.div
            variants={clipReveal}
            initial="hidden"
            animate="visible"
            className="hero-image-wrap"
          >
            <ImagePlaceholder
              src={foundation.hero.image}
              alt="Munawwar Foundation hero"
              label="FOUNDATION INPUT — HERO IMAGE / VIDEO"
            />
          </motion.div>
        </div>
        <div className="hero-overlay" />
        <div className="container hero-content">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="hero-copy"
          >
            <motion.div variants={textLine} className="eyebrow">
              {foundation.hero.eyebrow}
            </motion.div>
            <h1>
              <span>
                <motion.span variants={textLine}>
                  Illuminating Hearts,
                </motion.span>
              </span>
              <span>
                <motion.span variants={textLine}>
                  Transforming Futures.
                </motion.span>
              </span>
            </h1>
            <motion.p variants={textLine}>
              Working through education, healthcare, skill development,
              community support and sustainable initiatives.
            </motion.p>
            <motion.div className="hero-actions" variants={stagger}>
              <motion.div variants={textLine}>
                <Link className="button button-light" to="/work">
                  Explore Our Work <ArrowUpRight size={17} />
                </Link>
              </motion.div>
              <motion.div variants={textLine}>
                <Link className="button button-ghost" to="/get-involved">
                  Get Involved
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-cue">
          <ArrowDown size={17} />
          <span>Scroll to explore</span>
        </div>
      </section>
      <section className="intro section">
        <div className="container split-intro">
          <ScrollReveal>
            <div className="eyebrow">Why we exist</div>
            <h2>{foundation.story.title}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="lead">{foundation.story.body}</p>
            <Link className="text-link" to="/about">
              Discover our story <ArrowUpRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="section work-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Our work"
            title="Practical work, rooted in people."
            description="Programs span education, livelihoods, vocational development, health, community support and environmental action."
          />
          <div className="program-grid">
            {featured.map((p, i) => (
              <ProgramCard key={p.slug} program={p} index={i} />
            ))}
          </div>
          <ScrollReveal className="section-link">
            <Link className="button button-dark" to="/work">
              View all programs <ArrowUpRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
      <section className="founder-band section">
      <div className="container founder-grid">
  <ScrollReveal>
    <ImagePlaceholder
      src="/images/team/saba%20.jpeg"
      alt={foundation.founder.name}
      label="Sabah — Founder of Munawwar Foundation"
    />
  </ScrollReveal>

  <ScrollReveal>
    <div className="eyebrow">The founder</div>
    <h2>{foundation.founder.name}</h2>
    <p className="founder-role">{foundation.founder.role}</p>
    <p className="lead">
      The foundation was created in memory of her mother, Munawwar.
    </p>
    <p>
      {foundation.founder.message ||
        "[FOUNDATION INPUT — APPROVED FOUNDER MESSAGE]"}
    </p>
    <Link className="text-link" to="/about">
      Meet the foundation <ArrowUpRight size={16} />
    </Link>
  </ScrollReveal>
</div>
      </section>
      <section className="impact-band section">
        <div className="container">
          <SectionHeading
            eyebrow="Impact"
            title="Measure what matters. Verify what we publish."
          />
          <div className="impact-grid">
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
          <div className="impact-note">
            Numbers remain unpublished until verified by the foundation.
          </div>
        </div>
      </section>
      <section className="stories-preview section">
        <div className="container">
          <SectionHeading
            eyebrow="Stories"
            title="Real stories, when they are ready to be shared."
          />
          <div className="story-grid">
            {(foundation.stories.length
              ? foundation.stories
              : storyPlaceholders
            )
              .slice(0, 3)
              .map((s, i) => (
                <StoryCard key={s.slug || i} story={s} index={i} />
              ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
