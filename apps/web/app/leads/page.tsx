'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Clock,
  X,
  User,
  Building,
  FileText,
  Save
} from 'lucide-react'

interface Lead {
  id: number
  name: string
  company: string
  project: string
  location: string
  value: string
  status: 'Hot' | 'Warm' | 'Cold'
  phone: string
  email: string
  lastContact: string
  source: string
  avatar: string
}

interface NewLead {
  name: string
  company: string
  project: string
  location: string
  value: string
  status: 'Hot' | 'Warm' | 'Cold'
  phone: string
  email: string
  source: string
}

export default function LeadsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [leads, setLeads] = useState<Lead[]>([
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
  ])

  const [newLead, setNewLead] = useState<NewLead>({
    name: '',
    company: '',
    project: '',
    location: '',
    value: '',
    status: 'Warm',
    phone: '',
    email: '',
    source: 'Website'
  })

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  const generateAvatar = (name: string): string => {
    const words = name.split(' ')
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase()
    }
    return name.slice(0, 2).toUpperCase()
  }

  const formatValue = (value: string): string => {
    // Remove any existing dollar signs and commas
    const cleaned = value.replace(/[$,]/g, '')
    const num = parseFloat(cleaned)
    
    if (isNaN(num)) return value
    
    // Format with commas and dollar sign
    return '$' + num.toLocaleString()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const lead: Lead = {
      id: leads.length + 1,
      ...newLead,
      value: formatValue(newLead.value),
      lastContact: 'Just now',
      avatar: generateAvatar(newLead.name)
    }

    setLeads([lead, ...leads])
    setNewLead({
      name: '',
      company: '',
      project: '',
      location: '',
      value: '',
      status: 'Warm',
      phone: '',
      email: '',
      source: 'Website'
    })
    setIsModalOpen(false)
  }

  const handleInputChange = (field: keyof NewLead, value: string) => {
    setNewLead(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-700 border-red-200'
      case 'Warm': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Cold': return 'bg-blue-100 text-blue-700 border-blue-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const stats = [
    { 
      title: 'Hot Leads', 
      value: leads.filter(l => l.status === 'Hot').length.toString(), 
      change: '+25%', 
      icon: Users, 
      color: 'text-red-600', 
      bgColor: 'from-red-400 to-red-600' 
    },
    { 
      title: 'Warm Leads', 
      value: leads.filter(l => l.status === 'Warm').length.toString(), 
      change: '+12%', 
      icon: Clock, 
      color: 'text-yellow-600', 
      bgColor: 'from-yellow-400 to-yellow-600' 
    },
    { 
      title: 'Cold Leads', 
      value: leads.filter(l => l.status === 'Cold').length.toString(), 
      change: '-5%', 
      icon: Users, 
      color: 'text-blue-600', 
      bgColor: 'from-blue-400 to-blue-600' 
    },
    { 
      title: 'Total Value', 
      value: '$' + leads.reduce((sum, lead) => {
        const value = parseFloat(lead.value.replace(/[$,]/g, ''))
        return sum + (isNaN(value) ? 0 : value)
      }, 0).toLocaleString(), 
      change: '+18%', 
      icon: DollarSign, 
      color: 'text-green-600', 
      bgColor: 'from-green-400 to-green-600' 
    },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
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
              onClick={() => setIsModalOpen(true)}
              className="glass-button px-6 py-3 bg-brand-primary text-white font-medium rounded-xl hover-glow mt-4 md:mt-0 flex items-center whitespace-nowrap"
            >
              <Plus className="h-5 w-5 mr-2 flex-shrink-0" />
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

      {/* Add Lead Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-card p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gradient">Add New Lead</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg glass-button hover-lift"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <User className="h-5 w-5 mr-2 text-brand-primary" />
                      Contact Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newLead.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="Enter contact name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        value={newLead.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="Enter company name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={newLead.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={newLead.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="contact@example.com"
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-brand-primary" />
                      Project Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <input
                        type="text"
                        required
                        value={newLead.project}
                        onChange={(e) => handleInputChange('project', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="Kitchen Renovation, Bathroom Remodel, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={newLead.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Value
                      </label>
                      <input
                        type="text"
                        value={newLead.value}
                        onChange={(e) => handleInputChange('value', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                        placeholder="25000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lead Status
                      </label>
                      <select
                        value={newLead.status}
                        onChange={(e) => handleInputChange('status', e.target.value as 'Hot' | 'Warm' | 'Cold')}
                        className="glass-input w-full px-4 py-3 focus-ring"
                      >
                        <option value="Hot">🔥 Hot</option>
                        <option value="Warm">🌡️ Warm</option>
                        <option value="Cold">❄️ Cold</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Lead Source
                      </label>
                      <select
                        value={newLead.source}
                        onChange={(e) => handleInputChange('source', e.target.value)}
                        className="glass-input w-full px-4 py-3 focus-ring"
                      >
                        <option value="Website">Website</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Referral">Referral</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Cold Call">Cold Call</option>
                        <option value="Trade Show">Trade Show</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(false)}
                    className="glass-button px-6 py-3 font-medium hover-lift"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-button px-6 py-3 bg-brand-primary text-white font-medium hover-glow flex items-center"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Add Lead
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 