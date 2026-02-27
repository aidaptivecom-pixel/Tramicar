'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { ArrowLeft, Share2, MessageCircle, Copy, CheckCircle2, Link as LinkIcon, QrCode } from 'lucide-react'
import Link from 'next/link'

export default function InvitarPage() {
  const [copied, setCopied] = useState(false)
  const inviteLink = 'https://tramicar.app/op/abc123'

  const handleCopy = () => {
    navigator.clipboard?.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const text = `¡Hola! Te invito a completar la transferencia del Toyota Corolla XEI 2020 (AB 123 CD) por Tramicar. Ingresá acá: ${inviteLink}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-bg pb-24">
      {/* Header */}
      <div className="bg-primary px-5 pt-12 pb-6 flex items-center gap-3">
        <Link href="/dashboard1/vender/diagnostico" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
          <ArrowLeft size={18} className="text-white" />
        </Link>
        <div>
          <h1 className="font-display text-xl font-bold text-white">Invitar comprador</h1>
          <p className="text-xs text-white/60">Toyota Corolla XEI 2020 — AB 123 CD</p>
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 py-4">
        <div className="flex gap-2">
          <div className="flex-1 h-1.5 rounded-full bg-primary" />
          <div className="flex-1 h-1.5 rounded-full bg-primary" />
          <div className="flex-1 h-1.5 rounded-full bg-primary" />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-primary font-medium">Vehículo ✓</span>
          <span className="text-[10px] text-primary font-medium">Diagnóstico ✓</span>
          <span className="text-[10px] text-primary font-medium">Invitar</span>
        </div>
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* Vehicle summary */}
        <div className="bg-green-light border border-green/20 rounded-2xl p-4 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-green shrink-0" />
          <div>
            <p className="text-sm font-semibold text-text">Vehículo verificado</p>
            <p className="text-xs text-gray">Toyota Corolla XEI 2020 — Listo para transferir</p>
          </div>
        </div>

        {/* Invite options */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-light border border-primary/10 rounded-xl flex items-center justify-center">
              <Share2 size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-text">Compartí el link</h2>
              <p className="text-xs text-gray">El comprador entra y completa sus datos</p>
            </div>
          </div>

          {/* Link display */}
          <div className="bg-surface2 rounded-xl p-3 flex items-center gap-2 mb-4">
            <LinkIcon size={14} className="text-gray2 shrink-0" />
            <span className="text-xs text-text2 truncate flex-1 font-mono">{inviteLink}</span>
            <button
              onClick={handleCopy}
              className="shrink-0 px-3 py-1.5 bg-white border border-border rounded-lg text-xs font-medium text-text hover:border-primary transition-all flex items-center gap-1"
            >
              {copied ? <><CheckCircle2 size={12} className="text-green" /> Copiado</> : <><Copy size={12} /> Copiar</>}
            </button>
          </div>

          {/* WhatsApp button */}
          <button
            onClick={handleWhatsApp}
            className="w-full py-3.5 bg-[#25D366] text-white font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#20BD5A] transition-all shadow-md shadow-[#25D366]/20"
          >
            <MessageCircle size={20} />
            Enviar por WhatsApp
          </button>
        </div>

        {/* Alternative */}
        <div className="bg-white border border-border rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-surface2 rounded-xl flex items-center justify-center">
              <QrCode size={20} className="text-text2" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-text">O que cargue la patente</h2>
              <p className="text-xs text-gray">El comprador también puede buscar el auto por patente desde la app</p>
            </div>
          </div>
          <div className="bg-surface2 rounded-xl p-4 text-center">
            <p className="font-display text-2xl font-bold tracking-widest text-primary">AB 123 CD</p>
            <p className="text-xs text-gray mt-1">Decile al comprador que ingrese esta patente</p>
          </div>
        </div>

        {/* Waiting state */}
        <div className="bg-primary-light border border-primary/10 rounded-2xl p-4 text-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm font-semibold text-primary">Esperando al comprador...</p>
          <p className="text-xs text-text2 mt-1">Te notificamos cuando se sume a la operación</p>
        </div>
      </div>

      <Navbar />
    </div>
  )
}
