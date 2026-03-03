import EarnRewards from "@/components/EarnRewards";
import Hero from "@/components/Hero";
import Trending from "@/components/Trending";
import WhyBuy from "@/components/WhyBuy";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <EarnRewards />
      <WhyBuy />
    </>
  );
}
