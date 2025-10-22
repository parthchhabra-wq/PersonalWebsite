"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBg";

const FloatingNav = dynamic(
  () =>
    import("@/components/ui/FloatingNavbar").then((mod) => ({
      default: mod.FloatingNav,
    })),
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const Home = () => {
  return (
    <BackgroundGradientAnimation>
      <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          <Footer />
        </div>
      </main>
    </BackgroundGradientAnimation>
  );
};

export default Home;
