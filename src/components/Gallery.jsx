import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";
export default function Gallery({ items = [] }) {
  const [active, setActive] = useState(null);
  const open = (i) => setActive(i);
  const close = () => setActive(null);
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);
  const next = () => setActive((i) => (i + 1) % items.length);
  const prev = () => setActive((i) => (i - 1 + items.length) % items.length);
  return (
    <>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <button
            className="gallery-item"
            key={i}
            onClick={() => open(i)}
            aria-label={`Open gallery image ${i + 1}`}
          >
            <ImagePlaceholder
              src={item.src}
              alt={item.alt || ""}
              label={item.label || "FOUNDATION INPUT — APPROVED IMAGE"}
            />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <button
              className="lightbox-close"
              onClick={close}
              aria-label="Close gallery"
            >
              <X />
            </button>
            <button
              className="lightbox-prev"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft />
            </button>
            <motion.div
              className="lightbox-stage"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
            >
              <ImagePlaceholder
                src={items[active].src}
                alt={items[active].alt || ""}
                label={
                  items[active].label || "FOUNDATION INPUT — APPROVED IMAGE"
                }
              />
            </motion.div>
            <button
              className="lightbox-next"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
