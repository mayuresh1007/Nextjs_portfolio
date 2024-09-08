import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Mayuresh",
  description: "Portfolio next app of full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* this is as like outlet for main app and rendered to all pages  */}
        {/* <h3 className="text-center text-blue-600">item from root layout</h3>  */}
        {/* <NavBar/> self made  */}
        <div className="relative w-full flex items-center justify-center">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
