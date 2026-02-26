'use client'
import { use, useState } from 'react'
import Navbar from '@/components/Navbar'
import { STEPS } from '@/lib/constants'
import { MOCK_OPERATIONS, MOCK_STEPS } from '@/lib/mock-data'
import { ArrowLeft, Check, Upload, ChevronRight, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function StepDetailPage({ params }: { params: Promise<{ id: string; step: string }> }) {
  const { id, step: stepStr } = use(params)
  const stepNum = parseInt(stepStr)
  const stepInfo = STEPS[stepNum - 1]
  const operation = MOCK_OPERATIONS.find(o => o.id === id) || MOCK_OPERATIONS[0]
  const operationSteps = MOCK_STEPS[operation.id] || MOCK_STEPS['op-001']
  const currentStep = operationSteps.find(s => s.step_number === stepNum)
  const [completed, setCompleted] = useState(currentStep?.status === 'completed')

  if (!stepInfo) return null

  const statusColor = currentStep?.status === 'completed' ? 'green' : currentStep?.status === 'in_progress' ? 'accent' : 'gray'

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="px-5 pt-12 pb-6 flex items-center gap-3">
        <Link href={`/operacion/${id}`} className="w-10 h-10 bg-surface border border-border2 rounded-xl flex items-center justify-center">
          <ArrowLeft size={18} />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">{stepInfo.icon}</span>
            <h1 className="font-display text-xl font-bold">{stepInfo.title}</h1>
          </div>
          <p className="text-xs text-gray">Paso {stepNum} de 6 · {stepInfo.subtitle}</p>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Status banner */}
        <div className={`bg-${statusColor}/5 border border-${statusColor}/20 rounded-xl p-4 flex items-center gap-3`}
          style={{ background: `${stepInfo.color}08`, borderColor: `${stepInfo.color}30` }}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
            style={{ background: `${stepInfo.color}15` }}>
            {currentStep?.status === 'completed' ? <Check size={20} className="text-green" /> : stepInfo.icon}
          </div>
          <div>
            <p className="font-semibold text-sm">
              {currentStep?.status === 'completed' ? '✅ Completado' :
               currentStep?.status === 'in_progress' ? '⏳ En progreso' : '⏸️ Pendiente'}
            </p>
            {currentStep?.notes && <p className="text-xs text-gray2 mt-0.5">{currentStep.notes}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="bg-surface border border-border2 rounded-2xl p-5">
          <h2 className="font-display font-semibold text-sm mb-2">¿Qué es este paso?</h2>
          <p className="text-sm text-gray2 leading-relaxed">{stepInfo.description}</p>
        </div>

        {/* Instructions */}
        <div className="bg-surface border border-border2 rounded-2xl p-5">
          <h2 className="font-display font-semibold text-sm mb-3">Instrucciones</h2>
          <div className="flex flex-col gap-3">
            {stepInfo.instructions.map((instruction, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5 ${completed ? 'bg-green/10 text-green border border-green/20' : 'bg-surface3 text-gray border border-border'}`}>
                  {completed ? <Check size={12} /> : i + 1}
                </div>
                <p className="text-sm text-gray2 leading-relaxed">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Document upload */}
        <div className="bg-surface border border-border2 rounded-2xl p-5">
          <h2 className="font-display font-semibold text-sm mb-3">Documentos</h2>
          <div className="border-2 border-dashed border-border2 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-accent/30 transition-all">
            <Upload size={24} className="text-gray" />
            <p className="text-xs text-gray text-center">Tocá para subir un documento o foto</p>
            <p className="text-[10px] text-gray/60">PDF, JPG, PNG — máx 10MB</p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-amber/5 border border-amber/20 rounded-xl p-4 flex gap-3">
          <AlertCircle size={18} className="text-amber shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-amber mb-1">Tip</p>
            <p className="text-xs text-gray2 leading-relaxed">
              {stepNum === 1 && 'Acordá el monto de la seña antes de empezar. Lo recomendado es entre el 5% y 10% del valor del auto.'}
              {stepNum === 2 && 'Los informes tardan entre 24 y 72hs hábiles. Pedílos lo antes posible.'}
              {stepNum === 3 && 'Las multas pueden consultarse en la web de tu municipio o en infracciones.gob.ar.'}
              {stepNum === 4 && 'Llevá el auto limpio a la verificación. Revisá que coincidan los números de motor y chasis.'}
              {stepNum === 5 && 'El turno es en el registro seccional donde está radicado el auto, no donde vivís.'}
              {stepNum === 6 && 'Nunca pagues en efectivo en la vía pública. Usá transferencia bancaria y guardá el comprobante.'}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {stepNum > 1 && (
            <Link href={`/operacion/${id}/paso/${stepNum - 1}`} className="flex-1 py-3.5 border border-border2 text-white font-semibold rounded-xl text-center hover:border-accent transition-all text-sm">
              ← Anterior
            </Link>
          )}
          {!completed ? (
            <button
              onClick={() => setCompleted(true)}
              className="flex-1 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent2 transition-all text-sm"
            >
              Marcar como completado ✓
            </button>
          ) : stepNum < 6 ? (
            <Link href={`/operacion/${id}/paso/${stepNum + 1}`} className="flex-1 py-3.5 bg-green text-white font-semibold rounded-xl text-center hover:bg-green/80 transition-all text-sm flex items-center justify-center gap-1">
              Siguiente paso <ChevronRight size={16} />
            </Link>
          ) : (
            <div className="flex-1 py-3.5 bg-green text-white font-semibold rounded-xl text-center text-sm">
              🎉 ¡Transferencia completada!
            </div>
          )}
        </div>
      </div>

      <Navbar />
    </div>
  )
}
