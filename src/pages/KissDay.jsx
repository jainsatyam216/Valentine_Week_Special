import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/* ─── Sparkle Canvas ────────────────────────────────────────── */
const SparkleCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
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

    const colors = ['#ff4d8f', '#ff80b3', '#ffd6e7', '#ff1a6c', '#ffb3cc', '#ffffff'];

    for (let i = 0; i < 120; i++) {
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        opacity: Math.random(),
        opacityDir: Math.random() > 0.5 ? 0.008 : -0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.5 ? 'circle' : 'star',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDir;
        if (p.opacity > 1 || p.opacity < 0.1) p.opacityDir *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.7;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;

        if (p.type === 'circle') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // star shape
          ctx.translate(p.x, p.y);
          ctx.rotate(Date.now() * 0.001 + p.size);
          const s = p.size * 2;
          ctx.beginPath();
          for (let j = 0; j < 4; j++) {
            ctx.lineTo(Math.cos(((j * 2 + 0.5) * Math.PI) / 4) * s, Math.sin(((j * 2 + 0.5) * Math.PI) / 4) * s);
            ctx.lineTo(Math.cos(((j * 2 + 1.5) * Math.PI) / 4) * (s / 2.5), Math.sin(((j * 2 + 1.5) * Math.PI) / 4) * (s / 2.5));
          }
          ctx.closePath();
          ctx.fill();
        }
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

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

