import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body  className=" bg-gradient-to-b  from-black/40 via-black/0 to-transparent">
          <Header />
            {children}
          <Footer />
        </body>
      </html>
    );
  }