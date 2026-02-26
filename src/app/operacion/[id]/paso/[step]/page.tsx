'use client'
import { use, useState } from 'react'
import Navbar from '@/components/Navbar'
import { STEPS } from '@/lib/constants'
import { MOCK_OPERATIONS, MOCK_STEPS } from '@/lib/mock-data'
import { ArrowLeft, Check, Upload, ChevronRight, Info } from 'lucide-react'
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

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="bg-primary px-5 pt-12 pb-6">
        <div className="flex items-center gap-3">
          <Link href={`/operacion/${id}`} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <ArrowLeft size={18} className="text-white" />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">{stepInfo.icon}</span>
              <h1 className="font-display text-xl font-bold text-white">{stepInfo.title}</h1>
            </div>
            <p className="text-xs text-white/60">Paso {stepNum} de 6 · {stepInfo.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-3 flex flex-col gap-4">
        {/* Status banner */}
        <div className={`bg-white border rounded-2xl p-4 flex items-center gap-3 shadow-sm ${
          currentStep?.status === 'completed' ? 'border-green/30' : 
          currentStep?.status === 'in_progress' ? 'border-primary/30' : 'border-border'
        }`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentStep?.status === 'completed' ? 'bg-green' : 
            currentStep?.status === 'in_progress' ? 'bg-primary' : 'bg-surface3'
          }`}>
            {currentStep?.status === 'completed' ? <Check size={20} className="text-white" /> : 
             <span className="text-lg">{stepInfo.icon}</span>}
          </div>
          <div>
            <p className="font-semibold text-sm text-text">
              {currentStep?.status === 'completed' ? '✅ Completado' :
               currentStep?.status === 'in_progress' ? '⏳ En progreso' : '⏸️ Pendiente'}
            </p>
            {currentStep?.notes && <p className="text-xs text-gray mt-0.5">{currentStep.notes}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <h2 className="font-display font-semibold text-sm mb-2 text-text">¿Qué es este paso?</h2>
          <p className="text-sm text-gray leading-relaxed">{stepInfo.description}</p>
        </div>

        {/* Instructions */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <h2 className="font-display font-semibold text-sm mb-3 text-text">Instrucciones</h2>
          <div className="flex flex-col gap-3">
            {stepInfo.instructions.map((instruction, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5 ${
                  completed ? 'bg-green text-white' : 'bg-primary-light text-primary border border-primary/20'
                }`}>
                  {completed ? <Check size={12} /> : i + 1}
                </div>
                <p className="text-sm text-text2 leading-relaxed">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Document upload */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <h2 className="font-display font-semibold text-sm mb-3 text-text">Documentos</h2>
          <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/30 transition-all bg-surface2">
            <Upload size={24} className="text-primary" />
            <p className="text-xs text-gray text-center">Tocá para subir un documento o foto</p>
            <p className="text-[10px] text-gray2">PDF, JPG, PNG — máx 10MB</p>
          </div>
        </div>

        {/* Tip */}
        <div className="bg-blue-light border border-blue/10 rounded-xl p-4 flex gap-3">
          <Info size={18} className="text-blue shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold text-blue mb-1">Tip</p>
            <p className="text-xs text-text2 leading-relaxed">
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
            <Link href={`/operacion/${id}/paso/${stepNum - 1}`} className="flex-1 py-3.5 border border-border text-text font-semibold rounded-full text-center hover:border-primary transition-all text-sm bg-white">
              ← Anterior
            </Link>
          )}
          {!completed ? (
            <button
              onClick={() => setCompleted(true)}
              className="flex-1 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary2 transition-all text-sm shadow-md shadow-primary/20"
            >
              Marcar como completado ✓
            </button>
          ) : stepNum < 6 ? (
            <Link href={`/operacion/${id}/paso/${stepNum + 1}`} className="flex-1 py-3.5 bg-green text-white font-semibold rounded-full text-center hover:bg-green/80 transition-all text-sm flex items-center justify-center gap-1 shadow-md shadow-green/20">
              Siguiente paso <ChevronRight size={16} />
            </Link>
          ) : (
            <div className="flex-1 py-3.5 bg-green text-white font-semibold rounded-full text-center text-sm">
              🎉 ¡Transferencia completada!
            </div>
          )}
        </div>
      </div>

      <Navbar />
    </div>
  )
}
