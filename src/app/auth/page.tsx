'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function AuthPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // MVP: skip real auth, go to dashboard
    setTimeout(() => {
      router.push('/dashboard')
    }, 800)
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-5">
      <Link href="/" className="font-display text-2xl font-bold flex items-center gap-2 mb-10">
        <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-base">🚗</div>
        Trami<span className="text-accent2">car</span>
      </Link>

      <div className="w-full max-w-sm">
        {/* Tabs */}
        <div className="flex bg-surface rounded-xl p-1 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${isLogin ? 'bg-accent text-white' : 'text-gray'}`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all ${!isLogin ? 'bg-accent text-white' : 'text-gray'}`}
          >
            Crear cuenta
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-3.5 bg-surface border border-border2 rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3.5 bg-surface border border-border2 rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3.5 bg-surface border border-border2 rounded-xl text-white text-sm placeholder:text-gray focus:outline-none focus:border-accent transition-all"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent2 transition-all disabled:opacity-50 mt-2"
          >
            {loading ? '...' : isLogin ? 'Entrar' : 'Crear cuenta'}
          </button>
        </form>
      </div>
    </div>
  )
}
