import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Клуб Японской Культуры РТУ МИРЭА",
  description: (
    "Клуб Японской Культуры РТУ МИРЭА ждет новых участников!\n" +
    "Фестивали, турниры, показы фильмов - всё это и еще много мероприятий, которые проводит наш клуб."
  ),
  verification: {
    google: 'fLfnDHcR31b2YYlMb3WYM15oADMd6BDV8IJ_B8-BgZo',
    yandex: '9f205069c0823269'
  }
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
