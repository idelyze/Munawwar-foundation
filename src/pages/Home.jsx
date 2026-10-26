import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { foundation, programAreaSummaries } from "../data/foundation";
import ImagePlaceholder from "../components/ImagePlaceholder";
import SectionHeading from "../components/SectionHeading";
import ProgramCard from "../components/ProgramCard";
import StoryCard from "../components/StoryCard";
import CTASection from "../components/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import { stagger, textLine, clipReveal } from "../animations/variants";

const featuredSlugs = [
  "digital-literacy",
  "womens-sewing",
  "healthcare-support",
];

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => foundation.programs.find((program) => program.slug === slug))
    .filter(Boolean);
  const areas = programAreaSummaries
    .map((area) => ({
      ...area,
      count: foundation.programs.filter(
        (program) => program.category === area.category,
      ).length,
      image: foundation.programs.find(
        (program) => program.slug === area.imageProgram,
      ),
    }))
    .filter((area) => area.image);
  const stories = foundation.stories.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-media">
          <motion.div
            variants={clipReveal}
            initial="hidden"
            animate="visible"
            className="hero-image-wrap"
          >
            <ImagePlaceholder
              src={foundation.hero.image}
              alt="Participants at a Munawwar Foundation computer training session"
              priority
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
            <h1 id="home-title">
              <span>
                <motion.span variants={textLine}>Empowering lives.</motion.span>
              </span>
              <span>
                <motion.span variants={textLine}>Inspiring change.</motion.span>
              </span>
            </h1>
            <motion.p variants={textLine} className="hero-tagline">
              {foundation.tagline}.
            </motion.p>
            <motion.p variants={textLine}>
              Munawwar Foundation works with underserved communities through
              education, practical skills, health awareness and community
              support.
            </motion.p>
            <motion.div className="hero-actions" variants={stagger}>
              <motion.div variants={textLine}>
                <Link className="button button-light" to="/work">
                  Explore our work <ArrowUpRight size={17} />
                </Link>
              </motion.div>
              <motion.div variants={textLine}>
                <Link className="button button-ghost" to="/about">
                  Our story
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
        </div>
      </section>

      <section className="intro section">
        <div className="container split-intro">
          <ScrollReveal>
            <div className="eyebrow">Our reason for being</div>
            <h2>Practical support, shaped around people’s needs.</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="lead">
              We create opportunities to learn, build useful skills and access
              support with dignity. Each programme responds to a different need
              in the community.
            </p>
            <Link className="text-link" to="/about">
              Why the Foundation exists <ArrowUpRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section home-areas" aria-labelledby="home-areas-title">
        <div className="container">
          <SectionHeading
            id="home-areas-title"
            eyebrow="Explore our work"
            title="Creating Opportunities Transforming Lives"
            description="From learning and livelihoods to health, family support and environmental care, explore the work that guides our "
          />
          <div className="home-area-grid">
            {areas.map((area, index) => (
              <motion.article
                className="home-area-card"
                key={area.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.05 }}
              >
                <Link
                  to={`/work?${new URLSearchParams({ area: area.category })}`}
                  aria-label={`Explore ${area.category}, ${area.count} ${
                    area.count === 1 ? "programme" : "programmes"
                  }`}
                >
                  <ImagePlaceholder
                    src={area.image.image}
                    alt={area.image.title}
                    category={area.category}
                    className="home-area-image"
                  />
                  <div className="home-area-info">
                    <div className="program-meta">
                      <span>
                        {area.count}{" "}
                        {area.count === 1 ? "programme" : "programmes"}
                      </span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </div>
                    <h3>{area.category}</h3>
                    <p>{area.summary}</p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-preview">
        <div className="container">
          <SectionHeading
            eyebrow="Programmes in focus"
            title="A closer look at the work."
            description="Here are a few examples from the Foundation’s education, skills and healthcare programmes."
          />
          <div className="program-grid home-program-grid">
            {featured.map((program, index) => (
              <ProgramCard key={program.slug} program={program} index={index} />
            ))}
          </div>
          <ScrollReveal className="section-link">
            <Link className="button button-dark" to="/work">
              Browse all programmes <ArrowUpRight size={17} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="home-report-band">
        <div className="container home-report-inner">
          <div>
            <div className="eyebrow">Accountability</div>
            <h2>Read about the work in our annual reports.</h2>
          </div>
          <Link className="button button-light" to="/documents">
            Reports and documents <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="stories-preview section">
          <div className="container">
            <SectionHeading
              eyebrow="Stories"
              title="From the Foundation’s reports and programmes."
              description="Read about the people, care and community work described in Foundation reports."
            />
            <div className="story-grid home-story-grid">
              {stories.map((story, index) => (
                <StoryCard key={story.slug} story={story} index={index} />
              ))}
            </div>
            <div className="section-link">
              <Link className="text-link" to="/stories">
                Read all stories <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Find a way to take part."
        copy="Volunteer, explore a partnership or learn how to support the Foundation’s work."
      />
    </div>
  );
}
