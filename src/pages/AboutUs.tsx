import React from 'react';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Target, Users, Award, Lightbulb, Heart, FileText } from 'lucide-react';
import ScrollAnimation from '@/hooks/useScrollAnimation';
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
import shyamImage from '@/assets/shyam.jpeg';
import rakeshSinghImage from '@/assets/rakesh.jpeg';
import manishImage from '@/assets/manish.jpeg';
import roshanImage from '@/assets/roshan.jpeg';
import manishMundhraImage from '@/assets/manish-mundhra.jpeg';
import debayanImage from '@/assets/debayan.jpeg';
import ravishahImage from '@/assets/ravi-shah.jpeg';
import sumitImage from '@/assets/sumit.jpeg';
import cbsinhaImage from '@/assets/cb-sinha.jpeg';
import vardhmanImage from '@/assets/vardhman.jpeg';
import anilImage from '@/assets/anil.jpeg';
import raviImage from '@/assets/Ravi-Verma.jpeg';
import mahadevImage from '@/assets/Mahadev-Agarwal.jpeg';
import lalitImage from '@/assets/Lalit-Shroff.jpeg';
import kamalImage from '@/assets/Kamal-Somani.jpeg';
import gauravImage from '@/assets/Gaurav-More.jpeg';
import sanjeevImage from '@/assets/Sanjeev-Agarwal.jpeg';
import pramodImage from '@/assets/Pramod-Agarwal.jpeg';

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
  name: "CA Pramod Kumar Agarwal",
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
  name: "CA Harsh Satish Udeshi",
  role: "Convenor",
  photo: harshImage
}, {
  name: "CA Muskan Sethia",
  role: "Dy. Convenor",
  photo: muskanImage
}];
const executiveCommittee = [{
  name: "CA Anil Kumar Mandawewala",
  role: "Executive Committee",
  photo: anilImage
}, {
  name: "CA Kamal Somani",
  role: "Executive Committee",
  photo: kamalImage
}, {
  name: "CA Mahadev Lal Agarwal",
  role: "Executive Committee",
  photo: mahadevImage
}, {
  name: "CA Vardhman Chhalani",
  role: "Executive Committee",
  photo: vardhmanImage
}, {
  name: "CA Chandra Bhanu Sinha",
  role: "Executive Committee",
  photo: cbsinhaImage
}, {
  name: "CA Lalit Kumar Shroff",
  role: "Executive Committee",
  photo: lalitImage
}, {
  name: "CA Sandeep Kumar Goyal",
  role: "Executive Committee",
  photo: bbdLogo
}, {
  name: "CS Ravi Verma",
  role: "Executive Committee",
  photo: raviImage
}, {
  name: "CA Ravi Sureka",
  role: "Executive Committee",
  photo: bbdLogo
}, {
  name: "CA Gaurav More",
  role: "Executive Committee",
  photo: gauravImage
}, {
  name: "CA Sumit Binani",
  role: "Executive Committee",
  photo: sumitImage
}, {
  name: "CA Nilima Joshi",
  role: "Executive Committee",
  photo: bbdLogo
}, {
  name: "CA Ravi Kumar Shah",
  role: "Executive Committee",
  photo: ravishahImage
}, {
  name: "CA Sanjeev Kumar Agarwal",
  role: "Executive Committee",
  photo: sanjeevImage
}, {
  name: "CA Debayan Patra",
  role: "Executive Committee",
  photo: debayanImage
}];
const specialInvitees = [{
  name: "CA Shyam Agarwal",
  role: "Special Invitee",
  photo: shyamImage
}, {
  name: "CA Rakesh Singh",
  role: "Special Invitee",
  photo: rakeshSinghImage
}, {
  name: "CA Manish Gadia",
  role: "Special Invitee",
  photo: manishImage
}, {
  name: "CA Roshan Kumar Bajaj",
  role: "Special Invitee",
  photo: roshanImage
}, {
  name: "CA Manish Mundhra",
  role: "Special Invitee",
  photo: manishMundhraImage
}];
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
          <ScrollAnimation animation="fade-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Our <span className="text-primary">Journey</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground">
              Discover the story behind BBD Bag Professional Association and our commitment to excellence
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Long-form Journey Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Origin */}
            <ScrollAnimation animation="fade-up-scale" className="mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-primary" />
                The Journey of BBD Bag Chartered Accountants Study Circle
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                B.B.D. BAG CHARTERED ACCOUNTANTS STUDY CIRCLE-EIRC was founded as a study circle with EIRC of Institute of Chartered Accountants of India on 8th December 2003 by a group of six practicing Chartered Accountants of Kolkata who were already running a study circle since 1984 in the name of Saturday Study Circle which is still running.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This epistemophilic group has been continuously meeting every Saturday of the week for 3 to 4 hours in the afternoon to update their professional and educational inquisitiveness by discussing current topics and happenings in the knowledge domain of CA profession. The schedule of the Saturday meeting has been divided into various segments i.e. , Prayer, Academic / Creative discussions, Query-Answer, Flashes and reporting from CA, BCAJ, CS Journal, ITR, ITD, Taxmann, etc., Speech by one member etc. These meetings are held with undeviating rules towards attendance, minutes, written materials and maintaining time with penalty for late attendance, and non-completion of the designated task.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We feel proud to state that the solution or decision or summary arrived at from the interaction and discussions is of a fine and real nectar and stood the test of all challenges of the profession. We also hold a very close door annual programme to introspect ourselves where the Senior member of the Profession is invited to guide and share their experiences. This practice has benefitted a lot to all and has become a part and parcel of our routine.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our past president Late Sri Rahul Roy graced with his presence one of our annual meeting during his presidentship of the Institute and appreciated a lot about our concept and had mentioned about the study circle concept in his presidential address in the CA Journal and thereafter our Institute had adopted and started the same as a continuous professional and educational program. Senior Members of the Profession like Sri N K Poddar, Sri M L Singhee, Sri R K Agarwal, Sri Dipankar Chatterjee, Sri Amitabh Kothari, Sri Rahul Roy, Advocate Sri Sajjan Tulsiyan, Advocate Sri Paras Kochar and many more had blessed the circle from time to time. It has been our endeavour to benefit the CA profession and fraternity.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Now with the change of time young and experienced members have joined and the Study Circle has been expanded with a strength of more than 250 members. The Study Circle was also the winner in the recently conducted Inter Study Circle Indoor Cricket Competition 2020-21.
              </p>
            </ScrollAnimation>

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
            <ScrollAnimation animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Office Bearers <span className="text-primary">(2025-26)</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our elected leadership team driving the association's vision forward
              </p>
            </ScrollAnimation>

            {/* Same 3:3:4:3 layout as Home */}
            <div className="space-y-8">
              {/* Row 1 - 3 members */}
              <ScrollAnimation animation="fade-up-scale" delay={100}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {officeBarers.slice(0, 3).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} />)}
                </div>
              </ScrollAnimation>

              {/* Row 2 - 3 members */}
              <ScrollAnimation animation="fade-up-scale" delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {officeBarers.slice(3, 6).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} />)}
                </div>
              </ScrollAnimation>

              {/* Row 3 - 4 members */}
              <ScrollAnimation animation="fade-up-scale" delay={300}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {officeBarers.slice(6, 10).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} />)}
                </div>
              </ScrollAnimation>

              {/* Row 4 - 3 members */}
              <ScrollAnimation animation="fade-up-scale" delay={400}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {officeBarers.slice(10, 13).map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} />)}
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Executive Committee */}
          <div className="mb-16">
            <ScrollAnimation animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Executive <span className="text-primary">Committee</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                15 dedicated members supporting our association's operations
              </p>
            </ScrollAnimation>

            {/* 5 per row, 3 rows */}
            <ScrollAnimation animation="fade-up-scale" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {executiveCommittee.map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} />)}
              </div>
            </ScrollAnimation>
          </div>

          {/* Special Invitees */}
          <div className="mb-16">
            <ScrollAnimation animation="fade-up" className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
                Special <span className="text-primary">Invitees</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Distinguished personalities honored by our association
              </p>
            </ScrollAnimation>

            {/* Single row of 5 */}
            <ScrollAnimation animation="fade-up-scale" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {specialInvitees.map((member, index) => <PersonCard key={index} name={member.name} role={member.role} photo={member.photo} />)}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Membership Buttons */}
      <section id="membership" className="py-16 lg:py-20 bg-bbd-gray-50">
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
                <Button size="lg" className="btn-outline hover:shadow-red w-full" asChild>
                  <a href="/documents/life-membership.pdf" target="_blank" rel="noopener noreferrer">
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
              <Button size="lg" className="btn-outline hover:shadow-red w-full" asChild>
                <a href="/documents/patron-membership.pdf" target="_blank" rel="noopener noreferrer">
                  Become a Patron Member
                </a>
              </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation animation="fade-up-scale">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
              Participate. Learn. <span className="text-primary">Lead.</span>
            </h2>
          </ScrollAnimation>
        </div>
      </section>
    </div>;
};
export default AboutUs;
