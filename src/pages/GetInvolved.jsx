import {
  ArrowUpRight,
  HeartHandshake,
  HandHeart,
  Users,
  Share2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { foundation } from "../data/foundation";

const actions = [
  {
    title: "Donate",
    copy: "Use the Foundation’s published bank details and verify the account name before transferring.",
    Icon: HeartHandshake,
    label: "View donation details",
    href: "/documents#bank-accounts",
    internal: true,
  },
  {
    title: "Volunteer",
    copy: "Contact the Foundation to discuss your time, skills and the programmes that need support.",
    Icon: HandHeart,
    label: "Ask about volunteering",
    subject: "Volunteering with Munawwar Foundation",
  },
  {
    title: "Partner",
    copy: "Start a conversation about community, institutional or skills-based collaboration.",
    Icon: Users,
    label: "Discuss a partnership",
    subject: "Partnership enquiry",
  },
  {
    title: "Share the work",
    copy: "Help others discover the programmes and reports published by the Foundation.",
    Icon: Share2,
    label: "Visit Instagram",
    href: foundation.contact.instagram,
    external: true,
  },
];

export default function GetInvolved() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Get involved</div>
          <h2>Choose how you would like to contribute.</h2>
          <p className="lead">
            Learn how to support the Foundation, volunteer your time or explore
            a partnership.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="involvement-grid">
            {actions.map(
              ({
                title,
                copy,
                Icon,
                label,
                href,
                internal,
                external,
                subject,
              }) => {
                const actionHref =
                  href ||
                  "mailto:" +
                    foundation.contact.email +
                    "?subject=" +
                    encodeURIComponent(subject);
                const actionLink = (
                  <a
                    className="text-link"
                    href={actionHref}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                  >
                    {label} <ArrowUpRight size={16} />
                  </a>
                );
                return (
                  <article className="involvement-card" key={title}>
                    <div className="involvement-icon">
                      <Icon size={23} />
                    </div>
                    <div className="eyebrow">{title}</div>
                    <h2>{title}</h2>
                    <p>{copy}</p>
                    {internal ? (
                      <Link className="text-link" to={actionHref}>
                        {label} <ArrowUpRight size={16} />
                      </Link>
                    ) : (
                      actionLink
                    )}
                  </article>
                );
              },
            )}
          </div>
          <div className="involvement-note">
            <p>For direct enquiries, email or call the Foundation.</p>
            <a
              className="text-link"
              href={"mailto:" + foundation.contact.email}
            >
              {foundation.contact.email} <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
