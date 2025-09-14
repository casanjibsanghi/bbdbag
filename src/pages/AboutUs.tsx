import React from 'react';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Target, Users, Award, Lightbulb, Heart } from 'lucide-react';
import sanjibImage from '@/assets/sanjib-sanghi-high-res.png';
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

// Mock data for different member categories
const officeBarers = [
// Same as Home page - 13 members in 3:3:4:3 layout
{
  name: "CA Sanjib Sanghi",
  role: "President",
  photo: sanjibImage
}, {
  name: "CA Pradeep Kumar Agarwal",
  role: "Senior Vice President",
  photo: pradeepImage
}, {
  name: "CA Rakesh Kumar Dhaniwala",
  role: "Vice President",
  photo: rakeshImage
}, {
  name: "Adv. Paras Kochar",
  role: "Immediate Past President",
  photo: parasImage
}, {
  name: "CA Rajendra Kumar Vyas",
  role: "Past President",
  photo: rkVyasImage
}, {
  name: "CA Ashoke Kumar Maheshwari",
  role: "Past President",
  photo: akMaheshwariImage
}, {
  name: "CA Pramod Agarwal",
  role: "Secretary",
  photo: pramodImage
}, {
  name: "CA Apurva Maheshwari",
  role: "Joint Secretary",
  photo: apurvaImage
}, {
  name: "Mr. Srigoppal Vyas",
  role: "Joint Secretary",
  photo: srigoppalImage
}, {
  name: "CA Sanjay Jhajharia",
  role: "Treasurer",
  photo: sanjayImage
}, {
  name: "CA Pankaj Kumar Verma",
  role: "Joint Treasurer",
  photo: pankajImage
}, {
  name: "CA Harsh Satish Udeyshi",
  role: "Convenor",
  photo: harshImage
}, {
  name: "CA Muskan Sethia",
  role: "Dy. Convenor",
  photo: muskanImage
}];
const executiveCommittee = [
  { name: "MANDAWEWALA ANIL KUMAR", role: "Executive Committee" },
  { name: "SOMANI KAMAL", role: "Executive Committee" },
  { name: "AGARWAL MAHADEV LAL", role: "Executive Committee" },
  { name: "CHHALANI VARDHMAN", role: "Executive Committee" },
  { name: "SINHA CHANDRA BHANU", role: "Executive Committee" },
  { name: "SHROFF LALIT KUMAR", role: "Executive Committee" },
  { name: "GOYAL SANDEEP KUMAR", role: "Executive Committee" },
  { name: "VERMA RAVI", role: "Executive Committee" },
  { name: "SUREKA RAVI", role: "Executive Committee" },
  { name: "MORE GAURAV", role: "Executive Committee" },
  { name: "BINANI SUMIT", role: "Executive Committee" },
  { name: "JOSHI NILIMA*", role: "Executive Committee" },
  { name: "SHAH RAVI KUMAR", role: "Executive Committee" },
  { name: "AGARWAL SANJEEV KUMAR", role: "Executive Committee" },
  { name: "PATRA DEBAYAN", role: "Executive Committee" }
];
const specialInvitees = [
  { name: "CA Shyam Agarwal", role: "Special Invitee", photo: '@/assets/shyam.jpeg' },
  { name: "CA Rakesh Singh", role: "Special Invitee", photo: '@/assets/rakesh.jpeg' },
  { name: "CA Manish Gadia", role: "Special Invitee", photo: '@/assets/manish.jpeg' },
  { name: "CA Roshan Kumar Bajaj", role: "Special Invitee", photo: '@/assets/roshan.jpeg' },
  { name: "CA Manish Mundhra", role: "Special Invitee", photo: '@/assets/manish-mundhra.jpeg' }
];
const milestones = [{
  year: "2010",
  event: "Association founded with 25 charter members"
}, {
  year: "2012",
  event: "First annual conference organized"
}, {
  year: "2015",
  event: "Reached 100 active members milestone"
}, {
  year: "2018",
  event: "Launched professional development programs"
}, {
  year: "2020",
  event: "Adapted to virtual events during pandemic"
}, {
  year: "2023",
  event: "Established scholarship program for students"
}, {
  year: "2025",
  event: "15th Anniversary celebration planned"
}];
const AboutUs = () => {
  return <div className="bg-background pt-20">
      {/* Hero Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 animate-fade-up">
            Our <span className="text-primary">Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{
          animationDelay: '200ms'
        }}>
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
            

            {/* Milestones Timeline */}
            

            {/* Community Impact */}
            

            {/* The Road Ahead */}
            
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
                {officeBarers.slice(0, 3).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} className="animate-scale-in" />)}
              </div>

              {/* Row 2 - 3 members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {officeBarers.slice(3, 6).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} className="animate-scale-in" />)}
              </div>

              {/* Row 3 - 4 members */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {officeBarers.slice(6, 10).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} className="animate-scale-in" />)}
              </div>

              {/* Row 4 - 3 members */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {officeBarers.slice(10, 13).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} className="animate-scale-in" />)}
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
              {executiveCommittee.map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={bbdLogo} className="animate-scale-in" />)}
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
              {specialInvitees.map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={bbdLogo} className="animate-scale-in" />)}
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
            <Button size="lg" className="btn-primary text-lg px-8 py-3 rounded-xl font-semibold hover:shadow-red" asChild>
              <a href="/connect#membership">
                Become a Member <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutUs;
