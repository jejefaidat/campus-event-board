import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SavedEventsProvider } from "./SavedEventsContext";

export const metadata: Metadata = {
  title: "Campus Event Board",
  description: "Discover and save campus events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SavedEventsProvider>{children}</SavedEventsProvider>
      </body>
    </html>
  );
}
