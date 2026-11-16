# Campus Event Board

A responsive campus events app built with Next.js, React, TypeScript, and Tailwind CSS. Students can discover events, search and filter the listings, view event details, and save events for later.

## Features

- Browse campus events in a responsive card layout
- Filter events by category: Tech, Sports, Faith, and Social
- Search events by title
- Sort events by date
- Open a details page for each event
- See a countdown to each event
- Save events and view them on the **My Events** page
- Keep saved events after refreshing the page
- Show a helpful message when no events match a search

## Tech stack

- Next.js App Router
- React
- TypeScript and JavaScript
- Tailwind CSS
- React Context for saved events
- Browser local storage for saved event IDs

## Getting started

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

On Windows PowerShell, if `npm` is blocked by the script execution policy, use `npm.cmd` instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Project structure

```text
app/
  events/
    [id]/
      Countdown.tsx
      page.tsx
  my-events/
    page.tsx
  SavedEventsContext.tsx
  layout.tsx
  page.tsx
data.js
```

## Event data

The campus event list is in `data.js`. Each event includes an ID, title, category, date, time, venue, image, and description.

To add or update an event, edit the list in `data.js`. Use a unique, URL-friendly ID such as `campus-tech-talk`.

## Saving events

Saved event IDs are managed with React Context and stored in the browser's local storage. Saved events are available on the **My Events** page in the same browser.
