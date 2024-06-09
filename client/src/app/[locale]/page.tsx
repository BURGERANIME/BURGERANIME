'use client';
import {useTranslations} from 'next-intl';
import DescMainScene from "@/components/DescMainScene";
import MainScene from "@/components/MainScene";
import { useEffect, useState } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {

  const t = useTranslations('Header');

   //
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
   }, [token , pathname]);
 
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
             //router.push('/');
             window.location.href = '/';
           }
         })
         .catch(() => {
           localStorage.removeItem("token");
           router.push('/');
           //window.location.href = '/';
         });
     } else {
       //router.push('/');
       //window.location.href = '/';
     }
   }, [pathname , token]);

  return (
    <main>
      <MainScene />
      <DescMainScene />
    </main>
  );
}
