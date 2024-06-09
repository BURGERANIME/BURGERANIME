
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Footer from "@/components/Footer";

import Header from "@/components/Header";


export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  

 


  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-gradient-to-b from-black/40 via-black/0 to-transparent">
      <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
