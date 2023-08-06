import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Movies with Next-13",
  description: "Movies with Next-13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <header>
        <h2 className="text-lg bg-gray-800 text-cyan-50">
          Movies with Next 13
        </h2>
      </header> */}
      <body className={`${montserrat.className} mx-28 my-12`}>{children}</body>
    </html>
  );
}
