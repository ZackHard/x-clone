import { Inter } from "next/font/google";
import News from "./components/News";
import Sidebar from "./components/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "A clone of X website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <div className="flex justify-between max-w-6xl mx-auto">
            <div className="">
              <Sidebar />
            </div>
            <div className="">{children}</div>
            <div className="">
              <News />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
