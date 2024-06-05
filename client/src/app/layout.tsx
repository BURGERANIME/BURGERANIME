import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BURGERANIME - Sally Edition",
  description: "BURGERANIME is a streaming website dedicated to anime enthusiasts, offering a wide range of anime series and movies. The site features a user-friendly interface, making it easy to navigate through various categories and genres. It primarily focuses on providing dubbed anime content, catering to viewers who prefer watching anime in Arabic/English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
