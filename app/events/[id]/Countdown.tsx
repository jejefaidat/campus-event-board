"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  date: string;
  time: string;
};

function getEventDate(date: string, time: string) {
  const [clock, period] = time.split(" ");
  const [hoursText, minutesText] = clock.split(":");

  let hours = Number(hoursText);
  const minutes = Number(minutesText);

  if (period.toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period.toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  const eventDate = new Date(`${date}T00:00:00`);
  eventDate.setHours(hours, minutes, 0, 0);

  return eventDate;
}

export default function Countdown({ date, time }: CountdownProps) {
  const [message, setMessage] = useState("Calculating countdown...");

  useEffect(() => {
    const eventDate = getEventDate(date, time);

    function updateCountdown() {
      const difference = eventDate.getTime() - Date.now();

      if (difference <= 0) {
        setMessage("This event has started.");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setMessage(`Starts in ${days} days ${hours} hrs`);
      } else if (hours > 0) {
        setMessage(`Starts in ${hours} hrs ${minutes} mins`);
      } else {
        setMessage(`Starts in ${minutes} mins`);
      }
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 60_000);

    return () => clearInterval(timer);
  }, [date, time]);

  return (
    <p className="mt-6 rounded-xl bg-indigo-50 p-4 font-semibold text-indigo-800">
      {message}
    </p>
  );
}
