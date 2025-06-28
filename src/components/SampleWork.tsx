
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SampleWork = () => {
  const samples = [
    {
      title: "5 Simple Habits That Boost Your Daily Productivity",
      type: "Blog Introduction",
      content: "We all want to be more productive, but sometimes the biggest changes come from the smallest habits. Whether you're working from home, studying for exams, or juggling multiple projects, these five simple habits can help you stay focused and get more done without burning out.\n\nIn this post, I'll share practical tips that have worked for students and professionals alike — no complicated systems or expensive tools required. Just simple, everyday changes that add up to make a real difference in how much you accomplish."
    },
    {
      title: "Research Summary: Top 5 Social Media Trends for Small Businesses",
      type: "Virtual Assistant Task",
      content: "Subject: Social Media Research Summary - Week of [Date]\n\nHi [Client Name],\n\nI've completed the research you requested on current social media trends for small businesses. Here are the key findings:\n\n• Short-form video content (15-30 seconds) gets 3x more engagement\n• Behind-the-scenes content builds stronger customer connections\n• User-generated content increases trust by 79%\n• Interactive polls and Q&As boost audience participation\n• Consistent posting schedules improve reach by 23%\n\nI've also prepared a detailed report with specific examples and actionable steps. Ready to discuss implementation strategies whenever convenient.\n\nBest regards,\nMithun"
    }
  ];

  return (
    <section id="work" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sample Work</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Examples of my content writing and virtual assistant capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {samples.map((sample, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{sample.title}</CardTitle>
                  <Badge variant="secondary">{sample.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed">
                    {sample.content}
                  </pre>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Sample work - Full projects available upon request
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleWork;
