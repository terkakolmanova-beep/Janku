import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JANKU CZ – Pronájem skladů, kanceláří a bydlení v Libereckém kraji",
  description:
    "Rodinný pronájem kancelářských, skladových a obytných prostorů v Chrastavě a Liberci. Flexibilní podmínky, osobní přístup.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
