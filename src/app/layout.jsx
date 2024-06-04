import { Inter } from "next/font/google";
import "./globals.css";
import HomeLayout from "@/components/homeLayout/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/logo.png.avif",
  },
  title: "Tutorial",
  description: "Tuorial App",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <HomeLayout>
          {children}
        </HomeLayout>
      </body>
    </html>
  );
}