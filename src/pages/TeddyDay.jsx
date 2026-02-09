import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const TeddyDay = () => {
  const navigate = useNavigate();
  const [openedTeddies, setOpenedTeddies] = useState([]);

  // Floating teddy bears configuration
  const floatingTeddies = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    emoji: ['🧸', '🐻', '🐻‍❄️', '🧸', '🐻'][Math.floor(Math.random() * 5)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 8,
    size: 2 + Math.random() * 2,
  }));

  const toggleTeddy = (index) => {
    if (openedTeddies.includes(index)) {
      setOpenedTeddies(openedTeddies.filter(i => i !== index));
    } else {
      setOpenedTeddies([...openedTeddies, index]);
    }
  };

  const images = [
    "/images/teddy/teddy1.jpeg",
    "/images/teddy/teddy2.jpeg",
    "/images/teddy/teddy3.jpeg",
    "/images/teddy/teddy4.jpeg"
  ];

  const memories = [
    "The perfect rainy day when we went on the drive and ended up cuddling in the car while listening to our favorite songs, warm hug and cozy vibes all around.",
    "The time at the restaurant when we hugged so many times and many times we sit together and just held each other - it felt like we were the only two people in the world and I never wanted that moment to end.",
    "When you hold my hand specially from biceps that was the moment when I felt the happiest and luckiest person. When we were travelling in the metro and holding each other, I felt so much love that time.",
    "Every time you hug me, all my worries and stress just disappear. You're my real-life teddy bear and my greatest comfort."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-amber-100 overflow-hidden relative">
      {/* Floating Teddy Bears Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingTeddies.map((teddy) => (
          <motion.div
            key={teddy.id}
            className="absolute"
            style={{ 
              left: teddy.left, 
              bottom: '-100px',
              fontSize: `${teddy.size}rem`,
              opacity: 0.3,
              filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
            }}
            animate={{
              y: [0, -1400],
              rotate: [0, 180, 360, 540],
              x: [0, Math.sin(teddy.id) * 60, 0],
            }}
            transition={{
              duration: teddy.duration,
              delay: teddy.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {teddy.emoji}
          </motion.div>
        ))}
      </div>

      {/* Decorative clouds */}
      <div className="fixed top-0 left-0 w-full pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 text-6xl opacity-20"
        >
          ☁️
        </motion.div>
        <motion.div
          animate={{ x: [0, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-40 right-20 text-7xl opacity-20"
        >
          ☁️
        </motion.div>
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
          className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-orange-200 to-pink-200 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl border-2 border-orange-300 transition-all duration-300"
        >
          <motion.span
            className="text-xl md:text-2xl"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.span>
          <span className="font-bold text-sm md:text-base text-orange-900 group-hover:text-orange-700 transition-colors">
            Back
          </span>
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* AI-Generated Teddy Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.2 
            }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-amber-400 blur-3xl opacity-40 rounded-full transform scale-105"></div>
              
              {/* Main teddy container */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="relative"
              >
                {/* Floating hearts around teddy */}
                <motion.div
                  className="absolute -top-8 -left-8 text-4xl md:text-5xl z-20"
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  💕
                </motion.div>
                <motion.div
                  className="absolute -top-8 -right-8 text-4xl md:text-5xl z-20"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -15, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  🎀
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -left-8 text-4xl md:text-5xl z-20"
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, -20, 0]
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                >
                  🤗
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -right-8 text-4xl md:text-5xl z-20"
                  animate={{ 
                    y: [0, -18, 0],
                    rotate: [0, 20, 0]
                  }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
                >
                  ✨
                </motion.div>

                {/* Giant animated teddy bear */}
                <motion.div
                  animate={{ 
                    rotate: [-3, 3, -3],
                    y: [0, -15, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[180px] md:text-[250px] leading-none"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(251, 146, 60, 0.4))'
                  }}
                >
                  🧸
                </motion.div>

                {/* Cuddle badge */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-20"
                  animate={{ 
                    rotate: [-5, 5, -5],
                    y: [0, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 px-6 py-3 rounded-full shadow-2xl border-3 border-white">
                    <p className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                      <span>🤗</span>
                      <span>Cuddle Time!</span>
                      <span>🤗</span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Funky Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-6 relative"
          >
            <span className="relative inline-block">
              <span className="absolute inset-0 text-orange-500 blur-md">Teddy Day</span>
              <span className="relative bg-gradient-to-r from-orange-400 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                Teddy Day
              </span>
            </span>
            <motion.span
              animate={{ rotate: [0, 20, 0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block ml-4"
            >
              🧸
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-orange-300 to-pink-300 px-8 py-3 rounded-full border-4 border-white shadow-xl transform -rotate-2">
              <p className="text-2xl md:text-3xl font-bold text-orange-900">
                10th February
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-3xl mx-auto mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 blur-2xl opacity-30 rounded-3xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-orange-300 transform rotate-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-4"
              >
                💝
              </motion.div>
              <blockquote className="text-2xl md:text-3xl font-bold italic text-orange-900">
                "You're my favorite cuddle buddy"
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.08, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 text-white rounded-full text-lg md:text-xl font-black shadow-2xl hover:shadow-orange-400/50 transition-all duration-300 border-4 border-white transform -rotate-2"
              onClick={() => document.getElementById('cuddle-letter').scrollIntoView({ behavior: 'smooth' })}
            >
              🤗 Read My Cuddles 🤗
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="cuddle-letter" className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Teddy paw decorations */}
            <div className="absolute -top-8 -left-8 text-6xl opacity-30 transform -rotate-12">🐾</div>
            <div className="absolute -bottom-8 -right-8 text-6xl opacity-30 transform rotate-12">🐾</div>
            
            <div className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-amber-50 rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-orange-300 transform rotate-1">
              {/* Corner teddy bears */}
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 text-4xl md:text-5xl"
              >
                🧸
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black text-center mb-6 md:mb-8">
                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-orange-700 bg-clip-text text-transparent">
                  My Cuddly Love,
                </span>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block ml-3"
                >
                  💕
                </motion.span>
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
                <p className="first-letter:text-6xl md:first-letter:text-8xl first-letter:font-bold first-letter:text-orange-600 first-letter:mr-2 first-letter:float-left bg-orange-100/50 p-4 rounded-2xl">
                  Just like a teddy bear brings comfort and warmth to a child, you bring peace, happiness, and unconditional love to my life. Your hugs are my safe place, your presence is my comfort zone, and your love is my sanctuary.
                </p>
                
                <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-6 md:p-8 rounded-3xl border-l-4 border-orange-500 shadow-lg transform -rotate-1">
                  <p className="text-lg md:text-xl font-semibold text-orange-900">
                    A teddy bear is soft and cuddly, but your love is even softer, warmer, and more comforting. When I hold you in my arms, I feel like I'm home - safe, loved, and completely at peace.
                  </p>
                </div>
                
                <p className="bg-pink-100/50 p-4 md:p-6 rounded-2xl">
                  You are my teddy bear in human form - always there to comfort me when I'm down, always ready with a warm hug, always bringing a smile to my face, and absolutely adorable in every single way. I could hold you forever and never want to let go.
                </p>
                
                <div className="text-center py-6 bg-gradient-to-br from-orange-200 to-pink-200 rounded-3xl">
                  <p className="text-2xl md:text-3xl font-black text-orange-900">
                    Here's to all our cuddles,
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-orange-800 mt-2">
                    past, present, and future! 🤗
                  </p>
                </div>
                
                <div className="text-right mt-8 md:mt-12 space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-orange-900">Sending you the warmest hugs,</p>
                  <p className="text-2xl md:text-3xl text-orange-700 font-black">
                    Your eternal cuddle partner 🤗💕
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cozy Memories Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-12 md:mb-16 text-orange-800 drop-shadow-lg"
          >
            Our Cozy Moments 🐻💕
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -5 : 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className={`relative bg-gradient-to-br from-white to-orange-50 rounded-3xl p-6 md:p-8 shadow-xl border-4 border-orange-300 hover:border-orange-400 transition-all transform ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}>
                  <div className="absolute -top-6 -right-6 text-4xl md:text-5xl transform rotate-12">
                    {['🧸', '😴', '🏰', '🤗'][index]}
                  </div>
                  <p className="text-gray-800 leading-relaxed text-sm md:text-base pt-4 font-medium">
                    {memory}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Teddy Gift Gallery */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-center mb-8 md:mb-12 text-orange-800 drop-shadow-lg"
          >
            Cuddle These Teddies! 🧸💝
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-orange-700 text-lg md:text-2xl mb-8 md:mb-12 font-bold"
          >
            Touch each teddy to reveal our precious moments! 🐻
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {images.map((image, index) => {
              const isOpened = openedTeddies.includes(index);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <AnimatePresence mode="wait">
                    {!isOpened ? (
                      // Teddy Bear Gift (Closed)
                      <motion.div
                        key="teddy-closed"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        transition={{ duration: 0.5 }}
                        className="relative cursor-pointer group"
                        onClick={() => toggleTeddy(index)}
                      >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
                        
                        {/* Teddy container */}
                        <div className="relative aspect-square bg-gradient-to-br from-orange-200 via-pink-200 to-orange-300 rounded-3xl shadow-2xl overflow-hidden border-4 border-orange-400 transform group-hover:scale-105 transition-all duration-300">
                          {/* Polka dot pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                              backgroundSize: '30px 30px'
                            }}></div>
                          </div>

                          {/* Gift bow on top */}
                          <motion.div
                            className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
                            animate={{ 
                              rotate: [0, 10, 0, -10, 0],
                              y: [0, -5, 0]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          >
                            <div className="text-7xl md:text-8xl drop-shadow-2xl">🎀</div>
                          </motion.div>

                          {/* Giant animated teddy bear */}
                          <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="text-[120px] md:text-[150px] drop-shadow-2xl filter brightness-110">
                              🧸
                            </div>
                          </motion.div>

                          {/* Floating hearts */}
                          <motion.div
                            className="absolute top-1/4 left-1/4 text-3xl"
                            animate={{ 
                              y: [0, -20, 0],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            💕
                          </motion.div>
                          <motion.div
                            className="absolute top-1/4 right-1/4 text-3xl"
                            animate={{ 
                              y: [0, -15, 0],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                          >
                            💝
                          </motion.div>

                          {/* Click hint */}
                          <motion.div
                            className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                            animate={{ 
                              y: [0, -10, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="bg-white/95 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl border-4 border-orange-400">
                              <p className="text-orange-900 font-black text-sm md:text-base">Cuddle Me! 🤗</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ) : (
                      // Revealed Image
                      <motion.div
                        key="teddy-opened"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="relative cursor-pointer group"
                        onClick={() => toggleTeddy(index)}
                      >
                        {/* Image glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-pink-400 rounded-4xl blur-2xl opacity-50"></div>
                        
                        {/* Image container */}
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-400 group-hover:border-pink-400 transition-all bg-gradient-to-br from-orange-50 to-pink-50">
                          <img
                            src={image}
                            alt={`Cozy moment ${index + 1}`}
                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                          />
                          
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                            <div className="text-center">
                              <p className="text-white text-xl md:text-2xl font-black mb-2">Cozy Memory #{index + 1}</p>
                              <p className="text-orange-200 text-sm md:text-base font-bold">Tap to cuddle again! 🧸</p>
                            </div>
                          </div>

                          {/* Corner decorations */}
                          <motion.div
                            className="absolute top-4 right-4 text-3xl md:text-4xl"
                            animate={{ 
                              scale: [1, 1.3, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            ✨
                          </motion.div>
                          <motion.div
                            className="absolute bottom-4 left-4 text-3xl md:text-4xl"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, -15, 0, 15, 0]
                            }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                          >
                            💕
                          </motion.div>
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

      {/* Final Cuddle Message */}
      <section className="py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 blur-3xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-white/95 to-orange-100/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-orange-400 transform -rotate-1">
              <motion.div
                animate={{ 
                  rotate: [0, 15, 0, -15, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl md:text-8xl mb-6"
              >
                🧸
              </motion.div>
              <h3 className="text-3xl md:text-5xl font-black mb-4 text-transparent bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text">
                Forever Your Cuddle Buddy
              </h3>
              <p className="text-xl md:text-2xl text-orange-900 mb-6 font-bold">
                You're the warmest, coziest hug I've ever known! 🤗💕
              </p>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, 0, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl md:text-7xl"
              >
                ❤️🧸
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom spacing */}
      <div className="h-12 md:h-20"></div>
    </div>
  );
};

export default TeddyDay;