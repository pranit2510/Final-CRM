'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  BarChart3, 
  Package,
  Search,
  Bell,
  User,
  Hammer
} from 'lucide-react'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Leads', href: '/leads', icon: Users },
  { name: 'Quotes', href: '/quotes', icon: FileText },
  { name: 'Jobs', href: '/jobs', icon: Calendar },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:block fixed top-4 left-4 right-4 z-sticky"
      >
        <motion.header 
          className="glass-header rounded-3xl border border-border-glass shadow-2xl max-w-7xl mx-auto overflow-hidden"
          whileHover={{ y: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link href="/dashboard" className="flex items-center">
                  <div className="relative">
                    <Hammer className="h-8 w-8 text-brand-primary mr-3 animate-pulse-subtle" />
                    <div className="absolute inset-0 h-8 w-8 text-brand-primary mr-3 animate-ping opacity-20" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-gradient">BlueCollarCRM</h1>
                    <p className="text-xs text-gray-600 font-medium hidden lg:block">
                      CRM for Blue-Collar Businesses
                    </p>
                  </div>
                </Link>
              </motion.div>
              
              {/* Navigation Links */}
              <nav className="flex space-x-1">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative px-4 py-2 rounded-2xl font-medium text-sm transition-all duration-200 flex items-center space-x-2 ${
                          isActive
                            ? 'bg-brand-primary text-white shadow-glow'
                            : 'text-gray-700 hover:bg-brand-primary/10 hover:text-brand-primary'
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span className="hidden lg:inline">{item.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-brand-primary rounded-2xl -z-10"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2">
                {/* Search */}
                <motion.div 
                  className="relative hidden xl:block"
                  whileHover={{ scale: 1.02 }}
                >
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="glass-input pl-10 pr-4 py-2 w-48 text-sm focus-ring rounded-2xl"
                  />
                </motion.div>
                
                {/* Notifications */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative glass-button p-2 hover-glow rounded-2xl"
                >
                  <Bell className="h-5 w-5 text-brand-primary" />
                  <span className="absolute -top-1 -right-1 bg-brand-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce-subtle">
                    3
                  </span>
                </motion.button>
                
                {/* Profile */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-button p-2 hover-lift rounded-2xl"
                >
                  <User className="h-5 w-5 text-brand-primary" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.header>
      </motion.div>

      {/* Mobile Navigation - Floating Bottom */}
      <motion.div 
        className="md:hidden fixed bottom-4 left-4 right-4 z-sticky"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="glass-header rounded-3xl border border-border-glass shadow-2xl p-3 overflow-hidden">
          <div className="grid grid-cols-6 gap-1">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`flex flex-col items-center p-2 rounded-2xl text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-brand-primary text-white shadow-glow'
                        : 'text-gray-600 hover:bg-brand-primary/10 hover:text-brand-primary'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mb-1" />
                    <span className="text-[10px] truncate">{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </>
  )
} 