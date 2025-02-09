import type { Metadata } from "next";
import { Capriola } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";


const capriola = Capriola({
  weight: [ '400'],
  style: ['normal'],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Vinishoes",
  description: "Loja online Vinishoes, as melhores ofertas e promoções.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      
      <body className={capriola.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
