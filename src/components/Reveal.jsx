import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const getOffset = (direction) => {
  switch (direction) {
    case "left":
      return { x: -40, y: 0 };
    case "right":
      return { x: 40, y: 0 };
    case "down":
      return { x: 0, y: 40 };
    case "up":
    default:
      return { x: 0, y: -40 };
  }
};

export default function Reveal({
  children,
  as: As = motion.div,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-10% 0px", once });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const initial = { opacity: 0, ...getOffset(direction) };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <As
      ref={ref}
      initial={initial}
      animate={controls}
      variants={{ visible: animate }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </As>
  );
}
