import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { FeaturesSection } from "@/components/Features";
import Product from "@/components/Product"
import Profeatures from "@/components/Profeatures"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection/>
      <Product/>
      <Profeatures/>
    </>
  );
}
