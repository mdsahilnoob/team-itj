import { GlowingStarsBackgroundCardPreview } from "@/components/Cards";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { NavbarDemo } from "@/components/Navbar";


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <NavbarDemo />
      <HeroHighlightDemo />
      <GlowingStarsBackgroundCardPreview />
    </main>
  );
}
