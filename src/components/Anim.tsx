import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, ReactNode } from 'react';

function Anim({ children, className, duration = 1, delay = 0, hidden = { opacity: 0, x: 0, y: 0, scale: 1 }, ...props }: { children: ReactNode, className?: string, duration?: number, delay?: number, hidden?: { opacity: number, x?: number, y?: number, scale?: number; }; }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} animate={controls} initial="hidden" transition={{ duration, delay }}
      variants={{ visible: { opacity: 1, x: 0, y: 0, scale: 1 }, hidden }} className={className} {...props}
    >
      {children}
    </motion.div>
  );
}

export default Anim;
