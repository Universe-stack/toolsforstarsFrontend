import Image from "next/image";
import Navbar from "./component/Navbar"
import Hero from "./component/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar />
      <Hero />
    </main>
  );
}
