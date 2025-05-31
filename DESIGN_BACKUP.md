# BlueCollarCRM Design Backup

## Current Design System (Pre AI Power Page)

### Color Scheme
- Primary: Blue gradient (from-blue-600 to-blue-700, from-blue-600 to-blue-800)
- Secondary: Brand colors with purple accents
- Background: Gradient from slate-50 via blue-50/30 to indigo-50/20
- Success: Green variants
- Warning/Alert: Red/Yellow variants

### Typography
- Headers: Bold text with gradient backgrounds (bg-clip-text text-transparent)
- Main titles: text-3xl font-bold text-gradient
- Descriptions: text-gray-600

### Layout Patterns
- Page structure: min-h-screen with gradient background + pt-32 pb-8
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Background decorations: Floating blur elements with animations
- Cards: Glass morphism with backdrop-blur and subtle borders

### Navigation Structure
Current navigation items:
1. Dashboard (/dashboard) - Home icon
2. Leads (/leads) - Users icon  
3. Customers (/customers) - UserCheck icon
4. Quotes (/quotes) - FileText icon
5. Jobs (/jobs) - Calendar icon
6. Inventory (/inventory) - Package icon
7. Reports (/reports) - BarChart3 icon

### Animation System
- Motion.div with framer-motion
- Container variants with staggered children
- Card variants with spring animations
- Background elements with floating/pulse animations

### Component Patterns
- Stats cards with gradient backgrounds
- Modal overlays with glassmorphism
- Button styling with gradient hover effects
- Icon integration from lucide-react

This backup ensures we can restore the exact styling if anything gets corrupted. 