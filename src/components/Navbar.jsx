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
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? " navbar-scrolled" : ""}`}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link to="/" className="brand" aria-label="Munawwar Foundation home">
          <span className="brand-symbol">M</span>
          <span>
            MUNAWWAR
            <br />
            <em>FOUNDATION</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <Link
              className={location.pathname.startsWith(to) ? "active" : ""}
              key={to}
              to={to}
            >
              {label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            to="/get-involved"
            aria-label="Support our work"
          >
            Support Our Work <ArrowUpRight size={15} />
          </Link>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mobile-inner">
              {links.map(([label, to], i) => (
                <motion.div
                  key={to}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link to={to}>{label}</Link>
                </motion.div>
              ))}
              <Link
                className="button button-dark mobile-cta"
                to="/get-involved"
              >
                Support Our Work <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
