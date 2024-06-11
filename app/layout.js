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
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://scontent.fjai1-3.fna.fbcdn.net/v/t39.30808-6/447681242_2312820462260381_4000141218117715_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=b32ddNDFFtUQ7kNvgE1G8OK&_nc_ht=scontent.fjai1-3.fna&oh=00_AYAgRJoeVY3_vB5jeZ-PGW9maFzeuzFgNZS0NC_Z7bbGoQ&oe=666DDFC5)`,
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
