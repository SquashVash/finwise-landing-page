import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Description from "@/components/Description";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Description />
      <Container>
        <Benefits />

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
