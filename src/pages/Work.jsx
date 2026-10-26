import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { foundation, programCategories } from "../data/foundation";
import ProgramCard from "../components/ProgramCard";

export default function Work() {
  const categories = ["All programmes", ...programCategories];
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("area");
  const category = categories.includes(requestedCategory)
    ? requestedCategory
    : "All programmes";
  const programs = useMemo(
    () =>
      category === "All programmes"
        ? foundation.programs
        : foundation.programs.filter(
            (program) => program.category === category,
          ),
    [category],
  );
  const countFor = (value) =>
    value === "All programmes"
      ? foundation.programs.length
      : foundation.programs.filter((program) => program.category === value)
          .length;

  return (
    <>
      <section className="page-hero section">
        <div className="container narrow">
          <div className="eyebrow">Our work</div>
          <h2>Turning Compassion into Action, and Purpose into Progress.</h2>
          <p className="lead">
            Browse the Foundation’s work across education, skills, women’s
            empowerment, health, community support and the environment.
          </p>
        </div>
      </section>
      <section
        className="section work-catalogue"
        aria-labelledby="catalogue-title"
      >
        <div className="container">
          <div className="catalogue-heading">
            <div>
              <div className="eyebrow">Explore by area</div>
              <h2 id="catalogue-title">
                {category === "All programmes" ? "All programmes" : category}
              </h2>
            </div>
            <span className="programme-count">
              {programs.length}{" "}
              {programs.length === 1 ? "programme" : "programmes"}
            </span>
          </div>
          <div className="filter-row" aria-label="Filter programmes by area">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? "filter active" : "filter"}
                aria-pressed={category === item}
                onClick={() =>
                  setSearchParams(
                    item === "All programmes" ? {} : { area: item },
                  )
                }
              >
                <span>{item}</span>
                <span className="filter-count">{countFor(item)}</span>
              </button>
            ))}
          </div>
          <div className="program-grid" aria-live="polite">
            {programs.map((program, index) => (
              <ProgramCard key={program.slug} program={program} index={index} />
            ))}
          </div>
          <div className="catalogue-note">
            <p>
              Programme descriptions explain the work and its intended outcomes.
              Published impact figures are shared through verified Foundation
              reports.
            </p>
            <Link className="text-link" to="/impact">
              View reporting <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
