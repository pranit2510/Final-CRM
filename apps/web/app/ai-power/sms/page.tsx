'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  MessageCircle,
  Settings,
  Play,
  Pause,
  Send,
  MessageSquare,
  Clock,
  Target,
  Users,
  BarChart3,
  CheckCircle2,
  Save,
  TestTube,
  Bell,
  Calendar
} from 'lucide-react'

export default function AISMSAgentPage() {
  const [isActive, setIsActive] = useState(true)
  const [selectedTemplate, setSelectedTemplate] = useState('welcome')

  const templates = [
    { id: 'welcome', name: 'Welcome Message', preview: 'Hi {name}! Thanks for your interest in our services...' },
    { id: 'followup', name: 'Follow-up', preview: 'Hi {name}, just checking in about your recent inquiry...' },
    { id: 'appointment', name: 'Appointment Reminder', preview: 'Hi {name}, this is a reminder of your appointment...' },
    { id: 'quote', name: 'Quote Follow-up', preview: 'Hi {name}, your quote is ready for review...' },
  ]

  const stats = [
    { label: 'Messages Sent', value: '12,453', change: '+18%', icon: MessageCircle },
    { label: 'Response Rate', value: '89%', change: '+12%', icon: Target },
    { label: 'Avg Response Time', value: '12 sec', change: '-23%', icon: Clock },
    { label: 'Engagement Rate', value: '76%', change: '+8%', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-4 -right-4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
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
              className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to AI Power Center
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI SMS Agent</h1>
                <p className="text-gray-600">Smart messaging for instant customer engagement</p>
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
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
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
          {/* Message Templates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Message Templates</h2>
            </div>

            <div className="space-y-6">
              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Template Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                        selectedTemplate === template.id
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="text-sm font-medium">{template.name}</div>
                      <div className="text-xs text-gray-500 mt-1 truncate">{template.preview}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Message Content
                </label>
                <textarea
                  className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Enter your message template here..."
                  defaultValue={templates.find(t => t.id === selectedTemplate)?.preview}
                />
                <div className="text-xs text-gray-500 mt-2">
                  Use {'{name}'}, {'{company}'}, {'{service}'} for personalization
                </div>
              </div>

              {/* Auto-reply Settings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Auto-Reply Settings
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Enable Auto-Reply</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Business Hours Only</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Response Delay (seconds)</span>
                    <input 
                      type="number" 
                      defaultValue="5"
                      min="1"
                      max="60"
                      className="w-16 p-1 border border-gray-200 rounded text-center"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save Template
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <TestTube className="h-5 w-5 mr-2" />
                  Test Message
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Live Chat Monitor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <BarChart3 className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Live Conversations</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Live</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Active Conversations */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-700">Active Chats</span>
                  <span className="text-lg font-bold text-green-700">12</span>
                </div>
                <div className="text-xs text-green-600">Currently handling customer messages</div>
              </div>

              {/* Recent Messages */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Messages</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {[
                    { sender: "Sarah Miller", message: "What are your rates for plumbing?", time: "2 min ago", status: "replied" },
                    { sender: "John Davis", message: "Can you schedule an estimate?", time: "5 min ago", status: "pending" },
                    { sender: "Lisa Chen", message: "Thank you for the quick response!", time: "8 min ago", status: "completed" },
                    { sender: "Mike Wilson", message: "Do you work on weekends?", time: "12 min ago", status: "replied" },
                  ].map((msg, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{msg.sender}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{msg.time}</span>
                          <div className={`w-2 h-2 rounded-full ${
                            msg.status === 'pending' ? 'bg-yellow-500' : 
                            msg.status === 'replied' ? 'bg-blue-500' : 'bg-green-500'
                          }`}></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Broadcast
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors duration-200 flex items-center justify-center"
                >
                  <Bell className="h-4 w-4 mr-2" />
                  Alerts
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 