import ScrollReveal from "./ScrollReveal";
export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <ScrollReveal className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </ScrollReveal>
  );
}
