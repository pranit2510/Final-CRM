'use client'

import { Button } from '@bluecollar/ui'
import { Hammer, Users, FileText, Calendar, DollarSign, BarChart3, ArrowRight, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Lead Management",
      description: "Capture leads from your website, track follow-ups, and convert prospects into paying customers.",
      color: "text-brand-primary",
      bgColor: "bg-gradient-to-br from-brand-primary/10 to-brand-primary/5"
    },
    {
      icon: FileText,
      title: "Professional Quotes",
      description: "Create detailed estimates with materials, labor, and equipment. Send professional PDFs to customers.",
      color: "text-brand-secondary",
      bgColor: "bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5"
    },
    {
      icon: Calendar,
      title: "Job Scheduling",
      description: "Schedule jobs, assign crews, track time, and optimize routes for maximum efficiency.",
      color: "text-success-600",
      bgColor: "bg-gradient-to-br from-success/10 to-success/5"
    },
    {
      icon: DollarSign,
      title: "Invoicing & Payments",
      description: "Generate invoices from completed jobs and accept payments online for faster cash flow.",
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-emerald-500/5"
    },
    {
      icon: Hammer,
      title: "Inventory Tracking",
      description: "Track materials, equipment, and supplies. Get alerts when stock runs low.",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-500/5"
    },
    {
      icon: BarChart3,
      title: "Business Reports",
      description: "Track performance with detailed reports on sales, profitability, and team productivity.",
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-500/5"
    }
  ]

  const testimonials = [
    {
      name: "Mike Johnson",
      company: "Johnson Plumbing",
      content: "BlueCollarCRM transformed our business. We've increased our efficiency by 40% and our revenue by 25%.",
      rating: 5
    },
    {
      name: "Sarah Martinez",
      company: "Elite Electrical",
      content: "The scheduling and quote system saves us hours every week. Our customers love the professional look.",
      rating: 5
    },
    {
      name: "David Thompson",
      company: "Thompson Construction",
      content: "Finally, a CRM that understands our industry. The inventory tracking alone pays for itself.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-glass relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-success/5 rounded-full blur-3xl animate-bounce-subtle" />
      </div>

      {/* Hero Section */}
      <section className="relative z-base py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              CRM Built for{' '}
              <span className="text-gradient bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Blue-Collar
              </span>{' '}
              Businesses
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Affordable, easy-to-use CRM designed specifically for construction, plumbing, 
            electrical, HVAC, landscaping and other field service companies.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/dashboard">
                <Button size="lg" className="gradient-primary hover-glow shadow-glow text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="glass-button text-lg px-8 py-4 hover-lift">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-base py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Run Your Business
            </h2>
            <p className="text-lg text-gray-600">
              From lead capture to payment collection, we've got you covered.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 25 }
                }}
                className="glass-card p-8 hover-lift hover-glow group cursor-pointer"
              >
                <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-base py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Blue-Collar Professionals
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers have to say about BlueCollarCRM
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 hover-lift"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-base py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center glass-card p-12 hover-lift"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of blue-collar businesses using BlueCollarCRM to 
            streamline operations and increase profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/dashboard">
                <Button size="lg" className="gradient-primary hover-glow shadow-glow text-lg px-8 py-4">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="glass-button text-lg px-8 py-4">
                Schedule Demo
              </Button>
            </motion.div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border-glass">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success-600 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success-600 mr-2" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-success-600 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-base glass-card rounded-none border-l-0 border-r-0 border-b-0 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Hammer className="h-6 w-6 text-brand-primary mr-2" />
                <span className="text-lg font-semibold text-gray-900">BlueCollarCRM</span>
              </div>
              <p className="text-gray-600">
                Built for the hardworking professionals who build our world.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Features</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Pricing</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Integrations</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Mobile App</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-brand-primary transition-colors cursor-pointer">About</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Help Center</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Documentation</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Training</li>
                <li className="hover:text-brand-primary transition-colors cursor-pointer">Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border-glass mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 BlueCollarCRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 