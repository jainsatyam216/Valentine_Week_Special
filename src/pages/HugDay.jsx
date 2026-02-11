import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HugDay = () => {
  const navigate = useNavigate();
  const [hugCounter, setHugCounter] = useState(0);
  const [showHugBurst, setShowHugBurst] = useState(false);
  const [revealedMemories, setRevealedMemories] = useState([]);

  // Floating elements
  const floatingElements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    emoji: ['🤗', '💚', '🫂', '💛', '✨', '🌟'][Math.floor(Math.random() * 6)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 10,
    size: 1.5 + Math.random() * 2.5,
  }));

  const handleHug = () => {
    setHugCounter(hugCounter + 1);
    setShowHugBurst(true);
    setTimeout(() => setShowHugBurst(false), 1000);
  };

  const toggleMemory = (index) => {
    if (revealedMemories.includes(index)) {
      setRevealedMemories(revealedMemories.filter(i => i !== index));
    } else {
      setRevealedMemories([...revealedMemories, index]);
    }
  };

  const images = [
    "/images/hug/hug1.jpeg",
    "/images/hug/hug2.jpeg",
    "/images/hug/hug3.jpeg",
    "/images/hug/hug4.jpeg"
  ];

  const memories = [
    "Our very first hug - I knew right then in that moment that I never wanted to let you go, and I still feel that way every single time.",
    "A shy hug when we want a tight hug but the surrounding people make it a little awkward - but we still manage to fit perfectly together and it just makes it even more special.",
    "Imagination hugs when we're apart - we close our eyes and wrap ourselves in the warmth of each other's embrace even when we're miles away.",
    "I miss that hug which I don't get yet - the one where we just hold each other for a long time, no words needed, just wrapped up in each other's arms and feeling completely safe and loved."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-green-950 overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"
        />

        {/* Floating emojis */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{ 
              left: element.left, 
              bottom: '-100px',
              fontSize: `${element.size}rem`,
              opacity: 0.4
            }}
            animate={{
              y: [0, -1600],
              rotate: [0, 360, 720],
              x: [0, Math.sin(element.id) * 80, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {element.emoji}
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      >
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-300/90 to-teal-300/90 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl border-2 border-emerald-400 transition-all duration-300"
        >
          <motion.span
            className="text-xl md:text-2xl"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.span>
          <span className="font-bold text-sm md:text-base text-emerald-900 group-hover:text-emerald-700 transition-colors">
            Back
          </span>
        </motion.button>
      </motion.div>

      {/* Hug Burst Effect */}
      <AnimatePresence>
        {showHugBurst && (
          <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: i * 30, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  x: Math.cos(i * 30 * Math.PI / 180) * 300,
                  y: Math.sin(i * 30 * Math.PI / 180) * 300,
                  opacity: [0, 1, 0]
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute text-6xl"
              >
                {['🤗', '💚', '🫂', '💛'][i % 4]}
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Main Hug Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="mb-12 relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative inline-block"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 blur-3xl opacity-60 rounded-full"></div>
              
              {/* Animated hugging hands */}
              <motion.div
                className="relative text-[200px] md:text-[280px] leading-none"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(16, 185, 129, 0.6))' }}
              >
                <motion.span
                  animate={{ rotate: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  🫂
                </motion.span>
              </motion.div>

              {/* Orbiting hearts */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-5xl"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    rotate: [i * 60, i * 60 + 360],
                    x: Math.cos(i * 60 * Math.PI / 180) * 150,
                    y: Math.sin(i * 60 * Math.PI / 180) * 150,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2
                  }}
                >
                  {['💚', '💛', '🤗', '✨', '💚', '💛'][i]}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Title with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 relative">
              <span className="absolute inset-0 text-emerald-500 blur-lg opacity-50">
                Hug Day
              </span>
              <span className="relative bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text text-transparent">
                Hug Day
              </span>
            </h1>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 px-8 py-3 rounded-full"
            >
              <p className="text-2xl md:text-3xl font-black text-white">
                12th February
              </p>
            </motion.div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 blur-2xl opacity-30 rounded-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-emerald-400/50 shadow-2xl">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  🏡
                </motion.div>
                <p className="text-2xl md:text-4xl font-bold italic text-emerald-100">
                  "In your arms, I've found my home"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Hug Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-6"
          >
            <motion.button
              onClick={handleHug}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-full text-xl md:text-2xl font-black shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300"
            >
              <motion.span
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block mr-3 text-3xl"
              >
                🤗
              </motion.span>
              Send Virtual Hug!
              <motion.span
                animate={{ rotate: [0, -10, 0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block ml-3 text-3xl"
              >
                💚
              </motion.span>
            </motion.button>

            {/* Hug Counter */}
            {hugCounter > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-block bg-emerald-400/20 backdrop-blur-md px-6 py-3 rounded-full border-2 border-emerald-400"
              >
                <p className="text-emerald-100 font-bold text-lg">
                  Hugs sent: {hugCounter} 🤗💚
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 blur-2xl opacity-30 rounded-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-emerald-950/90 via-teal-950/90 to-green-950/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-emerald-400/30">
              
              {/* Decorative corners */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-6 text-5xl opacity-50"
              >
                ✨
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                My Warm Embrace,
              </h2>
              
              <div className="space-y-6 text-emerald-50 leading-relaxed text-lg md:text-xl">
                <p className="first-letter:text-7xl first-letter:font-black first-letter:text-emerald-400 first-letter:mr-3 first-letter:float-left">
                  There's something truly magical about your hugs. They have the incredible power to heal my bad days, multiply my joy tenfold, and make everything feel absolutely right in the world.
                </p>
                
                <div className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-6 rounded-2xl border-l-4 border-emerald-400 backdrop-blur-sm">
                  <p className="font-semibold text-xl">
                    Your arms are my favorite place to be - they're my sanctuary, my safe space, my comfort zone, and my home. A single hug from you is worth more than a thousand words.
                  </p>
                </div>
                
                <p className="bg-emerald-900/30 p-6 rounded-2xl">
                  I love how perfectly we fit together when we embrace, like two puzzle pieces designed by fate just for each other. I love how your hugs make time stand still.
                </p>
                
                <div className="bg-gradient-to-r from-teal-900/50 to-green-900/50 p-6 rounded-2xl border-l-4 border-teal-400">
                  <p className="font-semibold text-xl">
                    I love how even after all this time together, your embrace still makes my heart skip a beat and fills me with warmth.
                  </p>
                </div>

                <div className="text-center py-8 bg-gradient-to-r from-emerald-800/40 to-teal-800/40 rounded-3xl">
                  <motion.p 
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl md:text-3xl font-black text-emerald-300"
                  >
                    Sending you the biggest virtual hug! 🤗💚
                  </motion.p>
                </div>
                
                <div className="text-right mt-10 space-y-2">
                  <p className="text-xl font-semibold text-emerald-300">Wrapped in love,</p>
                  <p className="text-3xl text-emerald-400 font-black">Your eternal hugger 💚</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Memory Cards */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center mb-12 text-emerald-300"
          >
            Our Embrace Memories 🫂
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memories.map((memory, index) => {
              const isRevealed = revealedMemories.includes(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <AnimatePresence mode="wait">
                    {!isRevealed ? (
                      // Closed card
                      <motion.div
                        key="closed"
                        initial={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        onClick={() => toggleMemory(index)}
                        className="cursor-pointer h-full"
                      >
                        <div className="relative h-full min-h-[250px] bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl border-2 border-emerald-400 hover:scale-105 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-3xl blur-xl"></div>
                          <div className="relative flex flex-col items-center justify-center h-full">
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, 0, -10, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="text-8xl mb-6"
                            >
                              {['🤗', '🫂', '💚', '💛'][index]}
                            </motion.div>
                            <h3 className="text-2xl font-black text-white text-center mb-4">
                              {['First Hug', 'Awkward Situations Hug', 'Imaginary Hug', 'Missing Hug'][index]}
                            </h3>
                            <motion.p
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="text-emerald-100 font-semibold"
                            >
                              Click to open 💚
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      // Opened card
                      <motion.div
                        key="open"
                        initial={{ rotateY: -90 }}
                        animate={{ rotateY: 0 }}
                        onClick={() => toggleMemory(index)}
                        className="cursor-pointer h-full"
                      >
                        <div className="h-full min-h-[250px] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-2xl border-2 border-emerald-400 hover:scale-105 transition-all duration-300">
                          <div className="text-5xl mb-4">
                            {['🤗', '🫂', '💚', '💛'][index]}
                          </div>
                          <p className="text-gray-800 leading-relaxed text-base md:text-lg">
                            {memory}
                          </p>
                          <p className="text-emerald-600 text-sm font-semibold mt-4">
                            Click to close
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-center mb-12 text-emerald-300"
          >
            Wrapped in Each Other's Arms 📸
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-emerald-400/50 group-hover:border-emerald-400 transition-all bg-gradient-to-br from-emerald-100 to-teal-100">
                  <img
                    src={image}
                    alt={`Hug moment ${index + 1}`}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="text-center">
                      <p className="text-white text-2xl font-black mb-2">Embrace #{index + 1}</p>
                      <motion.div
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-4xl"
                      >
                        🤗
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner decorations */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Hug Message */}
      <section className="py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 blur-3xl opacity-40"></div>
            <div className="relative bg-gradient-to-br from-emerald-900/90 to-teal-900/90 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border-4 border-emerald-400">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-8xl mb-6"
              >
                🫂
              </motion.div>
              <h3 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Forever in Your Arms
              </h3>
              <p className="text-2xl md:text-3xl text-emerald-100 mb-8 font-bold">
                You're my favorite place to be! 💚
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl"
              >
                🤗💚🫂
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default HugDay;