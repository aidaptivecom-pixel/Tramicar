'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Car, Camera } from 'lucide-react'
import Link from 'next/link'

export default function NuevaOperacionPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    brand: '', model: '', year: '', plate: '', price: '', sellerEmail: '',
  })
  const [loading, setLoading] = useState(false)

  const updateForm = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  const handleCreate = () => {
    setLoading(true)
    setTimeout(() => {
      router.push('/operacion/op-001')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="px-5 pt-12 pb-6 flex items-center gap-3">
        <Link href="/dashboard" className="w-10 h-10 bg-surface border border-border2 rounded-xl flex items-center justify-center">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="font-display text-xl font-bold">Nueva operación</h1>
          <p className="text-xs text-gray">Paso {step} de 2</p>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 mb-6">
        <div className="flex gap-2">
          <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-accent' : 'bg-surface3'}`} />
          <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-accent' : 'bg-surface3'}`} />
        </div>
      </div>

      <div className="px-5">
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border2 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Car size={20} className="text-accent" />
                </div>
                <h2 className="font-display font-semibold">Datos del vehículo</h2>
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text" placeholder="Marca (ej: Toyota)"
                  value={form.brand} onChange={e => updateForm('brand', e.target.value)}
                  className="w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
                />
                <input
                  type="text" placeholder="Modelo (ej: Corolla XEI)"
                  value={form.model} onChange={e => updateForm('model', e.target.value)}
                  className="w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number" placeholder="Año"
                    value={form.year} onChange={e => updateForm('year', e.target.value)}
                    className="w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
                  />
                  <input
                    type="text" placeholder="Patente"
                    value={form.plate} onChange={e => updateForm('plate', e.target.value.toUpperCase())}
                    className="w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
                  />
                </div>
                <input
                  type="number" placeholder="Precio acordado ($)"
                  value={form.price} onChange={e => updateForm('price', e.target.value)}
                  className="w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
                />
              </div>

              {/* Photo upload placeholder */}
              <div className="mt-4 border-2 border-dashed border-border2 rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:border-accent/30 transition-all">
                <Camera size={24} className="text-gray" />
                <p className="text-xs text-gray text-center">Sacale una foto al título<br /><span className="text-accent2">Próximamente: autocarga de datos</span></p>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent2 transition-all"
            >
              Siguiente →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-4">
            <div className="bg-surface border border-border2 rounded-2xl p-5">
              <h2 className="font-display font-semibold mb-1">Invitar al vendedor</h2>
              <p className="text-xs text-gray mb-4">Le va a llegar un link para que siga el proceso desde su lado.</p>
              <input
                type="email" placeholder="Email del vendedor"
                value={form.sellerEmail} onChange={e => updateForm('sellerEmail', e.target.value)}
                className="w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
              />
            </div>

            {/* Summary */}
            <div className="bg-surface border border-border2 rounded-2xl p-5">
              <h2 className="font-display font-semibold mb-3">Resumen</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray">Vehículo</span><span>{form.brand} {form.model}</span></div>
                <div className="flex justify-between"><span className="text-gray">Año</span><span>{form.year}</span></div>
                <div className="flex justify-between"><span className="text-gray">Patente</span><span>{form.plate}</span></div>
                <div className="flex justify-between"><span className="text-gray">Precio</span><span className="font-semibold">${Number(form.price || 0).toLocaleString('es-AR')}</span></div>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="flex-1 py-3.5 border border-border2 text-white font-semibold rounded-xl hover:border-accent transition-all">
                ← Atrás
              </button>
              <button
                onClick={handleCreate}
                disabled={loading}
                className="flex-1 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent2 transition-all disabled:opacity-50"
              >
                {loading ? 'Creando...' : 'Crear operación'}
              </button>
            </div>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  )
}
