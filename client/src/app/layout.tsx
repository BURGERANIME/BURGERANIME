import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BURGERANIME - Sally Edition",
  description: "BURGERANIME is a streaming website dedicated to anime enthusiasts, offering a wide range of anime series and movies. The site features a user-friendly interface, making it easy to navigate through various categories and genres. It primarily focuses on providing dubbed anime content, catering to viewers who prefer watching anime in Arabic/English.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
