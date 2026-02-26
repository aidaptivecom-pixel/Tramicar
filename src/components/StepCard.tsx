'use client'
import { STEPS, StepStatus } from '@/lib/constants'
import { Check, ChevronRight, Clock, Lock } from 'lucide-react'

interface StepCardProps {
  stepNumber: number
  status: StepStatus
  notes?: string | null
  onClick?: () => void
  delay?: number
}

const statusConfig: Record<StepStatus, { border: string; bg: string; icon: React.ReactNode; label: string }> = {
  completed: {
    border: 'border-green/30',
    bg: 'bg-green/5',
    icon: <Check size={18} className="text-green" />,
    label: 'Completado',
  },
  in_progress: {
    border: 'border-accent/40',
    bg: 'bg-accent/5',
    icon: <Clock size={18} className="text-accent" />,
    label: 'En progreso',
  },
  pending: {
    border: 'border-border',
    bg: 'bg-surface',
    icon: <div className="w-4 h-4 rounded-full border-2 border-gray/30" />,
    label: 'Pendiente',
  },
  blocked: {
    border: 'border-red/30',
    bg: 'bg-red/5',
    icon: <Lock size={18} className="text-red" />,
    label: 'Bloqueado',
  },
}

export default function StepCard({ stepNumber, status, notes, onClick, delay = 0 }: StepCardProps) {
  const step = STEPS[stepNumber - 1]
  const config = statusConfig[status]

  return (
    <div
      onClick={onClick}
      className={`animate-slide-up ${config.bg} border ${config.border} rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] ${status === 'in_progress' ? 'animate-pulse-glow' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Step icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
      >
        {step.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-display font-semibold text-sm text-white">{step.title}</span>
          <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${step.tag === 'Automático' ? 'bg-green/10 text-green border border-green/20' : 'bg-amber/10 text-amber border border-amber/20'}`}>
            {step.tag}
          </span>
        </div>
        <p className="text-xs text-gray mt-0.5 truncate">{notes || step.subtitle}</p>
      </div>

      {/* Status + Arrow */}
      <div className="flex items-center gap-2 shrink-0">
        {config.icon}
        <ChevronRight size={16} className="text-gray/50" />
      </div>
    </div>
  )
}
