'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  Calendar,
  MapPin,
  DollarSign,
  MoreHorizontal,
  TrendingUp,
  Star,
  Clock
} from 'lucide-react'

export default function LeadsPage() {
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

  const leads = [
    {
      id: 1,
      name: "Sarah Thompson",
      company: "Thompson Residence",
      project: "Kitchen Renovation",
      location: "Downtown Seattle",
      value: "$25,000",
      status: "Hot",
      phone: "(555) 123-4567",
      email: "sarah@email.com",
      lastContact: "2 days ago",
      source: "Website",
      avatar: "ST"
    },
    {
      id: 2,
      name: "Mike Rodriguez", 
      company: "Rodriguez Construction",
      project: "Bathroom Remodel",
      location: "Bellevue, WA",
      value: "$15,500",
      status: "Warm",
      phone: "(555) 234-5678",
      email: "mike@rodriguez.com",
      lastContact: "1 week ago",
      source: "Referral",
      avatar: "MR"
    },
    {
      id: 3,
      name: "Jennifer Davis",
      company: "Davis Family",
      project: "Deck Installation", 
      location: "Kirkland, WA",
      value: "$8,200",
      status: "Cold",
      phone: "(555) 345-6789",
      email: "jen.davis@email.com",
      lastContact: "2 weeks ago",
      source: "Google Ads",
      avatar: "JD"
    },
    {
      id: 4,
      name: "Robert Chen",
      company: "Chen Enterprises",
      project: "Office Renovation",
      location: "Redmond, WA", 
      value: "$45,000",
      status: "Hot",
      phone: "(555) 456-7890",
      email: "robert@chenent.com",
      lastContact: "Yesterday",
      source: "LinkedIn",
      avatar: "RC"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-700 border-red-200'
      case 'Warm': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Cold': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const stats = [
    { title: 'Hot Leads', value: '2', change: '+25%', icon: Users, color: 'text-red-600', bgColor: 'from-red-400 to-red-600' },
    { title: 'Warm Leads', value: '1', change: '+12%', icon: Clock, color: 'text-yellow-600', bgColor: 'from-yellow-400 to-yellow-600' },
    { title: 'Cold Leads', value: '1', change: '-5%', icon: Users, color: 'text-blue-600', bgColor: 'from-blue-400 to-blue-600' },
    { title: 'Total Value', value: '$93.7K', change: '+18%', icon: DollarSign, color: 'text-green-600', bgColor: 'from-green-400 to-green-600' },
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
              <h1 className="text-3xl font-bold text-gradient mb-2">Leads Management</h1>
              <p className="text-gray-600">Manage your construction project leads and prospects</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-button px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover-glow mt-4 md:mt-0"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New Lead
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
                placeholder="Search leads by name, company, or project..."
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
                <option>Hot</option>
                <option>Warm</option>
                <option>Cold</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Leads Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {leads.map((lead, index) => (
            <motion.div
              key={lead.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {lead.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{lead.name}</h3>
                    <p className="text-sm text-gray-600">{lead.company}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(lead.status)}`}>
                  {lead.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-brand-primary" />
                  <span className="font-medium">{lead.project}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-brand-primary" />
                  <span>{lead.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <DollarSign className="h-4 w-4 mr-2 text-brand-primary" />
                  <span className="font-bold text-green-600">{lead.value}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Last contact: {lead.lastContact}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">{lead.source}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 glass-button py-2 text-sm font-medium hover-lift flex items-center justify-center"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 glass-button py-2 text-sm font-medium hover-lift flex items-center justify-center"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button py-2 px-3 bg-brand-primary text-white font-medium hover-glow"
                >
                  Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button py-2 px-3 hover-lift"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 