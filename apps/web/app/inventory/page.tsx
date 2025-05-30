'use client'

import { motion } from 'framer-motion'
import { 
  Package, 
  Plus,
  Search,
  Filter,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Truck,
  Edit,
  Eye
} from 'lucide-react'

export default function InventoryPage() {
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

  const inventory = [
    {
      id: "INV-001",
      name: "2x4 Lumber",
      category: "Materials",
      sku: "LUM-2X4-8",
      currentStock: 150,
      minStock: 50,
      maxStock: 300,
      unit: "pieces",
      costPerUnit: 4.50,
      supplier: "Home Depot",
      location: "Warehouse A - Section 1",
      lastRestocked: "2024-01-15"
    },
    {
      id: "INV-002",
      name: "Concrete Mix (60lb)",
      category: "Materials", 
      sku: "CON-MIX-60",
      currentStock: 25,
      minStock: 30,
      maxStock: 100,
      unit: "bags",
      costPerUnit: 8.95,
      supplier: "Lowe's",
      location: "Warehouse A - Section 3",
      lastRestocked: "2024-01-10"
    },
    {
      id: "INV-003",
      name: "Circular Saw",
      category: "Tools",
      sku: "TOOL-SAW-001",
      currentStock: 3,
      minStock: 2,
      maxStock: 5,
      unit: "units",
      costPerUnit: 199.99,
      supplier: "Milwaukee",
      location: "Tool Storage",
      lastRestocked: "2023-12-20"
    },
    {
      id: "INV-004",
      name: "Safety Helmets",
      category: "Safety",
      sku: "SAF-HEL-001",
      currentStock: 8,
      minStock: 15,
      maxStock: 30,
      unit: "units",
      costPerUnit: 24.99,
      supplier: "Safety Supply Co",
      location: "Safety Equipment",
      lastRestocked: "2024-01-05"
    },
    {
      id: "INV-005",
      name: "PVC Pipe (4 inch)",
      category: "Plumbing",
      sku: "PVC-4IN-10",
      currentStock: 45,
      minStock: 20,
      maxStock: 80,
      unit: "feet",
      costPerUnit: 3.25,
      supplier: "Ferguson",
      location: "Warehouse B - Section 2",
      lastRestocked: "2024-01-12"
    },
    {
      id: "INV-006",
      name: "Electrical Wire (12 AWG)",
      category: "Electrical",
      sku: "WIRE-12AWG-250",
      currentStock: 500,
      minStock: 200,
      maxStock: 1000,
      unit: "feet",
      costPerUnit: 0.85,
      supplier: "Electrical Supply Co",
      location: "Warehouse B - Section 1",
      lastRestocked: "2024-01-18"
    }
  ]

  const getStockStatus = (current: number, min: number, max: number) => {
    if (current <= min) return { status: 'Low Stock', color: 'bg-red-100 text-red-700 border-red-200', icon: <AlertTriangle className="h-4 w-4" /> }
    if (current <= min * 1.5) return { status: 'Reorder Soon', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', icon: <TrendingDown className="h-4 w-4" /> }
    if (current >= max * 0.8) return { status: 'Well Stocked', color: 'bg-green-100 text-green-700 border-green-200', icon: <TrendingUp className="h-4 w-4" /> }
    return { status: 'Normal', color: 'bg-blue-100 text-blue-700 border-blue-200', icon: <Package className="h-4 w-4" /> }
  }

  const lowStockItems = inventory.filter(item => item.currentStock <= item.minStock)
  const totalValue = inventory.reduce((sum, item) => sum + (item.currentStock * item.costPerUnit), 0)
  const categories = Array.from(new Set(inventory.map(item => item.category)))

  const stats = [
    { title: 'Total Items', value: inventory.length.toString(), change: '+5%', icon: Package, bgColor: 'from-blue-400 to-blue-600' },
    { title: 'Low Stock', value: lowStockItems.length.toString(), change: '-15%', icon: AlertTriangle, bgColor: 'from-red-400 to-red-600' },
    { title: 'Categories', value: categories.length.toString(), change: '+2%', icon: Package, bgColor: 'from-purple-400 to-purple-600' },
    { title: 'Total Value', value: `$${(totalValue / 1000).toFixed(1)}K`, change: '+8%', icon: TrendingUp, bgColor: 'from-emerald-400 to-emerald-600' },
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
              <h1 className="text-3xl font-bold text-gradient mb-2">Inventory Management</h1>
              <p className="text-gray-600">Track materials, tools, and equipment for your projects</p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-button px-4 py-2 text-sm font-medium hover-lift flex items-center"
              >
                <Truck className="h-4 w-4 mr-2" />
                Reorder Items
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                <Plus className="h-5 w-5" />
                Add Item
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
                placeholder="Search inventory by name, SKU, or category..."
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
                <option>All Categories</option>
                {categories.map(category => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Inventory Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {inventory.map((item, index) => {
            const stockStatus = getStockStatus(item.currentStock, item.minStock, item.maxStock)
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="text-xs text-brand-primary font-medium">{item.sku}</p>
                  </div>
                  <span className={`flex items-center px-3 py-1 text-xs font-medium rounded-full border ${stockStatus.color}`}>
                    {stockStatus.icon}
                    <span className="ml-1">{stockStatus.status}</span>
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Current Stock:</span>
                      <span className="ml-2 font-medium text-gray-900">{item.currentStock} {item.unit}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Min Stock:</span>
                      <span className="ml-2 font-medium text-gray-900">{item.minStock} {item.unit}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Cost per unit:</span>
                      <span className="ml-2 font-medium text-green-600">${item.costPerUnit}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Total value:</span>
                      <span className="ml-2 font-bold text-green-600">${(item.currentStock * item.costPerUnit).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Location:</span>
                    <span className="ml-2 font-medium text-gray-900">{item.location}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Supplier:</span>
                    <span className="ml-2 font-medium text-gray-900">{item.supplier}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Last restocked:</span>
                    <span className="ml-2 text-gray-600">{new Date(item.lastRestocked).toLocaleDateString()}</span>
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
                    <Plus className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
} 