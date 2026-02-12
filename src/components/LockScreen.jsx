import { useState } from 'react';
import { motion } from 'framer-motion';

const LockScreen = ({ onUnlock }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onUnlock(code);
    
    if (!success) {
      setError(true);
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setCode('');
      }, 500);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4 relative z-10"
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        className="glass-effect rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
      >
        {/* Heart Icon */}
        <motion.div
          className="text-center mb-8"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-8xl">💕</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-display font-bold text-center mb-3 text-gradient"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Valentine's Week
        </motion.h1>

        <motion.p
          className="text-center text-pink-800 font-body text-lg mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A special surprise just for you ❤️
        </motion.p>

        {/* Code Input Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={shake ? 'animate-shake' : ''}
          >
            <label className="block text-center text-pink-900 font-script text-2xl mb-3">
              Enter the secret code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-6 py-4 text-center text-2xl font-bold tracking-widest rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 outline-none transition-all bg-white/80"
              placeholder="💝 💝 💝"
              maxLength="10"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center mt-3 font-body"
              >
                Oops! Try again, my love 💕
              </motion.p>
            )}
          </motion.div>

          <motion.p
              className="text-center text-pink-700/60 font-body text-sm mt-6 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Pass key is not same for everyday just like us.
        </motion.p>

          <motion.button
            type="submit"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-display text-xl py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            Unlock My Heart 💖
          </motion.button>
        </form>

        {/* Hint */}
        <motion.p
          className="text-center text-pink-700/60 font-body text-sm mt-6 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Hint: Jo aapko hamse or hame aapse hai aapse bhi jyada.
        </motion.p>
      </motion.div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s;
        }
      `}</style>
    </motion.div>
  );
};

export default LockScreen;