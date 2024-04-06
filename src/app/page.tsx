import { HeroSection } from "@/components/HeroSection";
import { MeteorsDemo } from "@/components/MeteorsDemo";
import { Button } from "@/components/ui/moving-border";
import ProjectsPage from "./projects/page";


export default function Home() {
  return (
    <h1 className="text-2xl text-center" >
      <MeteorsDemo/>
      <HeroSection/>
   
    </h1>
  );
}
