// Team Dashboard — Mock Data & Types

export type Role = 'CEO/CTO' | 'Comercial' | 'Advisor'

export interface TeamUser {
  id: string
  name: string
  role: Role
  password: string
  avatar: string
  color: string
}

export const TEAM_USERS: TeamUser[] = [
  { id: 'matias', name: 'Matias', role: 'CEO/CTO', password: 'ceo123', avatar: '🧠', color: '#818cf8' },
  { id: 'jony', name: 'Jony', role: 'Comercial', password: 'com123', avatar: '🤝', color: '#34d399' },
  { id: 'diego', name: 'Diego', role: 'Advisor', password: 'adv123', avatar: '🎯', color: '#f59e0b' },
]

export interface RoadmapPhase {
  id: string
  name: string
  period: string
  status: 'done' | 'active' | 'upcoming'
  milestones: { text: string; done: boolean }[]
}

export const INITIAL_ROADMAP: RoadmapPhase[] = [
  {
    id: 'mvp', name: 'MVP', period: 'Feb — Mar 2026', status: 'active',
    milestones: [
      { text: 'Landing page + auth', done: true },
      { text: 'Flujo vendedor completo', done: true },
      { text: 'Flujo comprador completo', done: true },
      { text: 'Informes y diagnóstico', done: true },
      { text: 'Firma biométrica 08D', done: true },
      { text: 'Dashboard interno equipo', done: false },
      { text: 'Simulación demo realista', done: false },
    ]
  },
  {
    id: 'convenio', name: 'Convenio DNRPA', period: 'Abr — Jun 2026', status: 'upcoming',
    milestones: [
      { text: 'Documento propuesta DNRPA', done: true },
      { text: 'Contacto vía senadores', done: false },
      { text: 'Reunión DNRPA formal', done: false },
      { text: 'API RENAPER (Nosis/VU Security)', done: false },
      { text: 'Piloto con 1 registro automotor', done: false },
    ]
  },
  {
    id: 'beta', name: 'Beta Cerrada', period: 'Jul 2026', status: 'upcoming',
    milestones: [
      { text: '50 transferencias reales', done: false },
      { text: 'Onboard 3 registros automotores', done: false },
      { text: 'Escrow bancario integrado', done: false },
      { text: 'Métricas y analytics', done: false },
    ]
  },
  {
    id: 'scale', name: 'Scale', period: 'Ago 2026+', status: 'upcoming',
    milestones: [
      { text: 'API para concesionarias', done: false },
      { text: 'Integración MercadoLibre', done: false },
      { text: 'App mobile nativa', done: false },
      { text: 'Expansión nacional', done: false },
    ]
  },
]

export interface Meeting {
  id: string
  date: string
  title: string
  attendees: string[]
  notes: string
  actionItems: { text: string; assignee: string; done: boolean }[]
}

export const INITIAL_MEETINGS: Meeting[] = [
  {
    id: 'm1', date: '2026-02-27', title: 'Sync semanal — Sprint MVP',
    attendees: ['matias', 'jony', 'diego'],
    notes: 'Se revisó el avance del MVP. Dashboard1 completo con 6 páginas. Flujo vendedor y comprador funcionando. Firma biométrica diseñada. Diego impresionado con el ritmo. Discusión sobre estrategia DNRPA: no pedir nada a Diego todavía, mostrar avances y que él proponga involucrarse.',
    actionItems: [
      { text: 'Armar dashboard interno del equipo', assignee: 'matias', done: false },
      { text: 'Preparar demo realista para inversores', assignee: 'matias', done: false },
      { text: 'Mapear contactos registros automotores CABA', assignee: 'jony', done: false },
      { text: 'Revisar propuesta DNRPA y dar feedback', assignee: 'diego', done: false },
    ]
  },
  {
    id: 'm2', date: '2026-02-25', title: 'Kickoff Tramicar',
    attendees: ['matias', 'jony'],
    notes: 'Definición de sociedad 60/40. Scope del MVP. Jony se encarga de lo comercial, Matias de tecnología. Objetivo: tener demo funcional para fin de febrero.',
    actionItems: [
      { text: 'Construir MVP Next.js + Supabase', assignee: 'matias', done: true },
      { text: 'Armar propuesta DNRPA', assignee: 'matias', done: true },
      { text: 'Identificar primeros registros target', assignee: 'jony', done: false },
    ]
  },
]

export interface Idea {
  id: string
  title: string
  description: string
  status: 'nueva' | 'evaluando' | 'aprobada' | 'descartada'
  author: string
  createdAt: string
}

