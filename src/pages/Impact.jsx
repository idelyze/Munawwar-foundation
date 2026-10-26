import { ArrowDownToLine, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";

const reports = foundation.documents
  .filter((item) => item.type === "Annual report")
  .reverse();

export default function Impact() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Impact and reporting</div>
          <h2>Clear records help people understand the work.</h2>
          <p className="lead">
            Review the Foundation’s annual reports and programme accounts.
            Figures are published when they can be verified against Foundation
            records.
          </p>
        </div>
      </section>
      <section className="section impact-reports">
        <div className="container">
          <SectionHeading
            eyebrow="Annual reports"
            title="Read the documented work."
            description="The reports provide the clearest public record of activities across each year."
          />
          <div className="report-grid">
            {reports.map((report) => (
              <article className="report-card" key={report.title}>
                <div className="report-card-icon">
                  <ShieldCheck size={22} />
                </div>
                <div className="eyebrow">
                  {report.title.replace("Annual Report ", "")}
                </div>
                <h3>{report.title}</h3>
                <a
                  className="text-link"
                  href={report.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open report <ArrowDownToLine size={16} />
                </a>
              </article>
            ))}
          </div>
          <div className="impact-note-card">
            <p>
              Beneficiary totals, community counts and other impact figures are
              not displayed until they have been verified for publication.
            </p>
            <Link className="text-link" to="/documents">
              View all public documents <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
