'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Filter, 
  MapPin, 
  Plus, 
  Search, 
  TrendingUp, 
  Users,
  AlertTriangle,
  CalendarDays,
  Pause,
  Play
} from 'lucide-react'
import CalendarModal from '../../components/calendar-modal'

export default function JobsPage() {
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

  const jobs = [
    {
      id: "JOB-2024-001",
      title: "Kitchen Renovation",
      customer: "Thompson Residence",
      address: "123 Oak St, Downtown Seattle",
      status: "In Progress",
      priority: "High",
      startDate: "2024-01-22",
      endDate: "2024-02-15",
      team: ["Mike Johnson", "Steve Wilson"],
      progress: 65,
      budget: 25000,
      timeSpent: "48h",
      estimatedTime: "72h",
      avatar: "KR"
    },
    {
      id: "JOB-2024-002",
      title: "Bathroom Remodel", 
      customer: "Rodriguez Construction",
      address: "456 Pine Ave, Bellevue, WA",
      status: "Scheduled",
      priority: "Medium",
      startDate: "2024-01-25",
      endDate: "2024-02-08",
      team: ["Alex Smith", "Jordan Lee"],
      progress: 0,
      budget: 15500,
      timeSpent: "0h",
      estimatedTime: "40h",
      avatar: "BR"
    },
    {
      id: "JOB-2024-003",
      title: "Deck Installation",
      customer: "Davis Family",
      address: "789 Cedar Rd, Kirkland, WA",
      status: "Completed",
      priority: "Low",
      startDate: "2024-01-10",
      endDate: "2024-01-20",
      team: ["Tom Brown", "Lisa Garcia"],
      progress: 100,
      budget: 8200,
      timeSpent: "32h",
      estimatedTime: "30h",
      avatar: "DI"
    },
    {
      id: "JOB-2024-004",
      title: "Office Renovation",
      customer: "Chen Enterprises", 
      address: "321 Business Park, Redmond, WA",
      status: "On Hold",
      priority: "High",
      startDate: "2024-02-01",
      endDate: "2024-03-15",
      team: ["Mike Johnson", "Steve Wilson", "Alex Smith"],
      progress: 15,
      budget: 45000,
      timeSpent: "12h",
      estimatedTime: "120h",
      avatar: "OR"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-700 border-green-200'
      case 'In Progress': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Scheduled': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'On Hold': return 'bg-red-100 text-red-700 border-red-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700 border-red-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed': return <CheckCircle className="h-4 w-4" />
      case 'In Progress': return <Play className="h-4 w-4" />
      case 'Scheduled': return <Clock className="h-4 w-4" />
      case 'On Hold': return <Pause className="h-4 w-4" />
      default: return <Calendar className="h-4 w-4" />
    }
  }

  const activeJobs = jobs.filter(j => j.status === 'In Progress' || j.status === 'Scheduled')
  const completedJobs = jobs.filter(j => j.status === 'Completed')
  const totalRevenue = jobs.filter(j => j.status === 'Completed').reduce((sum, job) => sum + job.budget, 0)

  const stats = [
    { title: 'Active Jobs', value: activeJobs.length.toString(), change: '+12%', icon: Calendar, bgColor: 'from-blue-400 to-blue-600' },
    { title: 'Completed', value: completedJobs.length.toString(), change: '+25%', icon: CheckCircle, bgColor: 'from-green-400 to-green-600' },
    { title: 'Team Members', value: '8', change: '+3%', icon: Users, bgColor: 'from-purple-400 to-purple-600' },
    { title: 'Revenue', value: `$${(totalRevenue / 1000).toFixed(0)}K`, change: '+18%', icon: DollarSign, bgColor: 'from-emerald-400 to-emerald-600' },
  ]

  const [showCalendarModal, setShowCalendarModal] = useState(false)

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
              <h1 className="text-3xl font-bold text-gradient mb-2">Jobs & Schedule</h1>
              <p className="text-gray-600">Manage your construction jobs, teams, and schedules</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCalendarModal(true)}
                className="btn-primary bg-white text-indigo-600 border-2 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 shadow-sm transition-all duration-200"
              >
                <CalendarDays className="h-5 w-5" />
                Calendar View
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-transparent hover:from-indigo-600 hover:to-purple-700 shadow-lg"
              >
                <Plus className="h-5 w-5" />
                Schedule New Job
              </motion.button>
            </div>
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
                placeholder="Search jobs by title, customer, or location..."
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
                <option>Scheduled</option>
                <option>In Progress</option>
                <option>Completed</option>
                <option>On Hold</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {job.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.customer}</p>
                    <p className="text-xs text-brand-primary font-medium">{job.id}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className={`flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(job.status)}`}>
                    {getStatusIcon(job.status)}
                    <span className="ml-1">{job.status}</span>
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getPriorityColor(job.priority)}`}>
                    {job.priority}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-brand-primary" />
                  <span>{job.address}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-brand-primary" />
                    <span>{new Date(job.startDate).toLocaleDateString()} - {new Date(job.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-brand-primary" />
                    <span>{job.timeSpent} / {job.estimatedTime}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">${job.budget.toLocaleString()}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{job.progress}%</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${job.progress}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full"
                    />
                  </div>
                </div>

                {/* Team */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-brand-primary" />
                    <span>Team: {job.team.length} members</span>
                  </div>
                  <div className="flex -space-x-2">
                    {job.team.slice(0, 3).map((member, memberIndex) => (
                      <div
                        key={memberIndex}
                        className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                        title={member}
                      >
                        {member.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                    {job.team.length > 3 && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs font-bold border-2 border-white">
                        +{job.team.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-4 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 glass-button py-2 text-sm font-medium hover-lift"
                >
                  View Details
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button py-2 px-3 bg-brand-primary text-white font-medium hover-glow"
                >
                  <Play className="h-4 w-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button py-2 px-3 hover-lift"
                >
                  <Calendar className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {showCalendarModal && (
        <CalendarModal
          isOpen={showCalendarModal}
          onClose={() => setShowCalendarModal(false)}
        />
      )}
    </div>
  )
} 