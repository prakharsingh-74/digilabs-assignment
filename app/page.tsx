import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FeaturesSection } from "@/components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesSection/>
    </>
  );
}
