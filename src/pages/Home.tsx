import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight, FileText } from 'lucide-react';
import ScrollAnimation from '@/hooks/useScrollAnimation';
import profileImage from '@/assets/sanjib-sanghi-high-res.png';
import akMaheshwariImage from '@/assets/AK-Maheshwari.jpeg';
import apurvaImage from '@/assets/Apurva.jpeg';
import parasImage from '@/assets/Paras.jpg';
import rkVyasImage from '@/assets/RK-Vyas.jpeg';
import bbdLogo from '@/assets/BBD-Logo.jpeg';
import agmFlyer from '@/assets/BBD-AGM-Flyer.jpeg';
import pradeepImage from '@/assets/pradeep.jpeg';
import rakeshImage from '@/assets/Rakesh.jpeg';
import sanjayImage from '@/assets/sanjay.jpg';
import srigoppalImage from '@/assets/Srigoppal.jpg';
import pankajImage from '@/assets/pankaj-verma.jpg';
import harshImage from '@/assets/Harsh.jpg';
import muskanImage from '@/assets/Muskan.jpeg';
import pramodImage from '@/assets/pramod.jpeg';
import communityGatheringImage from '@/assets/community-gathering.jpg';

// Mock data for leadership (Office Bearers 2025-26)
const officebearers = [
  // Row 1 (3 members)
  { name: "CA Sanjib Sanghi", role: "President", order: 1, photo: profileImage },
  { name: "CA Pradeep Kumar Agarwal", role: "Senior Vice President", order: 2, photo: pradeepImage },
  { name: "CA Rakesh Kumar Dhaniwala", role: "Vice President", order: 3, photo: rakeshImage },
  // Row 2 (3 members)
  { name: "Adv. Paras Kochar", role: "Immediate Past President", order: 4, photo: parasImage },
  { name: "CA Rajendra Kumar Vyas", role: "Past President", order: 5, photo: rkVyasImage },
  { name: "CA Ashoke Kumar Maheshwari", role: "Past President", order: 6, photo: akMaheshwariImage },
  // Row 3 (4 members)
  { name: "CA Pramod Kumar Agarwal", role: "Secretary", order: 7, photo: bbdLogo },
  { name: "CA Apurva Maheshwari", role: "Joint Secretary", order: 8, photo: apurvaImage },
  { name: "Mr. Srigoppal Vyas", role: "Joint Secretary", order: 9, photo: srigoppalImage },
  { name: "CA Sanjay Jhajharia", role: "Treasurer", order: 10, photo: sanjayImage },
  // Row 4 (4 members)
  { name: "CA Pankaj Kumar Verma", role: "Joint Treasurer", order: 11, photo: pankajImage },
  { name: "CA Harsh Satish Udeshi", role: "Convenor", order: 12, photo: harshImage },
  { name: "CA Muskan Sethia", role: "Dy. Convenor", order: 13, photo: muskanImage }
];

const Home = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <HeroSlider />

      {/* Upcoming Event Section */}
      <section className="py-16 lg:py-24 bg-bbd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Event Flyer */}
            <ScrollAnimation animation="scale-in" delay={200}>
                <div className="relative max-w-md mx-auto">
                  <img
                    src={agmFlyer}
                    alt="BBD Bag Professional Association Annual General Meeting 2025 Flyer"
                    className="w-full rounded-xl shadow-lg"
                  />
              </div>
            </ScrollAnimation>

            {/* Event Details */}
            <ScrollAnimation animation="slide-left" delay={400}>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Upcoming <span className="text-primary">Event</span>
              </h2>
              
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                4th Annual General Meeting
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                NEST: Networking | Entrepreneurship | Skills | Technology
              </p>

              {/* Event Details */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span>September 21, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>Silver Spring Club, Kolkata</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Timing: 11:00 AM onwards| Followed by Lunch</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold hover:shadow-red hidden"
                asChild
              >
                <a 
                  href="https://example.com/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </Button>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Snapshot Section */}
      <section className="py-16 lg:py-24 bg-bbd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-right" delay={200}>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                About Our <span className="text-primary">Association</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                BBD Bag Professional Association is a vibrant professional association 
                with it’s roots back in 2003 as the BBD Bag Chartered Accountants Study Circle 
                of EIRC of ICAI (with roots dating back to 1984’s Saturday Study Circle).
                
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With several Chartered Accountants, Company Secretaries, Advocates and 
                other Finance Professionals, our association is dedicated to Continuous Learning, 
                Collaboration and Professional Excellence. The association engages in structured 
                discussions on taxation, audit, corporate law, and emerging trends — blending 
                academic rigor with practical insights. 
                
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With a tradition of discipline, peer learning, and guidance from senior stalwarts 
                of the profession realm, BBD Bag Professional Association has become a trusted 
                platform for knowledge sharing, networking, and shaping thought leadership. 
                
              </p>
              <Button 
                asChild
                className="btn-outline hover:shadow-red"
              >
                <a href="/about-us">
                  Read our journey <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scale-in" delay={400}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={communityGatheringImage}
                  alt="BBD Bag Professional Association meeting with members and leadership team"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Leadership Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Office Bearers <span className="text-primary">(2025-26)</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our dedicated leadership team committed to driving our association's mission forward
            </p>
          </ScrollAnimation>

          {/* Leadership Grid - 3:3:4:4 Layout */}
          <div className="space-y-8">
            {/* Row 1 - 3 members */}
            <ScrollAnimation animation="fade-up-scale" delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
                {officebearers.slice(0, 3).map((member) => (
                  <PersonCard
                    key={member.order}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                  />
                ))}
              </div>
            </ScrollAnimation>

            {/* Row 2 - 3 members */}
            <ScrollAnimation animation="fade-up-scale" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
                {officebearers.slice(3, 6).map((member) => (
                  <PersonCard
                    key={member.order}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                  />
                ))}
              </div>
            </ScrollAnimation>

            {/* Row 3 - 4 members */}
            <ScrollAnimation animation="fade-up-scale" delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {officebearers.slice(6, 10).map((member) => (
                  <PersonCard
                    key={member.order}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                  />
                ))}
              </div>
            </ScrollAnimation>

            {/* Row 4 - 3 members (last row) */}
            <ScrollAnimation animation="fade-up-scale" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
                {officebearers.slice(10, 13).map((member) => (
                  <PersonCard
                    key={member.order}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                  />
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Membership Buttons */}
      <section id="membership" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Join Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the membership that aligns with your professional goals
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Life Member */}
            <ScrollAnimation animation="slide-right" delay={200}>
              <div className="bg-white rounded-xl card-shadow p-8 text-center hover-lift transition-smooth">
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
            </ScrollAnimation>

            {/* Patron Member */}
            <ScrollAnimation animation="slide-left" delay={400}>
              <div className="bg-white rounded-xl card-shadow p-8 text-center hover-lift transition-smooth">
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
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
