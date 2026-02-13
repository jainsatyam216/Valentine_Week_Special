import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/* ─── Rose Petal Canvas ──────────────────────────────────────── */
const PetalCanvas = ({ active }) => {
  const canvasRef = useRef(null);
  const petals = useRef([]);
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#ff1a6c','#ff4d8f','#ff80b3','#ffb3cc','#ffd6e7','#ff6699','#e6005c'];
    const shapes = ['❤','✿','♡'];

    for (let i = 0; i < 60; i++) {
      petals.current.push({
        x: Math.random() * window.innerWidth,
        y: -Math.random() * window.innerHeight,
        size: 10 + Math.random() * 22,
        speedY: 0.8 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 3,
        opacity: 0.5 + Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.02 + Math.random() * 0.03,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.current.forEach(p => {
        p.y += p.speedY;
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * 1.2 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 50) {
          p.y = -50;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.shape, 0, 0);
        ctx.restore();
      });
      raf.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: active ? 1 : 0, transition: 'opacity 1s' }}
    />
  );
};

/* ─── Heart Rain ─────────────────────────────────────────────── */
const HeartRain = ({ active }) => {
  const [hearts, setHearts] = useState([]);
  const intervalRef = useRef(null);
  const idRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    const spawn = () => {
      const newHearts = Array.from({ length: 8 }, () => ({
        id: idRef.current++,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2.5 + Math.random() * 3,
        size: 1.5 + Math.random() * 3,
        emoji: ['❤️','💕','💖','💗','💓','💝','💘','💞','🌹'][Math.floor(Math.random() * 9)],
        rotate: (Math.random() - 0.5) * 60,
        drift: (Math.random() - 0.5) * 150,
      }));

      setHearts(h => [...h, ...newHearts]);
      setTimeout(() => setHearts(h => h.filter(hh => !newHearts.map(n => n.id).includes(hh.id))), 6000);
    };

    spawn();
    intervalRef.current = setInterval(spawn, 600);

    return () => clearInterval(intervalRef.current);
  }, [active]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      {hearts.map(h => (
        <motion.div
          key={h.id}
          initial={{ y: -50, x: `${h.x}%`, opacity: 0, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            x: `${h.x + h.drift}%`,
            opacity: [0, 1, 1, 0],
            rotate: h.rotate,
          }}
          transition={{ duration: h.duration, delay: h.delay, ease: 'linear' }}
          style={{ position: 'absolute', fontSize: `${h.size}rem` }}
        >
          {h.emoji}
        </motion.div>
      ))}
    </div>
  );
};

