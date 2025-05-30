'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  PieChart,
  Activity,
  Users,
  Clock,
  Download,
  Filter
} from 'lucide-react'

export default function ReportsPage() {
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

  const reportData = [
    { title: 'Revenue Report', value: '$47,523', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Jobs Completed', value: '34', change: '+8%', icon: Activity, color: 'text-blue-600' },
    { title: 'Active Leads', value: '127', change: '+23%', icon: Users, color: 'text-purple-600' },
    { title: 'Avg Response Time', value: '2.3h', change: '-15%', icon: Clock, color: 'text-orange-600' },
  ]

  const chartData = [
    { month: 'Jan', revenue: 25000, jobs: 12 },
    { month: 'Feb', revenue: 32000, jobs: 18 },
    { month: 'Mar', revenue: 28000, jobs: 15 },
    { month: 'Apr', revenue: 41000, jobs: 22 },
    { month: 'May', revenue: 47000, jobs: 28 },
    { month: 'Jun', revenue: 52000, jobs: 34 },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">Reports & Analytics</h1>
              <p className="text-gray-600">Track your business performance and insights</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-button px-4 py-2 text-sm font-medium hover-lift"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-button px-4 py-2 text-sm font-medium bg-brand-primary text-white hover-glow"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {reportData.map((metric, index) => (
            <motion.div
              key={metric.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">{metric.change}</span>
                  </div>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-card p-6 hover-lift"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
              <BarChart3 className="h-5 w-5 text-brand-primary" />
            </div>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex items-center">
                  <span className="w-8 text-sm font-medium text-gray-600">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(data.revenue / 52000) * 100}%` }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        className="bg-gradient-to-r from-brand-primary to-brand-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    ${(data.revenue / 1000).toFixed(0)}k
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Job Completion Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass-card p-6 hover-lift"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Job Completion</h3>
              <PieChart className="h-5 w-5 text-brand-primary" />
            </div>
            <div className="space-y-4">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex items-center">
                  <span className="w-8 text-sm font-medium text-gray-600">{data.month}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(data.jobs / 34) * 100}%` }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                        className="bg-gradient-to-r from-brand-secondary to-brand-primary h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-12 text-right">
                    {data.jobs}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity & Top Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card p-6 hover-lift"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reports</h3>
            <div className="space-y-4">
              {[
                { name: 'Monthly Revenue Report', date: '2 hours ago', type: 'Financial' },
                { name: 'Customer Satisfaction Survey', date: '1 day ago', type: 'Customer' },
                { name: 'Team Performance Analysis', date: '3 days ago', type: 'HR' },
                { name: 'Lead Conversion Report', date: '1 week ago', type: 'Sales' },
              ].map((report, index) => (
                <motion.div
                  key={report.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{report.name}</p>
                    <p className="text-xs text-gray-500">{report.date}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-brand-primary/10 text-brand-primary rounded-full">
                    {report.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Performers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-card p-6 hover-lift"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performers</h3>
            <div className="space-y-4">
              {[
                { name: 'Mike Rodriguez', jobs: 12, revenue: '$15,200', rating: 4.9 },
                { name: 'Sarah Johnson', jobs: 10, revenue: '$12,800', rating: 4.8 },
                { name: 'David Chen', jobs: 8, revenue: '$11,400', rating: 4.7 },
                { name: 'Lisa Williams', jobs: 7, revenue: '$9,600', rating: 4.6 },
              ].map((performer, index) => (
                <motion.div
                  key={performer.name}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {performer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{performer.name}</p>
                      <p className="text-xs text-gray-500">{performer.jobs} jobs • {performer.revenue}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-yellow-500">★</span>
                      <span className="text-sm font-medium text-gray-700 ml-1">{performer.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 