export const INITIAL_IDEAS: Idea[] = [
  { id: 'i1', title: 'Integración MercadoLibre', description: 'Publicar autos en ML con transferencia garantizada por Tramicar. Diferencial enorme vs publicación normal.', status: 'evaluando', author: 'diego', createdAt: '2026-02-27' },
  { id: 'i2', title: 'App mobile nativa', description: 'PWA funciona bien pero una app nativa daría más confianza para firma biométrica y fotos de documentos.', status: 'nueva', author: 'matias', createdAt: '2026-02-27' },
  { id: 'i3', title: 'API para concesionarias', description: 'Ofrecer API white-label para que concesionarias integren Tramicar en su flujo de venta.', status: 'aprobada', author: 'jony', createdAt: '2026-02-26' },
  { id: 'i4', title: 'Seguro de transferencia', description: 'Partnership con aseguradora para ofrecer seguro que cubra problemas post-transferencia.', status: 'nueva', author: 'diego', createdAt: '2026-02-26' },
  { id: 'i5', title: 'Blockchain para trazabilidad', description: 'Registro inmutable de cada paso de la transferencia. Descartado: genera ruido con reguladores argentinos.', status: 'descartada', author: 'matias', createdAt: '2026-02-25' },
]

export interface Blocker {
  id: string
  title: string
  description: string
  priority: 'alta' | 'media' | 'baja'
  assignee: string
  status: 'abierta' | 'en-progreso' | 'resuelta'
  createdAt: string
}

export const INITIAL_BLOCKERS: Blocker[] = [
  { id: 'b1', title: 'Acceso API RENAPER', description: 'Necesitamos convenio o intermediario (Nosis ID, VU Security) para verificación biométrica real. Sin esto la firma 08D es solo visual.', priority: 'alta', assignee: 'diego', status: 'abierta', createdAt: '2026-02-27' },
  { id: 'b2', title: 'Definir escrow bancario', description: 'Evaluar Bind, Ualá Business o MercadoPago como escrow para las transferencias. Smart contracts descartados.', priority: 'alta', assignee: 'jony', status: 'abierta', createdAt: '2026-02-26' },
  { id: 'b3', title: 'Contacto con DNRPA', description: 'Matias tiene contactos con senadores pero falta activar. Diego puede abrir puertas vía Oxenford.', priority: 'media', assignee: 'matias', status: 'abierta', createdAt: '2026-02-25' },
  { id: 'b4', title: 'Inversión inicial 10k USD', description: 'Jony 2 aún no confirmó el préstamo ni la devolución de Diego. Necesario para hosting, API costs, y primeros meses.', priority: 'media', assignee: 'jony', status: 'en-progreso', createdAt: '2026-02-25' },
]

export interface Resource {
  id: string
  title: string
  url: string
  type: 'repo' | 'doc' | 'link' | 'tool'
  addedBy: string
  addedAt: string
}

export const INITIAL_RESOURCES: Resource[] = [
  { id: 'r1', title: 'Repo Tramicar (GitHub)', url: 'https://github.com/aidaptivecom-pixel/Tramicar', type: 'repo', addedBy: 'matias', addedAt: '2026-02-25' },
  { id: 'r2', title: 'Propuesta DNRPA (PDF)', url: '#', type: 'doc', addedBy: 'matias', addedAt: '2026-02-25' },
  { id: 'r3', title: 'Acuerdo de socios (PDF)', url: '#', type: 'doc', addedBy: 'matias', addedAt: '2026-02-25' },
  { id: 'r4', title: 'Plan técnico Tramicar', url: '#', type: 'doc', addedBy: 'matias', addedAt: '2026-02-25' },
  { id: 'r5', title: 'Supabase — Star CRM (referencia)', url: 'https://wuoptaejdobinsmmkmoq.supabase.co', type: 'tool', addedBy: 'matias', addedAt: '2026-02-26' },
  { id: 'r6', title: 'Deploy Vercel', url: 'https://tramicar.vercel.app', type: 'link', addedBy: 'matias', addedAt: '2026-02-26' },
]

export interface Activity {
  id: string
  user: string
  action: string
  target: string
  timestamp: string
}

export const INITIAL_ACTIVITIES: Activity[] = [
  { id: 'a1', user: 'matias', action: 'completó', target: 'Firma biométrica 08D', timestamp: '2026-02-27T13:00:00' },
  { id: 'a2', user: 'matias', action: 'completó', target: 'Flujo comprador real-time', timestamp: '2026-02-27T12:30:00' },
  { id: 'a3', user: 'diego', action: 'comentó en', target: 'Integración MercadoLibre', timestamp: '2026-02-27T11:00:00' },
  { id: 'a4', user: 'matias', action: 'completó', target: 'Step tracker vendedor (11 pasos)', timestamp: '2026-02-27T10:00:00' },
  { id: 'a5', user: 'jony', action: 'creó idea', target: 'API para concesionarias', timestamp: '2026-02-26T18:00:00' },
  { id: 'a6', user: 'matias', action: 'creó', target: 'Propuesta DNRPA', timestamp: '2026-02-25T16:00:00' },
  { id: 'a7', user: 'matias', action: 'desplegó', target: 'MVP en Vercel', timestamp: '2026-02-25T14:00:00' },
  { id: 'a8', user: 'jony', action: 'se unió a', target: 'Tramicar', timestamp: '2026-02-25T10:00:00' },
]
