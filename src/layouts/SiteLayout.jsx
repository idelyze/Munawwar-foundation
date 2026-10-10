import { Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLenis } from "../hooks/useLenis";
import { pageTransition } from "../animations/transitions";
export default function SiteLayout() {
  useLenis();
  const location = useLocation();
  return (
    <div className="site">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} {...pageTransition}>
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
