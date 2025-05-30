/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      // Enhanced Color System
      colors: {
        // Primary brand colors (Apple Maps Blue)
        'brand-primary': {
          DEFAULT: '#0A84FF',
          50: '#E8F4FF',
          100: '#D1E9FF',
          200: '#A3D2FF',
          300: '#75BCFF',
          400: '#47A5FF',
          500: '#0A84FF',
          600: '#0056CC',
          700: '#004799',
          800: '#003866',
          900: '#002433',
        },
        // Secondary brand colors (Orange)
        'brand-secondary': {
          DEFAULT: '#FF8A00',
          50: '#FFF7E8',
          100: '#FFEFD1',
          200: '#FFDFA3',
          300: '#FFCF75',
          400: '#FFBF47',
          500: '#FF8A00',
          600: '#E6770A',
          700: '#B35C08',
          800: '#804106',
          900: '#4D2704',
        },
        // Enhanced Success Colors
        success: {
          DEFAULT: '#10B981',
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        // Enhanced Warning Colors
        warning: {
          DEFAULT: '#F59E0B',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Enhanced Error Colors
        error: {
          DEFAULT: '#EF4444',
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        // Glass morphism system
        surface: 'rgba(255,255,255,var(--tw-bg-opacity,0.25))',
        'surface-hover': 'rgba(255,255,255,var(--tw-bg-opacity,0.35))',
        'surface-active': 'rgba(255,255,255,var(--tw-bg-opacity,0.45))',
        'border-glass': 'rgba(255,255,255,var(--tw-border-opacity,0.30))',
        'border-hover': 'rgba(255,255,255,var(--tw-border-opacity,0.50))',
        // Background gradients
        'bg-light': 'rgba(255,255,255,0.85)',
        'bg-dark': 'rgba(29,29,31,0.65)',
      },
      
      // Enhanced Typography
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['var(--fs-hero)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['var(--fs-h1)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['var(--fs-h2)', { lineHeight: '1.3' }],
        'subheading': ['var(--fs-h3)', { lineHeight: '1.4' }],
      },
      
      // Enhanced Spacing Scale
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      
      // Enhanced Border Radius
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        'card': 'var(--radius-card)',
        'button': 'var(--radius-button)',
      },
      
      // Enhanced Box Shadows
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'card': 'var(--shadow-card)',
        'hover': 'var(--shadow-hover)',
        'active': 'var(--shadow-active)',
        'glow': '0 0 20px rgba(10, 132, 255, 0.4)',
        'glow-secondary': '0 0 20px rgba(255, 138, 0, 0.4)',
      },
      
      // Enhanced Animation Durations
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        DEFAULT: 'var(--duration-normal)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
      },
      
      // Enhanced Animation Curves
      transitionTimingFunction: {
        'apple': 'var(--ease-in-out)',
        'out': 'var(--ease-out)',
        'in': 'var(--ease-in)',
        'bounce': 'var(--ease-bounce)',
      },
      
      // Enhanced Z-Index Scale
      zIndex: {
        'base': 'var(--z-base)',
        'docked': 'var(--z-docked)',
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'overlay': 'var(--z-overlay)',
        'modal': 'var(--z-modal)',
        'popover': 'var(--z-popover)',
        'tooltip': 'var(--z-tooltip)',
        'toast': 'var(--z-toast)',
      },
      
      // Enhanced Background Images
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
        'gradient-secondary': 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-light))',
        'gradient-glass': 'linear-gradient(135deg, var(--color-bg-light), var(--color-bg-dark))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-texture': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      
      // Enhanced Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // Enhanced Animation Keyframes
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      
      // Enhanced Animations
      animation: {
        'fade-in': 'fade-in 0.25s ease-out forwards',
        'slide-up': 'slide-up 0.25s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.25s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.25s ease-out forwards',
        'scale-in': 'scale-in 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      
      // Enhanced Screen Sizes
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      
      // Enhanced Grid System
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // Custom plugin for glass morphism utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.glass-card': {
          'backdrop-filter': 'blur(24px) saturate(180%)',
          'background': 'var(--color-surface)',
          'border': '1px solid var(--color-border)',
          'border-radius': 'var(--radius-card)',
          'box-shadow': 'var(--shadow-card)',
          'transition': 'all var(--duration-normal) var(--ease-in-out)',
        },
        '.glass-button': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          'background': 'var(--color-surface)',
          'border': '1px solid var(--color-border)',
          'border-radius': 'var(--radius-button)',
          'transition': 'all var(--duration-fast) var(--ease-in-out)',
        },
        '.glass-input': {
          'backdrop-filter': 'blur(12px) saturate(180%)',
          'background': 'var(--color-surface)',
          'border': '1px solid var(--color-border)',
          'border-radius': 'var(--radius-md)',
          'transition': 'all var(--duration-fast) var(--ease-in-out)',
        },
        '.text-gradient': {
          'background': 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.hover-lift': {
          'transition': 'all var(--duration-fast) var(--ease-out)',
          '&:hover': {
            'transform': 'translateY(-4px)',
            'box-shadow': 'var(--shadow-hover)',
          },
        },
        '.hover-scale': {
          'transition': 'transform var(--duration-fast) var(--ease-out)',
          '&:hover': {
            'transform': 'scale(1.05)',
          },
        },
        '.hover-glow': {
          'transition': 'all var(--duration-normal) var(--ease-out)',
          '&:hover': {
            'box-shadow': '0 0 20px rgba(10, 132, 255, 0.4)',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
} 