import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PromiseDay = () => {
  const navigate = useNavigate();
  const [showAnniversaryModal, setShowAnniversaryModal] = useState(true);
  const [revealedPromises, setRevealedPromises] = useState([]);
  const [showPromises, setShowPromises] = useState(false);

  // Floating elements configuration with modern emojis
  const floatingElements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    emoji: ['💎', '✨', '🌟', '💫', '⭐', '🌙'][Math.floor(Math.random() * 6)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 10,
    size: 1.2 + Math.random() * 1.8,
  }));

  const togglePromise = (index) => {
    if (revealedPromises.includes(index)) {
      setRevealedPromises(revealedPromises.filter(i => i !== index));
    } else {
      setRevealedPromises([...revealedPromises, index]);
    }
  };

  const promises = [
    {
      title: "Forever Love",
      promise: "I promise to love you unconditionally, through sunshine and storms, through good times and challenges. My love for you will never fade.",
      icon: "💙",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Always There",
      promise: "I promise to be your shoulder to cry on, your partner in all adventures, and your biggest supporter in everything you do.",
      icon: "🤝",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Your Happiness",
      promise: "I promise to make you smile and laugh even on your worst days, because seeing you happy is my greatest joy and life's purpose.",
      icon: "😊",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Support Dreams",
      promise: "I promise to support your dreams as much as I support my own, and to help you achieve everything you desire in life.",
      icon: "🌟",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Choose You Daily",
      promise: "I promise to choose you, every single day, in every situation, no matter what life throws at us. You're my forever choice.",
      icon: "💍",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Grow Together",
      promise: "I promise to grow old with you, creating countless beautiful memories along the way. Our best days are still ahead of us.",
      icon: "🌈",
      gradient: "from-green-400 to-blue-500"
    }
  ];

  const images = [
    "/images/promise/promise2.jpeg",
    "/images/promise/promise3.jpeg",
    "/images/promise/promise4.jpeg",
    "/images/promise/promise5.jpeg"
  ];

  const memories = [
    "The promises we made under the stars on that beautiful night - I remember every single one and I'm keeping them all.",
    "When you promised to always be there for me, and you've kept that promise faithfully every single day since.",
    "Our sacred pinky promises that we never, ever break - they mean the entire world to me.",
    "Every day that you keep your promise of loving me makes me fall even deeper in love with you."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Modern Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute"
            style={{ 
              left: element.left, 
              bottom: '-100px',
              fontSize: `${element.size}rem`,
              opacity: 0.3
            }}
            animate={{
              y: [0, -1200],
              rotate: [0, 360],
              x: [0, Math.sin(element.id) * 50, 0],
              opacity: [0, 0.5, 0]
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

      {/* Modern Border Accent */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

      {/* Enhanced Anniversary Modal - PROPERLY SIZED */}
      <AnimatePresence>
        {showAnniversaryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
            onClick={() => setShowAnniversaryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {/* Main Card Container - OPTIMIZED SIZE */}
              <div className="relative bg-gradient-to-br from-white via-pink-50 to-purple-50 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                
                {/* Subtle Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]"></div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-8 right-12 opacity-40 z-10 hidden md:block"
                >
                  <div className="text-6xl">💎</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute top-16 left-12 opacity-40 z-10 hidden md:block"
                >
                  <div className="text-5xl">✨</div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-16 right-16 text-5xl opacity-40 z-10 hidden md:block"
                >
                  🌟
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                  {/* Left Content Section */}
                  <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 xl:p-12 relative z-20">
                    
                    {/* Modern Title */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-4 md:mb-6"
                    >
                      <div className="inline-block mb-3">
                        <span className="px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                          ✨ SPECIAL MOMENT
                        </span>
                      </div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 leading-tight bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                        Our Special
                        <br />
                        Anniversary
                      </h1>
                    </motion.div>

                    {/* Modern Date Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-5 mb-4 md:mb-6 shadow-lg border border-purple-200/50"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-2xl"></div>
                      <p className="text-xl md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-1 relative z-10">
                        February 11, 2023
                      </p>
                      <p className="text-sm md:text-base lg:text-lg text-gray-700 font-semibold flex items-center gap-2 relative z-10">
                        The Day Our Forever Began 
                        <span className="inline-block">💕</span>
                      </p>
                    </motion.div>

                    {/* Thank You Messages */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2 md:space-y-3 mb-4 md:mb-6"
                    >
                      {[
                        "for coming into my life and changing everything for the better.",
                        "for handling me with so much love, patience, and understanding.",
                        "for supporting me through every situation and believing in me.",
                        "for making every day brighter, sweeter, and more beautiful."
                      ].map((text, index) => (
                        <motion.p
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed"
                        >
                          <span className="font-black text-purple-600">Thank you</span> {text}
                        </motion.p>
                      ))}
                    </motion.div>

                    {/* Love Quote */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mb-4 md:mb-6"
                    >
                      <div className="relative inline-block">
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold italic bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                          Love is all around 
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block"
                          >
                            💗
                          </motion.span>
                        </p>
                      </div>
                    </motion.div>

                    {/* Modern CTA Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setShowAnniversaryModal(false)}
                      className="group relative w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl text-sm md:text-base lg:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Continue to Promises</span>
                      <span className="relative z-10 text-lg md:text-xl">💝</span>
                    </motion.button>
                  </div>

                  {/* Right Image Section - Modern Heart Frame */}
                  <div className="relative flex items-center justify-center p-6 md:p-8 lg:p-10 bg-gradient-to-br from-purple-50/50 to-pink-50/50">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                      className="relative w-full max-w-sm"
                    >
                      {/* Modern Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-full blur-3xl opacity-30"></div>

                      {/* Heart Shape Container */}
                      <div className="relative w-full aspect-square">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                          <defs>
                            <clipPath id="heart-shape">
                              <path d="M100,175 C20,130 5,95 5,70 C5,45 20,30 40,30 C60,30 80,45 100,70 C120,45 140,30 160,30 C180,30 195,45 195,70 C195,95 180,130 100,175 Z" />
                            </clipPath>
                            <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="100%" stopColor="#a855f7" />
                            </linearGradient>
                          </defs>
                        </svg>

                        {/* Heart Border */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                          <path 
                            d="M100,175 C20,130 5,95 5,70 C5,45 20,30 40,30 C60,30 80,45 100,70 C120,45 140,30 160,30 C180,30 195,45 195,70 C195,95 180,130 100,175 Z" 
                            fill="none"
                            stroke="white"
                            strokeWidth="8"
                            filter="drop-shadow(0 8px 16px rgba(0,0,0,0.1))"
                          />
                          <path 
                            d="M100,175 C20,130 5,95 5,70 C5,45 20,30 40,30 C60,30 80,45 100,70 C120,45 140,30 160,30 C180,30 195,45 195,70 C195,95 180,130 100,175 Z" 
                            fill="none"
                            stroke="url(#heart-gradient)"
                            strokeWidth="4"
                          />
                        </svg>

                        {/* Image */}
                        <div className="absolute inset-0 p-2">
                          <div 
                            className="w-full h-full"
                            style={{ clipPath: 'url(#heart-shape)' }}
                          >
                            <img
                              src="/images/promise/promise1.jpeg"
                              alt="Our Special Moment"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Floating Hearts */}
                      {[
                        { emoji: '💕', className: '-top-4 -left-4 md:-top-6 md:-left-6', delay: 0, size: 'text-3xl md:text-4xl lg:text-5xl' },
                        { emoji: '💗', className: '-top-3 -right-5 md:-top-4 md:-right-8', delay: 0.5, size: 'text-3xl md:text-4xl' },
                        { emoji: '💖', className: '-bottom-4 -left-5 md:-bottom-6 md:-left-8', delay: 1, size: 'text-3xl md:text-4xl' },
                        { emoji: '💝', className: '-bottom-3 -right-4 md:-bottom-4 md:-right-6', delay: 1.5, size: 'text-3xl md:text-4xl lg:text-5xl' }
                      ].map((heart, index) => (
                        <motion.div
                          key={index}
                          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                          transition={{ duration: 3 + index * 0.2, repeat: Infinity, delay: heart.delay }}
                          className={`absolute ${heart.className} ${heart.size} z-20`}
                        >
                          {heart.emoji}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Modern Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowAnniversaryModal(false)}
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-30 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 font-bold text-lg md:text-xl shadow-lg transition-all"
                >
                  ×
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-40"
      >
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-white/10 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300"
        >
          <motion.span
            className="text-lg md:text-xl text-white"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.span>
          <span className="font-bold text-xs md:text-sm text-white">
            Back
          </span>
        </motion.button>
      </motion.div>

      {/* Hero Section - Modern Design */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left side - Modern Card with Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                {/* Modern Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                  <img
                    src="/images/promise/promise1.jpeg"
                    alt="Our Special Moment"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-xl border-2 md:border-4 border-white"
                >
                  <p className="font-black text-base md:text-lg">Feb 11</p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 text-4xl md:text-5xl lg:text-6xl z-20"
              >
                💎
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-8 md:-top-6 md:-right-12 text-3xl md:text-4xl lg:text-5xl z-20"
              >
                ✨
              </motion.div>
            </motion.div>

            {/* Right side - Modern Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center lg:text-left space-y-4 md:space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <span className="inline-block px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                  🎉 VALENTINE'S WEEK
                </span>
              </motion.div>

              {/* Modern Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
              >
                <span className="block text-white mb-2">Happy</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Promise Day
                </span>
              </motion.h1>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/20 shadow-xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>
                <p className="text-lg md:text-xl lg:text-2xl text-white font-semibold italic leading-relaxed relative z-10">
                  "I promise to love you in every lifetime"
                </p>
              </motion.div>

              {/* Modern CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('letter').scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl text-base md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Read My Heart
                    <span className="text-lg md:text-xl">💌</span>
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('promises').scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-xl text-base md:text-lg font-bold border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Our Promises
                    <span className="text-lg md:text-xl">🤝</span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Love Letter Section */}
      <section id="letter" className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-purple-200/50 overflow-hidden">
              {/* Subtle Pattern Overlay */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.05)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
              
              {/* Modern Corner Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-purple-200/50 to-pink-200/50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-tr from-blue-200/50 to-purple-200/50 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                  My Precious One,
                </h2>
                
                <div className="space-y-4 md:space-y-6 text-gray-800 leading-relaxed text-sm md:text-base lg:text-lg">
                  <p className="first-letter:text-5xl md:first-letter:text-6xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-2 first-letter:float-left">
                    Today, I want to make promises that come straight from the deepest part of my heart. These aren't just words - they are the unbreakable foundation of my love for you.
                  </p>
                  
                  <div className="relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 p-5 md:p-6 rounded-2xl border-l-4 border-purple-500">
                    <div className="absolute top-0 right-0 text-5xl md:text-6xl opacity-10">💜</div>
                    <p className="font-semibold text-base md:text-lg relative z-10">
                      I promise to love you unconditionally, through sunshine and storms, through good times and challenges. My love for you will never waver, never fade, never end.
                    </p>
                  </div>
                  
                  <p>
                    I promise to be your shoulder to cry on, your partner in all adventures, and your biggest supporter in everything you do. Your dreams are my dreams, your happiness is my mission.
                  </p>
                  
                  <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 p-5 md:p-6 rounded-2xl border-l-4 border-blue-500">
                    <div className="absolute top-0 right-0 text-5xl md:text-6xl opacity-10">💙</div>
                    <p className="font-semibold text-base md:text-lg relative z-10">
                      I promise to make you smile and laugh even on your worst days, because seeing you happy is my greatest joy and the reason my heart beats.
                    </p>
                  </div>
                  
                  <p>
                    I promise to support your dreams as much as I support my own, and to help you achieve everything you desire in life. Together, we can conquer anything.
                  </p>
                  
                  <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-rose-50 p-5 md:p-6 rounded-2xl border-l-4 border-pink-500">
                    <div className="absolute top-0 right-0 text-5xl md:text-6xl opacity-10">💗</div>
                    <p className="font-semibold text-base md:text-lg relative z-10">
                      I promise to choose you, every single day, in every situation, no matter what life throws at us. You are my forever choice, my only choice.
                    </p>
                  </div>
                  
                  <p>
                    I promise to grow old with you, creating countless beautiful memories along the way. Our story is just beginning, and the best chapters are yet to come.
                  </p>

                  <div className="text-center py-6 md:py-8 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 rounded-3xl mt-6 md:mt-8 border border-purple-200/50">
                    <p className="text-xl md:text-2xl lg:text-3xl font-black text-purple-900 mb-2">
                      These promises are my sacred vow to you
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-purple-800">
                      Forever and always 💙
                    </p>
                  </div>
                  
                  <div className="text-right mt-8 md:mt-10 space-y-2">
                    <p className="text-lg md:text-xl font-semibold text-purple-900">Forever committed to us,</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-purple-700 font-black">Your devoted partner 💙</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Interactive Promise Cards */}
      <section id="promises" className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4">
              My Sacred Promises 🤝
            </h2>
            <p className="text-blue-200 text-base md:text-lg lg:text-xl font-medium">
              Click each card to reveal my heartfelt commitment 💙
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {promises.map((promiseItem, index) => {
              const isRevealed = revealedPromises.includes(index);
              
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
                      <motion.div
                        key="closed"
                        initial={{ rotateY: 0 }}
                        exit={{ rotateY: 90 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => togglePromise(index)}
                        className="cursor-pointer"
                      >
                        <div className={`relative bg-gradient-to-br ${promiseItem.gradient} rounded-2xl p-6 md:p-8 shadow-xl border border-white/20 hover:scale-105 transition-all duration-300 min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center overflow-hidden`}>
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                          
                          <motion.div
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-5xl md:text-6xl mb-4 relative z-10"
                          >
                            {promiseItem.icon}
                          </motion.div>
                          <h3 className="text-xl md:text-2xl font-black text-white text-center mb-3 relative z-10">
                            {promiseItem.title}
                          </h3>
                          <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-white/90 text-xs md:text-sm font-semibold relative z-10"
                          >
                            Tap to reveal 💙
                          </motion.div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="open"
                        initial={{ rotateY: -90 }}
                        animate={{ rotateY: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => togglePromise(index)}
                        className="cursor-pointer"
                      >
                        <div className="relative bg-white rounded-2xl p-5 md:p-6 shadow-xl border border-gray-200 hover:scale-105 transition-all duration-300 min-h-[220px] md:min-h-[240px]">
                          <div className="text-3xl md:text-4xl mb-3">{promiseItem.icon}</div>
                          <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3">
                            {promiseItem.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                            {promiseItem.promise}
                          </p>
                          <div className="text-purple-600 text-xs font-semibold mt-3 md:mt-4">
                            Tap to close
                          </div>
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

      
      {/* Modern Image Gallery */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-center mb-8 md:mb-12 text-white"
          >
            Moments of Our Sacred Promises 📸
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-br from-purple-100 to-pink-100">
                  <img
                    src={image}
                    alt={`Promise memory ${index + 1}`}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 md:pb-6">
                    <p className="text-white text-lg md:text-xl font-bold">Memory #{index + 1}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Final Message */}
      <section className="py-12 md:py-16 lg:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 blur-3xl opacity-30"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-purple-200/50">
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl md:text-7xl mb-4 md:mb-6"
              >
                💍
              </motion.div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Forever Yours
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-800 mb-4 md:mb-6 font-bold">
                Every promise I make is a piece of my soul I give to you 💙
              </p>
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-5xl lg:text-6xl"
              >
                💙💜💗
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
      
            {/* Anniversary Card at the End */}
      <section className="py-12 md:py-15 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-yellow-200 via-pink-100 to-rose-100 rounded-2xl shadow-4xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-8 left-8 opacity-30">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M30 50C30 50 10 40 10 25C10 15 15 10 22 10C26 10 28 12 30 15C32 12 34 10 38 10C45 10 50 15 50 25C50 40 30 50 30 50Z" fill="#ec4899"/>
              </svg>
            </div>
            <div className="absolute top-12 left-20 opacity-20">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M20 35C20 35 5 28 5 17C5 10 8 7 13 7C16 7 18 9 20 11C22 9 24 7 27 7C32 7 35 10 35 17C35 28 20 35 20 35Z" fill="#f472b6"/>
              </svg>
            </div>
            <div className="absolute bottom-8 right-8 opacity-20">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M25 42C25 42 8 34 8 21C8 13 12 9 18 9C21 9 23 11 25 13C27 11 29 9 32 9C38 9 42 13 42 21C42 34 25 42 25 42Z" fill="#ec4899"/>
              </svg>
            </div>

            {/* Decorative hearts garland top right */}
            <div className="absolute top-6 right-12 flex gap-1 opacity-40">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                >
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="#ec4899">
                    <path d="M10 17C10 17 2 13 2 7C2 3 4 1 7 1C8.5 1 9.5 2 10 3C10.5 2 11.5 1 13 1C16 1 18 3 18 7C18 13 10 17 10 17Z"/>
                  </svg>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
              {/* Left Content */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Decorative doodles */}
                <div className="absolute top-24 left-12 hidden lg:block">
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.3">
                      <path d="M20 40C20 40 25 30 35 30C45 30 50 40 50 40" stroke="#ec4899" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M30 25C30 25 32 20 40 20C48 20 50 25 50 25" stroke="#f472b6" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-5xl md:text-7xl font-bold mb-2" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                    <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      Our Special
                    </span>
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-600 uppercase tracking-wide mb-4">
                    Anniversary
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border-2 border-pink-200 shadow-md">
                    <p className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
                      February 11, 2023
                    </p>
                    <p className="text-lg text-gray-700 font-semibold">
                      The Day Our Forever Began 💕
                    </p>
                  </div>

                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p className="text-base md:text-lg">
                      <span className="text-pink-600 font-bold">Thank you</span> for coming into my life and changing everything for the better.
                    </p>
                    <p className="text-base md:text-lg">
                      <span className="text-pink-600 font-bold">Thank you</span> for handling me with so much love, patience, and understanding.
                    </p>
                    <p className="text-base md:text-lg">
                      <span className="text-pink-600 font-bold">Thank you</span> for supporting me through every situation and believing in me.
                    </p>
                    <p className="text-base md:text-lg">
                      <span className="text-pink-600 font-bold">Thank you</span> for making every day brighter, sweeter, and more beautiful.
                    </p>
                  </div>

                  {/* Decorative love is all text */}
                  <div className="relative py-4">
                    <motion.p
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-2xl md:text-3xl font-bold text-center"
                      style={{ fontFamily: 'Brush Script MT, cursive' }}
                    >
                      <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                        Love is all around 💖
                      </span>
                    </motion.p>
                    <div className="absolute -top-2 left-1/4 opacity-40">
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="3" fill="#ec4899"/>
                        <circle cx="15" cy="15" r="8" stroke="#ec4899" strokeWidth="1" fill="none"/>
                      </svg>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-xl md:text-2xl font-black text-pink-600">
                      I love you more than words can express! 💖
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Image - Heart Shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
                className="relative flex items-center justify-center"
              >
                {/* Heart-shaped frame */}
                <div className="relative w-full max-w-md mx-auto">
                  <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full opacity-0">
                    <defs>
                      <clipPath id="end-heart-clip">
                        <path d="M100,180 C15,130 0,85 0,60 C0,30 20,15 40,15 C60,15 80,30 100,60 C120,30 140,15 160,15 C180,15 200,30 200,60 C200,85 185,130 100,180 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  
                  {/* Heart border */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <path 
                        d="M100,180 C15,130 0,85 0,60 C0,30 20,15 40,15 C60,15 80,30 100,60 C120,30 140,15 160,15 C180,15 200,30 200,60 C200,85 185,130 100,180 Z" 
                        fill="none"
                        stroke="white"
                        strokeWidth="8"
                      />
                      <path 
                        d="M100,180 C15,130 0,85 0,60 C0,30 20,15 40,15 C60,15 80,30 100,60 C120,30 140,15 160,15 C180,15 200,30 200,60 C200,85 185,130 100,180 Z" 
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="4"
                      />
                    </svg>
                  </div>

                  {/* Image inside heart */}
                  <div className="relative w-full aspect-square p-4">
                    <div 
                      className="w-full h-full rounded-full overflow-hidden shadow-2xl"
                      style={{ clipPath: 'url(#end-heart-clip)' }}
                    >
                    </div>
                  </div>

                  {/* Floating decorative hearts */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-6 -left-6 text-5xl opacity-80"
                  >
                    💕
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    className="absolute -top-4 -right-8 text-4xl opacity-80"
                  >
                    💗
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-4 -left-8 text-4xl opacity-80"
                  >
                    💖
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -18, 0], rotate: [0, -15, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: 1.5 }}
                    className="absolute -bottom-6 -right-6 text-5xl opacity-80"
                  >
                    💝
                  </motion.div>

                  {/* Decorative flowers */}
                  <div className="absolute bottom-4 right-4 opacity-40">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <path d="M30 45L25 35L30 25L35 35L30 45Z" fill="#ec4899"/>
                      <path d="M20 30L15 25L20 20L25 25L20 30Z" fill="#f472b6"/>
                      <path d="M40 30L45 25L40 20L35 25L40 30Z" fill="#f472b6"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* Bottom Spacing */}
      <div className="h-12 md:h-16 lg:h-20"></div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default PromiseDay;