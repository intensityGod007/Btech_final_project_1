import { motion } from 'framer-motion'

export default function SuccessPage({ userData }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <motion.div
        className="max-w-2xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome Aboard, {userData?.name}!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-300 mb-8"
        >
          Your personalized AI fitness and nutrition plan is being prepared
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Your Profile Summary</h2>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-400 text-sm">Age</p>
              <p className="font-semibold">{userData?.age} years</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Gender</p>
              <p className="font-semibold capitalize">{userData?.gender}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Height</p>
              <p className="font-semibold">{userData?.height} cm</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Weight</p>
              <p className="font-semibold">{userData?.weight} kg</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-400 text-sm">Activity Level</p>
              <p className="font-semibold capitalize">{userData?.activity_level?.replace('_', ' ')}</p>
            </div>
            <div className="col-span-2">
              <p className="text-gray-400 text-sm">Fitness Goals</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {userData?.fitness_goals?.map((goal, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-600 rounded-full text-sm capitalize">
                    {goal.replace('_', ' ')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-400">
            Our AI is analyzing your information to create a customized plan that fits your unique needs and goals.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
