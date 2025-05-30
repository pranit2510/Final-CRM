'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  User,
  DollarSign,
  Save,
  Edit,
  Trash2,
  Users
} from 'lucide-react'

interface Job {
  id: string
  title: string
  customer: string
  address: string
  startDate: string
  endDate: string
  budget: number
  priority: 'Low' | 'Medium' | 'High' | 'Urgent'
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'On Hold'
  team: string[]
  description?: string
  time?: string
}

interface CalendarModalProps {
  isOpen: boolean
  onClose: () => void
  initialJobs?: Job[]
  onJobUpdate?: (jobs: Job[]) => void
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default function CalendarModal({ 
  isOpen, 
  onClose, 
  initialJobs = [],
  onJobUpdate 
}: CalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [jobs, setJobs] = useState<Job[]>(initialJobs)
  const [showAddJobForm, setShowAddJobForm] = useState(false)
  const [newJob, setNewJob] = useState<Partial<Job>>({
    title: '',
    customer: '',
    address: '',
    startDate: '',
    endDate: '',
    budget: 0,
    priority: 'Medium',
    status: 'Scheduled',
    team: [],
    description: '',
    time: '09:00'
  })

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    
    return days
  }

  const getJobsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return jobs.filter(job => {
      const jobStart = new Date(job.startDate).toISOString().split('T')[0]
      const jobEnd = new Date(job.endDate).toISOString().split('T')[0]
      return dateStr >= jobStart && dateStr <= jobEnd
    })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(clickedDate)
  }

  const handleAddJob = () => {
    if (!selectedDate || !newJob.title || !newJob.customer) return

    const job: Job = {
      id: `JOB-${Date.now()}`,
      title: newJob.title!,
      customer: newJob.customer!,
      address: newJob.address || '',
      startDate: selectedDate.toISOString().split('T')[0],
      endDate: newJob.endDate || selectedDate.toISOString().split('T')[0],
      budget: newJob.budget || 0,
      priority: newJob.priority || 'Medium',
      status: newJob.status || 'Scheduled',
      team: newJob.team || [],
      description: newJob.description || ''
    }

    const updatedJobs = [...jobs, job]
    setJobs(updatedJobs)
    onJobUpdate?.(updatedJobs)
    setShowAddJobForm(false)
    setNewJob({
      title: '',
      customer: '',
      address: '',
      startDate: '',
      endDate: '',
      budget: 0,
      priority: 'Medium',
      status: 'Scheduled',
      team: [],
      description: '',
      time: '09:00'
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'bg-red-100 text-red-700 border-red-200'
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Low': return 'bg-green-100 text-green-700 border-green-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const days = getDaysInMonth(currentDate)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Job Calendar</h2>
                  <p className="text-sm text-gray-600">Manage and schedule your jobs</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="flex h-[calc(90vh-100px)]">
              {/* Calendar Section */}
              <div className="flex-1 p-6">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateMonth('prev')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentDate(new Date())}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      Today
                    </button>
                    <button
                      onClick={() => navigateMonth('next')}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS.map(day => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-600">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => {
                    if (!day) {
                      return <div key={index} className="h-24 p-1"></div>
                    }

                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                    const dayJobs = getJobsForDate(date)
                    const isSelected = selectedDate?.toDateString() === date.toDateString()
                    const isToday = new Date().toDateString() === date.toDateString()

                    return (
                      <div
                        key={day}
                        onClick={() => handleDateClick(day)}
                        className={`h-24 p-1 border rounded-lg cursor-pointer transition-all hover:bg-blue-50 ${
                          isSelected ? 'bg-blue-100 border-blue-300' : 
                          isToday ? 'bg-orange-50 border-orange-200' : 'border-gray-200'
                        }`}
                      >
                        <div className={`text-sm font-medium ${
                          isSelected ? 'text-blue-700' : 
                          isToday ? 'text-orange-700' : 'text-gray-900'
                        }`}>
                          {day}
                        </div>
                        <div className="mt-1 space-y-1">
                          {dayJobs.slice(0, 2).map(job => (
                            <div
                              key={job.id}
                              className={`text-xs px-1 py-0.5 rounded truncate ${getPriorityColor(job.priority)}`}
                              title={job.title}
                            >
                              {job.title}
                            </div>
                          ))}
                          {dayJobs.length > 2 && (
                            <div className="text-xs text-gray-500">+{dayJobs.length - 2} more</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-80 border-l border-gray-200 bg-gray-50 overflow-y-auto">
                {selectedDate ? (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {selectedDate.toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h4>
                      <button
                        onClick={() => setShowAddJobForm(true)}
                        className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Jobs for selected date */}
                    <div className="space-y-3">
                      {getJobsForDate(selectedDate).map(job => (
                        <div key={job.id} className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-medium text-gray-900">{job.title}</h5>
                            <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(job.priority)}`}>
                              {job.priority}
                            </span>
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {job.customer}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {job.address}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-3 w-3 mr-1" />
                              ${job.budget.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Job Form */}
                    {showAddJobForm && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-6 bg-white rounded-lg p-4 border border-gray-200"
                      >
                        <h5 className="font-medium text-gray-900 mb-3">Add New Job</h5>
                        <div className="space-y-3">
                          <input
                            type="text"
                            placeholder="Job title"
                            value={newJob.title}
                            onChange={(e) => setNewJob(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Customer name"
                            value={newJob.customer}
                            onChange={(e) => setNewJob(prev => ({ ...prev, customer: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="text"
                            placeholder="Address"
                            value={newJob.address}
                            onChange={(e) => setNewJob(prev => ({ ...prev, address: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <input
                            type="number"
                            placeholder="Budget"
                            value={newJob.budget}
                            onChange={(e) => setNewJob(prev => ({ ...prev, budget: Number(e.target.value) }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <select
                            value={newJob.priority}
                            onChange={(e) => setNewJob(prev => ({ ...prev, priority: e.target.value as any }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="Low">Low Priority</option>
                            <option value="Medium">Medium Priority</option>
                            <option value="High">High Priority</option>
                            <option value="Urgent">Urgent</option>
                          </select>
                          <textarea
                            placeholder="Description (optional)"
                            value={newJob.description}
                            onChange={(e) => setNewJob(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            rows={3}
                          />
                          <div className="flex gap-2">
                            <button
                              onClick={handleAddJob}
                              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                              <Save className="h-4 w-4 mr-2" />
                              Save Job
                            </button>
                            <button
                              onClick={() => setShowAddJobForm(false)}
                              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>Select a date to view or add jobs</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
} 