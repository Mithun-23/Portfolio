
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const futureCertifications = [
    {
      name: "Google Workspace Certification",
      provider: "Google",
      status: "Planned",
      description: "Comprehensive training on Google Docs, Sheets, Drive, and Gmail management"
    },
    {
      name: "Content Marketing Certification",
      provider: "HubSpot",
      status: "In Progress",
      description: "Advanced content strategy, SEO writing, and digital marketing fundamentals"
    },
    {
      name: "Virtual Assistant Certification",
      provider: "IVAA (International Virtual Assistants Association)",
      status: "Planned",
      description: "Professional VA standards, client management, and business operations"
    }
  ];

  const currentSkills = [
    "Academic Excellence in AI & Data Science",
    "Advanced English Communication",
    "Microsoft Office Suite Proficiency",
    "Google Workspace Experience",
    "Time Management & Organization",
    "Client Communication Best Practices"
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Learning</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Committed to continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Qualifications */}
          <Card className="bg-gradient-to-br from-blue-50 to-teal-50 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" />
                Current Qualifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Academic Background</h4>
                <p className="text-gray-600 text-sm">
                  <strong>B.Tech in Artificial Intelligence and Data Science</strong><br />
                  Kongu Engineering College, Erode<br />
                  Expected Graduation: 2027<br />
                  <em>Strong foundation in analytical thinking and problem-solving</em>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Certifications */}
          <Card className="bg-white border shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-teal-600" />
                Professional Development Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {futureCertifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <Badge 
                      variant={cert.status === "In Progress" ? "default" : "secondary"}
                      className={cert.status === "In Progress" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{cert.provider}</p>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Commitment to Excellence</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I believe in staying ahead of industry trends and continuously improving my skills. 
              While I may not have formal certifications yet, my academic background, practical experience, 
              and dedication to learning make me a valuable asset to any team. I'm actively working toward 
              professional certifications to enhance my credentials.
            </p>
            <div className="mt-6">
              <Badge className="bg-blue-600 text-white px-6 py-2 text-sm">
                Always Learning, Always Growing
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
