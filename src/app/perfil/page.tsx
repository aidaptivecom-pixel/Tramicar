'use client'
import Navbar from '@/components/Navbar'
import { ArrowLeft, LogOut, User, Phone, Mail, Shield } from 'lucide-react'
import Link from 'next/link'

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-bg pb-24">
      <div className="px-5 pt-12 pb-6">
        <h1 className="font-display text-2xl font-bold">Mi perfil</h1>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Avatar */}
        <div className="flex flex-col items-center py-6">
          <div className="w-20 h-20 bg-accent/10 border-2 border-accent/30 rounded-full flex items-center justify-center mb-3">
            <User size={32} className="text-accent" />
          </div>
          <h2 className="font-display font-semibold text-lg">Usuario Demo</h2>
          <p className="text-xs text-gray">demo@tramicar.com</p>
        </div>

        {/* Info */}
        <div className="bg-surface border border-border2 rounded-2xl overflow-hidden">
          {[
            { icon: <User size={18} />, label: 'Nombre', value: 'Usuario Demo' },
            { icon: <Mail size={18} />, label: 'Email', value: 'demo@tramicar.com' },
            { icon: <Phone size={18} />, label: 'Teléfono', value: '+54 11 1234-5678' },
            { icon: <Shield size={18} />, label: 'DNI', value: '••••••••' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-5 py-4 ${i < 3 ? 'border-b border-border' : ''}`}>
              <div className="text-gray">{item.icon}</div>
              <div className="flex-1">
                <p className="text-[11px] text-gray">{item.label}</p>
                <p className="text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-surface border border-border2 rounded-2xl p-5">
          <h3 className="font-display font-semibold text-sm mb-3">Estadísticas</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-accent">2</div>
              <p className="text-[10px] text-gray mt-1">Operaciones</p>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-green">1</div>
              <p className="text-[10px] text-gray mt-1">Completadas</p>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-amber">1</div>
              <p className="text-[10px] text-gray mt-1">En curso</p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <Link href="/auth">
          <button className="w-full py-3.5 border border-red/30 text-red font-semibold rounded-xl hover:bg-red/5 transition-all flex items-center justify-center gap-2 text-sm">
            <LogOut size={16} /> Cerrar sesión
          </button>
        </Link>
      </div>

      <Navbar />
    </div>
  )
}
