import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DayTemplate = ({ 
  emoji, 
  title, 
  date, 
  gradient, 
  message, 
  memories, 
  quote,
  imageNote,
  images
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden py-8 px-4">
      {/* Floating Hearts Background */}
      <div className="hearts-background">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="floating-heart">{emoji}</div>
        ))}
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 glass px-6 py-3 rounded-full font-body font-semibold text-rose border-2 border-rose hover:bg-rose hover:text-white transition-all duration-300 flex items-center gap-2"
      >
        <span>←</span>
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="text-8xl md:text-9xl mb-6"
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {emoji}
          </motion.div>

          <div className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${gradient} text-white font-body font-semibold text-lg mb-4`}>
            {date}
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold gradient-text mb-6 text-shadow">
            {title}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-script text-3xl md:text-4xl text-rose-dark max-w-2xl mx-auto"
          >
            {quote}
          </motion.p>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 mb-8 shadow-rose-lg relative overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl`}></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              My Message to You 💌
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {message}
            </p>
          </div>
        </motion.div>

        {/* Photo Placeholder Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 mb-8 shadow-rose-lg relative overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl`}></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Our Special Moments 📸
            </h2>
            
            {/* Photo Grid Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {images && images.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`memory-${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Memories Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-rose-lg relative overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 rounded-3xl`}></div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Beautiful Memories ✨
            </h2>
            <div className="space-y-4">
              {memories.map((memory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + (index * 0.1) }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-2xl flex-shrink-0">{emoji}</div>
                  <p className="font-body text-lg text-gray-700 flex-1">
                    {memory}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className={`px-8 py-4 rounded-full bg-gradient-to-r ${gradient} text-white font-body font-semibold text-lg shadow-rose hover:shadow-rose-lg transition-all duration-300`}
          >
            Back to All Days 💝
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default DayTemplate;