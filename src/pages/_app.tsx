import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../Components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">    
      <Header />
      <Component {...pageProps} />
  
    </div>
  );
}
