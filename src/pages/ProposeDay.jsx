import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProposeDay = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingHearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-2xl opacity-20"
            style={{ left: heart.left, bottom: '-50px' }}
            animate={{
              y: [0, -1000],
              rotate: [0, 360],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
        style={{ opacity, scale }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Ring Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 60px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl md:text-9xl drop-shadow-2xl"
              >
                💍
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{ 
                  rotate: [0, 15, 0, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 bg-clip-text text-transparent"
          >
            Propose Day
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-rose-600 font-semibold mb-8"
          >
            8th February
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 blur-xl opacity-30 rounded-3xl"></div>
            <blockquote className="relative text-xl md:text-2xl italic text-gray-700 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-amber-200">
              "Every day with you is a new reason to say 'I choose you'"
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
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300"
              onClick={() => document.getElementById('love-letter').scrollIntoView({ behavior: 'smooth' })}
            >
              Read My Heart 💌
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Love Letter Section */}
      <section id="love-letter" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative corners */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-amber-400 rounded-br-3xl"></div>
            
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-200">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text">
                My Beautiful Soulmate,
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-amber-600 first-letter:mr-2 first-letter:float-left">
                  Today and every day, I propose to love you more than yesterday. I propose to be your constant support, your biggest cheerleader, and your safe haven through all of life's adventures.
                </p>
                
                <p>
                  I propose to make you smile even on your worst days, to hold your hand through every challenge, and to celebrate every victory together - big or small.
                </p>
                
                <p className="font-semibold text-rose-700">
                  You are not just my girlfriend; you are my best friend, my partner, my confidant, and the love of my life. If I could propose to you every single day, I would - because choosing you is the easiest and best decision I've ever made.
                </p>
                
                <div className="text-center py-8">
                  <motion.p 
                    className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 bg-clip-text"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Will you continue this beautiful journey with me, today and always?
                  </motion.p>
                </div>
                
                <div className="text-right mt-8">
                  <p className="text-xl font-semibold text-gray-800">Always and forever,</p>
                  <p className="text-xl text-rose-600 font-bold">Your loving partner 💑</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Memories Timeline */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-rose-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text"
          >
            Our Beautiful Moments 💕
          </motion.h2>

          <div className="space-y-12">
            {[
              "The moment I knew you were the one - it wasn't just one moment, it was every single moment we've spent together that confirmed it.",
              "That unforgettable day when you looked into my eyes and said you loved me too - it remains the best day of my entire life!",
              "Our late-night conversations where we talked about our dreams, our future, and building a life together. Those talks mean everything to me.",
              "Every 'I love you' is a new proposal, and your 'I love you too' is a yes that I will cherish forever and ever."
            ].map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center text-3xl shadow-lg"
                >
                  {index === 0 ? '💖' : index === 1 ? '👀' : index === 2 ? '🌙' : '💑'}
                </motion.div>
                <div className={`flex-1 bg-white rounded-2xl p-6 shadow-lg border border-amber-200 ${index % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'}`}>
                  <p className="text-gray-700 leading-relaxed">{memory}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text"
          >
            Forever Captured 📸
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num, index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="relative group overflow-hidden rounded-3xl shadow-2xl aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={`/images/propose/propose${num}.jpeg`}
                  alt={`Propose memory ${num}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 z-20">
                  <p className="text-white text-xl font-semibold">Memory {num} 💕</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-amber-400 blur-3xl opacity-30"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-amber-200">
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-6"
              >
                💝
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text">
                Forever Yours
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Today, tomorrow, and all the days after - my answer is always YES! 💍
              </p>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-5xl"
              >
                ❤️
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProposeDay;