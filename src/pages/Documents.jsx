import { FileText, ArrowUpRight, ShieldCheck } from "lucide-react";
import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import FoundationInput from "../components/FoundationInput";
import CTASection from "../components/CTASection";
export default function Documents() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Transparency</div>
          <h1>Documents that make the work accountable.</h1>
          <p className="lead">
            Publicly available reports and profile material are surfaced here.
            Sensitive banking and financial material remains private unless
            explicitly approved for publication.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Registration references"
            title="The identifiers supplied by the Foundation."
          />
          <div className="verification-grid">
            <div>
              <ShieldCheck size={20} />
              <span>Registration No.</span>
              <strong>{foundation.registration.registrationNo}</strong>
            </div>
            <div>
              <ShieldCheck size={20} />
              <span>NGO Darpan ID</span>
              <strong>{foundation.registration.ngoDarpanId}</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Reports & documents"
            title="A transparent public record."
          />
          <div className="document-grid">
            {foundation.documents.map((d) => (
              <article className="document-card" key={d.title}>
                <FileText size={22} />
                <div>
                  <div className="eyebrow">{d.type}</div>
                  <h3>{d.title}</h3>
                  {d.reference && (
                    <p className="document-reference">{d.reference}</p>
                  )}
                  {d.file ? (
                    <a
                      className="text-link"
                      href={d.file}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open document <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    !d.reference && (
                      <FoundationInput label="FOUNDATION INPUT — DOCUMENT" />
                    )
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
