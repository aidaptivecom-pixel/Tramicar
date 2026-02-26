'use client'
import Link from 'next/link'
import { Operation, OperationStep } from '@/lib/types'
import ProgressBar from './ProgressBar'
import { Car, ChevronRight } from 'lucide-react'

interface OperationCardProps {
  operation: Operation
  steps: OperationStep[]
}

export default function OperationCard({ operation, steps }: OperationCardProps) {
  const completedSteps = steps.filter(s => s.status === 'completed').length

  return (
    <Link href={`/operacion/${operation.id}`}>
      <div className="bg-surface border border-border2 rounded-2xl p-5 transition-all hover:border-accent/30 hover:scale-[1.01] active:scale-[0.99]">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
              <Car size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-white text-sm">
                {operation.vehicle_brand} {operation.vehicle_model}
              </h3>
              <p className="text-xs text-gray">{operation.vehicle_year} · {operation.vehicle_plate}</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray/50 mt-1" />
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="font-display text-lg font-bold text-white">
            ${operation.vehicle_price.toLocaleString('es-AR')}
          </span>
        </div>

        {/* Progress */}
        <ProgressBar currentStep={operation.current_step} />

        {/* Status badge */}
        <div className="mt-3 flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${operation.status === 'active' ? 'bg-green animate-pulse' : 'bg-gray'}`} />
          <span className="text-[11px] text-gray2">
            {operation.status === 'active' ? 'En curso' : operation.status === 'completed' ? 'Completada' : 'Cancelada'}
          </span>
        </div>
      </div>
    </Link>
  )
}
