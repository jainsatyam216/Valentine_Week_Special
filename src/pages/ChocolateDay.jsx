import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ChocolateDay = () => {
  const navigate = useNavigate();
  const [openedGifts, setOpenedGifts] = useState([]);

  // Floating chocolates configuration
  const chocolates = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: ['🍫', '🍬', '🍭', '🍩', '🧁'][Math.floor(Math.random() * 5)],
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 1 + Math.random() * 1.5,
  }));

  const toggleGift = (index) => {
    if (openedGifts.includes(index)) {
      setOpenedGifts(openedGifts.filter(i => i !== index));
    } else {
      setOpenedGifts([...openedGifts, index]);
    }
  };

  const images = [
    "/images/chocolate/chocolate1.jpeg",
    "/images/chocolate/chocolate2.jpeg",
    "/images/chocolate/chocolate3.jpeg",
    "/images/chocolate/chocolate4.jpeg"
  ];

  const memories = [
    "I added my first choclate which you gave me when we officially started our relationship and I still remember how happy I was to receive it. I still have it's rapper with me and I will keep it forever.",
    "I really want to eat chocolate with you right now and I am sure it will taste 100 times better than any chocolate I have ever eaten because it will be shared with you. And when I will come, we will eat chocolate together because we never ate chocolate together before.",
    "I want to give more more chocolates to you in future and I want to receive more and more chocolates from you in future because every chocolate from you is like a sweet surprise for me and it makes me feel so loved and special.",
    "Every chocolate I give you is filled with love, but none are as sweet as the love you give me every single day."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-brown-900 overflow-hidden relative">
      {/* Animated Chocolate Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {chocolates.map((choco) => (
          <motion.div
            key={choco.id}
            className="absolute"
            style={{ 
              left: choco.left, 
              bottom: '-100px',
              fontSize: `${choco.size}rem`,
              opacity: 0.4
            }}
            animate={{
              y: [0, -1200],
              rotate: [0, 360, 720],
              x: [0, Math.sin(choco.id) * 50, 0],
            }}
            transition={{
              duration: choco.duration,
              delay: choco.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {choco.emoji}
          </motion.div>
        ))}
      </div>

      {/* Decorative chocolate drips */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-amber-950/50 to-transparent pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 Q50,60 100,0 T200,0 T300,0 T400,0 T500,0 T600,0 T700,0 T800,0 T900,0 T1000,0 T1100,0 T1200,0 L1200,120 L0,120 Z" 
                fill="rgba(120, 53, 15, 0.3)"/>
        </svg>
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
          className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-100 to-orange-100 backdrop-blur-md rounded-full shadow-xl hover:shadow-2xl border-2 border-amber-300 transition-all duration-300"
        >
          <motion.span
            className="text-xl md:text-2xl"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.span>
          <span className="font-bold text-sm md:text-base text-amber-900 group-hover:text-amber-700 transition-colors">
            Back
          </span>
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Chocolate Bar Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [-5, 5, -5],
                y: [0, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(217, 119, 6, 0.6)",
                      "0 0 60px rgba(217, 119, 6, 0.9)",
                      "0 0 30px rgba(217, 119, 6, 0.6)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl md:text-9xl drop-shadow-2xl filter brightness-110"
                >
                  🍫
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 text-3xl md:text-4xl"
                  animate={{ 
                    rotate: [0, 20, 0, -20, 0],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ✨
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 text-3xl md:text-4xl"
                  animate={{ 
                    rotate: [0, -20, 0, 20, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                >
                  💝
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent drop-shadow-lg"
            style={{ textShadow: '0 0 40px rgba(217, 119, 6, 0.5)' }}
          >
            Chocolate Day
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-amber-100 font-bold mb-8"
          >
            9th February
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 blur-2xl opacity-30 rounded-3xl"></div>
            <blockquote className="relative text-xl md:text-3xl italic text-amber-50 px-6 md:px-10 py-6 md:py-8 bg-gradient-to-br from-amber-800/60 to-brown-900/60 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-amber-400/50">
              "You're sweeter than the sweetest chocolate" 🍫💕
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white rounded-full text-base md:text-lg font-bold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 border-2 border-amber-300"
              onClick={() => document.getElementById('love-letter').scrollIntoView({ behavior: 'smooth' })}
            >
              Unwrap My Love 💌
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="love-letter" className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Chocolate wrapper corners */}
            <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-tl-3xl opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-tl from-amber-400 to-orange-500 rounded-br-3xl opacity-70"></div>
            
            <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-amber-300">
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-6 right-6 text-4xl md:text-5xl"
              >
                🍫
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-transparent bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text">
                My Sweet Love,
              </h2>
              
              <div className="space-y-4 md:space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
                <p className="first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:text-amber-700 first-letter:mr-2 first-letter:float-left">
                  They say chocolate makes everything better, but honestly, you make my life perfect just by being in it. Your love is sweeter than any chocolate, more comforting than any dessert, and more satisfying than anything in this world.
                </p>
                
                <p className="bg-amber-100/50 p-4 md:p-6 rounded-2xl border-l-4 border-amber-600">
                  Like chocolate melts in warmth, I melt in your presence. Like chocolate brings instant joy, your smile lights up my entire world. And just like I can never have enough chocolate, I can never have enough of you.
                </p>
                
                <p className="font-semibold text-amber-900 text-lg md:text-xl">
                  You are the sweetness in my life, the warmth in my heart, and the smile on my face. Thank you for making every single day as sweet and special as this Chocolate Day.
                </p>
                
                <div className="text-right mt-6 md:mt-10 space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-amber-900">With all the sweetness in my heart,</p>
                  <p className="text-xl md:text-2xl text-amber-700 font-bold">Your chocolate-loving partner 🍫💕</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sweet Memories Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-amber-100 drop-shadow-lg"
          >
            Sweet Memories Together 🍬
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-amber-300 hover:border-amber-400 transition-all">
                  <div className="absolute -top-4 -right-4 text-3xl md:text-4xl">
                    {['🍫', '😍', '🎂', '💕'][index]}
                  </div>
                  <p className="text-gray-800 leading-relaxed text-sm md:text-base pt-4">
                    {memory}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Box Gallery Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-amber-100 drop-shadow-lg"
          >
            Sweet Surprises For You! 🎁
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-amber-200 text-base md:text-xl mb-8 md:mb-12"
          >
            Click on each gift to unwrap your sweet memories! 💝
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {images.map((image, index) => {
              const isOpened = openedGifts.includes(index);
              
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
                      // Gift Box (Closed)
                      <motion.div
                        key="gift-closed"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                        transition={{ duration: 0.5 }}
                        className="relative cursor-pointer group"
                        onClick={() => toggleGift(index)}
                      >
                        {/* Gift box shadow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        
                        {/* Gift box container */}
                        <div className="relative aspect-square bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-300 transform group-hover:scale-105 transition-all duration-300">
                          {/* Gift box pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
                            }}></div>
                          </div>

                          {/* Ribbon horizontal */}
                          <div className="absolute top-1/2 left-0 right-0 h-16 md:h-20 bg-gradient-to-r from-red-500 via-red-600 to-red-500 transform -translate-y-1/2 shadow-xl"></div>
                          
                          {/* Ribbon vertical */}
                          <div className="absolute left-1/2 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-b from-red-500 via-red-600 to-red-500 transform -translate-x-1/2 shadow-xl"></div>

                          {/* Bow */}
                          <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                            animate={{ 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0, -5, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <div className="relative">
                              <div className="text-6xl md:text-8xl drop-shadow-2xl">🎀</div>
                              <motion.div
                                className="absolute -top-2 -right-2 text-2xl md:text-3xl"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                ✨
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Click hint */}
                          <motion.div
                            className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <div className="bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
                              <p className="text-amber-800 font-bold text-xs md:text-sm">Click to Unwrap! 🎁</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ) : (
                      // Opened Gift with Image
                      <motion.div
                        key="gift-opened"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="relative cursor-pointer group"
                        onClick={() => toggleGift(index)}
                      >
                        {/* Image glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-50"></div>
                        
                        {/* Image container */}
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 group-hover:border-amber-400 transition-all">
                          <img
                            src={image}
                            alt={`Sweet memory ${index + 1}`}
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                          />
                          
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <div className="text-center">
                              <p className="text-white text-lg md:text-xl font-bold mb-2">Sweet Memory #{index + 1}</p>
                              <p className="text-amber-200 text-xs md:text-sm">Click to close 🍫</p>
                            </div>
                          </div>

                          {/* Sparkle effects */}
                          <motion.div
                            className="absolute top-4 right-4 text-2xl md:text-3xl"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            ✨
                          </motion.div>
                          <motion.div
                            className="absolute bottom-4 left-4 text-2xl md:text-3xl"
                            animate={{ 
                              scale: [1, 1.5, 1],
                              rotate: [360, 180, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                          >
                            💝
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

      {/* Final Sweet Message */}
      <section className="py-12 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 blur-3xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-amber-100/95 to-orange-100/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-amber-300">
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-5xl md:text-7xl mb-6"
              >
                🍫
              </motion.div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text">
                You're My Sweetest Addiction
              </h3>
              <p className="text-lg md:text-xl text-gray-800 mb-6">
                No chocolate in the world can compare to the sweetness you bring to my life! 💕
              </p>
              <motion.div
                animate={{ 
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl md:text-6xl"
              >
                ❤️🍫
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

export default ChocolateDay;