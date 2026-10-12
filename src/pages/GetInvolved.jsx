import {
  ArrowUpRight,
  HeartHandshake,
  HandHeart,
  Users,
  Share2,
} from "lucide-react";
import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import FoundationInput from "../components/FoundationInput";
import CTASection from "../components/CTASection";
const items = [
  [
    "Donate",
    "Support the work financially once verified donation channels are supplied.",
    HeartHandshake,
    "donate",
  ],
  [
    "Volunteer",
    "Bring your time and skills to approved foundation initiatives.",
    HandHeart,
    "volunteer",
  ],
  [
    "Partner",
    "Explore institutional, community and skills-based partnerships.",
    Users,
    "partner",
  ],
  [
    "Spread the Word",
    "Help more people discover the foundation and its work.",
    Share2,
    null,
  ],
];
export default function GetInvolved() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Get Involved</div>
          <h1>There is more than one way to help.</h1>
          <p className="lead">
            Choose the kind of support that fits you. Verified foundation
            processes will be added below.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="involvement-grid">
            {items.map(([title, copy, Icon, key]) => (
              <article className="involvement-card" key={title}>
                <Icon size={25} />
                <div className="eyebrow">{title}</div>
                <h2>{title}</h2>
                <p>{copy}</p>
                {key && (
                  <FoundationInput
                    label={`FOUNDATION INPUT — ${key.toUpperCase()} DETAILS`}
                  />
                )}{" "}
                {!key && (
                  <a
                    className="text-link"
                    href={foundation.contact.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Share the work <ArrowUpRight size={16} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <SectionHeading
            eyebrow="Donation"
            title="No invented payment details."
            description="Bank, UPI, payment, tax and regulatory information will appear here only after the foundation provides and approves it."
          />
          <FoundationInput label="FOUNDATION INPUT — VERIFIED DONATION DETAILS" />
        </div>
      </section>
      <CTASection />
    </>
  );
}
