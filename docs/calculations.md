# BlueCollarCRM Business Calculations

## Pricing & Margin Calculations

### Quote Pricing Formula

#### Basic Pricing Structure
```
Total Quote = (Labor Cost + Material Cost + Equipment Cost) × (1 + Markup %) + Tax
```

#### Detailed Breakdown
```typescript
interface QuoteCalculation {
  // Base costs
  laborHours: number
  laborRate: number
  materialCost: number
  equipmentCost: number
  
  // Markup and margins
  laborMarkup: number      // e.g., 0.25 for 25%
  materialMarkup: number   // e.g., 0.15 for 15%
  equipmentMarkup: number  // e.g., 0.10 for 10%
  
  // Taxes and fees
  taxRate: number          // e.g., 0.08 for 8%
  permitFees: number
  
  // Calculated fields
  laborSubtotal: number
  materialSubtotal: number
  equipmentSubtotal: number
  subtotal: number
  taxAmount: number
  total: number
}

function calculateQuote(params: QuoteCalculation): QuoteCalculation {
  // Labor calculations
  const baseLaborCost = params.laborHours * params.laborRate
  const laborSubtotal = baseLaborCost * (1 + params.laborMarkup)
  
  // Material calculations
  const materialSubtotal = params.materialCost * (1 + params.materialMarkup)
  
  // Equipment calculations
  const equipmentSubtotal = params.equipmentCost * (1 + params.equipmentMarkup)
  
  // Subtotal before tax
  const subtotal = laborSubtotal + materialSubtotal + equipmentSubtotal + params.permitFees
  
  // Tax calculation
  const taxAmount = subtotal * params.taxRate
  
  // Final total
  const total = subtotal + taxAmount
  
  return {
    ...params,
    laborSubtotal,
    materialSubtotal,
    equipmentSubtotal,
    subtotal,
    taxAmount,
    total
  }
}
```

### Margin Analysis

#### Gross Margin Calculation
```typescript
interface MarginAnalysis {
  revenue: number
  directCosts: number
  grossProfit: number
  grossMarginPercent: number
}

function calculateGrossMargin(revenue: number, directCosts: number): MarginAnalysis {
  const grossProfit = revenue - directCosts
  const grossMarginPercent = (grossProfit / revenue) * 100
  
  return {
    revenue,
    directCosts,
    grossProfit,
    grossMarginPercent
  }
}
```

#### Job Profitability Analysis
```typescript
interface JobProfitability {
  // Revenue
  quotedAmount: number
  actualRevenue: number
  changeOrders: number
  
  // Direct costs
  laborCosts: number
  materialCosts: number
  equipmentCosts: number
  subcontractorCosts: number
  permitFees: number
  
  // Indirect costs
  overhead: number
  insurance: number
  vehicleExpenses: number
  
  // Calculated metrics
  totalDirectCosts: number
  totalIndirectCosts: number
  totalCosts: number
  grossProfit: number
  netProfit: number
  grossMarginPercent: number
  netMarginPercent: number
}

function calculateJobProfitability(job: Partial<JobProfitability>): JobProfitability {
  const totalRevenue = (job.actualRevenue || 0) + (job.changeOrders || 0)
  
  const totalDirectCosts = 
    (job.laborCosts || 0) +
    (job.materialCosts || 0) +
    (job.equipmentCosts || 0) +
    (job.subcontractorCosts || 0) +
    (job.permitFees || 0)
  
  const totalIndirectCosts =
    (job.overhead || 0) +
    (job.insurance || 0) +
    (job.vehicleExpenses || 0)
  
  const totalCosts = totalDirectCosts + totalIndirectCosts
  const grossProfit = totalRevenue - totalDirectCosts
  const netProfit = totalRevenue - totalCosts
  
  const grossMarginPercent = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0
  const netMarginPercent = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0
  
  return {
    quotedAmount: job.quotedAmount || 0,
    actualRevenue: job.actualRevenue || 0,
    changeOrders: job.changeOrders || 0,
    laborCosts: job.laborCosts || 0,
    materialCosts: job.materialCosts || 0,
    equipmentCosts: job.equipmentCosts || 0,
    subcontractorCosts: job.subcontractorCosts || 0,
    permitFees: job.permitFees || 0,
    overhead: job.overhead || 0,
    insurance: job.insurance || 0,
    vehicleExpenses: job.vehicleExpenses || 0,
    totalDirectCosts,
    totalIndirectCosts,
    totalCosts,
    grossProfit,
    netProfit,
    grossMarginPercent,
    netMarginPercent
  }
}
```

