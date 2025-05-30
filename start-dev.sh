#!/bin/bash

# BlueCollarCRM Development Server Startup Script
echo "🔧 Starting BlueCollarCRM Development Environment..."

# Clear any existing processes
echo "🧹 Cleaning up existing processes..."
pkill -f "next dev" 2>/dev/null || true
pkill -f "turbo dev" 2>/dev/null || true

# Clear cache
echo "🗑️  Clearing Next.js cache..."
rm -rf apps/web/.next apps/web/node_modules/.cache 2>/dev/null || true

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
fi

# Start the development server
echo "🚀 Starting development server..."
echo "⚡ Server will be available at: http://localhost:3000"
echo "🎨 Dashboard with glass morphism: http://localhost:3000/dashboard"
echo ""
echo "📝 DESIGN-STACK SNIPPET Features Active:"
echo "   ✅ Apple Maps blue primary (#0A84FF)"
echo "   ✅ Orange secondary (#FF8A00)"
echo "   ✅ Glass morphism components"
echo "   ✅ Apple system fonts"
echo "   ✅ Backdrop blur effects"
echo ""

# Use direct Next.js startup for better reliability
cd apps/web && npm run dev 