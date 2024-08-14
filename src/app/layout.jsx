import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Service",
  description: "A tech developer service offers expert guidance and solutions in software development, encompassing areas like web and mobile app creation, cloud computing, and cyber-security. These services typically include custom software development, system integration, and IT consulting to optimize",
  openGraph: {
    type: "website",
    title: "Developer Service",
    url: "https://techsolvering.netlify.app/",
    image: "https://images.pexels.com/photos/5060973/pexels-photo-5060973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "A tech developer service offers expert guidance and solutions in software development, encompassing areas like web and mobile app creation, cloud computing, and cyber-security. These services typically include custom software development, system integration, and IT consulting to optimize"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:description" content={metadata.openGraph.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
