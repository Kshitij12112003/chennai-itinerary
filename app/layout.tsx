import type { Metadata } from "next";

export const metadata: Metadata = {

  title: "A Day in Chennai — Dear Disha",

  description: "A beautiful one-day Chennai itinerary for Disha.",

};

export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en">

      <body>{children}</body>

    </html>

  );

}
