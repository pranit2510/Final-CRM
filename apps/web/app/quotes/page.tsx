'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Send,
  Download,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from 'lucide-react'

export default function QuotesPage() {
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

  const quotes = [
    {
      id: "Q-2024-001",
      customer: "Sarah Thompson",
      company: "Thompson Residence",
      project: "Kitchen Renovation",
      amount: 25000,
      status: "Pending",
      createdDate: "2024-01-15",
      expiryDate: "2024-02-15",
      materials: 18500,
      labor: 6500,
      avatar: "ST"
    },
    {
      id: "Q-2024-002", 
      customer: "Mike Rodriguez",
      company: "Rodriguez Construction",
      project: "Bathroom Remodel",
      amount: 15500,
      status: "Accepted",
      createdDate: "2024-01-12",
      expiryDate: "2024-02-12",
      materials: 11200,
      labor: 4300,
      avatar: "MR"
    },
    {
      id: "Q-2024-003",
      customer: "Jennifer Davis",
      company: "Davis Family", 
      project: "Deck Installation",
      amount: 8200,
      status: "Sent",
      createdDate: "2024-01-18",
      expiryDate: "2024-02-18",
      materials: 5800,
      labor: 2400,
      avatar: "JD"
    },
    {
      id: "Q-2024-004",
      customer: "Robert Chen",
      company: "Chen Enterprises",
      project: "Office Renovation",
      amount: 45000,
      status: "Draft",
      createdDate: "2024-01-20",
      expiryDate: "2024-02-20",
      materials: 32000,
      labor: 13000,
      avatar: "RC"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Accepted': return 'bg-green-100 text-green-700 border-green-200'
      case 'Sent': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Draft': return 'bg-gray-100 text-gray-700 border-gray-200'
      case 'Expired': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Accepted': return <CheckCircle className="h-4 w-4" />
      case 'Sent': return <Send className="h-4 w-4" />
      case 'Pending': return <Clock className="h-4 w-4" />
      case 'Draft': return <Edit className="h-4 w-4" />
      case 'Expired': return <AlertCircle className="h-4 w-4" />
      default: return <FileText className="h-4 w-4" />
    }
  }

  const totalQuoteValue = quotes.reduce((sum, quote) => sum + quote.amount, 0)
  const acceptedQuotes = quotes.filter(q => q.status === 'Accepted')
  const pendingQuotes = quotes.filter(q => q.status === 'Pending' || q.status === 'Sent')

  const stats = [
    { title: 'Total Quotes', value: quotes.length.toString(), change: '+15%', icon: FileText, bgColor: 'from-blue-400 to-blue-600' },
    { title: 'Accepted', value: acceptedQuotes.length.toString(), change: '+25%', icon: CheckCircle, bgColor: 'from-green-400 to-green-600' },
    { title: 'Pending', value: pendingQuotes.length.toString(), change: '+8%', icon: Clock, bgColor: 'from-yellow-400 to-yellow-600' },
    { title: 'Total Value', value: `$${(totalQuoteValue / 1000).toFixed(0)}K`, change: '+22%', icon: DollarSign, bgColor: 'from-emerald-400 to-emerald-600' },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 md:pt-28 md:pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">Quotes & Estimates</h1>
              <p className="text-gray-600">Manage your construction project quotes and estimates</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-button px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover-glow mt-4 md:mt-0"
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Quote
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-br ${stat.bgColor} shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search quotes by customer, project, or quote ID..."
                className="glass-input pl-10 pr-4 py-3 w-full focus-ring"
              />
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-button px-4 py-3 hover-lift flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </motion.button>
              <select className="glass-input px-4 py-3 focus-ring">
                <option>All Status</option>
                <option>Draft</option>
                <option>Sent</option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>Expired</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Quotes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {quote.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{quote.customer}</h3>
                    <p className="text-sm text-gray-600">{quote.company}</p>
                    <p className="text-xs text-brand-primary font-medium">{quote.id}</p>
                  </div>
                </div>
                <span className={`flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(quote.status)}`}>
                  {getStatusIcon(quote.status)}
                  <span className="ml-1">{quote.status}</span>
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-4 w-4 mr-2 text-brand-primary" />
                  <span className="font-medium">{quote.project}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Materials:</span>
                    <span className="ml-2 font-medium text-gray-900">${quote.materials.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Labor:</span>
                    <span className="ml-2 font-medium text-gray-900">${quote.labor.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-brand-primary" />
                    <span>Expires: {new Date(quote.expiryDate).toLocaleDateString()}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">${quote.amount.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 glass-button py-2 text-sm font-medium hover-lift flex items-center justify-center"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 glass-button py-2 text-sm font-medium hover-lift flex items-center justify-center"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button py-2 px-3 bg-brand-primary text-white font-medium hover-glow"
                >
                  <Send className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button py-2 px-3 hover-lift"
                >
                  <Download className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 