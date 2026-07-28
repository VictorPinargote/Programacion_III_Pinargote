import { useState } from 'react'

const contactInfo = [
  {
    title: 'Correo',
    value: 'hola@devacademy.es',
    href: 'mailto:hola@devacademy.es',
    detail: 'Respondemos dudas sobre cursos, horarios e inscripciones.',
  },
  {
    title: 'Teléfono',
    value: '+34 912 345 678',
    href: 'tel:+34912345678',
    detail: 'Atención de lunes a viernes, 9:00 a 18:00.',
  },
  {
    title: 'Dirección',
    value: 'Calle del Código 42, 28001 Madrid, España',
    href: 'https://maps.google.com/?q=Calle%20del%20Codigo%2042%2028001%20Madrid%20Espa%C3%B1a',
    detail: 'Oficina principal para asesorías y soporte académico.',
  },
]

export default function ContactUsTws() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-gray-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <span className="mb-3 inline-block rounded bg-blue-600 px-2 py-0.5 text-sm font-medium">
            DevCursos
          </span>
          <h1 className="mb-3 text-4xl font-bold">Contáctanos</h1>
          <p className="max-w-2xl text-gray-400">
            Escríbenos para resolver dudas sobre nuestros cursos, planes de estudio o procesos de
            inscripción.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase text-blue-300">
                  {item.title}
                </p>
                <a
                  href={item.href}
                  target={item.title === 'Dirección' ? '_blank' : undefined}
                  rel={item.title === 'Dirección' ? 'noreferrer' : undefined}
                  className="mt-2 block text-lg font-bold text-white hover:text-blue-300"
                >
                  {item.value}
                </a>
                <p className="mt-2 text-sm text-gray-400">{item.detail}</p>
              </article>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white p-6 text-gray-900 shadow-sm">
            <h2 className="text-2xl font-bold">Envíanos un mensaje</h2>
            <p className="mt-2 text-sm text-gray-500">
              Completa tus datos y un asesor académico te responderá pronto.
            </p>

            {sent && (
              <div className="mt-4 rounded border border-green-300 bg-green-50 p-3 text-sm text-green-800">
                Mensaje enviado correctamente (demo).
              </div>
            )}

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-medium">
                Nombre
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>

              <label className="text-sm font-medium">
                Correo
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm font-medium">
              Teléfono
              <input
                name="phone"
                type="tel"
                placeholder="+593 99 999 9999"
                className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>

            <label className="mt-4 block text-sm font-medium">
              Mensaje
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Cuéntanos en qué podemos ayudarte"
                className="mt-1 w-full resize-none rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </label>

            <button
              type="submit"
              className="mt-5 rounded bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
