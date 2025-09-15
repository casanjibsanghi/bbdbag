import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Copy, Check, FileText, Linkedin, Facebook, Twitter, CreditCard, Building, Hash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Connect = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const contactInfo = {
    address: [
      "BBD Bag Professional Association",
      "Commerce House, 2A Ganesh Chandra Avenue",
      "4th Floor, Room No.: 1",
      "Kolkata - 700 001",
      "West Bengal, India"
    ],
    email: "office@bbdbag.com",
    phone: "+91 93310 32177"
  };

  const bankDetails = {
    accountName: "BBD Bag Professional Association",
    accountNumber: "019094600002407",
    bankName: "YES Bank",
    branch: "Dalhousie Branch, Kolkata-700 001",
    ifsc: "YESB0000190",
  };

  const socialLinks = [
    { 
      Icon: Linkedin, 
      href: "https://linkedin.com/company/bbd-professional", 
      label: "LinkedIn",
      description: "Connect with us professionally"
    },
    { 
      Icon: Facebook, 
      href: "https://facebook.com/bbdprofessional", 
      label: "Facebook",
      description: "Follow our updates and events"
    },
    { 
      Icon: Twitter, 
      href: "https://twitter.com/bbdprofessional", 
      label: "Twitter",
      description: "Get real-time updates"
    }
  ];

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: "Copied!",
        description: `${field} copied to clipboard`,
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the text manually",
        variant: "destructive",
      });
    }
  };

  const copyBankDetails = async () => {
    const bankText = `
Account Name: ${bankDetails.accountName}
Account Number: ${bankDetails.accountNumber}
Bank: ${bankDetails.bankName}
Branch: ${bankDetails.branch}
IFSC: ${bankDetails.ifsc}
    `.trim();
    
    await copyToClipboard(bankText, "Bank Details");
  };

  return (
    <div className="bg-background pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 animate-fade-up">
            Connect <span className="text-primary">With Us</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '200ms' }}>
            Get in touch, join our community, or visit us in person
          </p>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="animate-scale-in">
              <div className="bg-white rounded-xl card-shadow overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-primary/10 to-primary/5 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1!2d88.34769!3d22.5646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a89abf8c1b%3A0xa3b69d286e0c5e6d!2sCommerce%20House%2C%202A%2C%20Ganesh%20Chandra%20Ave%2C%20Bowbazar%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1635789012345"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BBD Bag Professional Association Location"
                    className="absolute inset-0"
                  />
                  {/* Fallback for map */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">BBD Bagh, Kolkata</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
                
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start space-x-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">Address</h3>
                      <address className="text-muted-foreground not-italic">
                        {contactInfo.address.map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </address>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-secondary mb-1">Email</h3>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="font-semibold text-secondary mb-1">Contact Number</h3>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bank Account Details */}
                <div className="bg-bbd-gray-50 rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-secondary flex items-center">
                      <CreditCard className="w-5 h-5 mr-2 text-primary" />
                      Bank Account Details
                    </h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={copyBankDetails}
                      className="text-primary border-primary hover:bg-primary hover:text-white"
                    >
                      {copiedField === "Bank Details" ? (
                        <Check className="w-4 h-4 mr-2" />
                      ) : (
                        <Copy className="w-4 h-4 mr-2" />
                      )}
                      Copy All
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="font-medium">Account Name:</span>
                      </div>
                      <p className="text-muted-foreground ml-6">{bankDetails.accountName}</p>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Hash className="w-4 h-4 text-primary" />
                        <span className="font-medium">Account Number:</span>
                      </div>
                      <p className="text-muted-foreground ml-6 font-mono">{bankDetails.accountNumber}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium">Bank:</span>
                      <p className="text-muted-foreground">{bankDetails.bankName}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium">Branch:</span>
                      <p className="text-muted-foreground">{bankDetails.branch}</p>
                    </div>
                    
                    <div>
                      <span className="font-medium">IFSC:</span>
                      <p className="text-muted-foreground font-mono">{bankDetails.ifsc}</p>
                    </div>
                    
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Buttons */}
      <section id="membership" className="py-16 lg:py-20 bg-bbd-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 animate-fade-up">
              Join Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up">
              Choose the membership that aligns with your professional goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Life Member */}
            <div className="bg-white rounded-xl card-shadow p-8 text-center hover-lift transition-smooth animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Life Member</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join our association as a life member and enjoy lifetime benefits including access to all events, 
                networking opportunities, and exclusive resources.
              </p>
              <Button 
                size="lg"
                className="btn-outline hover:shadow-red w-full"
                asChild
              >
                <a 
                  href="/documents/life-membership.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Become a Life Member
                </a>
              </Button>
            </div>

            {/* Patron Member */}
            <div className="bg-white rounded-xl card-shadow p-8 text-center hover-lift transition-smooth animate-scale-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Patron Member</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Support our mission as a patron member and help us create greater impact in the professional 
                community while enjoying premium benefits.
              </p>
              <Button 
                size="lg"
                className="btn-outline hover:shadow-red w-full"
                asChild
              >
                <a 
                  href="/documents/patron-membership.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Become a Patron Member
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 animate-fade-up">
              Follow Us <span className="text-primary">Online</span>
            </h2>
            <p className="text-lg text-muted-foreground animate-fade-up">
              Stay connected and updated with our latest activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map(({ Icon, href, label, description }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-bbd-gray-50 rounded-xl p-8 text-center hover:bg-primary hover:text-white transition-all duration-300 hover-lift animate-scale-in"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-white transition-colors duration-300" />
                <h3 className="text-xl font-bold text-secondary group-hover:text-white mb-2 transition-colors duration-300">
                  {label}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
