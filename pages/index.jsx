import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header"
import Banner from "../components/Banner"

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Holiday Homes & Apparments</title>
        <link
          rel="icon"
          href="https://www.logoeps.net/wp-content/uploads/2016/12/airbnb_logo.png"
        />
      </Head>

      <Header></Header>
      <Banner></Banner>
    </div>
  );
};

export default Home;
