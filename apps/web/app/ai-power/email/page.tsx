'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft,
  MailCheck,
  Settings,
  Play,
  Pause,
  Send,
  Mail,
  Clock,
  Target,
  Users,
  BarChart3,
  CheckCircle2,
  Save,
  TestTube,
  Eye,
  MousePointer,
  TrendingUp,
  Calendar
} from 'lucide-react'

export default function AIEmailAgentPage() {
  const [isActive, setIsActive] = useState(true)
  const [selectedCampaign, setSelectedCampaign] = useState('welcome')

  const campaigns = [
    { id: 'welcome', name: 'Welcome Series', status: 'active', emails: 3 },
    { id: 'followup', name: 'Lead Follow-up', status: 'active', emails: 5 },
    { id: 'nurture', name: 'Lead Nurturing', status: 'paused', emails: 7 },
    { id: 'reactivation', name: 'Customer Reactivation', status: 'draft', emails: 4 },
  ]

  const stats = [
    { label: 'Emails Sent', value: '8,926', change: '+15%', icon: Mail },
    { label: 'Open Rate', value: '42%', change: '+8%', icon: Eye },
    { label: 'Click Rate', value: '18%', change: '+12%', icon: MousePointer },
    { label: 'Conversion Rate', value: '12%', change: '+5%', icon: Target },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-violet-50/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-4 -right-4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
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
              className="flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to AI Power Center
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                <MailCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Email Agent</h1>
                <p className="text-gray-600">Automated email campaigns and personalized communications</p>
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
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
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
          {/* Campaign Management */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-6 w-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Email Campaigns</h2>
            </div>

            <div className="space-y-6">
              {/* Campaign List */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Active Campaigns
                </label>
                <div className="space-y-2">
                  {campaigns.map((campaign) => (
                    <button
                      key={campaign.id}
                      onClick={() => setSelectedCampaign(campaign.id)}
                      className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${
                        selectedCampaign === campaign.id
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium">{campaign.name}</div>
                          <div className="text-xs text-gray-500">{campaign.emails} emails in sequence</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            campaign.status === 'active' ? 'bg-green-100 text-green-700' :
                            campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {campaign.status}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Email Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter email subject line..."
                  defaultValue="Welcome to our premium services!"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Email Content
                </label>
                <textarea
                  className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Enter your email content here..."
                  defaultValue="Hi {name}, thank you for your interest in our services..."
                />
                <div className="text-xs text-gray-500 mt-2">
                  Use {'{name}'}, {'{company}'}, {'{service}'} for personalization
                </div>
              </div>

              {/* Campaign Settings */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Campaign Settings
                </label>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Send Time Optimization</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">A/B Test Subject Lines</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Delay between emails (days)</span>
                    <input 
                      type="number" 
                      defaultValue="3"
                      min="1"
                      max="30"
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
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save Campaign
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <TestTube className="h-5 w-5 mr-2" />
                  Preview Email
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Campaign Analytics</h2>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">Live</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Performance Metrics */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">This Week's Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-700">Opens</span>
                      <Eye className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-700">3,752</div>
                    <div className="text-xs text-blue-600">+8% from last week</div>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-green-700">Clicks</span>
                      <MousePointer className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-700">1,607</div>
                    <div className="text-xs text-green-600">+12% from last week</div>
                  </div>
                </div>
              </div>

              {/* Recent Campaigns */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Recent Campaigns</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {[
                    { name: "Spring Promotion", sent: "2,450", opens: "42%", clicks: "18%", date: "2 days ago" },
                    { name: "Service Reminder", sent: "1,890", opens: "38%", clicks: "15%", date: "5 days ago" },
                    { name: "New Customer Welcome", sent: "3,200", opens: "45%", clicks: "22%", date: "1 week ago" },
                    { name: "Quote Follow-up", sent: "950", opens: "35%", clicks: "12%", date: "1 week ago" },
                  ].map((campaign, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">{campaign.name}</span>
                        <span className="text-xs text-gray-500">{campaign.date}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs">
                        <div>
                          <span className="text-gray-500">Sent:</span> <span className="font-medium">{campaign.sent}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Opens:</span> <span className="font-medium">{campaign.opens}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Clicks:</span> <span className="font-medium">{campaign.clicks}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trend Analysis */}
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-purple-900">Performance Trend</span>
                </div>
                <p className="text-sm text-purple-700">
                  Your email campaigns are performing 15% better than industry average with consistently improving engagement rates.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors duration-200 flex items-center justify-center"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 