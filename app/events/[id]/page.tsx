import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "../../../data";

type EventDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-8">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-sm">
        <img
          src={event.image}
          alt={event.title}
          className="h-64 w-full object-cover sm:h-80"
        />

        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold text-indigo-700">
            {event.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold">{event.title}</h1>

          <div className="mt-5 space-y-2 text-slate-600">
            <p>
              <strong>Date:</strong>{" "}
              {new Date(`${event.date}T00:00:00`).toLocaleDateString("en-NG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Time:</strong> {event.time}
            </p>
            <p>
              <strong>Venue:</strong> {event.venue}
            </p>
          </div>

          <p className="mt-6 leading-7 text-slate-700">{event.description}</p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-lg bg-indigo-700 px-4 py-2 font-semibold text-white hover:bg-indigo-800"
          >
            Back to events
          </Link>
        </div>
      </article>
    </main>
  );
}
