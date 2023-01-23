import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../Components/Header";
import Backdrop from "../Components/Backdrop";
import Footer from "../Components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="">    
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
        );
}
