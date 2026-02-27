'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Search, Link as LinkIcon, Car, CheckCircle2, Shield, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ComprarPage() {
  const router = useRouter()
  const [method, setMethod] = useState<'link' | 'plate' | null>(null)
  const [plate, setPlate] = useState('')
  const [inviteCode, setInviteCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)

  const mockVehicle = {
    brand: 'Toyota',
    model: 'Corolla XEI',
    year: 2020,
    plate: 'AB 123 CD',
    seller: 'Juan P.',
    diagnosis: { ok: 5, warnings: 1, errors: 0 },
  }

  const handleSearch = () => {
    if (method === 'plate' && !plate.trim()) return
    if (method === 'link' && !inviteCode.trim()) return
    setLoading(true)
    setTimeout(() => {
      setVehicleFound(true)
      setLoading(false)
    }, 1500)
  }

  const inputClass = "w-full px-4 py-3.5 bg-surface2 border border-border rounded-xl text-text text-sm placeholder:text-gray2 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="bg-primary px-5 pt-12 pb-6 flex items-center gap-3">
        <Link href="/dashboard1" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
          <ArrowLeft size={18} className="text-white" />
        </Link>
        <div>
          <h1 className="font-display text-xl font-bold text-white">Comprar un auto</h1>
          <p className="text-xs text-white/60">Verificá el vehículo antes de comprar</p>
        </div>
      </div>

      <div className="px-5 pt-6 flex flex-col gap-4">
        {!vehicleFound ? (
          <>
            <p className="text-sm text-text2 font-medium">¿Cómo querés buscar el auto?</p>

            {/* Link option */}
            <button
              onClick={() => setMethod('link')}
              className={`bg-white border rounded-2xl p-4 flex items-center gap-4 transition-all text-left ${method === 'link' ? 'border-primary ring-2 ring-primary/10' : 'border-border hover:border-primary/30'}`}
            >
              <div className="w-12 h-12 bg-primary-light border border-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <LinkIcon size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-text">Tengo un link de invitación</p>
                <p className="text-xs text-gray mt-0.5">El vendedor me compartió un link</p>
              </div>
            </button>

            {/* Plate option */}
            <button
              onClick={() => setMethod('plate')}
              className={`bg-white border rounded-2xl p-4 flex items-center gap-4 transition-all text-left ${method === 'plate' ? 'border-primary ring-2 ring-primary/10' : 'border-border hover:border-primary/30'}`}
            >
              <div className="w-12 h-12 bg-blue-light border border-blue/10 rounded-xl flex items-center justify-center shrink-0">
                <Search size={22} className="text-blue" />
              </div>
              <div>
                <p className="font-semibold text-sm text-text">Buscar por patente</p>
                <p className="text-xs text-gray mt-0.5">Ingresá la patente del auto que querés comprar</p>
              </div>
            </button>

            {/* Input fields */}
            {method === 'link' && (
              <div className="bg-white border border-border rounded-2xl p-5 animate-slide-up">
                <label className="text-xs font-medium text-text2 mb-2 block">Código o link de invitación</label>
                <input
                  type="text"
                  placeholder="https://tramicar.app/op/abc123"
                  value={inviteCode}
                  onChange={e => setInviteCode(e.target.value)}
                  className={inputClass}
                />
                <button
                  onClick={handleSearch}
                  disabled={!inviteCode.trim() || loading}
                  className="w-full mt-3 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary2 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Buscar operación <ChevronRight size={18} /></>}
                </button>
              </div>
            )}

            {method === 'plate' && (
              <div className="bg-white border border-border rounded-2xl p-5 animate-slide-up">
                <label className="text-xs font-medium text-text2 mb-2 block">Patente del vehículo</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="AB 123 CD"
                    value={plate}
                    onChange={e => setPlate(e.target.value.toUpperCase())}
                    className={`${inputClass} flex-1 text-center font-display text-lg tracking-wider`}
                    maxLength={10}
                  />
                  <button
                    onClick={handleSearch}
                    disabled={!plate.trim() || loading}
                    className="px-5 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary2 transition-all disabled:opacity-50"
                  >
                    {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Search size={18} />}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="animate-slide-up flex flex-col gap-4">
            {/* Vehicle card */}
            <div className="bg-white border border-border rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-light rounded-xl flex items-center justify-center">
                  <Car size={20} className="text-blue" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-text">{mockVehicle.brand} {mockVehicle.model} {mockVehicle.year}</h2>
                  <p className="text-xs text-gray">Patente: <span className="font-display font-bold tracking-wider">{mockVehicle.plate}</span></p>
                </div>
              </div>
              <div className="bg-surface2 rounded-xl p-3 flex items-center gap-2">
                <span className="text-xs text-gray">Vendedor:</span>
                <span className="text-sm font-medium text-text">{mockVehicle.seller}</span>
              </div>
            </div>

            {/* Diagnosis summary */}
            <div className="bg-green-light border border-green/20 rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield size={24} className="text-green" />
                <div>
                  <p className="text-sm font-semibold text-text">Diagnóstico del vendedor</p>
                  <p className="text-xs text-gray">El vendedor ya verificó este vehículo</p>
                </div>
              </div>
              <div className="flex gap-3 mt-2">
                <span className="text-xs bg-white px-2 py-1 rounded-lg text-green font-medium">{mockVehicle.diagnosis.ok} verificados ✓</span>
                {mockVehicle.diagnosis.warnings > 0 && (
                  <span className="text-xs bg-white px-2 py-1 rounded-lg text-amber font-medium">{mockVehicle.diagnosis.warnings} advertencia</span>
                )}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => router.push('/dashboard1/comprar/datos')}
              className="w-full py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary2 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2"
            >
              Completar mis datos <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  )
}
