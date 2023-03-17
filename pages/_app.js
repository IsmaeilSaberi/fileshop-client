import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>فروشگاه فایل اسماعیل</title>
        <link />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
