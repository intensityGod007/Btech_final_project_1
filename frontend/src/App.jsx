import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from './components/HeroSection'
import MultiStepForm from './components/MultiStepForm'
import SuccessPage from './components/SuccessPage'

function App() {
  const [currentView, setCurrentView] = useState('hero')
  const [userData, setUserData] = useState(null)

  const handleGetStarted = () => {
    setCurrentView('form')
  }

  const handleFormSubmit = (data) => {
    setUserData(data)
    setCurrentView('success')
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentView === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection onGetStarted={handleGetStarted} />
          </motion.div>
        )}
        
        {currentView === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <MultiStepForm onSubmit={handleFormSubmit} />
          </motion.div>
        )}
        
        {currentView === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <SuccessPage userData={userData} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
