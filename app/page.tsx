import Advantages from "./components/Advantages";
import Features from "./components/Features";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Advantages />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
