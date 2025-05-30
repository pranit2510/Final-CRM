import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')
  
  // Create demo user
  const user = await prisma.user.upsert({
    where: { email: 'demo@bluecollarcrm.com' },
    update: {},
    create: {
      email: 'demo@bluecollarcrm.com',
      firstName: 'John',
      lastName: 'Builder',
      role: 'ADMIN',
      emailVerified: new Date(),
    }
  })
  
  // Create demo companies
  const company1 = await prisma.company.create({
    data: {
      name: 'Smith & Sons Construction',
      industry: 'CONSTRUCTION',
      size: 'MEDIUM',
      website: 'https://smithsons.com',
      address: '123 Main St',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      latitude: 30.2672,
      longitude: -97.7431,
      status: 'ACTIVE'
    }
  })
  
  const company2 = await prisma.company.create({
    data: {
      name: 'Elite HVAC Services',
      industry: 'HVAC',
      size: 'SMALL',
      address: '456 Oak Ave',
      city: 'Dallas',
      state: 'TX',
      zip: '75201',
      latitude: 32.7767,
      longitude: -96.7970,
      status: 'PROSPECT'
    }
  })
  
  // Create contacts
  const contact1 = await prisma.contact.create({
    data: {
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mike@smithsons.com',
      phone: '(512) 555-0123',
      title: 'Project Manager',
      isPrimary: true,
      companyId: company1.id
    }
  })
  
  const contact2 = await prisma.contact.create({
    data: {
      firstName: 'Sarah',
      lastName: 'Williams',
      email: 'sarah@elitehvac.com',
      phone: '(214) 555-0456',
      title: 'Owner',
      isPrimary: true,
      companyId: company2.id
    }
  })
  
  // Create leads
  const lead1 = await prisma.lead.create({
    data: {
      title: 'Office Building Renovation',
      description: 'Complete interior renovation of 5-story office building',
      value: 150000,
      source: 'REFERRAL',
      status: 'QUALIFIED',
      priority: 'HIGH',
      assignedToId: user.id,
      companyId: company1.id,
      contactId: contact1.id
    }
  })
  
  const lead2 = await prisma.lead.create({
    data: {
      title: 'HVAC System Installation',
      description: 'New HVAC system for warehouse facility',
      value: 45000,
      source: 'WEBSITE',
      status: 'NEW',
      priority: 'MEDIUM',
      assignedToId: user.id,
      companyId: company2.id,
      contactId: contact2.id
    }
  })
  
  // Create quote
  const quote = await prisma.quote.create({
    data: {
      quoteNumber: 'Q-2024-001',
      title: 'Office Building Renovation Quote',
      description: 'Detailed quote for complete renovation project',
      status: 'SENT',
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      subtotal: 135000,
      taxRate: 0.08,
      taxAmount: 10800,
      total: 145800,
      companyId: company1.id,
      createdById: user.id,
      jobSiteAddress: '789 Business Blvd',
      jobSiteCity: 'Austin',
      jobSiteState: 'TX',
      jobSiteZip: '78702'
    }
  })
  
  // Create quote line items
  await prisma.quoteLineItem.createMany({
    data: [
      {
        quoteId: quote.id,
        description: 'Demolition and prep work',
        quantity: 1,
        unitPrice: 25000,
        total: 25000,
        itemType: 'LABOR',
        sortOrder: 1
      },
      {
        quoteId: quote.id,
        description: 'Electrical work',
        quantity: 1,
        unitPrice: 35000,
        total: 35000,
        itemType: 'LABOR',
        sortOrder: 2
      },
      {
        quoteId: quote.id,
        description: 'Plumbing updates',
        quantity: 1,
        unitPrice: 20000,
        total: 20000,
        itemType: 'LABOR',
        sortOrder: 3
      },
      {
        quoteId: quote.id,
        description: 'Flooring materials',
        quantity: 1,
        unitPrice: 30000,
        total: 30000,
        itemType: 'MATERIAL',
        sortOrder: 4
      },
      {
        quoteId: quote.id,
        description: 'Paint and finishing',
        quantity: 1,
        unitPrice: 25000,
        total: 25000,
        itemType: 'MATERIAL',
        sortOrder: 5
      }
    ]
  })
  
  // Create job from quote
  const job = await prisma.job.create({
    data: {
      jobNumber: 'J-2024-001',
      title: 'Office Building Renovation - Phase 1',
      description: 'First phase of the office building renovation project',
      status: 'SCHEDULED',
      priority: 'HIGH',
      scheduledStart: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      scheduledEnd: new Date(Date.now() + 37 * 24 * 60 * 60 * 1000), // 37 days from now
      estimatedHours: 240,
      laborRate: 85,
      companyId: company1.id,
      quoteId: quote.id,
      assignedToId: user.id,
      jobSiteAddress: '789 Business Blvd',
      jobSiteCity: 'Austin',
      jobSiteState: 'TX',
      jobSiteZip: '78702'
    }
  })
  
  // Create inventory items
  const inventoryItems = await prisma.inventoryItem.createMany({
    data: [
      {
        sku: 'PIPE-001',
        name: 'PVC Pipe 4"',
        description: '4 inch PVC pipe for plumbing',
        category: 'Plumbing',
        unit: 'ft',
        costPrice: 3.50,
        sellPrice: 5.25,
        currentStock: 500,
        minStock: 50,
        maxStock: 1000
      },
      {
        sku: 'WIRE-001',
        name: '12 AWG Electrical Wire',
        description: '12 gauge electrical wire - 250ft roll',
        category: 'Electrical',
        unit: 'roll',
        costPrice: 45.00,
        sellPrice: 67.50,
        currentStock: 25,
        minStock: 5,
        maxStock: 50
      },
      {
        sku: 'LUMBER-001',
        name: '2x4 Pine Stud',
        description: '2x4x8 pine construction lumber',
        category: 'Lumber',
        unit: 'each',
        costPrice: 4.50,
        sellPrice: 6.75,
        currentStock: 200,
        minStock: 50,
        maxStock: 500
      }
    ]
  })
  
  // Create activities
  await prisma.activity.createMany({
    data: [
      {
        type: 'CALL',
        title: 'Initial consultation call',
        description: 'Discussed project requirements and timeline',
        userId: user.id,
        leadId: lead1.id,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) // 5 days ago
      },
      {
        type: 'QUOTE_SENT',
        title: 'Quote sent to client',
        description: 'Sent detailed renovation quote via email',
        userId: user.id,
        quoteId: quote.id,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },
      {
        type: 'EMAIL',
        title: 'Follow up email',
        description: 'Sent follow-up email regarding HVAC quote',
        userId: user.id,
        leadId: lead2.id,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
      }
    ]
  })
  
  console.log('✅ Database seeded successfully!')
  console.log(`Created:`)
  console.log(`- 1 user: ${user.email}`)
  console.log(`- 2 companies`)
  console.log(`- 2 contacts`)
  console.log(`- 2 leads`)
  console.log(`- 1 quote with 5 line items`)
  console.log(`- 1 job`)
  console.log(`- 3 inventory items`)
  console.log(`- 3 activities`)
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 