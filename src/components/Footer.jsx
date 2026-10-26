import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { foundation } from "../data/foundation";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand-column">
          <Link to="/" className="brand footer-brand">
            <span className="brand-symbol" aria-hidden="true">
              M
            </span>
            <span>
              MUNAWWAR
              <br />
              <em>FOUNDATION</em>
            </span>
          </Link>
          <p className="footer-mission">
            Working across learning, livelihoods, health awareness and community
            support.
          </p>
          <div className="socials">
            <a
              href={foundation.contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href={foundation.contact.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <div className="footer-label">Explore</div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/work">Our Work</Link>
            <Link to="/impact">Impact and reports</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/documents">Transparency</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <div className="footer-label">Contact</div>
          <div className="footer-contact">
            <span>{foundation.contact.address}</span>
            {foundation.contact.phones.map((phone) => (
              <a href={"tel:+91" + phone} key={phone}>
                <Phone size={15} aria-hidden="true" />
                <span>{phone}</span>
              </a>
            ))}
            <a href={"mailto:" + foundation.contact.email}>
              <Mail size={15} aria-hidden="true" />
              <span>{foundation.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © {new Date().getFullYear()} Munawwar Foundation.
        </span>
        <a
          href="https://www.idelyze.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-agency-link"
          aria-label="Visit Idelyze website"
          title="Powered by Idelyze"
        >
          <span className="footer-powered-by">Powered by</span>
          <img
            src="/images/footer%20idelyze%20logo.svg"
            alt="Idelyze"
            className="footer-agency-logo"
          />
        </a>
      </div>
    </footer>
  );
}
