import Header from "@/components/root/Header";
import Footer from "@/components/root/Footer";

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
