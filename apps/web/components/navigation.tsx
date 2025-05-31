'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { 
  Home, 
  Users, 
  UserCheck,
  FileText, 
  Calendar, 
  BarChart3, 
  Package,
  Search,
  Bell,
  User,
  Hammer,
  Menu,
  X,
  Bot
} from 'lucide-react'

const navigationItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Leads', href: '/leads', icon: Users },
  { name: 'Customers', href: '/customers', icon: UserCheck },
  { name: 'Quotes', href: '/quotes', icon: FileText },
  { name: 'Jobs', href: '/jobs', icon: Calendar },
  { name: 'AI Power', href: '/ai-power', icon: Bot },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-6 right-6 z-50">
        <div className="max-w-8xl mx-auto bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <div className="px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                  <Hammer className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    BlueCollar
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">CRM</p>
                </div>
              </div>

              {/* Navigation Items - More spaced out */}
              <div className="flex items-center space-x-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        group flex items-center px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ease-in-out
                        ${isActive 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/70'
                        }
                      `}
                    >
                      <Icon className={`
                        h-5 w-5 mr-3 transition-all duration-200
                        ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-blue-600'}
                      `} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                {/* Search Button */}
                <button className="flex items-center justify-center w-11 h-11 text-gray-500 hover:text-blue-600 hover:bg-blue-50/70 rounded-xl transition-all duration-200 ease-in-out">
                  <Search className="h-5 w-5" />
                </button>

                {/* Notifications Button */}
                <button className="flex items-center justify-center w-11 h-11 text-gray-500 hover:text-blue-600 hover:bg-blue-50/70 rounded-xl transition-all duration-200 ease-in-out relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/* Enhanced Profile Button with Design Snippet v2 styling */}
                <div className="relative">
                  <button className="flex items-center space-x-3 px-4 py-2.5 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl border border-white/30 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out group">
                    <div className="relative">
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 border-2 border-white rounded-full ring-2 ring-green-400/20"></div>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">
                        Admin
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 left-4 right-4 z-50">
        <div className="bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Mobile Logo */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg">
                  <Hammer className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    BlueCollar
                  </h1>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-3">
                <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-all duration-200">
                  <Search className="h-5 w-5" />
                </button>
                
                <button className="flex items-center justify-center w-10 h-10 text-gray-500 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-all duration-200 relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                {/* Mobile Profile */}
                <button className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-white/90 to-white/70 backdrop-blur-xl border border-white/30 rounded-lg shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">John</span>
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 rounded-lg transition-all duration-200"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`
                          flex items-center px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200
                          ${isActive 
                            ? 'bg-blue-600 text-white shadow-lg' 
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/70'
                          }
                        `}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className={`
                          h-5 w-5 mr-3 transition-colors duration-200
                          ${isActive ? 'text-white' : 'text-gray-500'}
                        `} />
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
} 