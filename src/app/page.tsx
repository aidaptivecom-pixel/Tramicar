import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4 flex items-center justify-between bg-bg/80 backdrop-blur-xl border-b border-border">
        <div className="font-display text-xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-sm">🚗</div>
          Trami<span className="text-accent2">car</span>
        </div>
        <Link href="/auth" className="px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent2 transition-all">
          Empezar
        </Link>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-16 px-5">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Primera plataforma de transferencias en Argentina
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
            Transferí tu auto{' '}
            <span className="bg-gradient-to-r from-accent to-green bg-clip-text text-transparent">sin vueltas</span>
          </h1>
          <p className="text-gray2 text-lg leading-relaxed mb-8">
            Automatizamos todo el proceso: seña segura, informes, verificación policial, turno en el registro y coordinación de pago.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/auth" className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent2 transition-all shadow-lg shadow-accent/20 text-center">
              Empezar ahora →
            </Link>
            <a href="#como" className="px-8 py-4 border border-border2 text-white font-semibold rounded-xl hover:border-accent transition-all text-center">
              ¿Cómo funciona?
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-12">
          {[
            { value: '15', unit: 'min', label: 'Iniciar proceso' },
            { value: '0', unit: '', label: 'Filas' },
            { value: '100%', unit: '', label: 'Seguro' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold">
                <span className="text-accent2">{s.value}</span>{s.unit && <span className="text-white"> {s.unit}</span>}
              </div>
              <div className="text-[10px] text-gray uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 px-5" id="problemas">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-accent2 uppercase tracking-widest mb-3">⚠️ El problema</p>
          <h2 className="font-display text-2xl font-bold mb-8">
            Comprar un auto hoy es un <span className="text-red">dolor de cabeza</span>
          </h2>
          <div className="grid gap-3">
            {[
              { icon: '😰', title: 'Miedo a que te caguen', desc: 'Documentos falsos, inhibiciones ocultas, embargos que aparecen después.' },
              { icon: '💸', title: 'Multas sorpresa', desc: 'Pagaste el auto y después te dicen que debe 10 palos de multas. ¿Qué hacés?' },
              { icon: '📝', title: 'Papeles infinitos', desc: 'DNRPA, VPA, 08, CETA, patentes... Nadie sabe qué hacer ni en qué orden.' },
              { icon: '⏰', title: 'Tiempo perdido', desc: 'Colas en el registro, turnos imposibles, trámites que se alargan semanas.' },
              { icon: '🚫', title: 'Parálisis', desc: 'Hay gente que NO cambia el auto por miedo al proceso. Literal.' },
              { icon: '🤷', title: 'Cero guía', desc: 'Cada uno se arregla como puede. No hay un sistema que te lleve de la mano.' },
            ].map(p => (
              <div key={p.title} className="bg-surface border border-border rounded-xl p-4 flex gap-3 hover:border-red/20 transition-all">
                <span className="text-2xl">{p.icon}</span>
                <div>
                  <h3 className="font-display font-semibold text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-gray leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-5" id="como">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-accent2 uppercase tracking-widest mb-3">🔄 Cómo funciona</p>
          <h2 className="font-display text-2xl font-bold mb-2">6 pasos. Todo guiado.</h2>
          <p className="text-gray2 mb-10">Vos seguís las instrucciones, nosotros nos encargamos del resto.</p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-green" />
            <div className="flex flex-col gap-6">
              {[
                { icon: '💰', title: 'Seña segura', tag: 'auto', desc: 'Depósito en escrow. Si hay problemas, se devuelve.' },
                { icon: '📋', title: 'Informes DNRPA', tag: 'vos', desc: 'Verificamos que el auto esté limpio de deudas y embargos.' },
                { icon: '🔍', title: 'Multas y patentes', tag: 'auto', desc: 'Chequeamos deudas pendientes. Sin sorpresas.' },
                { icon: '🔒', title: 'Verificación policial', tag: 'vos', desc: 'Te sacamos turno y completamos los datos automáticamente.' },
                { icon: '📅', title: 'Turno en registro', tag: 'auto', desc: 'Sacamos el turno en el registro seccional.' },
                { icon: '🎉', title: 'Pago + transferencia', tag: 'vos', desc: 'Coordinamos el encuentro y te guiamos hasta la firma.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg shrink-0 bg-surface2 border border-border2 z-10">
                    {s.icon}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display font-semibold text-sm">{s.title}</span>
                      <span className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full ${s.tag === 'auto' ? 'bg-green/10 text-green border border-green/20' : 'bg-amber/10 text-amber border border-amber/20'}`}>
                        {s.tag === 'auto' ? 'Automático' : 'Vos'}
                      </span>
                    </div>
                    <p className="text-xs text-gray2 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-5" id="precios">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs text-accent2 uppercase tracking-widest mb-3">💎 Planes</p>
          <h2 className="font-display text-2xl font-bold mb-8">Simple y transparente</h2>
          <div className="grid gap-4">
            <div className="bg-surface border border-border rounded-2xl p-6 text-left">
              <h3 className="font-display text-lg font-semibold mb-1">Básico</h3>
              <p className="text-xs text-gray mb-4">Para los que quieren hacer la parte difícil solos</p>
              <div className="font-display text-3xl font-bold mb-1">$15.000 <span className="text-sm text-gray font-normal">/ operación</span></div>
              <ul className="mt-4 space-y-2">
                {['Informes DNRPA', 'Verificación de multas', 'Guía paso a paso', 'Soporte por chat'].map(f => (
                  <li key={f} className="text-sm text-gray2 flex items-center gap-2">
                    <span className="text-green font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface border border-accent/30 rounded-2xl p-6 text-left relative overflow-hidden">
              <div className="absolute top-3 right-[-22px] bg-accent text-white text-[9px] font-bold px-6 py-1 rotate-45">RECOMENDADO</div>
              <h3 className="font-display text-lg font-semibold mb-1">Completo</h3>
              <p className="text-xs text-gray mb-4">Nos encargamos de todo</p>
              <div className="font-display text-3xl font-bold mb-1">$35.000 <span className="text-sm text-gray font-normal">/ operación</span></div>
              <ul className="mt-4 space-y-2">
                {['Todo lo del plan Básico', 'Seña en escrow seguro', 'Turnos automáticos', 'Verificación policial gestionada', 'Coordinación de pago', 'Soporte prioritario'].map(f => (
                  <li key={f} className="text-sm text-gray2 flex items-center gap-2">
                    <span className="text-green font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 text-center">
        <h2 className="font-display text-3xl font-bold mb-4">
          ¿Listo para transferir{' '}
          <span className="bg-gradient-to-r from-accent to-green bg-clip-text text-transparent">sin vueltas</span>?
        </h2>
        <p className="text-gray2 mb-8">Empezá tu primera operación en menos de 15 minutos.</p>
        <Link href="/auth" className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent2 transition-all shadow-lg shadow-accent/20">
          Crear cuenta gratis →
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-gray">
        © 2026 Tramicar. Todos los derechos reservados.
      </footer>
    </div>
  )
}
