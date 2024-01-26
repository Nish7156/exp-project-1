import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import SideMenus from "@/components/Layout/SideMenus";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="" id="wrapper">
      {/* open */}
      <Header />
      <Component {...pageProps} />
      <Footer/>
      <SideMenus/>
    </div>
  );
}
