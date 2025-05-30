'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  UserCheck,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Phone,
  Mail,
  MapPin,
  Calendar,
  DollarSign,
  Star,
  StarHalf,
  Edit,
  Trash2,
  Eye,
  Download
} from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  company: string
  address: string
  status: 'Active' | 'Inactive' | 'VIP'
  totalValue: number
  lastContact: string
  joinDate: string
  rating: number
  projects: number
  avatar?: string
}

const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Mitchell',
    email: 'john@constructco.com',
    phone: '(555) 123-4567',
    company: 'Mitchell Construction Co.',
    address: '123 Main St, Springfield, IL',
    status: 'Active',
    totalValue: 156000,
    lastContact: '2024-01-15',
    joinDate: '2023-03-15',
    rating: 4.8,
    projects: 12
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@homepro.com',
    phone: '(555) 234-5678',
    company: 'HomePro Renovations',
    address: '456 Oak Ave, Denver, CO',
    status: 'VIP',
    totalValue: 245000,
    lastContact: '2024-01-10',
    joinDate: '2022-08-20',
    rating: 5.0,
    projects: 18
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    email: 'mike@eliteelectrical.com',
    phone: '(555) 345-6789',
    company: 'Elite Electrical Services',
    address: '789 Pine St, Austin, TX',
    status: 'Active',
    totalValue: 89000,
    lastContact: '2024-01-12',
    joinDate: '2023-11-05',
    rating: 4.6,
    projects: 8
  },
  {
    id: '4',
    name: 'Lisa Chen',
    email: 'lisa@greenlandscape.com',
    phone: '(555) 456-7890',
    company: 'Green Landscape Design',
    address: '321 Elm Dr, Seattle, WA',
    status: 'Inactive',
    totalValue: 67000,
    lastContact: '2023-12-20',
    joinDate: '2023-05-12',
    rating: 4.2,
    projects: 5
  },
  {
    id: '5',
    name: 'David Thompson',
    email: 'david@qualityplumbing.com',
    phone: '(555) 567-8901',
    company: 'Quality Plumbing Solutions',
    address: '654 Maple Ln, Phoenix, AZ',
    status: 'VIP',
    totalValue: 198000,
    lastContact: '2024-01-08',
    joinDate: '2022-12-03',
    rating: 4.9,
    projects: 15
  }
]

const statusColors = {
  Active: 'bg-green-100 text-green-800 border-green-200',
  Inactive: 'bg-gray-100 text-gray-800 border-gray-200',
  VIP: 'bg-purple-100 text-purple-800 border-purple-200'
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 text-yellow-400 fill-current" />}
      <span className="ml-1 text-sm text-gray-600">{rating}</span>
    </div>
  )
}

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [customers] = useState<Customer[]>(mockCustomers)

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || customer.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const totalCustomers = customers.length
  const activeCustomers = customers.filter(c => c.status === 'Active' || c.status === 'VIP').length
  const totalValue = customers.reduce((sum, c) => sum + c.totalValue, 0)
  const avgRating = customers.reduce((sum, c) => sum + c.rating, 0) / customers.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">Customer Management</h1>
              <p className="text-gray-600">
                Manage your customer relationships and track their journey
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                <Plus className="h-4 w-4" />
                Add Customer
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UserCheck className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Customers</p>
                <p className="text-2xl font-bold text-gray-900">{totalCustomers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Customers</p>
                <p className="text-2xl font-bold text-gray-900">{activeCustomers}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalValue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 hover:transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Star className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                <p className="text-2xl font-bold text-gray-900">{avgRating.toFixed(1)}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="block pl-10 pr-8 py-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="VIP">VIP</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customers List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900">
              Customer Directory ({filteredCustomers.length})
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200/50">
              <thead className="bg-gray-50/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value & Projects
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Contact
                  </th>
                  <th className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white/30 divide-y divide-gray-200/50">
                {filteredCustomers.map((customer, index) => (
                  <motion.tr
                    key={customer.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                            {customer.name.split(' ').map(n => n[0]).join('')}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                          <div className="text-sm text-gray-500">{customer.company}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center">
                        <Mail className="h-4 w-4 mr-1 text-gray-400" />
                        {customer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <Phone className="h-4 w-4 mr-1 text-gray-400" />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full border ${statusColors[customer.status]}`}>
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="font-medium">${customer.totalValue.toLocaleString()}</div>
                      <div className="text-gray-500">{customer.projects} projects</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StarRating rating={customer.rating} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(customer.lastContact).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-blue-600 hover:text-blue-900 p-1 rounded"
                        >
                          <Eye className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-600 hover:text-gray-900 p-1 rounded"
                        >
                          <Edit className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-red-600 hover:text-red-900 p-1 rounded"
                        >
                          <Trash2 className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 