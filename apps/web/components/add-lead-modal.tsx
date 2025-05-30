'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  User,
  Building,
  Save,
  DollarSign
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

interface AddLeadModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (lead: Lead) => void
}

export default function AddLeadModal({ isOpen, onClose, onSubmit }: AddLeadModalProps) {
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
      id: Date.now(), // Use timestamp as ID for now
      ...newLead,
      value: formatValue(newLead.value),
      lastContact: 'Just now',
      avatar: generateAvatar(newLead.name)
    }

    // Call the onSubmit callback if provided
    if (onSubmit) {
      onSubmit(lead)
    }

    // Reset form
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
    
    onClose()
  }

  const handleInputChange = (field: keyof NewLead, value: string) => {
    setNewLead(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleClose = () => {
    // Reset form when closing
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
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
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
                onClick={handleClose}
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
                    <div className="relative">
                      <DollarSign className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={newLead.value}
                        onChange={(e) => handleInputChange('value', e.target.value)}
                        className="glass-input w-full pl-10 pr-4 py-3 focus-ring"
                        placeholder="25,000"
                      />
                    </div>
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
                  onClick={handleClose}
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
  )
} 