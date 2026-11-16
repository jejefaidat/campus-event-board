"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type SavedEventsContextValue = {
  savedEventIds: string[];
  toggleSavedEvent: (id: string) => void;
  isSaved: (id: string) => boolean;
};

const SavedEventsContext = createContext<SavedEventsContextValue | null>(null);

export function SavedEventsProvider({ children }: { children: ReactNode }) {
  const [savedEventIds, setSavedEventIds] = useState<string[]>([]);
  const [storageLoaded, setStorageLoaded] = useState(false);

  useEffect(() => {
    const storedIds = window.localStorage.getItem("campus-saved-events");

    if (storedIds) {
      try {
        const parsedIds: unknown = JSON.parse(storedIds);

        if (
          Array.isArray(parsedIds) &&
          parsedIds.every((id) => typeof id === "string")
        ) {
          setSavedEventIds(parsedIds);
        }
      } catch {
        window.localStorage.removeItem("campus-saved-events");
      }
    }

    setStorageLoaded(true);
  }, []);

  useEffect(() => {
    if (storageLoaded) {
      window.localStorage.setItem(
        "campus-saved-events",
        JSON.stringify(savedEventIds),
      );
    }
  }, [savedEventIds, storageLoaded]);

  function toggleSavedEvent(id: string) {
    setSavedEventIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((savedId) => savedId !== id)
        : [...currentIds, id],
    );
  }

  function isSaved(id: string) {
    return savedEventIds.includes(id);
  }

  return (
    <SavedEventsContext.Provider
      value={{ savedEventIds, toggleSavedEvent, isSaved }}
    >
      {children}
    </SavedEventsContext.Provider>
  );
}

export function useSavedEvents() {
  const context = useContext(SavedEventsContext);

  if (!context) {
    throw new Error("useSavedEvents must be used inside SavedEventsProvider");
  }

  return context;
}
