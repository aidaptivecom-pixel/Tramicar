'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Search, Camera, FileText, Car, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function VenderPage() {
  const router = useRouter()
  const [plate, setPlate] = useState('')
  const [method, setMethod] = useState<'plate' | 'photo' | 'pdf' | null>(null)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const mockVehicle = {
    brand: 'Toyota',
    model: 'Corolla XEI',
    year: 2020,
    plate: 'AB 123 CD',
    color: 'Blanco',
    fuel: 'Nafta',
    origin: 'Importado',
  }

  const handleSearch = () => {
    if (!plate.trim()) return
    setLoading(true)
    setTimeout(() => {
      setVehicleFound(true)
      setLoading(false)
    }, 1500)
  }

  const handleContinue = () => {
    router.push('/dashboard1/vender/diagnostico')
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
          <h1 className="font-display text-xl font-bold text-white">Vender mi auto</h1>
          <p className="text-xs text-white/60">Paso 1: Identificar el vehículo</p>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 py-4">
        <div className="flex gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-primary" />
          <div className="flex-1 h-1.5 rounded-full bg-surface3" />
          <div className="flex-1 h-1.5 rounded-full bg-surface3" />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-primary font-medium">Vehículo</span>
          <span className="text-[10px] text-gray2">Diagnóstico</span>
          <span className="text-[10px] text-gray2">Invitar</span>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {!vehicleFound ? (
          <>
            {/* Method selection */}
            <p className="text-sm text-text2 font-medium">¿Cómo querés cargar los datos?</p>

            <div className="flex flex-col gap-3">
              {/* Plate input */}
              <button
                onClick={() => setMethod('plate')}
                className={`bg-white border rounded-2xl p-4 flex items-center gap-4 transition-all text-left ${method === 'plate' ? 'border-primary ring-2 ring-primary/10' : 'border-border hover:border-primary/30'}`}
              >
                <div className="w-12 h-12 bg-primary-light border border-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Search size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text">Ingresar patente</p>
                  <p className="text-xs text-gray mt-0.5">Buscamos los datos automáticamente</p>
                </div>
              </button>

              <button
                onClick={() => setMethod('photo')}
                className={`bg-white border rounded-2xl p-4 flex items-center gap-4 transition-all text-left ${method === 'photo' ? 'border-primary ring-2 ring-primary/10' : 'border-border hover:border-primary/30'}`}
              >
                <div className="w-12 h-12 bg-amber-light border border-amber/10 rounded-xl flex items-center justify-center shrink-0">
                  <Camera size={22} className="text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text">Foto del título</p>
                  <p className="text-xs text-gray mt-0.5">Sacale una foto y extraemos los datos con IA</p>
                </div>
              </button>

              <button
                onClick={() => setMethod('pdf')}
                className={`bg-white border rounded-2xl p-4 flex items-center gap-4 transition-all text-left ${method === 'pdf' ? 'border-primary ring-2 ring-primary/10' : 'border-border hover:border-primary/30'}`}
              >
                <div className="w-12 h-12 bg-blue-light border border-blue/10 rounded-xl flex items-center justify-center shrink-0">
                  <FileText size={22} className="text-blue" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-text">Subir título digital (PDF)</p>
                  <p className="text-xs text-gray mt-0.5">Si ya tenés el título digital, subilo acá</p>
                </div>
              </button>
            </div>

            {/* Plate input field */}
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
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Search size={18} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Photo placeholder */}
            {method === 'photo' && (
              <div className="bg-white border border-border rounded-2xl p-5 animate-slide-up">
                <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center gap-3 bg-primary-light/30">
                  <Camera size={32} className="text-primary" />
                  <p className="text-sm font-medium text-primary">Tocar para abrir la cámara</p>
                  <p className="text-xs text-gray text-center">Encuadrá el título completo del auto</p>
                </div>
              </div>
            )}

            {/* PDF placeholder */}
            {method === 'pdf' && (
              <div className="bg-white border border-border rounded-2xl p-5 animate-slide-up">
                <div className="border-2 border-dashed border-blue/30 rounded-xl p-8 flex flex-col items-center gap-3 bg-blue-light/30">
                  <FileText size={32} className="text-blue" />
                  <p className="text-sm font-medium text-blue">Tocar para subir PDF</p>
                  <p className="text-xs text-gray text-center">Título digital descargado de DNRPA</p>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Vehicle found */
          <div className="animate-slide-up flex flex-col gap-4">
            <div className="bg-white border border-green/20 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-light rounded-xl flex items-center justify-center">
                  <Car size={20} className="text-green" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-text">Vehículo encontrado</h2>
                  <p className="text-xs text-green font-medium">Datos verificados ✓</p>
                </div>
              </div>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray">Marca / Modelo</span>
                  <span className="font-medium text-text">{mockVehicle.brand} {mockVehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Año</span>
                  <span className="font-medium text-text">{mockVehicle.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Patente</span>
                  <span className="font-display font-bold text-text tracking-wider">{mockVehicle.plate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Color</span>
                  <span className="font-medium text-text">{mockVehicle.color}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Combustible</span>
                  <span className="font-medium text-text">{mockVehicle.fuel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray">Origen</span>
                  <span className="font-medium text-text">{mockVehicle.origin}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-light border border-amber/20 rounded-2xl p-4">
              <p className="text-xs text-amber font-medium">⚡ Siguiente paso</p>
              <p className="text-sm text-text mt-1">Vamos a verificar que tu auto esté en condiciones para transferir. Consultamos DNRPA, multas, deudas y más.</p>
            </div>

            <button
              onClick={handleContinue}
              className="w-full py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary2 transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2"
            >
              Iniciar diagnóstico <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  )
}
