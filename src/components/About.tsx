
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-center text-muted-foreground">
            Hi, I'm Mithun — a hardworking and curious student passionate about writing, organizing, 
            and supporting remote teams. With a background in AI and a love for clear communication, 
            I enjoy helping others get things done.
          </p>
          
          <p className="text-lg leading-relaxed text-center text-muted-foreground mt-6">
            I've coordinated college events and led Industrial Visits for my class, which taught me 
            real-world planning and teamwork. I'm now looking forward to working with top companies 
            that value content, communication, and virtual assistance — and I'm ready to grow while I contribute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
