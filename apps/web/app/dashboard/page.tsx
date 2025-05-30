'use client'

import { Button } from '@bluecollar/ui'
import { 
  Hammer, 
  Users, 
  FileText, 
  Calendar, 
  DollarSign, 
  BarChart3,
  Plus,
  TrendingUp,
  Clock,
  MapPin,
  ArrowUpRight,
  Target,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Settings
} from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

export default function DashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      label: 'Active Leads',
      value: '23',
      change: '+12%',
      positive: true,
      icon: Users,
      color: 'text-brand-primary',
      bgColor: 'bg-gradient-to-br from-brand-primary/10 to-brand-primary/5'
    },
    {
      label: 'Jobs This Month',
      value: '8',
      change: '+25%',
      positive: true,
      icon: Hammer,
      color: 'text-success-600',
      bgColor: 'bg-gradient-to-br from-success/10 to-success/5'
    },
    {
      label: 'Revenue (MTD)',
      value: '$47.5K',
      change: '+18%',
      positive: true,
      icon: DollarSign,
      color: 'text-brand-secondary',
      bgColor: 'bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5'
    },
    {
      label: 'Completion Rate',
      value: '94%',
      change: '+3%',
      positive: true,
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-purple-500/5'
    }
  ]

  const todaysJobs = [
    {
      id: 1,
      title: 'Kitchen Renovation - Johnson Residence',
      time: '9:00 AM',
      location: '123 Oak Street',
      status: 'in-progress',
      team: 'Team A'
    },
    {
      id: 2,
      title: 'Bathroom Plumbing - Smith Home',
      time: '1:00 PM',
      location: '456 Pine Avenue',
      status: 'scheduled',
      team: 'Team B'
    },
    {
      id: 3,
      title: 'Deck Installation - Williams Property',
      time: '3:30 PM',
      location: '789 Maple Drive',
      status: 'scheduled',
      team: 'Team C'
    }
  ]

  const recentActivities = [
    {
      type: 'lead',
      message: 'New lead from website contact form',
      time: '2 minutes ago',
      icon: Users
    },
    {
      type: 'quote',
      message: 'Quote #QT-2024-045 approved by client',
      time: '15 minutes ago',
      icon: FileText
    },
    {
      type: 'payment',
      message: 'Payment received: $3,250',
      time: '1 hour ago',
      icon: DollarSign
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-glass relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-bounce-subtle" />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 md:pt-28 md:pb-24 relative z-base">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-display font-bold text-gray-900 mb-2">
                Good {currentTime.getHours() < 12 ? 'morning' : currentTime.getHours() < 18 ? 'afternoon' : 'evening'} 👋
              </h2>
              <p className="text-lg text-gray-600">
                Here's what's happening with your business today
              </p>
            </div>
            <motion.div 
              className="mt-4 md:mt-0 flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="glass-card px-4 py-2 hover-lift">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-brand-primary" />
                  <span className="text-sm font-medium text-gray-700">
                    {currentTime.toLocaleTimeString()}
                  </span>
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/leads">
                  <Button className="gradient-primary hover-glow shadow-glow">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Lead
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              className="glass-card p-6 hover-lift hover-glow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  stat.positive ? 'text-success-600' : 'text-error-600'
                }`}>
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {stat.change}
                </div>
              </div>
              <motion.div variants={statVariants}>
                <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Today's Schedule */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="lg:col-span-2 glass-card p-6 hover-lift"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Calendar className="h-6 w-6 text-brand-primary mr-3" />
                <h3 className="text-heading font-semibold text-gray-900">Today's Schedule</h3>
              </div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/jobs">
                  <Button variant="outline" size="sm" className="hover-glow">
                    View All
                    <ArrowUpRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              {todaysJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="glass-card p-4 border border-border-glass hover-lift group cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                        {job.title}
                      </h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {job.team}
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.status === 'in-progress' 
                        ? 'bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/20' 
                        : 'bg-success/10 text-success-600 border border-success/20'
                    }`}>
                      {job.status === 'in-progress' ? 'In Progress' : 'Scheduled'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="glass-card p-6 hover-lift"
          >
            <div className="flex items-center mb-6">
              <Zap className="h-6 w-6 text-brand-secondary mr-3" />
              <h3 className="text-heading font-semibold text-gray-900">Recent Activity</h3>
            </div>
            
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <div className="p-2 rounded-lg bg-gray-50 group-hover:bg-brand-primary/10 transition-colors">
                    <activity.icon className="h-4 w-4 text-brand-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-brand-primary transition-colors">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Leads', href: '/leads', icon: Users, color: 'text-brand-primary', bg: 'bg-brand-primary/10' },
            { label: 'Quotes', href: '/quotes', icon: FileText, color: 'text-brand-secondary', bg: 'bg-brand-secondary/10' },
            { label: 'Jobs', href: '/jobs', icon: Calendar, color: 'text-success-600', bg: 'bg-success/10' },
            { label: 'Reports', href: '/reports', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-500/10' },
          ].map((action, index) => (
            <motion.div
              key={action.label}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={action.href}>
                <div className="glass-card p-6 text-center hover-lift hover-glow group cursor-pointer">
                  <div className={`inline-flex p-4 rounded-2xl ${action.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className={`h-8 w-8 ${action.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-primary transition-colors">
                    {action.label}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
} 