import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  ["About", "/about"],
  ["Our Work", "/work"],
  ["Impact", "/impact"],
  ["Stories", "/stories"],
  ["Get Involved", "/get-involved"],
  ["Transparency", "/documents"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <motion.header
        className={"navbar" + (scrolled ? " navbar-scrolled" : "")}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <Link to="/" className="brand" aria-label="Munawwar Foundation home">
          <span className="brand-symbol" aria-hidden="true">
            M
          </span>
          <span>
            MUNAWWAR
            <br />
            <em>FOUNDATION</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <Link
              className={isActive(to) ? "active" : ""}
              aria-current={isActive(to) ? "page" : undefined}
              key={to}
              to={to}
            >
              {label}
            </Link>
          ))}
          <Link className="nav-cta" to="/get-involved">
            Support our work <ArrowUpRight size={15} />
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-inner">
              {links.map(([label, to], index) => (
                <motion.div
                  key={to}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.025 }}
                >
                  <Link
                    to={to}
                    aria-current={isActive(to) ? "page" : undefined}
                    className={isActive(to) ? "active" : ""}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <Link
                className="button button-dark mobile-cta"
                to="/get-involved"
              >
                Support our work <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
