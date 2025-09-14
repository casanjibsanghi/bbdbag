import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

// Mock data for leadership (Office Bearers 2025-26)
const officebearers = [
// Row 1 (3 members)
{
  name: "Dr. Rajesh Kumar",
  role: "President",
  order: 1
}, {
  name: "Ms. Priya Sharma",
  role: "Vice President",
  order: 2
}, {
  name: "Mr. Amit Singh",
  role: "Secretary",
  order: 3
},
// Row 2 (3 members)
{
  name: "Dr. Meera Gupta",
  role: "Joint Secretary",
  order: 4
}, {
  name: "Mr. Suresh Chandra",
  role: "Treasurer",
  order: 5
}, {
  name: "Ms. Kavita Rao",
  role: "Assistant Secretary",
  order: 6
},
// Row 3 (4 members)
{
  name: "Dr. Anita Devi",
  role: "Program Director",
  order: 7
}, {
  name: "Mr. Vikash Jha",
  role: "Media Coordinator",
  order: 8
}, {
  name: "Ms. Sunita Roy",
  role: "Member Relations",
  order: 9
}, {
  name: "Dr. Rahul Mishra",
  role: "Research Head",
  order: 10
},
// Row 4 (4 members)
{
  name: "Mr. Debasis Sen",
  role: "Events Manager",
  order: 11
}, {
  name: "Ms. Ritu Agarwal",
  role: "Documentation",
  order: 12
}, {
  name: "Dr. Santosh Kumar",
  role: "Advisory Member",
  order: 13
}];
const Home = () => {
  return <div className="bg-background">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Snapshot Section */}
      <section className="py-16 lg:py-24 bg-bbd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                About Our <span className="text-primary">Association</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The BBD Bag Professional Association serves as a dynamic multidisciplinary forum 
                bringing together professionals from diverse fields across Kolkata and beyond. 
                We are committed to fostering professional excellence, continuous learning, and 
                meaningful community engagement. Through our initiatives, we create opportunities 
                for knowledge sharing, networking, and collaborative growth that benefit both 
                individual members and the broader professional community.
              </p>
              <Button asChild className="btn-outline hover:shadow-red">
                <a href="/about-us">
                  Read our journey <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4 animate-fade-up">
              Office Bearers <span className="text-primary">(2025-26)</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our dedicated leadership team committed to driving our association's mission forward
            </p>
          </div>

          {/* Leadership Grid - 3:3:4:4 Layout */}
          <div className="space-y-8">
            {/* Row 1 - 3 members */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {officebearers.slice(0, 3).map(member => <PersonCard key={member.order} name={member.name} role={member.role} className="animate-scale-in" />)}
            </div>

            {/* Row 2 - 3 members */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {officebearers.slice(3, 6).map(member => <PersonCard key={member.order} name={member.name} role={member.role} className="animate-scale-in" />)}
            </div>

            {/* Row 3 - 4 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {officebearers.slice(6, 10).map(member => <PersonCard key={member.order} name={member.name} role={member.role} className="animate-scale-in" />)}
            </div>

            {/* Row 4 - 3 members (last row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {officebearers.slice(10, 13).map(member => <PersonCard key={member.order} name={member.name} role={member.role} className="animate-scale-in" />)}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="py-16 lg:py-24 bg-bbd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Event Flyer */}
            <div className="animate-scale-in">
              
            </div>

            {/* Event Details */}
            <div className="animate-slide-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Upcoming <span className="text-primary">Event</span>
              </h2>
              
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Annual Professional Excellence Conclave 2025
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Join us for our flagship annual event featuring keynote speakers, panel discussions, 
                and networking opportunities. This year's theme focuses on "Innovation in Professional 
                Practice" with sessions on emerging trends, technology integration, and sustainable 
                business practices. Connect with industry leaders and expand your professional network.
              </p>

              {/* Event Details */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-primary" />
                  <span>March 15, 2025 | 9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  <span>BBD Bag Ashika Conference Hall, Kolkata</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-3 text-primary" />
                  <span>Registration: 8:30 AM onwards</span>
                </div>
              </div>

              <Button size="lg" className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold hover:shadow-red" asChild>
                <a href="https://example.com/register" target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;