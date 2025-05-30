'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from './navigation'

export function ConditionalNavigation() {
  const pathname = usePathname()
  
  // Don't show navigation on auth pages and home page (landing page)
  const hideNavigation = pathname === '/login' || pathname === '/register' || pathname === '/'
  
  if (hideNavigation) {
    return null
  }
  
  return <Navigation />
} 