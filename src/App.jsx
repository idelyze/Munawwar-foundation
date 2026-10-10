import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import ProgramDetail from "./pages/ProgramDetail";
import Impact from "./pages/Impact";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import GetInvolved from "./pages/GetInvolved";
import Documents from "./pages/Documents";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEO from "./components/SEO";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/global.css";
const meta = {
  "/": [
    "Munawwar Foundation — Illuminating Hearts, Transforming Futures",
    "Munawwar Foundation works through education, healthcare, skill development, community support and sustainable initiatives.",
  ],
  "/about": [
    "About Munawwar Foundation",
    "Learn about Munawwar Foundation, its story, leadership, values and mission.",
  ],
  "/work": [
    "Our Work — Munawwar Foundation",
    "Explore Munawwar Foundation programs across education, livelihoods, health, community support and environment.",
  ],
  "/impact": [
    "Impact — Munawwar Foundation",
    "Verified impact, reporting and milestones from Munawwar Foundation.",
  ],
  "/stories": [
    "Stories — Munawwar Foundation",
    "Stories and updates from Munawwar Foundation programs and communities.",
  ],
  "/get-involved": [
    "Get Involved — Munawwar Foundation",
    "Discover ways to donate, volunteer, partner and spread the word.",
  ],
  "/documents": [
    "Documents & Transparency — Munawwar Foundation",
    "Publicly approved reports and documents from Munawwar Foundation.",
  ],
  "/contact": [
    "Contact — Munawwar Foundation",
    "Contact Munawwar Foundation in Bhopal for support, volunteering, partnerships and enquiries.",
  ],
};
function RouteMeta() {
  const { pathname } = useLocation();
  const key = pathname.split("/").slice(0, 2).join("/") || "/";
  const data = meta[key] || [
    "Munawwar Foundation",
    "Illuminating Hearts, Transforming Futures.",
  ];
  return <SEO title={data[0]} description={data[1]} />;
}
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProgramDetail />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
