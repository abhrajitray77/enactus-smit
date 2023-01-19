import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../Components/Banner";
import { CardsSlide } from "../Components/CardsSlide";
import Header from "../Components/Header";
import teams from "./teams";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Enactus SMIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <section className="relative flex bg-gradient-to-r from-yellow-400">
        <div className="flex flex-col ml-20 w-[50%] mt-16 mb-24">
          <h1 className="text-[5.2rem] font-semibold text-gray-900 bg-gradient-to-bl from-purple-500 via-slate-800 to-slate-900
          bg-clip-text text-transparent">Who We Are</h1>
          <p className="text-[1.5rem] text-gray-900 font-medium indent-20 mt-10 leading-relaxed">
            Enactus is a network of global leaders that use effective business strategies
            for positive social and environmental impact. It is a non-profit organisation
            that uses the United Nations 17 Sustainable Development Goals as a framework
            to bring about a change and create a better world for everyone.
            Enactus SMIT is a newly formed chapter of this global platform. Since our
            establishment in 2022, we've been actively working on our first project
            अन्न-Drishti. Backed by a strong core team and supportive local businesses,
            we aim to make our surroundings more sustainable than ever.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