## Time & Labor Calculations

### Time Tracking Calculations

#### Basic Time Calculation
```typescript
interface TimeEntry {
  startTime: Date
  endTime: Date | null
  breakDuration: number // minutes
  totalHours: number
}

function calculateTimeEntry(startTime: Date, endTime: Date | null, breakDuration: number = 0): TimeEntry {
  if (!endTime) {
    return {
      startTime,
      endTime: null,
      breakDuration,
      totalHours: 0
    }
  }
  
  const totalMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60)
  const workMinutes = totalMinutes - breakDuration
  const totalHours = Math.max(0, workMinutes / 60)
  
  return {
    startTime,
    endTime,
    breakDuration,
    totalHours: Math.round(totalHours * 100) / 100 // Round to 2 decimal places
  }
}
```

#### Overtime Calculations
```typescript
interface OvertimeCalculation {
  regularHours: number
  overtimeHours: number
  doubleTimeHours: number
  regularRate: number
  overtimeRate: number
  doubleTimeRate: number
  totalPay: number
}

function calculateOvertime(
  totalHours: number,
  regularRate: number,
  overtimeMultiplier: number = 1.5,
  doubleTimeMultiplier: number = 2.0,
  regularHoursLimit: number = 8,
  overtimeHoursLimit: number = 12
): OvertimeCalculation {
  let regularHours = Math.min(totalHours, regularHoursLimit)
  let overtimeHours = 0
  let doubleTimeHours = 0
  
  if (totalHours > regularHoursLimit) {
    const extraHours = totalHours - regularHoursLimit
    overtimeHours = Math.min(extraHours, overtimeHoursLimit - regularHoursLimit)
    
    if (totalHours > overtimeHoursLimit) {
      doubleTimeHours = totalHours - overtimeHoursLimit
      overtimeHours = overtimeHoursLimit - regularHoursLimit
    }
  }
  
  const overtimeRate = regularRate * overtimeMultiplier
  const doubleTimeRate = regularRate * doubleTimeMultiplier
  
  const totalPay = 
    (regularHours * regularRate) +
    (overtimeHours * overtimeRate) +
    (doubleTimeHours * doubleTimeRate)
  
  return {
    regularHours,
    overtimeHours,
    doubleTimeHours,
    regularRate,
    overtimeRate,
    doubleTimeRate,
    totalPay
  }
}
```

### Travel Time & Mileage

#### Travel Cost Calculation
```typescript
interface TravelCalculation {
  distance: number // miles
  travelTime: number // hours
  mileageRate: number // per mile
  hourlyRate: number // for travel time
  totalMileageCost: number
  totalTimeCost: number
  totalTravelCost: number
}

function calculateTravelCost(
  distance: number,
  travelTime: number,
  mileageRate: number = 0.65, // IRS standard rate
  hourlyRate: number = 50,
  billableTravel: boolean = true
): TravelCalculation {
  const totalMileageCost = distance * mileageRate
  const totalTimeCost = billableTravel ? travelTime * hourlyRate : 0
  const totalTravelCost = totalMileageCost + totalTimeCost
  
  return {
    distance,
    travelTime,
    mileageRate,
    hourlyRate,
    totalMileageCost,
    totalTimeCost,
    totalTravelCost
  }
}
```

## Inventory & Material Calculations

### Inventory Valuation

#### FIFO (First In, First Out) Calculation
```typescript
interface InventoryTransaction {
  date: Date
  quantity: number
  unitCost: number
  type: 'PURCHASE' | 'SALE' | 'ADJUSTMENT'
}

interface InventoryValuation {
  totalQuantity: number
  totalValue: number
  averageCost: number
  transactions: InventoryTransaction[]
}

function calculateFIFOValuation(transactions: InventoryTransaction[]): InventoryValuation {
  const sortedTransactions = transactions.sort((a, b) => a.date.getTime() - b.date.getTime())
  let totalQuantity = 0
  let totalValue = 0
  
  for (const transaction of sortedTransactions) {
    if (transaction.type === 'PURCHASE') {
      totalQuantity += transaction.quantity
      totalValue += transaction.quantity * transaction.unitCost
    } else if (transaction.type === 'SALE') {
      totalQuantity -= transaction.quantity
      // For FIFO, we'd need to track individual lots - simplified here
      totalValue -= transaction.quantity * (totalValue / totalQuantity)
    }
  }
  
  const averageCost = totalQuantity > 0 ? totalValue / totalQuantity : 0
  
  return {
    totalQuantity,
    totalValue,
    averageCost,
    transactions: sortedTransactions
  }
}
```

