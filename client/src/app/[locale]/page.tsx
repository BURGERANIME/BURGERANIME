'use client';
import {useTranslations} from 'next-intl';
import DescMainScene from "@/components/DescMainScene";
import MainScene from "@/components/MainScene";

export default function Home() {

  const t = useTranslations('Header');

   

  return (
    <main>
      <MainScene />
      <DescMainScene />
    </main>
  );
}
