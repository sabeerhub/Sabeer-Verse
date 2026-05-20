import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="cursor-glow hidden lg:block"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
}
