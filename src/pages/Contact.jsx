import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { foundation } from "../data/foundation";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
export default function Contact() {
  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Contact</div>
          <h1>Start a conversation with Munawwar Foundation.</h1>
          <p className="lead">
            For volunteering, partnerships, support or general enquiries.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <div>
            <SectionHeading eyebrow="Office" title="Munawwar Foundation" />
            <div className="contact-list">
              <div>
                <MapPin size={19} />
                <span>{foundation.contact.address}</span>
              </div>
              <div>
                <Phone size={19} />
                <span>{foundation.contact.phones.join(" · ")}</span>
              </div>
              <div>
                <Mail size={19} />
                <a href={`mailto:${foundation.contact.email}`}>
                  {foundation.contact.email}
                </a>
              </div>
              <div>
                <Instagram size={19} />
                <a
                  href={foundation.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  @munawwarfoundation
                </a>
              </div>
              <div>
                <Facebook size={19} />
                <a
                  href={foundation.contact.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  MunawwarFoundation
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Name
              <input required name="name" autoComplete="name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" autoComplete="email" />
            </label>
            <label>
              Subject
              <input required name="subject" />
            </label>
            <label>
              Message
              <textarea required name="message" rows="6" />
            </label>
            <button className="button button-dark" type="submit">
              Send enquiry <ArrowUpRight size={17} />
            </button>
            <p className="form-note">
              Form delivery endpoint can be connected once the foundation
              confirms its preferred inbox/workflow.
            </p>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="container map-placeholder">
          <div className="eyebrow">Location</div>
          <h2>Map placeholder</h2>
          <p>[FOUNDATION INPUT — APPROVED MAP EMBED]</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