/* ─── Kiss Burst ─────────────────────────────────────────────── */
const KissBurst = ({ x, y, onDone }) => {
  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{ left: x, top: y }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      onAnimationComplete={onDone}
    >
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{ left: 0, top: 0 }}
          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
          animate={{
            x: Math.cos((i / 10) * 2 * Math.PI) * (80 + Math.random() * 80),
            y: Math.sin((i / 10) * 2 * Math.PI) * (80 + Math.random() * 80),
            scale: [0, 1.5, 0],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 1 + Math.random() * 0.5, ease: 'easeOut' }}
        >
          {['💋', '✨', '💕', '❤️', '🌟'][i % 5]}
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ─── Lipstick Kiss Trail ─────────────────────────────────────── */
const KissTrail = () => {
  const [kisses, setKisses] = useState([]);
  const [bursts, setBursts] = useState([]);
  const nextId = useRef(0);

  const handleClick = useCallback((e) => {
    const id = nextId.current++;
    const pos = { x: e.clientX - 20, y: e.clientY - 20 };
    setKisses((k) => [...k, { id, ...pos }]);
    setBursts((b) => [...b, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setKisses((k) => k.filter((i) => i.id !== id)), 2000);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <>
      {kisses.map((k) => (
        <motion.div
          key={k.id}
          className="fixed pointer-events-none z-30 text-4xl"
          style={{ left: k.x, top: k.y }}
          initial={{ scale: 0, rotate: -20, opacity: 1 }}
          animate={{ scale: [0, 1.4, 1], rotate: [-20, 10, 0], opacity: [1, 1, 0] }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          💋
        </motion.div>
      ))}
      {bursts.map((b) => (
        <KissBurst
          key={b.id}
          x={b.x}
          y={b.y}
          onDone={() => setBursts((prev) => prev.filter((i) => i.id !== b.id))}
        />
      ))}
    </>
  );
};

/* ─── Main Component ─────────────────────────────────────────── */
const KissDay = () => {
  const navigate = useNavigate();
  const [openedCard, setOpenedCard] = useState(null);
  const [kissCount, setKissCount] = useState(0);
  const [showFinalMsg, setShowFinalMsg] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const images = [
    '/images/kiss/kiss1.jpeg',
    '/images/kiss/kiss2.jpeg',
    '/images/kiss/kiss3.jpeg',
    '/images/kiss/kiss4.jpeg',
  ];

  const memories = [
    {
      title: 'Our First Kiss',
      icon: '💋',
      subtitle: 'The Beginning of Everything',
      text: 'Bhai vo gaadi me first kiss, tum kese saham gayi thi jese kya hua ho, ek dam blank pr socho to vhi ek ahsas tha or vhi ahsas hota h pyar krte hue socha smjha nhi jata kiya jata h. And that kiss will always be my precious and special kiss chahe aage kitni bhi ho.',
    },
    {
      title: 'Mall wali kiss',
      icon: '🌧️',
      subtitle: 'Our Cinematic Moment',
      text: 'Bhai vo bhi ultimate tha chahe jesa tha, hmare experience me kuch kcuh koi na koi aaya h koi but har cheez ki yaad to bani.',
    },
    {
      title: 'Goodnight Kisses',
      icon: '🌙',
      subtitle: 'Every Night Without Fail',
      text: 'Abhi chahe ham actual me nhi de paate pr yahh kami bhi nhi chorte, Ham door rhke bhi itna close ho jaate shayad he koi ho. Ladge, marege, katege pr pyar nhi chodege.',
    },
    {
      title: 'Kbhi na ho paane wali kiss 🙂',
      icon: '✨',
      subtitle: 'My Absolute Favourite',
      text: 'Ab to intzaar mujeh us din ka jab me kass k tumko pakad kr, baho me bharkar, godi me uthakr tumko jee bharke kisses krunga or tum mujhe or us waqt koi nhi aayega bas tum or me and khali lips nhi har ek cheez se pyar kiya jayega. Us waqt ye ldki or uska pyar sab mera hoga.',
    },
  ];

  const handleSendKiss = () => {
    setKissCount((c) => {
      const next = c + 1;
      if (next >= 5) setShowFinalMsg(true);
      return next;
    });
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden relative"
      style={{ background: 'radial-gradient(ellipse at 20% 20%, #3d0020 0%, #1a0010 40%, #0d0008 100%)' }}
      onMouseMove={(e) => {
        mouseX.set(e.clientX - window.innerWidth / 2);
        mouseY.set(e.clientY - window.innerHeight / 2);
      }}
    >
      {/* Sparkle Canvas */}
      <SparkleCanvas />

      {/* Kiss Trail on every click */}
      <KissTrail />

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05, x: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-5 left-5 z-50 flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-pink-100"
        style={{ background: 'rgba(255,60,120,0.2)', border: '1.5px solid rgba(255,100,150,0.4)', backdropFilter: 'blur(12px)' }}
      >
        <motion.span animate={{ x: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>←</motion.span>
        Back
      </motion.button>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 z-10">

        {/* Giant pulsing glow behind everything */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,30,100,0.25) 0%, transparent 70%)' }}
        />

        {/* Floating lip / heart ring */}
        <motion.div className="relative mb-8" style={{ rotateX, rotateY, perspective: 1000 }}>
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Glow disc */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: 'rgba(255,20,90,0.55)', transform: 'scale(1.1)' }}
            />
            {/* Main emoji */}
            <div className="relative text-[180px] md:text-[240px] leading-none drop-shadow-2xl select-none">
              💋
            </div>
            {/* Orbiting sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ top: '50%', left: '50%' }}
                animate={{ rotate: [i * 45, i * 45 + 360] }}
                transition={{ duration: 10 - i, repeat: Infinity, ease: 'linear' }}
              >
                <div
                  className="text-2xl md:text-3xl"
                  style={{
                    position: 'absolute',
                    transform: `translate(-50%, -50%) translateX(${110 + i * 8}px)`,
                  }}
                >
                  {['✨', '💕', '🌟', '💗', '⭐', '💖', '✨', '💋'][i]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mb-8"
        >
          {/* Cursive subtitle */}
          <p className="text-pink-300 text-2xl md:text-3xl mb-3 tracking-widest font-light" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            — the most magical day —
          </p>
          <h1
            className="text-7xl md:text-9xl font-black leading-none mb-4 select-none"
            style={{
              fontFamily: '"Georgia", serif',
              background: 'linear-gradient(135deg, #ff4d8f 0%, #ffb3cc 40%, #ff80aa 70%, #ff1a6c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(255,80,140,0.7))',
            }}
          >
            Kiss Day
          </h1>

          {/* Date badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full text-white font-bold text-xl md:text-2xl shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #ff1a6c, #ff4d8f, #ff80b3)' }}
          >
            <span>💋</span> 13th February <span>💋</span>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="max-w-2xl w-full mx-auto mb-12"
        >
          <div
            className="relative rounded-3xl px-10 py-8 text-center shadow-2xl"
            style={{ background: 'rgba(255,40,100,0.1)', border: '2px solid rgba(255,80,140,0.35)', backdropFilter: 'blur(16px)' }}
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl">💋</div>
            <p className="text-2xl md:text-3xl text-pink-100 italic font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
              "Every kiss tells a love story"
            </p>
            <p className="text-pink-400 mt-3 font-medium">— and ours is my favourite story ever 💕</p>
          </div>
        </motion.div>

        {/* Send Kiss CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={(e) => { e.stopPropagation(); handleSendKiss(); }}
            className="relative group px-14 py-5 rounded-full text-xl md:text-2xl font-black text-white shadow-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #ff1a6c 0%, #ff4d8f 50%, #ff80b3 100%)' }}
          >
            <motion.span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #ff4d8f, #ff80b3, #ff1a6c)' }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <motion.span animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                💋
              </motion.span>
              Send a Kiss
              <motion.span animate={{ scale: [1, 1.3, 1], rotate: [0, -15, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>
                💋
              </motion.span>
            </span>
          </motion.button>

          {kissCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="px-6 py-2 rounded-full text-pink-200 font-semibold text-lg"
              style={{ background: 'rgba(255,80,140,0.2)', border: '1px solid rgba(255,80,140,0.4)' }}
            >
              {kissCount} kiss{kissCount !== 1 ? 'es' : ''} sent 💋
              {showFinalMsg && <span className="ml-2">— My heart is yours forever! 💖</span>}
            </motion.div>
          )}

          <p className="text-pink-400/60 text-sm mt-2">✦ Click anywhere to leave a kiss mark ✦</p>
        </motion.div>
      </section>

      {/* ── LOVE LETTER ──────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Heading */}
            <h2
              className="text-5xl md:text-7xl font-black text-center mb-12"
              style={{
                fontFamily: 'Georgia, serif',
                background: 'linear-gradient(135deg, #ff4d8f, #ffb3cc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Sweetest Kiss 💋
            </h2>

            <div
              className="relative rounded-[2.5rem] p-8 md:p-14 shadow-2xl"
              style={{ background: 'rgba(80,0,30,0.6)', border: '2px solid rgba(255,80,130,0.25)', backdropFilter: 'blur(20px)' }}
            >
              {/* Animated corner kisses */}
              <motion.div
                animate={{ rotate: [0, 20, 0, -20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 text-5xl opacity-60"
              >
                💋
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -20, 0, 20, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute bottom-6 left-6 text-4xl opacity-40"
              >
                💕
              </motion.div>

              <div className="space-y-6 text-pink-100 text-lg md:text-xl leading-relaxed">
                <p className="first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:text-pink-400" style={{ lineHeight: 1.8 }}>
                  To my dearest love, the one who holds the key to my heart and the sweetest lips I've ever kissed — this letter is for you, on our special day dedicated to kisses and all the magic they bring into our lives.
                </p>

                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{ background: 'rgba(255,40,100,0.12)', borderLeft: '4px solid #ff4d8f' }}
                >
                  <p className="font-semibold text-xl text-pink-200">
                    Aaj to thoda hindi me bhi likhege bhaut english me likh liya. To jesa ki aap jaante hein ki me ek ati romantic ldka or aap ek ati sharik kanya hein par jo bhi jo feel mujeh tumeh kiss krne me aayi kbhi mene feel nhi kiya. And be ready for future, kiss he kiss hone wali h subah sham raat din.
                  </p>
                </div>

                <p>
                  Hame bhala kya kiss day ki Jarurat jab chaho pyar kr skte hain. Pyar k liye bhi bhala koi time chaiye. And I am very desperate now. Want to kiss you very badly to my baddie.
                </p>

                <div
                  className="rounded-2xl p-6 md:p-8"
                  style={{ background: 'rgba(255,80,150,0.10)', borderLeft: '4px solid #ff80b3' }}
                >
                  <p className="font-semibold text-xl text-pink-200">
                    I love the butterflies I still get before kissing you. I love how your beautiful smile feels against my lips. I love how a simple kiss from you can instantly change my entire mood.
                  </p>
                </div>

                <div
                  className="text-center py-8 rounded-3xl"
                  style={{ background: 'rgba(255,30,90,0.15)' }}
                >
                  <motion.p
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="text-2xl md:text-3xl font-black text-pink-300"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    Here's to a lifetime of stolen kisses 💋
                  </motion.p>
                </div>

                <div className="text-right space-y-1 pt-4">
                  <p className="text-pink-300 text-xl font-semibold italic" style={{ fontFamily: 'Georgia, serif' }}>
                    Sealed with a kiss,
                  </p>
                  <p className="text-3xl font-black text-pink-400">Forever yours 💕</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MEMORY CARDS ─────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(135deg, #ff4d8f, #ffb3cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Kisses I'll Never Forget
          </motion.h2>
          <p className="text-center text-pink-400 mb-14 text-lg">Tap each card to relive the moment 💋</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {memories.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                onClick={() => setOpenedCard(openedCard === i ? null : i)}
                className="cursor-pointer group"
              >
                <AnimatePresence mode="wait">
                  {openedCard !== i ? (
                    <motion.div
                      key="closed"
                      initial={{ rotateY: 0 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative rounded-3xl overflow-hidden min-h-[260px] flex flex-col items-center justify-center p-10 shadow-2xl"
                      style={{
                        background: `linear-gradient(135deg, rgba(120,0,50,0.9), rgba(60,0,25,0.9))`,
                        border: '2px solid rgba(255,80,130,0.3)',
                      }}
                      whileHover={{ scale: 1.03, borderColor: 'rgba(255,80,130,0.7)' }}
                    >
                      {/* Shimmer */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: 'linear-gradient(135deg, rgba(255,80,130,0.08), transparent, rgba(255,80,130,0.08))' }}
                      />
                      <motion.div
                        animate={{ scale: [1, 1.25, 1], rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-7xl mb-5"
                      >
                        {m.icon}
                      </motion.div>
                      <h3 className="text-2xl font-black text-pink-200 mb-2 text-center" style={{ fontFamily: 'Georgia, serif' }}>
                        {m.title}
                      </h3>
                      <p className="text-pink-400 text-base text-center italic">{m.subtitle}</p>
                      <motion.p
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-pink-500 text-sm mt-5 font-semibold"
                      >
                        tap to reveal 💋
                      </motion.p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ rotateY: -90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-3xl overflow-hidden min-h-[260px] flex flex-col justify-center p-10 shadow-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,30,90,0.18), rgba(120,0,50,0.95))',
                        border: '2px solid rgba(255,80,130,0.6)',
                      }}
                    >
                      <div className="text-5xl mb-5">{m.icon}</div>
                      <h3 className="text-xl font-black text-pink-300 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                        {m.title}
                      </h3>
                      <p className="text-pink-100 leading-relaxed text-base md:text-lg">{m.text}</p>
                      <p className="text-pink-500 text-sm mt-5 font-semibold italic">tap to close ✕</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ────────────────────────────────────────── */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center mb-14"
            style={{
              fontFamily: 'Georgia, serif',
              background: 'linear-gradient(135deg, #ff4d8f, #ffb3cc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Captured Kisses 📸
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
                className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-square"
                style={{ border: '3px solid rgba(255,80,130,0.3)' }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10"
                  style={{ boxShadow: 'inset 0 0 60px rgba(255,30,90,0.3)' }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ background: 'rgba(255,30,90,0.4)', filter: 'blur(30px)', transform: 'scale(1.2)' }}
                />

                <img
                  src={src}
                  alt={`Kiss memory ${i + 1}`}
                  className="w-full h-full object-contain bg-pink-950/80 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-8">
                  <div className="text-center">
                    <p className="text-white text-2xl font-black mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      Memory #{i + 1}
                    </p>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-4xl"
                    >
                      💋
                    </motion.div>
                  </div>
                </div>

                {/* Corner sparkle */}
                <motion.div
                  className="absolute top-4 right-4 text-3xl z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  ✨
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL SEAL ───────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div
            className="relative rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden"
            style={{ background: 'rgba(80,0,30,0.7)', border: '2px solid rgba(255,80,130,0.4)', backdropFilter: 'blur(20px)' }}
          >
            {/* Glow bg */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,30,90,0.2), transparent 70%)' }}
            />

            {/* Pulsing big kiss */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-8xl md:text-9xl mb-8 relative z-10"
            >
              💋
            </motion.div>

            <h3
              className="text-4xl md:text-6xl font-black mb-6 relative z-10"
              style={{
                fontFamily: 'Georgia, serif',
                background: 'linear-gradient(135deg, #ff4d8f, #ffb3cc, #ff80b3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sealed With My Love
            </h3>

            <p className="text-xl md:text-2xl text-pink-200 mb-8 font-semibold relative z-10" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              Every kiss is a promise that I'm yours — today, tomorrow, and in every lifetime. Bas ab to us ghadi ka wait hain... 💕
            </p>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl md:text-8xl relative z-10"
            >
              💋💕💋
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="h-20" />
    </div>
  );
};

export default KissDay;