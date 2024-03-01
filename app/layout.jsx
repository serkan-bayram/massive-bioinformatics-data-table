import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Massive Bioinformatics",
  description: "Massive Bioinformatics Front-end Internship Assesment",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-background" lang="en">
      <head>
        <script
          defer
          src="https://kit.fontawesome.com/7ff7410141.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
