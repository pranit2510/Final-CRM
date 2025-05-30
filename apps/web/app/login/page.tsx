'use client'

import { Button } from '@bluecollar/ui'
import { Hammer, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
    // Redirect to dashboard
    window.location.href = '/dashboard'
  }

  const features = [
    'Advanced lead management',
    'Professional quote builder',
    'Real-time job tracking',
    '24/7 customer support'
  ]

  return (
    <div className="min-h-screen bg-gradient-glass relative overflow-hidden flex items-center justify-center">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-bounce-subtle" />
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-base">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding & Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div 
                variants={logoVariants}
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <Hammer className="h-12 w-12 text-brand-primary animate-pulse-subtle" />
                  <div className="absolute inset-0 h-12 w-12 text-brand-primary animate-ping opacity-20" />
                </div>
                <div className="ml-4">
                  <h1 className="text-4xl font-bold text-gradient">BlueCollarCRM</h1>
                  <p className="text-lg text-gray-600 font-medium">Built for Blue-Collar Businesses</p>
                </div>
              </motion.div>
              
              <h2 className="text-display font-bold text-gray-900 mb-4">
                Streamline Your Business Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Join thousands of contractors who trust BlueCollarCRM to manage leads, 
                create quotes, schedule jobs, and grow their business.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  variants={itemVariants}
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="p-2 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                    <CheckCircle2 className="h-5 w-5 text-success-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-8 glass-card p-6 hover-lift"
            >
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-brand-primary" />
                <div>
                  <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
                  <p className="text-sm text-gray-600">Bank-level encryption and data protection</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <motion.div 
              className="glass-card p-8 hover-lift"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Mobile Logo */}
              <div className="lg:hidden text-center mb-8">
                <motion.div 
                  variants={logoVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center justify-center mb-4"
                >
                  <Hammer className="h-8 w-8 text-brand-primary mr-3" />
                  <h1 className="text-2xl font-bold text-gradient">BlueCollarCRM</h1>
                </motion.div>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-heading font-bold text-gray-900 mb-2">
                  Welcome Back
                </h2>
                <p className="text-gray-600">
                  Sign in to your account to continue
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="glass-input pl-10 pr-4 py-3 w-full focus-ring transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="glass-input pl-10 pr-12 py-3 w-full focus-ring transition-all"
                      placeholder="Enter your password"
                    />
                    <motion.button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-brand-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-center justify-between"
                >
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                  </label>
                  <Link 
                    href="/forgot-password" 
                    className="text-sm text-brand-primary hover:text-brand-primary-dark transition-colors font-medium"
                  >
                    Forgot password?
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full gradient-primary hover-glow shadow-glow py-3 text-white font-semibold transition-all"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Signing in...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          Sign In
                          <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-center"
                >
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link 
                      href="/register" 
                      className="font-semibold text-brand-primary hover:text-brand-primary-dark transition-colors"
                    >
                      Start your free trial
                    </Link>
                  </p>
                </motion.div>
              </form>
            </motion.div>

            {/* Demo Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-6 glass-card p-4 text-center hover-lift"
            >
              <p className="text-xs text-gray-500 mb-2">Demo Credentials:</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Email:</span> demo@bluecollarcrm.com<br />
                <span className="font-medium">Password:</span> demo123
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 