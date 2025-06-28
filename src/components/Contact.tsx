
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailClick = () => {
    window.location.href = 'mailto:mithunbalaje24@gmail.com?subject=Remote Internship Opportunity';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919345335566';
  };

  const handleHireMe = async () => {
    setIsLoading(true);
    
    try {
      // For EmailJS integration, you need to:
      // 1. Create an account at emailjs.com
      // 2. Set up a service (Gmail, Outlook, etc.)
      // 3. Create an email template
      // 4. Replace these placeholder values with your actual IDs
      
      const templateParams = {
        to_name: 'Mithun Balaje',
        from_name: 'Potential Client',
        message: 'I am interested in hiring you for content writing/virtual assistant services.',
        reply_to: 'mithunbalaje24@gmail.com',
      };

      // Uncomment and replace with your actual EmailJS credentials
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID', 
      //   templateParams,
      //   'YOUR_USER_ID'
      // );

      // For now, fallback to email client
      window.location.href = 'mailto:mithunbalaje24@gmail.com?subject=Hiring Inquiry&body=Hi Mithun,%0D%0A%0D%0AI am interested in discussing potential opportunities with you.%0D%0A%0D%0ABest regards';
      
      toast({
        title: "Email Prepared",
        description: "Your email client has been opened with a pre-filled message.",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Error",
        description: "Failed to send email. Please try contacting directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? I'm available for remote internships and would love to help your team succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Me</h3>
              <p className="text-sm text-muted-foreground mb-4">mithunbalaje24@gmail.com</p>
              <Button onClick={handleEmailClick} variant="outline" size="sm">
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Me</h3>
              <p className="text-sm text-muted-foreground mb-4">+91 93453 35566</p>
              <Button onClick={handlePhoneClick} variant="outline" size="sm">
                Call Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={handleHireMe} 
            disabled={isLoading}
            className="text-base px-8"
          >
            {isLoading ? "Preparing Email..." : "Hire Me"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
