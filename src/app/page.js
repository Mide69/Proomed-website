import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import HomeContents from "@/components/HomeContents";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeContents />
    </>
  );
}
