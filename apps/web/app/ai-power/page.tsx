'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Bot, 
  MessageSquare, 
  Mail, 
  Phone, 
  Settings, 
  Zap, 
  Play,
  Pause,
  BarChart3,
  Users,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Brain,
  Volume2,
  PhoneCall,
  MessageCircle,
  MailCheck,
  TrendingUp,
  Clock,
  Target,
  Shield
} from 'lucide-react'

export default function AIPowerPage() {
  const [activeAgent, setActiveAgent] = useState('voice')
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  }

  const agentTypes = [
    {
      id: 'voice',
      name: 'AI Voice Agent',
      description: 'Intelligent phone conversations for lead qualification and customer support',
      icon: PhoneCall,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      route: '/ai-power/voice',
      features: [
        'Natural voice conversations',
        'Lead qualification calls',
        'Appointment scheduling',
        '24/7 availability',
        'Multi-language support'
      ],
      stats: {
        'Calls Handled': '2,847',
        'Lead Conversion': '34%',
        'Avg Call Time': '3.2 min',
        'Satisfaction': '4.8/5'
      }
    },
    {
      id: 'sms',
      name: 'AI SMS Agent',
      description: 'Smart text messaging for instant customer engagement and follow-ups',
      icon: MessageCircle,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      route: '/ai-power/sms',
      features: [
        'Instant text responses',
        'Lead nurturing campaigns',
        'Appointment reminders',
        'Quote follow-ups',
        'Customer service chat'
      ],
      stats: {
        'Messages Sent': '12,453',
        'Response Rate': '89%',
        'Avg Response': '12 sec',
        'Engagement': '76%'
      }
    },
    {
      id: 'email',
      name: 'AI Email Agent',
      description: 'Automated email campaigns and personalized customer communications',
      icon: MailCheck,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      route: '/ai-power/email',
      features: [
        'Personalized email campaigns',
        'Follow-up sequences',
        'Quote generation',
        'Project updates',
        'Marketing automation'
      ],
      stats: {
        'Emails Sent': '8,926',
        'Open Rate': '42%',
        'Click Rate': '18%',
        'Conversion': '12%'
      }
    }
  ]

  const activeAgentData = agentTypes.find(agent => agent.id === activeAgent)

  const overallStats = [
    { title: 'Total Interactions', value: '24,226', change: '+23%', icon: MessageSquare, bgColor: 'from-blue-400 to-blue-600' },
    { title: 'Lead Conversion', value: '28%', change: '+12%', icon: Target, bgColor: 'from-green-400 to-green-600' },
    { title: 'Response Time', value: '1.8 min', change: '-34%', icon: Clock, bgColor: 'from-purple-400 to-purple-600' },
    { title: 'Customer Satisfaction', value: '4.9/5', change: '+8%', icon: CheckCircle2, bgColor: 'from-emerald-400 to-emerald-600' },
  ]

  const handleAgentClick = (agent: typeof agentTypes[0]) => {
    router.push(agent.route)
  }

  const handleConfigureClick = (agent: typeof agentTypes[0]) => {
    router.push(`${agent.route}/configure`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-4 -right-4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"
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
        <motion.div 
          className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center justify-center mb-4"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <Sparkles className="h-6 w-6 text-blue-500 ml-2 animate-pulse" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
              AI Power Center
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Deploy intelligent AI agents to automate customer interactions and grow your business
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
                <Brain className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Smart AI Technology</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200/50 shadow-sm">
                <Shield className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Secure & Reliable</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
                <Zap className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">24/7 Automated</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Overall Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8"
        >
          {overallStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-green-600 font-medium">{stat.change}</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600">{stat.title}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Agent Type Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {agentTypes.map((agent) => {
                const Icon = agent.icon
                return (
                  <button
                    key={agent.id}
                    onClick={() => handleAgentClick(agent)}
                    className={`
                      relative p-4 sm:p-6 rounded-xl text-left transition-all duration-300 group cursor-pointer
                      hover:scale-105 hover:shadow-lg
                      ${activeAgent === agent.id 
                        ? `bg-gradient-to-r ${agent.color} text-white shadow-lg shadow-blue-500/25` 
                        : 'text-gray-600 hover:bg-gray-50/70'
                      }
                    `}
                  >
                    <div className="flex items-center mb-3">
                      <Icon className={`
                        h-6 w-6 sm:h-8 sm:w-8 mr-3 transition-all duration-300
                        ${activeAgent === agent.id ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}
                      `} />
                      <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                        activeAgent === agent.id ? 'text-white' : 'text-gray-900'
                      }`}>
                        {agent.name}
                      </h3>
                    </div>
                    <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                      activeAgent === agent.id ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {agent.description}
                    </p>
                    {activeAgent === agent.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4"
                      >
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                  </button>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Active Agent Details */}
        {activeAgentData && (
          <motion.div
            key={activeAgent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8"
          >
            {/* Features */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${activeAgentData.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <activeAgentData.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{activeAgentData.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600">Key Features</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {activeAgentData.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center p-3 bg-gray-50/50 rounded-lg hover:bg-gray-100/50 transition-colors duration-200"
                  >
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200/50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${activeAgentData.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
                  onClick={() => handleConfigureClick(activeAgentData)}
                >
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span className="text-sm sm:text-base">Configure {activeAgentData.name}</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Performance Metrics</h3>
                  <p className="text-sm sm:text-base text-gray-600">Real-time statistics</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm text-green-600 font-medium">Live</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {Object.entries(activeAgentData.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="p-3 sm:p-4 bg-gray-50/50 rounded-xl hover:bg-gray-100/50 transition-colors duration-200"
                  >
                    <div className="text-lg sm:text-2xl font-bold text-gray-900 mb-1">{value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{key}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200/50">
                <div className="flex items-center mb-2">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-blue-900">Performance Trend</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-700">
                  Your {activeAgentData.name.toLowerCase()} is performing 23% better than industry average
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Deploy AI Agents?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Set up your AI agents in minutes and start automating customer interactions today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                <Play className="h-5 w-5 mr-2" />
                Quick Setup
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                View Analytics
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 