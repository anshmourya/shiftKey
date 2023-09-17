"use client";
import { useEffect } from "react";
import WhoWerAre from "@/components/WhoWerAre";
import Hero from "../components/Hero";
import { Service } from "@/components/Service";
import Statistic from "@/components/Statistic";
import OurVideo from "@/components/OurVideo";
import { FAQ } from "@/components/ui/FAQ";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Hero />
      <WhoWerAre />
      <Service />
      <Statistic />
      <OurVideo />
      <FAQ />
      <Footer />
    </>
  );
}
