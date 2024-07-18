import Info from "@/components/root/Info";
import Intro from "@/components/root/Intro";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная | Клуб Японской Культуры"
};

export default function Home() {
  return (
    <>
      <Intro />
      <Info />
    </>
  );
}
