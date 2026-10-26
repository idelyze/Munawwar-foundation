import ScrollReveal from "./ScrollReveal";
export default function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <ScrollReveal className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </ScrollReveal>
  );
}
