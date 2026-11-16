import { events } from "../data";

const categoryStyles: Record<string, string> = {
  Tech: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Faith: "bg-purple-100 text-purple-800",
  Social: "bg-orange-100 text-orange-800",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            Campus life
          </p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Campus Event Board
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Find what’s happening on campus and make plans to join in.
          </p>
        </header>

        <section aria-label="Campus events">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Upcoming events</h2>
            <span className="text-sm text-slate-500">
              {events.length} events
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      categoryStyles[event.category] ??
                      "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {event.category}
                  </span>

                  <h3 className="mt-3 text-lg font-bold">{event.title}</h3>

                  <p className="mt-2 text-sm text-slate-600">
                    {new Date(`${event.date}T00:00:00`).toLocaleDateString(
                      "en-NG",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                    {" · "}
                    {event.time}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">{event.venue}</p>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
