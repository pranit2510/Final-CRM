'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  PhoneCall,
  Settings,
  Play,
  Pause,
  Volume2,
  Mic,
  Languages,
  Clock,
  Target,
  Users,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Save,
  TestTube
} from 'lucide-react'

export default function AIVoiceAgentPage() {
  const [isActive, setIsActive] = useState(true)
  const [currentLanguage, setCurrentLanguage] = useState('en-US')

  const languages = [
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
    { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
    { code: 'es-ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr-FR', name: 'French', flag: '🇫🇷' },
    { code: 'de-DE', name: 'German', flag: '🇩🇪' },
  ]

  const stats = [
    { label: 'Total Calls', value: '2,847', change: '+12%', icon: PhoneCall },
    { label: 'Avg Call Duration', value: '3.2 min', change: '-8%', icon: Clock },
    { label: 'Lead Conversion', value: '34%', change: '+15%', icon: Target },
    { label: 'Customer Rating', value: '4.8/5', change: '+3%', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-4 -right-4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <Link 
              href="/ai-power" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to AI Power Center
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                <PhoneCall className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Voice Agent</h1>
                <p className="text-gray-600">Intelligent phone conversations for your business</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className={`flex items-center px-3 py-2 rounded-full ${
                isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isActive ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
                <span className="text-sm font-medium">
                  {isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsActive(!isActive)}
                className={`p-3 rounded-xl shadow-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
                className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-green-600 font-medium">{stat.change}</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Voice Configuration</h2>
            </div>

            <div className="space-y-6">
              {/* Language Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Primary Language
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        currentLanguage === lang.code
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{lang.flag}</span>
                        <span className="text-sm font-medium">{lang.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Voice Settings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Voice Settings
                </label>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Voice Speed</span>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="2" 
                      step="0.1" 
                      defaultValue="1"
                      className="w-24"
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Voice Pitch</span>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="2" 
                      step="0.1" 
                      defaultValue="1"
                      className="w-24"
                    />
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Operating Hours
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Start Time</label>
                    <input 
                      type="time" 
                      defaultValue="09:00"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">End Time</label>
                    <input 
                      type="time" 
                      defaultValue="18:00"
                      className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save Configuration
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <TestTube className="h-5 w-5 mr-2" />
                  Test Voice
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Live Call Monitor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Live Activity</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Active Calls */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-700">Active Calls</span>
                  <span className="text-lg font-bold text-green-700">3</span>
                </div>
                <div className="text-xs text-green-600">Currently handling customer inquiries</div>
              </div>

              {/* Queue */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-700">In Queue</span>
                  <span className="text-lg font-bold text-blue-700">7</span>
                </div>
                <div className="text-xs text-blue-600">Estimated wait time: 2 minutes</div>
              </div>

              {/* Recent Conversations */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Conversations</h3>
                <div className="space-y-2">
                  {[
                    { caller: "John Smith", duration: "4:32", status: "completed", outcome: "Appointment Scheduled" },
                    { caller: "Sarah Wilson", duration: "2:18", status: "completed", outcome: "Quote Requested" },
                    { caller: "Mike Johnson", duration: "6:45", status: "active", outcome: "In Progress" },
                  ].map((call, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{call.caller}</div>
                        <div className="text-xs text-gray-500">{call.duration} • {call.outcome}</div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${
                        call.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 