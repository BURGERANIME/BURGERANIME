'use client';
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const server = process.env.NEXT_PUBLIC_SERVER_URL;
  const pathname = usePathname();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      if (storedToken && storedToken !== "undefined") {
        setToken(storedToken);
      } else {
        localStorage.removeItem("token");
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      axios.post(`${server}/api/accounts/authenticate`, { token })
        .then((res) => {
          const newToken = res.data.token;
          if (newToken && newToken !== "undefined") {
            setToken(newToken);
            localStorage.setItem('token', newToken);
          } else {
            localStorage.removeItem("token");
            router.push('/');
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          router.push('/');
        });
    } else {
      router.push('/');
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-black/40 via-black/0 to-transparent">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
