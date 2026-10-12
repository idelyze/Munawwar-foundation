import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { foundation } from "../data/foundation";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="footer-main">
        {/* Foundation Branding */}
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-symbol">M</span>

            <span>
              MUNAWWAR
              <br />
              <em>FOUNDATION</em>
            </span>
          </Link>

          <p className="footer-mission">
            Illuminating hearts, transforming futures through practical,
            human-centred work.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <div className="footer-label">Explore</div>

          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/work">Our Work</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/stories">Stories</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/documents">Documents</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <div className="footer-label">Contact</div>

          <div className="footer-contact">
            <span>{foundation.contact.address}</span>

            <a href={`tel:${foundation.contact.phones[0]}`}>
              <Phone size={15} aria-hidden="true" />
              <span>{foundation.contact.phones[0]}</span>
            </a>

            <a href={`mailto:${foundation.contact.email}`}>
              <Mail size={15} aria-hidden="true" />
              <span>{foundation.contact.email}</span>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="socials">
            <a
              href={foundation.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>

            <a
              href={foundation.contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        {/* Copyright */}
        <span className="footer-copyright">
          © {new Date().getFullYear()} Munawwar Foundation. All rights reserved.
        </span>

        {/* Idelyze Logo and Website Link */}
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
            src="/images/footer idelyze logo.svg"
            alt="Idelyze"
            className="footer-agency-logo"
          />
        </a>

        {/* Content Disclaimer */}
        <span className="footer-disclaimer">
          Content accuracy subject to foundation approval.
        </span>
      </div>
    </footer>
  );
}
