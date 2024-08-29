import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav.js";
import Footer from "../components/Footer.js";

export const metadata = {
  title: "Portfolio",
  description: "kshitiz's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/bg_port.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          // Optional: Add some border-radius to soften the corners
        }}
    
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
