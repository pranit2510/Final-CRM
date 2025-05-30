// User Management Types
export interface User {
  id: string
  email: string
  phone?: string
  firstName: string
  lastName: string
  avatar?: string
  role: UserRole
  status: UserStatus
  companyId?: string
  company?: Company
  createdAt: Date
  updatedAt: Date
}

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  USER = 'USER',
  VIEWER = 'VIEWER'
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED'
}

// Company & Contact Types
export interface Company {
  id: string
  name: string
  industry?: Industry
  size?: CompanySize
  website?: string
  description?: string
  status: CompanyStatus
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
  latitude?: number
  longitude?: number
  createdAt: Date
  updatedAt: Date
  contacts: Contact[]
}

export enum Industry {
  CONSTRUCTION = 'CONSTRUCTION',
  PLUMBING = 'PLUMBING',
  ELECTRICAL = 'ELECTRICAL',
  HVAC = 'HVAC',
  LANDSCAPING = 'LANDSCAPING',
  ROOFING = 'ROOFING',
  FLOORING = 'FLOORING',
  PAINTING = 'PAINTING',
  OTHER = 'OTHER'
}

export enum CompanySize {
  SOLO = 'SOLO',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE'
}

export enum CompanyStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PROSPECT = 'PROSPECT'
}

export interface Contact {
  id: string
  firstName: string
  lastName: string
  email?: string
  phone?: string
  mobile?: string
  title?: string
  department?: string
  isPrimary: boolean
  status: ContactStatus
  companyId: string
  company: Company
  createdAt: Date
  updatedAt: Date
}

export enum ContactStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

// Sales Pipeline Types
export interface Lead {
  id: string
  title: string
  description?: string
  value?: number
  source: LeadSource
  status: LeadStatus
  priority: Priority
  assignedToId?: string
  assignedTo?: User
  companyId?: string
  company?: Company
  contactId?: string
  contact?: Contact
  convertedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export enum LeadSource {
  WEBSITE = 'WEBSITE',
  REFERRAL = 'REFERRAL',
  GOOGLE_ADS = 'GOOGLE_ADS',
  FACEBOOK = 'FACEBOOK',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  TRADE_SHOW = 'TRADE_SHOW',
  OTHER = 'OTHER'
}

export enum LeadStatus {
  NEW = 'NEW',
  CONTACTED = 'CONTACTED',
  QUALIFIED = 'QUALIFIED',
  PROPOSAL_SENT = 'PROPOSAL_SENT',
  NEGOTIATION = 'NEGOTIATION',
  WON = 'WON',
  LOST = 'LOST'
}

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

// Quote Types
export interface Quote {
  id: string
  quoteNumber: string
  title: string
  description?: string
  status: QuoteStatus
  validUntil?: Date
  subtotal: number
  taxRate: number
  taxAmount: number
  discountRate: number
  discountAmount: number
  total: number
  companyId: string
  company: Company
  createdById: string
  createdBy: User
  jobSiteAddress?: string
  jobSiteCity?: string
  jobSiteState?: string
  jobSiteZip?: string
  createdAt: Date
  updatedAt: Date
  lineItems: QuoteLineItem[]
}

export enum QuoteStatus {
  DRAFT = 'DRAFT',
  SENT = 'SENT',
  VIEWED = 'VIEWED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED'
}

export interface QuoteLineItem {
  id: string
  description: string
  quantity: number
  unitPrice: number
  total: number
  itemType: ItemType
  quoteId: string
  inventoryItemId?: string
  sortOrder: number
}

export enum ItemType {
  LABOR = 'LABOR',
  MATERIAL = 'MATERIAL',
  EQUIPMENT = 'EQUIPMENT',
  OTHER = 'OTHER'
}

// Job Types
export interface Job {
  id: string
  jobNumber: string
  title: string
  description?: string
  status: JobStatus
  priority: Priority
  scheduledStart?: Date
  scheduledEnd?: Date
  actualStart?: Date
  actualEnd?: Date
  estimatedHours?: number
  actualHours?: number
  laborRate?: number
  companyId: string
  company: Company
  assignedToId?: string
  assignedTo?: User
  quoteId?: string
  quote?: Quote
  createdAt: Date
  updatedAt: Date
}

export enum JobStatus {
  SCHEDULED = 'SCHEDULED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  ON_HOLD = 'ON_HOLD'
}

// Inventory Types
export interface InventoryItem {
  id: string
  name: string
  description?: string
  sku: string
  category: string
  currentStock: number
  minStock: number
  maxStock: number
  unit: string
  costPerUnit: number
  supplier?: string
  location?: string
  lastRestocked?: Date
  createdAt: Date
  updatedAt: Date
}

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company: string
  businessType: Industry
  password: string
  confirmPassword: string
  terms: boolean
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  errors?: Record<string, string[]>
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Dashboard Types
export interface DashboardStats {
  activeLeads: number
  jobsThisWeek: number
  monthlyRevenue: number
  pendingQuotes: number
}

export interface ActivityItem {
  id: string
  type: 'lead' | 'quote' | 'job' | 'payment'
  title: string
  description: string
  timestamp: Date
  userId: string
  user: User
} 