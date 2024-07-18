import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Клуб Японской Культуры",
  description: (
    "Клуб Японской Культуры РТУ МИРЭА ждет новых участников!\n" +
    "Фестивали, турниры, показы фильмов - всё это и еще много мероприятий, которые проводит наш клуб."
  )
};

export default function Layout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