#### Reorder Point Calculation
```typescript
interface ReorderCalculation {
  averageDailyUsage: number
  leadTimeDays: number
  safetyStockDays: number
  reorderPoint: number
  economicOrderQuantity: number
}

function calculateReorderPoint(
  averageDailyUsage: number,
  leadTimeDays: number,
  safetyStockDays: number = 7,
  annualDemand: number,
  orderingCost: number = 50,
  holdingCostPercent: number = 0.25,
  unitCost: number
): ReorderCalculation {
  // Reorder point = (Average daily usage × Lead time) + Safety stock
  const reorderPoint = (averageDailyUsage * leadTimeDays) + (averageDailyUsage * safetyStockDays)
  
  // Economic Order Quantity (EOQ) = √((2 × Annual demand × Ordering cost) / Holding cost per unit)
  const holdingCostPerUnit = unitCost * holdingCostPercent
  const economicOrderQuantity = Math.sqrt((2 * annualDemand * orderingCost) / holdingCostPerUnit)
  
  return {
    averageDailyUsage,
    leadTimeDays,
    safetyStockDays,
    reorderPoint: Math.ceil(reorderPoint),
    economicOrderQuantity: Math.ceil(economicOrderQuantity)
  }
}
```

## Financial Calculations

### Invoice & Payment Calculations

#### Payment Terms & Aging
```typescript
interface PaymentTerms {
  termsDays: number // e.g., 30 for Net 30
  discountPercent: number // e.g., 0.02 for 2%
  discountDays: number // e.g., 10 for 2/10 Net 30
}

interface InvoiceAging {
  invoiceDate: Date
  dueDate: Date
  currentDate: Date
  daysOutstanding: number
  agingCategory: 'CURRENT' | '1-30' | '31-60' | '61-90' | '90+'
  isOverdue: boolean
}

function calculateInvoiceAging(invoiceDate: Date, paymentTerms: PaymentTerms, currentDate: Date = new Date()): InvoiceAging {
  const dueDate = new Date(invoiceDate)
  dueDate.setDate(dueDate.getDate() + paymentTerms.termsDays)
  
  const daysOutstanding = Math.floor((currentDate.getTime() - invoiceDate.getTime()) / (1000 * 60 * 60 * 24))
  const isOverdue = currentDate > dueDate
  
  let agingCategory: InvoiceAging['agingCategory'] = 'CURRENT'
  if (daysOutstanding > 90) agingCategory = '90+'
  else if (daysOutstanding > 60) agingCategory = '61-90'
  else if (daysOutstanding > 30) agingCategory = '31-60'
  else if (daysOutstanding > 0) agingCategory = '1-30'
  
  return {
    invoiceDate,
    dueDate,
    currentDate,
    daysOutstanding,
    agingCategory,
    isOverdue
  }
}
```

#### Early Payment Discount
```typescript
function calculateEarlyPaymentDiscount(
  invoiceAmount: number,
  paymentDate: Date,
  invoiceDate: Date,
  paymentTerms: PaymentTerms
): { discountAmount: number; netAmount: number; isEligible: boolean } {
  const daysSinceInvoice = Math.floor((paymentDate.getTime() - invoiceDate.getTime()) / (1000 * 60 * 60 * 24))
  const isEligible = daysSinceInvoice <= paymentTerms.discountDays
  
  const discountAmount = isEligible ? invoiceAmount * paymentTerms.discountPercent : 0
  const netAmount = invoiceAmount - discountAmount
  
  return {
    discountAmount,
    netAmount,
    isEligible
  }
}
```

### Cash Flow Projections

#### Monthly Cash Flow Forecast
```typescript
interface CashFlowProjection {
  month: string
  beginningBalance: number
  projectedIncome: number
  projectedExpenses: number
  netCashFlow: number
  endingBalance: number
}

function calculateCashFlowProjection(
  beginningBalance: number,
  monthlyProjections: Array<{ income: number; expenses: number; month: string }>
): CashFlowProjection[] {
  const projections: CashFlowProjection[] = []
  let currentBalance = beginningBalance
  
  for (const projection of monthlyProjections) {
    const netCashFlow = projection.income - projection.expenses
    const endingBalance = currentBalance + netCashFlow
    
    projections.push({
      month: projection.month,
      beginningBalance: currentBalance,
      projectedIncome: projection.income,
      projectedExpenses: projection.expenses,
      netCashFlow,
      endingBalance
    })
    
    currentBalance = endingBalance
  }
  
  return projections
}
```

