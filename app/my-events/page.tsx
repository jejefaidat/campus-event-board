"use client";

import Link from "next/link";
import { events } from "../../data";
import { useSavedEvents } from "../SavedEventsContext";

export default function MyEventsPage() {
  const { savedEventIds, toggleSavedEvent } = useSavedEvents();
  const savedEvents = events.filter((event) =>
    savedEventIds.includes(event.id),
  );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
              Your list
            </p>
            <h1 className="mt-2 text-3xl font-bold">My Events</h1>
            <p className="mt-3 text-slate-600">
              Events you’ve saved for later.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-lg border border-indigo-200 px-4 py-2 font-semibold text-indigo-800 hover:bg-indigo-50"
          >
            Browse events
          </Link>
        </header>

        {savedEvents.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <h2 className="text-xl font-semibold">No saved events yet</h2>
            <p className="mt-2 text-slate-600">
              Browse campus events and save the ones you’re interested in.
            </p>
            <Link
              href="/"
              className="mt-5 inline-block rounded-lg bg-indigo-700 px-4 py-2 font-semibold text-white hover:bg-indigo-800"
            >
              Find an event
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-sm font-semibold text-indigo-700">
                    {event.category}
                  </p>
                  <h2 className="mt-2 text-lg font-bold">{event.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">
                    {event.date} · {event.time}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{event.venue}</p>

                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/events/${event.id}`}
                      className="rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800"
                    >
                      View details
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleSavedEvent(event.id)}
                      className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
