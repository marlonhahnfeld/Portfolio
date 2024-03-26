import Header from "../components/Header";
import HeroSection from "../components/Herosection";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col overflow-y-auto pt-16">
        <HeroSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