## Performance Metrics & KPIs

### Sales Performance Calculations

#### Conversion Rate Metrics
```typescript
interface ConversionMetrics {
  leadsGenerated: number
  leadsQualified: number
  quotesGenerated: number
  quotesAccepted: number
  jobsCompleted: number
  
  // Calculated rates
  leadQualificationRate: number
  quoteConversionRate: number
  jobCompletionRate: number
  overallConversionRate: number
}

function calculateConversionMetrics(data: Partial<ConversionMetrics>): ConversionMetrics {
  const leadsGenerated = data.leadsGenerated || 0
  const leadsQualified = data.leadsQualified || 0
  const quotesGenerated = data.quotesGenerated || 0
  const quotesAccepted = data.quotesAccepted || 0
  const jobsCompleted = data.jobsCompleted || 0
  
  const leadQualificationRate = leadsGenerated > 0 ? (leadsQualified / leadsGenerated) * 100 : 0
  const quoteConversionRate = quotesGenerated > 0 ? (quotesAccepted / quotesGenerated) * 100 : 0
  const jobCompletionRate = quotesAccepted > 0 ? (jobsCompleted / quotesAccepted) * 100 : 0
  const overallConversionRate = leadsGenerated > 0 ? (jobsCompleted / leadsGenerated) * 100 : 0
  
  return {
    leadsGenerated,
    leadsQualified,
    quotesGenerated,
    quotesAccepted,
    jobsCompleted,
    leadQualificationRate,
    quoteConversionRate,
    jobCompletionRate,
    overallConversionRate
  }
}
```

#### Customer Lifetime Value (CLV)
```typescript
interface CLVCalculation {
  averageJobValue: number
  jobsPerYear: number
  customerLifespanYears: number
  grossMarginPercent: number
  customerLifetimeValue: number
}

function calculateCustomerLifetimeValue(
  averageJobValue: number,
  jobsPerYear: number,
  customerLifespanYears: number,
  grossMarginPercent: number
): CLVCalculation {
  const annualValue = averageJobValue * jobsPerYear
  const annualProfit = annualValue * (grossMarginPercent / 100)
  const customerLifetimeValue = annualProfit * customerLifespanYears
  
  return {
    averageJobValue,
    jobsPerYear,
    customerLifespanYears,
    grossMarginPercent,
    customerLifetimeValue
  }
}
```

### Operational Efficiency Metrics

#### Technician Utilization Rate
```typescript
interface UtilizationMetrics {
  totalAvailableHours: number
  billableHours: number
  travelHours: number
  adminHours: number
  utilizationRate: number
  billableRate: number
  efficiency: number
}

function calculateUtilizationRate(
  totalAvailableHours: number,
  billableHours: number,
  travelHours: number,
  adminHours: number
): UtilizationMetrics {
  const utilizationRate = totalAvailableHours > 0 ? (billableHours / totalAvailableHours) * 100 : 0
  const billableRate = totalAvailableHours > 0 ? ((billableHours + travelHours) / totalAvailableHours) * 100 : 0
  const efficiency = (billableHours + travelHours + adminHours) > 0 ? (billableHours / (billableHours + travelHours + adminHours)) * 100 : 0
  
  return {
    totalAvailableHours,
    billableHours,
    travelHours,
    adminHours,
    utilizationRate,
    billableRate,
    efficiency
  }
}
```

## Tax Calculations

### Sales Tax Calculation
```typescript
interface TaxCalculation {
  subtotal: number
  taxRate: number
  taxAmount: number
  total: number
  taxExempt: boolean
}

function calculateSalesTax(
  subtotal: number,
  taxRate: number,
  taxExempt: boolean = false,
  roundingMethod: 'ROUND' | 'FLOOR' | 'CEIL' = 'ROUND'
): TaxCalculation {
  let taxAmount = 0
  
  if (!taxExempt) {
    taxAmount = subtotal * taxRate
    
    // Apply rounding method
    switch (roundingMethod) {
      case 'FLOOR':
        taxAmount = Math.floor(taxAmount * 100) / 100
        break
      case 'CEIL':
        taxAmount = Math.ceil(taxAmount * 100) / 100
        break
      default:
        taxAmount = Math.round(taxAmount * 100) / 100
    }
  }
  
  const total = subtotal + taxAmount
  
  return {
    subtotal,
    taxRate,
    taxAmount,
    total,
    taxExempt
  }
}
```

These calculations form the foundation of the BlueCollarCRM system, ensuring accurate pricing, profitability analysis, and performance tracking for blue-collar service businesses. 