/* ─── Sparkle Cursor Trail ───────────────────────────────────── */
const SparkleTrail = () => {
  const [sparks, setSparks] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handler = (e) => {
      const id = idRef.current++;
      setSparks(s => [...s, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setSparks(s => s.filter(sp => sp.id !== id)), 1000);
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {sparks.map(sp => (
        <motion.div
          key={sp.id}
          initial={{ opacity: 1, scale: 0, x: sp.x, y: sp.y }}
          animate={{ opacity: 0, scale: 1.5, y: sp.y - 50 }}
          transition={{ duration: 1 }}
          className="absolute text-2xl"
          style={{ left: 0, top: 0 }}
        >
          {['✨','💫','⭐','🌟','💕'][sp.id % 5]}
        </motion.div>
      ))}
    </div>
  );
};

/* ─── No Button - SUPER EVASIVE ──────────────────────────────── */
const NoButton = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const btnRef = useRef(null);
  const fleeTimeoutRef = useRef(null);

  const flee = useCallback(() => {
    // Clear any pending flee timeout
    if (fleeTimeoutRef.current) {
      clearTimeout(fleeTimeoutRef.current);
    }

    const btn = btnRef.current;
    if (!btn) return;

    const btnRect = btn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;

    // Get safe boundaries with padding
    const padding = 20;
    const maxX = window.innerWidth - btnWidth - padding;
    const maxY = window.innerHeight - btnHeight - padding;

    // Generate random position far from current position
    let newX, newY, distance;
    let attempts = 0;
    
    do {
      newX = padding + Math.random() * (maxX - padding);
      newY = padding + Math.random() * (maxY - padding);
      distance = Math.sqrt(Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2));
      attempts++;
    } while (distance < 200 && attempts < 10); // Ensure it moves far away

    setPos({ x: newX, y: newY });

    // Schedule another random move after a short delay
    fleeTimeoutRef.current = setTimeout(() => {
      flee();
    }, 800 + Math.random() * 1200); // Move every 0.8-2 seconds randomly
  }, [pos]);

  // Start automatic fleeing when component mounts
  useEffect(() => {
    // Initial random position
    const padding = 20;
    const maxX = window.innerWidth - 140 - padding;
    const maxY = window.innerHeight - 60 - padding;
    setPos({
      x: padding + Math.random() * (maxX - padding),
      y: padding + Math.random() * (maxY - padding)
    });

    // Start the flee loop after a short delay
    const initialTimeout = setTimeout(flee, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (fleeTimeoutRef.current) {
        clearTimeout(fleeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.button
      ref={btnRef}
      onMouseEnter={flee}
      onMouseMove={flee}
      onTouchStart={flee}
      onTouchMove={flee}
      onClick={(e) => {
        e.preventDefault();
        flee();
      }}
      className="fixed px-8 py-3 rounded-full font-bold text-lg text-white cursor-pointer select-none"
      style={{
        background: 'linear-gradient(135deg, #666, #999)',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: 40,
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
      }}
      animate={{
        x: 0,
        y: 0,
        rotate: [0, -5, 5, -5, 0],
      }}
      transition={{
        duration: 0.3,
        rotate: {
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        },
      }}
      whileHover={{
        scale: 0.8,
      }}
    >
      No 🙈
    </motion.button>
  );
};

/* ─── Valentine Celebration ──────────────────────────────────── */
const Celebration = ({ onComplete }) => {
  useEffect(() => {
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ scale: 0, rotate: 180, opacity: 0 }}
      transition={{ type: 'spring', duration: 1, bounce: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
    >
      <motion.div
        className="bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 p-12 rounded-3xl shadow-2xl text-center max-w-2xl mx-4"
        animate={{
          boxShadow: [
            '0 0 60px rgba(255,100,150,0.8)',
            '0 0 100px rgba(255,100,150,1)',
            '0 0 60px rgba(255,100,150,0.8)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="text-8xl mb-6"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          💝
        </motion.div>
        <h2 className="text-5xl font-black text-white mb-4">
          She Said YES! 🎉
        </h2>
        <p className="text-2xl text-pink-100 mb-6 leading-relaxed">
          You are my Valentine, forever and always! 💕
        </p>
        <p className="text-xl text-white/90 italic">
          My heart is the happiest it has ever been! ❤️
        </p>
        <div className="flex justify-center gap-6 mt-8 text-5xl">
          {['❤️', '💋', '💕', '💖', '💝'].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
        <motion.p
          className="text-pink-100 text-sm mt-8"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Returning to see all your messages...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

/* ─── Letter Section ─────────────────────────────────────────── */
const letterParagraphs = [
  {
    text: `Happy Valentine's Day, my love. This day is special — but honestly, every single day with you feels like Valentine's Day. You have transformed my ordinary life into an extraordinary adventure, filled with love, laughter, joy, and countless beautiful moments that I will treasure deeply for the rest of my life.`,
    delay: 0,
  },
  {
    text: `Thank you for being exactly who you are — for your incredible kindness, your radiant smile, your contagious laughter, your adorable little quirks, and absolutely everything that makes you uniquely and wonderfully you. Thank you for choosing me, for loving me unconditionally, and for standing by my side through every storm and every celebration.`,
    delay: 0.2,
  },
  {
    text: `You are my best friend, my partner in every adventure, my comfort during the hardest days, and my greatest reason to celebrate every happy moment. You are my past, my present, and my future — my always and my forever.`,
    delay: 0.4,
  },
  {
    text: `This Valentine's week has been about celebrating the different facets of our beautiful love — but the truth is, my love for you cannot be contained in just one week, or even an entire lifetime. It is eternal, infinite, boundless, and it grows stronger with every single passing day.`,
    delay: 0.6,
  },
  {
    text: `I love you more than words can ever express, more than actions can ever show, and more than you will ever fully know. You made me believe in forever, in fairytales, in happily ever after — and with you, I know I have truly found mine.`,
    delay: 0.8,
  },
];

/* ─── Main Component ─────────────────────────────────────────── */
const ValentineDay = () => {
  const navigate = useNavigate();
  const [answered, setAnswered] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationComplete, setCelebrationComplete] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-400, 400], [12, -12]);
  const rotateY = useTransform(mouseX, [-400, 400], [-12, 12]);

  useEffect(() => {
    const t1 = setTimeout(() => setLetterVisible(true), 800);
    const t2 = setTimeout(() => setShowQuestion(true), 1800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const handleYesClick = () => {
    setAnswered(true);
    setShowCelebration(true);
  };

  const handleCelebrationComplete = () => {
    setShowCelebration(false);
    setCelebrationComplete(true);
    setShowQuestion(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 overflow-x-hidden"
      onMouseMove={(e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      }}
    >
      <PetalCanvas active />
      <SparkleTrail />
      {answered && <HeartRain active />}
      
      <AnimatePresence>
        {showCelebration && <Celebration onComplete={handleCelebrationComplete} />}
      </AnimatePresence>

      {/* Success Badge - shows after celebration */}
      {celebrationComplete && (
        <motion.div
          initial={{ scale: 0, y: -100 }}
          animate={{ scale: 1, y: 0 }}
          className="fixed top-20 right-5 z-50 bg-gradient-to-br from-pink-500 to-red-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-2xl"
          >
            💕
          </motion.span>
          <span className="font-bold text-sm">Forever Valentine!</span>
        </motion.div>
      )}

      {/* Back */}
      <motion.button
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-pink-100"
        style={{
          background: 'rgba(255,60,120,0.2)',
          border: '1.5px solid rgba(255,100,150,0.4)',
          backdropFilter: 'blur(12px)'
        }}
      >
        ← Back
      </motion.button>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Ambient glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/30 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </div>

        {/* 3D Heart */}
        <motion.div
          className="relative z-10 text-center"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="text-9xl mb-8 inline-block"
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️
          </motion.div>

          {/* Orbiting sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                rotate: 360,
                x: Math.cos((i * 60 * Math.PI) / 180) * 120,
                y: Math.sin((i * 60 * Math.PI) / 180) * 120,
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
                delay: i * 0.2,
              }}
            >
              {['✨','💕','🌹','💗','⭐','💖'][i]}
            </motion.div>
          ))}

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-pink-600 font-semibold text-lg tracking-widest mb-2">
              — 14th February —
            </p>
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
              Valentine's
            </h1>
            <h2 className="text-6xl md:text-7xl font-black tracking-wider text-red-500 mb-8">
              D A Y
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-5xl mb-3">❤️</div>
            <p className="text-xl md:text-2xl text-gray-700 italic font-light leading-relaxed">
              "You are my today and all of my tomorrows"
            </p>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-16 text-pink-500 font-medium text-sm tracking-widest"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✦ scroll to read my heart ✦
          </motion.div>
        </motion.div>
      </section>

      {/* ── LETTER ───────────────────────────────────────────── */}
      <section className="relative py-20 px-4">
        {/* Letter container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={letterVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Red wax seal top */}
          <div className="flex justify-center mb-8">
            <motion.div
              className="w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-4xl shadow-2xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💌
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mb-12" />

          {/* Salutation */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={letterVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-red-600 mb-8 text-center"
          >
            My Everything, ❤️
          </motion.h3>

          {/* Paragraphs */}
          <div className="space-y-8">
            {letterParagraphs.map((para, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={letterVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: para.delay + 0.5 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-200"
              >
                <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
                  {i === 0 && (
                    <span className="text-7xl font-serif text-pink-600 float-left mr-4 leading-none mt-2">
                      H
                    </span>
                  )}
                  {i === 0 ? para.text.slice(1) : para.text}
                </p>
                {i < letterParagraphs.length - 1 && (
                  <div className="flex justify-center gap-4 mt-6 text-pink-400">
                    ✦ ✦ ✦
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Sign off */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={letterVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.3 }}
            className="mt-12 text-right pr-8"
          >
            <p className="text-2xl text-gray-700 italic mb-2">Eternally yours,</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Your forever Valentine 💝
            </p>
          </motion.div>

          {/* Bottom wax seal */}
          <div className="flex justify-center mt-12">
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-3xl shadow-xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── THE QUESTION ─────────────────────────────────────── */}
      {showQuestion && !answered && (
        <section className="fixed inset-0 z-40 flex items-center justify-center px-4 bg-black/50 backdrop-blur-md">
          {/* Question card */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 0.8, bounce: 0.4 }}
            className="relative bg-gradient-to-br from-pink-100 via-white to-pink-100 p-12 rounded-3xl shadow-2xl max-w-2xl w-full"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-20 -left-20 w-40 h-40 bg-pink-400/40 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-20 -right-20 w-40 h-40 bg-red-400/40 rounded-full blur-3xl"
                animate={{ scale: [1.3, 1, 1.3], opacity: [0.6, 0.4, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>

            {/* Pulsing heart */}
            <motion.div
              className="text-8xl text-center mb-6"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              💍
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
              Will You Be My
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-red-500 to-pink-600 bg-clip-text text-transparent">
                Valentine Forever?
              </span>
            </h2>

            {/* Decorative hearts row */}
            <div className="flex justify-center gap-4 my-8">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                >
                  {['❤️','💕','💖','💗','❤️'][i]}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative">
              {/* YES */}
              <motion.button
                onClick={handleYesClick}
                className="relative px-14 py-5 rounded-full text-2xl font-black text-white shadow-2xl overflow-hidden z-50"
                style={{
                  background: 'linear-gradient(135deg, #ff1a6c, #ff4d8f, #ff80b3)'
                }}
                animate={{
                  boxShadow: [
                    '0 0 30px rgba(255,30,90,0.5)',
                    '0 0 60px rgba(255,30,90,0.9)',
                    '0 0 30px rgba(255,30,90,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ❤️ Yes, Forever! ❤️
              </motion.button>

              {/* NO — runs away */}
              <NoButton />
            </div>
          </motion.div>
        </section>
      )}

      {/* After YES: show forever message at bottom */}
      {celebrationComplete && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl max-w-2xl mx-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">💝</span>
            <div>
              <p className="font-black text-xl text-red-600">
                Now & Forever, Mine ❤️
              </p>
              <p className="text-sm text-gray-700">
                You just made me the happiest person in the entire world. Our love story is the most beautiful one ever written. 💕
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-3 mt-3 text-2xl">
            {['❤️', '💋', '💕', '💖', '💝'].map((e, i) => (
              <motion.span
                key={i}
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ValentineDay;