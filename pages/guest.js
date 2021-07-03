import Head from "next/head";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abhi-flix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Card
        title="Enjoy on your TV."
        desc=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more."
        image_path="/tv.png"
        side="left"
      />
      <Card
        title="Download your shows to watch offline."
        desc="Save your favourites easily and always have something to watch."
        image_path="/mobile-0819.jpg"
        side="right"
      />
      <Card
        title="Watch everywhere."
        desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image_path="/device-pile-in.png"
        side="left"
      />
      <Card
        title="Create profiles for children."
        desc="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        image_path="/child.png"
        side="right"
      />
      <Footer />
    </>
  );
}
