import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
  title: "Mayuresh Personal Portfolio",
  description:
    "Software Engineer with 3 years of experience in building scalable web applications and cutting-edge solutions. Passionate about delivering efficient and innovative software solutions.",
  openGraph: {
    type: 'website',
    title: "Mayuresh - Software Engineer",
    description:
      "Software Engineer with 3 years of experience specializing in web development, cloud solutions, and software architecture.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/77499509?v=4",
        alt: "Mayuresh Kumbhar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayuresh - Software Engineer",
    description:
      "3+ years of experience in full-stack development, web development, single-page applications, and AI integration.",
    image: "https://avatars.githubusercontent.com/u/77499509?v=4",
  },
  keywords: "Software Engineer, Full-Stack Developer, Web Development, JavaScript, React, Next.js, Node.js, web development, single page applications",
  author: "Mayuresh Kumbhar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
