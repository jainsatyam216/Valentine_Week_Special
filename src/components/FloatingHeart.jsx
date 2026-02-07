import { motion } from 'framer-motion';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 20 + Math.random() * 30,
  }));

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300/30"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;