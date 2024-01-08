import { AuthProvider } from "@/core/contexts/AuthContext";
import "./globals.css";

import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";

// Font files can be colocated inside of `app`
const Gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "TerraX",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width" />
        </head>
        <body className={Gilroy.className}>
          <NextTopLoader color="#FFFFFF" showSpinners={false} />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
