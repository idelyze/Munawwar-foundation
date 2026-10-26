import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  ArrowUpRight,
} from "lucide-react";
import { foundation } from "../data/foundation";

const phoneLabel = (number) => {
  const digits = number.replace(/\D/g, "");
  return "+91 " + digits.slice(0, 5) + " " + digits.slice(5);
};

export default function Contact() {
  const mapHref =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(foundation.contact.address);

  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Contact</div>
          <h1>Talk with the Foundation.</h1>
          <p className="lead">
            For volunteering, partnerships, programme enquiries or general
            questions, contact the team directly.
          </p>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-intro">
            <div className="eyebrow">Munawwar Foundation</div>
            <h2>We’re based in Bhopal.</h2>
            <p>
              Reach us by email or phone, or use the address to find the
              Foundation office.
            </p>
            <a
              className="text-link"
              href={mapHref}
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-method-icon">
                <MapPin size={20} />
              </span>
              <div>
                <div className="eyebrow">Office</div>
                <p>{foundation.contact.address}</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="contact-method-icon">
                <Mail size={20} />
              </span>
              <div>
                <div className="eyebrow">Email</div>
                <a href={"mailto:" + foundation.contact.email}>
                  {foundation.contact.email}
                </a>
              </div>
            </div>
            {foundation.contact.phones.map((phone) => (
              <div className="contact-method" key={phone}>
                <span className="contact-method-icon">
                  <Phone size={20} />
                </span>
                <div>
                  <div className="eyebrow">Phone</div>
                  <a href={"tel:+91" + phone.replace(/\D/g, "")}>
                    {phoneLabel(phone)}
                  </a>
                </div>
              </div>
            ))}
            <div className="contact-socials">
              <a
                href={foundation.contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Instagram"
              >
                <Instagram size={18} /> <span>Instagram</span>{" "}
                <ArrowUpRight size={15} />
              </a>
              <a
                href={foundation.contact.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Facebook"
              >
                <Facebook size={18} /> <span>Facebook</span>{" "}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
