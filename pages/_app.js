import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>فروشگاه فایل اسماعیل</title>
        <link />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
