export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};
export const clipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", scale: 1.04 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    scale: 1,
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] },
  },
};
export const textLine = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
