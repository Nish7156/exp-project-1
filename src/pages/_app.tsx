import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="" id="wrapper">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
