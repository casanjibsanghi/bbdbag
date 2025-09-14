import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import profileImage from '@/assets/sanjib-sanghi-high-res.png';
import akMaheshwariImage from '@/assets/AK-Maheshwari.jpeg';
import apurvaImage from '@/assets/Apurva.jpeg';
import parasImage from '@/assets/Paras.jpg';
import rkVyasImage from '@/assets/RK-Vyas.jpeg';
import bbdLogo from '@/assets/BBD-Logo.jpeg';
import pradeepImage from '@/assets/pradeep.jpeg';
import rakeshImage from '@/assets/Rakesh.jpeg';
import sanjayImage from '@/assets/sanjay.jpg';

// Mock data for leadership (Office Bearers 2025-26)
const officebearers = [
  // Row 1 (3 members)
  { name: "CA Sanjib Sanghi", role: "President", order: 1, photo: profileImage },
  { name: "CA Pradeep Kumar Agarwal", role: "Senior Vice President", order: 2, photo: pradeepImage },
  { name: "CA Rakesh Kumar Dhaniwala", role: "Vice President", order: 3, photo: rakeshImage },
  // Row 2 (3 members)
  { name: "Adv. Paras Kochar", role: "Immediate Past President", order: 4, photo: parasImage },
  { name: "CA Rajendra Kumar Vyas", role: "Past President", order: 5, photo: rkVyasImage },
  { name: "CA Ashoke Kumar Maheshwari", role: "Assistant Secretary", order: 6, photo: akMaheshwariImage },
  // Row 3 (4 members)
  { name: "CA Pramod Agarwal", role: "Secretary", order: 7, photo: profileImage },
  { name: "CA Apurva Maheshwari", role: "Joint Secretary", order: 8, photo: apurvaImage },
  { name: "Mr. Srigoppal Vyas", role: "Joint Secretary", order: 9, photo: profileImage },
  { name: "CA Sanjay Jhajharia", role: "Treasurer", order: 10, photo: sanjayImage },
  // Row 4 (4 members)
  { name: "CA Pankaj Kumar Verma", role: "Joint Treasurer", order: 11, photo: profileImage },
  { name: "CA Harsh Satish Udeyshi", role: "Convenor", order: 12, photo: profileImage },
  { name: "CA Muskan Sethia", role: "Dy. Convenor", order: 13, photo: profileImage }
];

const Home = () => {
  return (
    <div className="bg-background">
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
              <Button 
                asChild
                className="btn-outline hover:shadow-red"
              >
                <a href="/about-us">
                  Read our journey <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <div className="animate-scale-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/placeholder.svg"
                  alt="BBD Bag Professional Association community gathering"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
              {officebearers.slice(0, 3).map((member) => (
                <PersonCard
                  key={member.order}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  className="animate-scale-in"
                />
              ))}
            </div>

            {/* Row 2 - 3 members */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {officebearers.slice(3, 6).map((member) => (
                <PersonCard
                  key={member.order}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  className="animate-scale-in"
                />
              ))}
            </div>

            {/* Row 3 - 4 members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {officebearers.slice(6, 10).map((member) => (
                <PersonCard
                  key={member.order}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  className="animate-scale-in"
                />
              ))}
            </div>

            {/* Row 4 - 3 members (last row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
              {officebearers.slice(10, 13).map((member) => (
                <PersonCard
                  key={member.order}
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  className="animate-scale-in"
                />
              ))}
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
              <div className="relative">
                <div className="bg-white rounded-xl card-shadow p-8 text-center">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-secondary">Annual Meet 2025</h3>
                      <p className="text-muted-foreground">Professional Excellence Conclave</p>
                    </div>
                  </div>
                </div>
                {/* Limited Seats Badge */}
                <div className="absolute -top-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Limited Seats
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="animate-slide-in">
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
                className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold hover:shadow-red"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
