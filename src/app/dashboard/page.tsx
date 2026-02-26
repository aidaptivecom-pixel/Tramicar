'use client'
import Navbar from '@/components/Navbar'
import OperationCard from '@/components/OperationCard'
import { MOCK_OPERATIONS, MOCK_STEPS } from '@/lib/mock-data'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="px-5 pt-12 pb-6">
        <p className="text-xs text-gray mb-1">Bienvenido 👋</p>
        <h1 className="font-display text-2xl font-bold">Mis operaciones</h1>
      </div>

      {/* Operations */}
      <div className="px-5 flex flex-col gap-4">
        {MOCK_OPERATIONS.map(op => (
          <OperationCard key={op.id} operation={op} steps={MOCK_STEPS[op.id] || []} />
        ))}

        {/* Empty state / New */}
        <Link href="/operacion/nueva">
          <div className="border-2 border-dashed border-border2 rounded-2xl p-8 flex flex-col items-center gap-3 hover:border-accent/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
              <Plus size={24} className="text-accent" />
            </div>
            <div className="text-center">
              <p className="font-display font-semibold text-sm">Nueva operación</p>
              <p className="text-xs text-gray mt-1">Empezá una transferencia</p>
            </div>
          </div>
        </Link>
      </div>

      <Navbar />
    </div>
  )
}
