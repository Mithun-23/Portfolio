
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import SampleWork from '@/components/SampleWork';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="mithun-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {/* Top Status Banner */}
        <div className="bg-primary/10 border-b py-2 px-6 text-center">
          <p className="text-sm text-primary font-medium">
            🟢 Available for Remote Internships
          </p>
        </div>

        {/* Navigation */}
        <nav className="fixed top-8 w-full bg-background/80 backdrop-blur-sm border-b z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold">Mithun Balaje</div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-sm hover:text-primary transition-colors">Skills</a>
              <a href="#work" className="text-sm hover:text-primary transition-colors">Work</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Sample Work Section */}
        <SampleWork />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="max-w-4xl mx-auto px-6 text-center text-sm text-muted-foreground">
            © 2024 K.A. Mithun Balaje. Open to Content Writing & Virtual Assistant Opportunities.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
