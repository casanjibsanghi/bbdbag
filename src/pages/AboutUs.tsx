import React from 'react';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Target, Users, Award, Lightbulb, Heart } from 'lucide-react';
import profileImage from '@/assets/sanjib-sanghi-high-res.png';
import akMaheshwariImage from '@/assets/AK-Maheshwari.jpeg';
import apurvaImage from '@/assets/Apurva.jpeg';
import parasImage from '@/assets/Paras.jpg';
import rkVyasImage from '@/assets/RK Vyas.jpeg';

// Mock data for different member categories
const officeBarers = [
  // Same as Home page - 13 members in 3:3:4:3 layout
  { name: "Dr. Rajesh Kumar", role: "President", photo: profileImage },
  { name: "Ms. Priya Sharma", role: "Vice President", photo: akMaheshwariImage },
  { name: "Mr. Amit Singh", role: "Secretary", photo: apurvaImage },
  { name: "Dr. Meera Gupta", role: "Joint Secretary", photo: parasImage },
  { name: "Mr. Suresh Chandra", role: "Treasurer", photo: rkVyasImage },
  { name: "Ms. Kavita Rao", role: "Assistant Secretary", photo: profileImage },
  { name: "Dr. Anita Devi", role: "Program Director", photo: akMaheshwariImage },
  { name: "Mr. Vikash Jha", role: "Media Coordinator", photo: apurvaImage },
  { name: "Ms. Sunita Roy", role: "Member Relations", photo: parasImage },
  { name: "Dr. Rahul Mishra", role: "Research Head", photo: rkVyasImage },
  { name: "Mr. Debasis Sen", role: "Events Manager", photo: profileImage },
  { name: "Ms. Ritu Agarwal", role: "Documentation", photo: akMaheshwariImage },
  { name: "Dr. Santosh Kumar", role: "Advisory Member", photo: apurvaImage }
];

const executiveCommittee = Array.from({ length: 15 }, (_, i) => ({
  name: `Member ${i + 1}`,
  role: "Executive Committee"
}));

const specialInvitees = Array.from({ length: 5 }, (_, i) => ({
  name: `Special Invitee ${i + 1}`,
  role: "Special Invitee"
}));

const milestones = [
  { year: "2010", event: "Association founded with 25 charter members" },
  { year: "2012", event: "First annual conference organized" },
  { year: "2015", event: "Reached 100 active members milestone" },
  { year: "2018", event: "Launched professional development programs" },
  { year: "2020", event: "Adapted to virtual events during pandemic" },
  { year: "2023", event: "Established scholarship program for students" },
  { year: "2025", event: "15th Anniversary celebration planned" }
];

const AboutUs = () => {
  return (
    <div className="bg-background pt-20">
      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 animate-fade-up">
            Our <span className="text-primary">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '200ms' }}>
            Discover the story behind BBD Bag Professional Association and our commitment to excellence
          </p>
        </div>
      </section>

      {/* Long-form Journey Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Origin */}
            <div className="mb-12 animate-slide-in">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-primary" />
                Origin
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The BBD Bag Professional Association was conceived in 2010 by a group of forward-thinking 
                professionals who recognized the need for a multidisciplinary platform in Kolkata's business district. 
                Born from the vision of creating bridges across different professional domains, our association 
                started as a modest gathering of 25 charter members representing diverse fields including finance, 
                law, healthcare, education, and technology. The founders believed that true professional growth 
                comes through collaboration and shared learning experiences.
              </p>
            </div>

            {/* Purpose */}
            <div className="mb-12 animate-slide-in">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                <Lightbulb className="w-8 h-8 mr-3 text-primary" />
                Purpose
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our association exists to serve as a catalyst for professional excellence and community development. 
                We believe that by bringing together professionals from various disciplines, we can create synergies 
                that benefit not just individual careers but entire communities. Our core purposes include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Facilitating knowledge exchange across professional boundaries</li>
                <li>Providing continuous learning and development opportunities</li>
                <li>Creating networking platforms for meaningful professional relationships</li>
                <li>Supporting community welfare through organized social initiatives</li>
                <li>Mentoring emerging professionals and students</li>
              </ul>
            </div>

            {/* Milestones Timeline */}
            <div className="mb-12 animate-slide-in">
              <h2 className="text-3xl font-bold text-secondary mb-8 flex items-center">
                <Calendar className="w-8 h-8 mr-3 text-primary" />
                Milestones
              </h2>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-bbd-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-muted-foreground font-medium">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Impact */}
            <div className="mb-12 animate-slide-in">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                <Heart className="w-8 h-8 mr-3 text-primary" />
                Community Impact
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, our association has grown into a significant force for positive change in Kolkata's 
                professional landscape. We have organized over 100 professional development seminars, facilitated 
                countless business partnerships, and contributed to various social causes. Our scholarship program 
                has supported more than 50 deserving students, while our mentorship initiatives have guided hundreds 
                of young professionals in their career journeys. Through disaster relief efforts, educational 
                support programs, and community health initiatives, we continue to give back to the society that 
                has supported our growth.
              </p>
            </div>

            {/* The Road Ahead */}
            <div className="mb-12 animate-slide-in">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                <Award className="w-8 h-8 mr-3 text-primary" />
                The Road Ahead
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we look towards the future, our association is committed to embracing digital transformation 
                while maintaining the personal connections that define us. We plan to expand our reach through 
                virtual platforms, establish partnerships with international professional bodies, and launch 
                innovative programs that address emerging challenges in the professional world. Our vision for 
                the next decade includes creating a research center for professional best practices, establishing 
                an innovation lab for startups, and developing a comprehensive certification program that sets 
                new standards for professional excellence in Eastern India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Committees */}
      <section className="py-16 lg:py-24 bg-bbd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Office Bearers */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Office Bearers <span className="text-primary">(2025-26)</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our elected leadership team driving the association's vision forward
              </p>
            </div>

            {/* Same 3:3:4:3 layout as Home */}
            <div className="space-y-8">
              {/* Row 1 - 3 members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {officeBarers.slice(0, 3).map((member, index) => (
                  <PersonCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                    className="animate-scale-in"
                  />
                ))}
              </div>

              {/* Row 2 - 3 members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {officeBarers.slice(3, 6).map((member, index) => (
                  <PersonCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                    className="animate-scale-in"
                  />
                ))}
              </div>

              {/* Row 3 - 4 members */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {officeBarers.slice(6, 10).map((member, index) => (
                  <PersonCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                    className="animate-scale-in"
                  />
                ))}
              </div>

              {/* Row 4 - 3 members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {officeBarers.slice(10, 13).map((member, index) => (
                  <PersonCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    photo={member.photo}
                    className="animate-scale-in"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Executive Committee */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Executive <span className="text-primary">Committee</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                15 dedicated members supporting our association's operations
              </p>
            </div>

            {/* 5 per row, 3 rows */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {executiveCommittee.map((member, index) => (
                <PersonCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  photo={profileImage}
                  className="animate-scale-in"
                />
              ))}
            </div>
          </div>

          {/* Special Invitees */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Special <span className="text-primary">Invitees</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Distinguished personalities honored by our association
              </p>
            </div>

            {/* Single row of 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {specialInvitees.map((member, index) => (
                <PersonCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  photo={profileImage}
                  className="animate-scale-in"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
              Participate. Learn. <span className="text-primary">Lead.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our vibrant community of professionals and be part of something bigger than yourself
            </p>
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold hover:shadow-red"
              asChild
            >
              <a href="/connect#membership">
                Become a Member <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;