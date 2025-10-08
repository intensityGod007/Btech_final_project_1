import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText, Radio, RadioGroup, FormControlLabel, FormLabel, FormGroup, Checkbox } from '@mui/material';

export default function MultiStepForm({ onSubmit, onExit }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [gender, setGender] = useState('')
  const { register, handleSubmit, formState: { errors }, trigger, control } = useForm()

  // console.log(errors.activity_level.message);

  const totalSteps = 4

  const nextStep = async () => {
    const isValid = await trigger()
    if (isValid && step < totalSteps) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const onFormSubmit = async (data) => {
    const finalData = { ...formData, ...data }
    setFormData(finalData)
    console.log(finalData);

    // try {
    //   const response = await fetch('/api/submit-user-data', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(finalData),
    //   })

    //   if (!response.ok) {
    //     throw new Error(`Server error: ${response.status}`)
    //   }

    //   const result = await response.json()
    //   onSubmit(finalData)
    // } catch (error) {
    //   console.error('Error submitting form:', error)
    //   alert('Failed to submit form. Please try again.')
    // }
  }

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data })
  }

  const handleExit = () => {
    onExit("hero")
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 ">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i <= step ? 'bg-purple-600' : 'bg-gray-700'
                  } transition-colors duration-300`}>
                  {i}
                </div>
                {i < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${i < step ? 'bg-purple-600' : 'bg-gray-700'
                    } transition-colors duration-300`}></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center">Step {step} of {totalSteps}</p>
        </div>

        <motion.div
          className="bg-white/50 backdrop-blur-md rounded-2xl p-8 border border-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Personal Information</h2>

                  <div className="mb-6">
                    {/* <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Enter your name"
                      id='name'
                    /> */}
                    <Controller
                      name="name"
                      control={control}
                      defaultValue="" // Set a default value for the controlled component
                      render={() => (
                        <FormControl fullWidth margin="normal">
                          <TextField
                            {...register('name', { required: 'Name is required' })}
                            id="outlined-basic"
                            label="Full Name"
                            type='text'
                            variant="outlined"
                            helperText={errors.name ? errors.name.message : null}
                            required />
                        </FormControl>
                      )}
                    />
                    {/* {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>} */}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      {/* <label htmlFor='age' className="block text-sm font-medium mb-2">Age</label>
                      <input
                        type="number"
                        {...register('age', { required: 'Age is required', min: 13, max: 120 })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="25"
                        id='age'
                      /> */}
                      <Controller
                        name="age"
                        control={control}
                        defaultValue="" // Set a default value for the controlled component
                        render={() => (
                          <FormControl fullWidth margin="normal">
                            <TextField
                              {...register('age', { required: 'Age is required' })}
                              id="outlined-basic"
                              label="Age"
                              type='number'
                              variant="outlined"
                              helperText={errors.age ? errors.age.message : null}
                              required />
                          </FormControl>
                        )}
                      />
                      {/* {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age.message}</p>} */}
                    </div>

                    <div>
                      {/* <label htmlFor='gender' className="block text-sm font-medium mb-2">Gender</label>
                      <select
                        {...register('gender', { required: 'Gender is required' })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                        id='gender'
                      >
                        <option value="" className='bg-black'>Select</option>
                        <option value="male" className='bg-black'>Male</option>
                        <option value="female" className='bg-black'>Female</option>
                        <option value="other" className='bg-black'>Other</option>
                      </select> */}
                      <Controller
                        name="gender"
                        control={control}
                        defaultValue="" // Set a default value for the controlled component
                        render={({ field }) => (
                          <FormControl fullWidth margin="normal">
                            <InputLabel color='primary'>Gender</InputLabel>
                            <Select
                              {...register('gender', { required: 'Gender is required' })}
                              label="Gender"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <MenuItem value="male">Male</MenuItem>
                              <MenuItem value="female">Female</MenuItem>
                              <MenuItem value="other">Other</MenuItem>
                            </Select>
                            <FormHelperText>{errors.gender ? errors.gender.message : null}</FormHelperText>
                          </FormControl>
                        )}
                      />
                      {/* {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender.message}</p>} */}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Physical Metrics</h2>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      {/* <label className="block text-sm font-medium mb-2">Height (cm)</label>
                      <input
                        type="number"
                        step="0.1"
                        {...register('height', { required: 'Height is required', min: 0.1 })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="170"
                      />
                      {errors.height && <p className="text-red-400 text-sm mt-1">{errors.height.message}</p>} */}
                      <Controller
                        name="height"
                        control={control}
                        defaultValue="" // Set a default value for the controlled component
                        render={() => (
                          <FormControl fullWidth margin="normal">
                            <TextField
                              {...register('height', { required: 'Height is required' })}
                              id="outlined-basic"
                              label="Height (cm)"
                              type='number'
                              variant="outlined"
                              helperText={errors.height ? errors.height.message : null}
                              required />
                          </FormControl>
                        )}
                      />
                    </div>

                    <div>
                      {/* <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                      <input
                        type="number"
                        step="0.1"
                        {...register('weight', { required: 'Weight is required', min: 0.1 })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="70"
                      />
                      {errors.weight && <p className="text-red-400 text-sm mt-1">{errors.weight.message}</p>} */}
                      <Controller
                        name="weight"
                        control={control}
                        defaultValue="" // Set a default value for the controlled component
                        render={() => (
                          <FormControl fullWidth margin="normal">
                            <TextField
                              {...register('weight', { required: 'Weight is required' })}
                              id="outlined-basic"
                              label="Weight(kg)"
                              type='number'
                              variant="outlined"
                              helperText={errors.weight ? errors.weight.message : null}
                              required />
                          </FormControl>
                        )}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Activity Level</h2>

                  <div className="mb-6">
                    {/* <label className="block text-sm font-medium mb-4">Select Your Activity Level</label>
                    <div className="space-y-3">
                      {[
                        { value: 'sedentary', label: 'Sedentary', desc: 'Little or no exercise' },
                        { value: 'lightly_active', label: 'Lightly Active', desc: 'Exercise 1-3 times/week' },
                        { value: 'moderately_active', label: 'Moderately Active', desc: 'Exercise 4-5 times/week' },
                        { value: 'very_active', label: 'Very Active', desc: 'Intense exercise 6-7 times/week' },
                        { value: 'extremely_active', label: 'Extremely Active', desc: 'Professional athlete level' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center p-4 bg-white/5 border border-white/20 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                          <input
                            type="radio"
                            {...register('activity_level', { required: 'Activity level is required' })}
                            value={option.value}
                            className="mr-3"
                          />
                          <div>
                            <div className="font-medium">{option.label}</div>
                            <div className="text-sm text-gray-400">{option.desc}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.activity_level && <p className="text-red-400 text-sm mt-1">{errors.activity_level.message}</p>} */}
                    <Controller
                      name="activity_level"
                      control={control}
                      defaultValue="" // Set a default value for the controlled component
                      render={() => (
                        <FormControl fullWidth margin="normal">
                          <FormLabel>Select Your Activity Level</FormLabel>
                          <RadioGroup
                            name="activity_level"
                            // value={activityLevel}
                            // onChange={handleActivityChange}
                          >
                            {[
                              { value: 'sedentary', label: 'Sedentary', desc: 'Little or no exercise' },
                              { value: 'lightly_active', label: 'Lightly Active', desc: 'Exercise 1-3 times/week' },
                              { value: 'moderately_active', label: 'Moderately Active', desc: 'Exercise 4-5 times/week' },
                              { value: 'very_active', label: 'Very Active', desc: 'Intense exercise 6-7 times/week' },
                              { value: 'extremely_active', label: 'Extremely Active', desc: 'Professional athlete level' },
                            ].map((option) => (
                              <FormControlLabel
                                {...register('activity_level', { required: 'Activity level is required' })}
                                key={option.value}
                                value={option.value}
                                control={<Radio sx={{ color: 'black/10' }} />}
                                label={`${option.label} - ${option.desc}`}
                              />
                            ))}
                            {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" /> */}
                          </RadioGroup>
                          <FormHelperText>{errors.activity_level ? errors.activity_level.message : null}</FormHelperText>
                        </FormControl>
                      )}
                    />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Fitness Goals</h2>

                  <div className="mb-6">
                    {/* <label className="block text-sm font-medium mb-4">Select Your Goals (Choose all that apply)</label>
                    <div className="space-y-3">
                      {[
                        { value: 'weight_loss', label: 'Weight Loss' },
                        { value: 'muscle_gain', label: 'Muscle Gain' },
                        { value: 'endurance', label: 'Improve Endurance' },
                        { value: 'flexibility', label: 'Increase Flexibility' },
                        { value: 'general_fitness', label: 'General Fitness' },
                        { value: 'athletic_performance', label: 'Athletic Performance' },
                      ].map((goal) => (
                        <label key={goal.value} className="flex items-center p-4 bg-white/5 border border-white/20 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                          <input
                            type="checkbox"
                            {...register('fitness_goals', { required: 'Select at least one goal' })}
                            value={goal.value}
                            className="mr-3"
                          />
                          <div className="font-medium">{goal.label}</div>
                        </label>
                      ))}
                    </div>
                    {errors.fitness_goals && <p className="text-red-400 text-sm mt-1">{errors.fitness_goals.message}</p>} */}
                    <Controller
                      name="fitness_goals"
                      control={control}
                      defaultValue="" // Set a default value for the controlled component
                      render={() => (
                        <FormControl
                          required
                          component="fieldset"
                          sx={{ m: 3 }}
                          variant="standard"
                        >
                          <FormLabel component="legend">Select Your Goals (Choose all that apply)</FormLabel>
                          <FormGroup>
                            {[
                              { value: 'weight_loss', label: 'Weight Loss' },
                              { value: 'muscle_gain', label: 'Muscle Gain' },
                              { value: 'endurance', label: 'Improve Endurance' },
                              { value: 'flexibility', label: 'Increase Flexibility' },
                              { value: 'general_fitness', label: 'General Fitness' },
                              { value: 'athletic_performance', label: 'Athletic Performance' },
                            ].map((goal) => (
                              <FormControlLabel
                                {...register('fitness_goals', { required: 'Select at least one goal' })}
                                key={goal.value}
                                value={goal.value}
                                control={<Checkbox />}
                                label={goal.label}
                              />
                            ))}
                          </FormGroup>
                          <FormHelperText>{errors.fitness_goals ? errors.fitness_goals.message : null}</FormHelperText>
                        </FormControl>
                      )}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Previous
                </button>
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}
