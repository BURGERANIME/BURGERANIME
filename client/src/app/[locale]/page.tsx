import {useTranslations} from 'next-intl';
import DescMainScene from "@/components/DescMainScene";
import MainScene from "@/components/MainScene";
import Header from '@/components/Header';


export default function Home() {

  const t = useTranslations('Header');

  return (
    <main>
      <MainScene />
      <DescMainScene />
    </main>
  );
}
