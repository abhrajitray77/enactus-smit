import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../Components/Header";
import Backdrop from "../Components/Backdrop";
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className="">    
        <Header />
        <Component {...pageProps} />
      </div>
        );
}
