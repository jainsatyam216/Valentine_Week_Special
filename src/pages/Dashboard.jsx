import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const currentDate = new Date();

  // Array of all Valentine's Week days
  const days = [
    { 
      id: 1, 
      date: '7th Feb', 
      title: 'Rose Day', 
      emoji: '🌹', 
      gradient: 'from-red-400 via-rose to-pink-500',
      route: '/rose-day',
      actualDate: new Date('2026-02-07'),
      description: 'The day of flowers and first love'
    },
    { 
      id: 2, 
      date: '8th Feb', 
      title: 'Propose Day', 
      emoji: '💍', 
      gradient: 'from-yellow-400 via-gold to-amber-500',
      route: '/propose-day',
      actualDate: new Date('2026-02-08'),
      description: 'The day to express your feelings'
    },
    { 
      id: 3, 
      date: '9th Feb', 
      title: 'Chocolate Day', 
      emoji: '🍫', 
      gradient: 'from-amber-700 via-amber-800 to-amber-900',
      route: '/chocolate-day',
      actualDate: new Date('2026-02-09'),
      description: 'Sweet moments and sweeter memories'
    },
    { 
      id: 4, 
      date: '10th Feb', 
      title: 'Teddy Day', 
      emoji: '🧸', 
      gradient: 'from-orange-300 via-orange-400 to-orange-500',
      route: '/teddy-day',
      actualDate: new Date('2026-02-10'),
      description: 'Cuddles and comfort'
    },
    { 
      id: 5, 
      date: '11th Feb', 
      title: 'Promise Day', 
      emoji: '🤝', 
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      route: '/promise-day',
      actualDate: new Date('2026-02-11'),
      description: 'Promises to cherish forever'
    },
    { 
      id: 6, 
      date: '12th Feb', 
      title: 'Hug Day', 
      emoji: '🤗', 
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
      route: '/hug-day',
      actualDate: new Date('2026-02-12'),
      description: 'Warm embraces and comfort'
    },
    { 
      id: 7, 
      date: '13th Feb', 
      title: 'Kiss Day', 
      emoji: '💋', 
      gradient: 'from-pink-400 via-pink-500 to-rose-500',
      route: '/kiss-day',
      actualDate: new Date('2026-02-13'),
      description: 'Sealed with a kiss'
    },
    { 
      id: 8, 
      date: '14th Feb', 
      title: "Valentine's Day", 
      emoji: '❤️', 
      gradient: 'from-rose via-rose-dark to-purple',
      route: '/valentine-day',
      actualDate: new Date('2026-02-14'),
      description: 'The celebration of our love'
    },
  ];

  // Check if a day is unlocked (current date or earlier)
  const isUnlocked = (dayDate) => {
    // Set to start of day for comparison
    const today = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const checkDate = new Date(dayDate.getFullYear(), dayDate.getMonth(), dayDate.getDate());
    return checkDate <= today;
    
    // FOR TESTING: Uncomment below to unlock all days
    // return true;
  };

  const handleCardClick = (day) => {
    if (isUnlocked(day.actualDate)) {
      navigate(day.route);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      {/* Floating Hearts Background */}
      <div className="hearts-background">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="floating-heart">❤️</div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold gradient-text mb-4 text-shadow"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Our Love Journey
          </motion.h1>
          <p className="font-script text-3xl md:text-4xl text-rose-dark">
            February 7th - 14th, 2026
          </p>
          <p className="font-body text-lg md:text-xl text-gray-600 mt-4">
            A week of love, memories, and beautiful moments 💕
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {days.map((day, index) => {
            const unlocked = isUnlocked(day.actualDate);
            
            return (
              <motion.div
                key={day.id}
                variants={cardVariants}
                whileHover={unlocked ? { scale: 1.05, y: -10 } : {}}
                whileTap={unlocked ? { scale: 0.98 } : {}}
                onClick={() => handleCardClick(day)}
                className={`relative group ${unlocked ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              >
                <div className={`glass rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-rose-lg transition-all duration-300 border-2 ${
                  unlocked ? 'border-transparent' : 'border-gray-300'
                } ${!unlocked ? 'opacity-60' : ''}`}>
                  
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${day.gradient} opacity-10 rounded-2xl ${
                    unlocked ? 'group-hover:opacity-20' : ''
                  } transition-opacity duration-300`}></div>

                  {/* Lock Overlay */}
                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm rounded-2xl z-10">
                      <div className="text-center">
                        <div className="text-5xl mb-2">🔒</div>
                        <p className="font-body font-semibold text-gray-700">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  <div className="relative z-5">
                    {/* Emoji */}
                    <motion.div
                      className="text-6xl md:text-7xl mb-4 text-center"
                      animate={unlocked ? { rotate: [0, -10, 10, -10, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      {day.emoji}
                    </motion.div>

                    {/* Date */}
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${day.gradient} text-white font-body font-semibold text-sm mb-3`}>
                      {day.date}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      {day.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-gray-600 text-sm md:text-base">
                      {day.description}
                    </p>

                    {/* Click Indicator */}
                    {unlocked && (
                      <motion.div
                        className="mt-4 flex items-center justify-center gap-2 text-rose font-body font-semibold"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <span>Explore</span>
                        <span>→</span>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Sparkle Effect on Hover */}
                {unlocked && (
                  <motion.div
                    className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    ✨
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <p className="font-script text-3xl md:text-4xl text-rose-dark mb-2">
            Every day is special with you
          </p>
          <p className="font-body text-gray-600 text-lg">
            Click on each unlocked day to relive our precious moments together 💝
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;