import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
// import Impact from '@/components/Impact';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      {/* <Impact /> */}
      <Experience />
      <Contact />
    </main>
  );
}
