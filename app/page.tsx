"use client";

import { useState } from "react";
import { events } from "../data";

const categories = ["All", "Tech", "Sports", "Faith", "Social"];

const categoryStyles: Record<string, string> = {
  Tech: "bg-blue-100 text-blue-800",
  Sports: "bg-green-100 text-green-800",
  Faith: "bg-purple-100 text-purple-800",
  Social: "bg-orange-100 text-orange-800",
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

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
          <div className="mb-5">
            <h2 className="mb-3 text-xl font-semibold">Upcoming events</h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedCategory === category
                      ? "bg-indigo-700 text-white"
                      : "bg-white text-slate-700 hover:bg-indigo-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-4 text-sm text-slate-500">
            Showing {filteredEvents.length} events
          </p>

          {filteredEvents.length === 0 ? (
            <p className="rounded-xl bg-white p-8 text-center text-slate-600">
              No events found in this category.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
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
          )}
        </section>
      </div>
    </main>
  );
}
