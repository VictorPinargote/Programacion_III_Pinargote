// src/pages/ContactUsTW.tsx

import { useState } from 'react'

interface ContactValues {
  name:    string
  email:   string
  message: string
}

type ContactErrors = Partial<Record<keyof ContactValues, string>>

export default function ContactUsTW() {
  const [values,  setValues]  = useState<ContactValues>({ name: '', email: '', message: '' })
  const [errors,  setErrors]  = useState<ContactErrors>({})
  const [success, setSuccess] = useState(false)

  function validate(): boolean {
    const e: ContactErrors = {}
    if (!values.name.trim())         e.name    = 'El nombre es requerido'
    if (!values.email.includes('@')) e.email   = 'Email inválido'
    if (!values.message.trim())      e.message = 'El mensaje es requerido'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setValues({ name: '', email: '', message: '' })
    setTimeout(() => setSuccess(false), 3000)
  }

  const inputClass = (field: keyof ContactValues) =>
    `w-full rounded-xl border bg-white/5 px-4 py-2.5 text-white placeholder:text-white/40 outline-none transition focus:ring-2 ${
      errors[field]
        ? 'border-red-500/60 focus:ring-red-500/30'
        : 'border-white/10 focus:ring-blue-500/40'
    }`

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto max-w-xl px-4">
        <h1 className="text-2xl font-extrabold text-white mb-2">Contáctanos</h1>
        <p className="text-white/50 mb-8">
          ¿Tenés alguna pregunta? Escribinos y te respondemos a la brevedad.
        </p>

        {success && (
          <div className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm text-emerald-300">
            ✅ Mensaje enviado correctamente (demo)
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div>
            <label className="mb-1 block text-sm font-semibold text-white/80">Nombre</label>
            <input
              type="text"
              placeholder="Tu nombre"
              value={values.name}
              onChange={e => {
                setValues(v => ({ ...v, name: e.target.value }))
                setErrors(v => ({ ...v, name: undefined }))
              }}
              className={inputClass('name')}
            />
            {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-white/80">Correo electrónico</label>
            <input
              type="email"
              placeholder="tu@correo.com"
              value={values.email}
              onChange={e => {
                setValues(v => ({ ...v, email: e.target.value }))
                setErrors(v => ({ ...v, email: undefined }))
              }}
              className={inputClass('email')}
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
          </div>

          <div>
            <label className="mb-1 block text-sm font-semibold text-white/80">Mensaje</label>
            <textarea
              rows={5}
              placeholder="Contanos en qué te podemos ayudar..."
              value={values.message}
              onChange={e => {
                setValues(v => ({ ...v, message: e.target.value }))
                setErrors(v => ({ ...v, message: undefined }))
              }}
              className={inputClass('message')}
            />
            {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="h-11 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-500 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  )
}
