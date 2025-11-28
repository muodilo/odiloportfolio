import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import AskAIButton from "@/components/ask-ai-button";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odilo Murindahabi - Frontend Developer & Designer",
  description: "Passionate frontend developer and designer crafting stunning, performant digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased`}
      >
        {children}
        <Footer />
        <AskAIButton />
      </body>
    </html>
  );
}
