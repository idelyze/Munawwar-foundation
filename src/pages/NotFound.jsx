import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="page-hero section">
      <div className="container narrow">
        <div className="eyebrow">404</div>
        <h1>This page does not exist.</h1>
        <p className="lead">The route you requested could not be found.</p>
        <Link className="button button-dark" to="/">
          Back home <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}
