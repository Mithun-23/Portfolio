
import { ArrowRight, Upload, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleViewWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // You can replace this with actual resume download link
    console.log('Resume download requested');
    window.open('resume.pdf', '_blank');
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Photo Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <div className="text-center text-muted-foreground">
                <img src="mithun.jpg" alt="mithun" className='w-48 h-48 bg-muted rounded-full flex items-center justify-center border-2 border-dashed border-muted-foreground/30'/>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Mithun Balaje</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-2">
              Content Writer & Virtual Assistant
            </p>
            
            <p className="text-muted-foreground mb-4 max-w-2xl">
              3rd Year B.Tech AI & Data Science Student at Kongu Engineering College, Erode (2027)
            </p>

            <p className="text-sm text-muted-foreground mb-8 max-w-2xl italic">
              Looking forward to work with top content companies like Zomato, Meesho, Wishup
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={handleDownloadResume} className="text-base px-8">
                Download Resume
                <Download className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleViewWork} className="text-base px-8">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
