import Gallery from "../Components/Gallery";
import HeroSection from "../Components/HeroSection";

const HomePage = () => {
  return (
    <>
      <section className="px-10 flex flex-col items-center justify-center mt-12 mx-auto">
        <HeroSection />
        <Gallery />
      </section>
    </>
  );
};

export default HomePage;