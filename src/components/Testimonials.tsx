
import { Star, Quote, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Testimonials = () => {
  const placeholderTestimonials = [
    {
      name: "Sarah Johnson",
      role: "Startup Founder",
      company: "TechVenture Inc.",
      content: "Placeholder for future client testimonial. Looking forward to working with innovative startups and established companies.",
      rating: 5,
      isPlaceholder: true
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "E-commerce Solutions",
      content: "Placeholder for content writing project feedback. Excited to help businesses create compelling content that drives results.",
      rating: 5,
      isPlaceholder: true
    }
  ];

  const futureGoals = [
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Building long-term partnerships with 100% client satisfaction rate",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Project Success",
      description: "Delivering measurable results that drive business growth",
      color: "text-teal-600"
    },
    {
      icon: Star,
      title: "Quality Excellence",
      description: "Maintaining the highest standards in every project delivered",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to create success stories with forward-thinking businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-teal-500 text-white px-4 py-1 text-xs">
                Future Client
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-200 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {futureGoals.map((goal, index) => {
            const IconComponent = goal.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`w-8 h-8 ${goal.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{goal.title}</h3>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
