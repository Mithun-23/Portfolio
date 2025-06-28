
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    'Typing',
    'English Writing',
    'Canva (Basic)',
    'MS Word',
    'Google Docs',
    'Internet Research',
    'Communication',
    'Email/Calendar Handling',
    'AI Tools (Basic)'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core skills that help me deliver quality virtual assistance and content writing services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/5 cursor-pointer group"
            >
              <CardContent className="p-6">
                <p className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                  {skill}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
