import { motion } from 'framer-motion'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const [user, setUser] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate('/generate-plan')
    }
    else {
      setShowLogin(true)
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-[30px] md:py-0">

      <div className="relative z-10 text-left sm:text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-teal-400">
            AI-Powered Fitness
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            & Nutrition Guidance
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Get personalized workout plans and nutrition recommendations powered by advanced AI technology tailored to your unique goals
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
          onClick={onClickHandler}
          className="px-12 py-4 bg-gradient-to-r from-cyan-600 to-fuchsia-400 rounded-full text-xl font-semibold shadow-2xl transition-all duration-100"
        >
          Get Started
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">Personalized</h3>
            <p className="text-gray-300">AI-driven recommendations based on your unique profile</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">Effective</h3>
            <p className="text-gray-300">Science-backed fitness and nutrition plans</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-2">Results</h3>
            <p className="text-gray-300">Track your progress and achieve your goals</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
