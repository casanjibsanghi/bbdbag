import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import PersonCard from '@/components/PersonCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, ArrowRight, FileText } from 'lucide-react';
import ScrollAnimation from '@/hooks/useScrollAnimation';
import profileImage from '@/assets/sanjib-sanghi-high-res.png';
import akMaheshwariImage from '@/assets/AK-Maheshwari.jpeg';
import apurvaImage from '@/assets/Apurva.jpeg';
import parasImage from '@/assets/Paras.jpg';
import rkVyasImage from '@/assets/RK-Vyas.jpeg';
import bbdLogo from '@/assets/BBD-Logo.jpeg';
import pradeepImage from '@/assets/pradeep.jpeg';
import rakeshImage from '@/assets/Rakesh.jpeg';
import sanjayImage from '@/assets/sanjay.jpg';
import srigoppalImage from '@/assets/Srigoppal.jpg';
import pankajImage from '@/assets/pankaj-verma.jpg';
import harshImage from '@/assets/Harsh.jpg';
import muskanImage from '@/assets/Muskan.jpeg';
import communityGatheringImage from '@/assets/community-gathering.jpg';
import pramodImage from '@/assets/Pramod-Agarwal.jpeg';
import cpeEventFlyer from '@/assets/CPE-GST-Event-Flyer.jpeg';
import gstr9EventFlyer from '@/assets/GSTR-9-Event-Flyer.jpeg';
import charitableTrustsFlyer from '@/assets/charitable-trusts-flyer.jpeg';
import labourCodesFlyer from '@/assets/labour-codes-flyer.jpeg';
import nbfcAuditFlyerJan16 from '@/assets/nbfc-audit-flyer-jan16.jpeg';
import ckcaSeminarFlyer from '@/assets/ckca-seminar-flyer.jpeg';
import pastEvent1 from '@/assets/past-event-1.jpeg';
import pastEvent2 from '@/assets/past-event-2.jpeg';
import pastEvent3 from '@/assets/past-event-3.jpeg';
import pastEvent4 from '@/assets/past-event-4.jpeg';
import pastEvent5 from '@/assets/past-event-5.jpeg';

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
  { name: "CA Pramod Kumar Agarwal", role: "Secretary", order: 7, photo: pramodImage },
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

      {/* Events Section with Tabs */}
      <section className="py-16 lg:py-24 bg-bbd-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Our <span className="text-primary">Events</span>
            </h2>
          </ScrollAnimation>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

            {/* Upcoming Events Tab */}
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Event Flyer */}
                <ScrollAnimation animation="scale-in" delay={200}>
                  <div className="relative max-w-md mx-auto">
                    <img
                      src={ckcaSeminarFlyer}
                      alt="CKCA 4 Unstructured CPE Hrs Seminar on AI in Stock Investing and PMLA"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                </ScrollAnimation>

                {/* Event Details */}
                <ScrollAnimation animation="slide-left" delay={400}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">
                    📢 4 Unstructured CPE Hrs Seminar on AI in Stock Investing and PMLA for Auditors and Tax Professionals 📢
                  </h3>

                  {/* Event Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start text-muted-foreground">
                      <Calendar className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-secondary">Date:</div>
                        <span>Tuesday, 27th January 2026</span>
                      </div>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-secondary">Time:</div>
                        <span>3:00 PM to 7:00 PM</span>
                      </div>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-secondary">Venue:</div>
                        <span>CKCA Dharam Chandra Pugalia Knowledge Centre, Poddar Court, Gate No - 3, Suite - 6B, 6th Floor, 18, Rabindra Sarani, Kolkata - 700 001</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                    <div className="space-y-3 text-muted-foreground">
                      <div>
                        <span className="font-semibold text-secondary">🎯 Topics & Speakers:</span>
                        <ul className="mt-2 list-disc list-inside">
                          <li>AI in Stock Investing – CA Suresh Modi</li>
                          <li>PMLA for Auditors and Tax Professionals – Dr. (Adv) Vishal Gupta</li>
                        </ul>
                      </div>
                      <div>
                        <span className="font-semibold text-secondary">🧮 CPE Hours:</span> 4 hrs (Unstructured)
                      </div>
                      <div>
                        <span className="font-semibold text-secondary">💰 Fees:</span> ₹200/- for Non-CKCA Members | Free for CKCA Members
                      </div>
                      <div className="pt-2 border-t">
                        <span className="font-semibold text-secondary">🔗 Registration Link:</span>
                        <div className="mt-1">
                          <a 
                            href="https://centralkolkata.org/#sectionEvent1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            https://centralkolkata.org/#sectionEvent1
                          </a>
                        </div>
                      </div>
                      <div className="text-primary font-semibold mt-2">
                        👉 Limited Seats Available – Pre Registration required.
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    With regards,<br />
                    <span className="font-semibold">Team CKCA (Central Kolkata Chartered Accountants Association)</span>
                  </p>
                </ScrollAnimation>
              </div>
            </TabsContent>

            {/* Past Events Tab */}
            <TabsContent value="past">
              <div className="space-y-16">
                {/* NBFC Audit Event (Jan 16, 2026) - Now Past */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Event Flyer */}
                  <ScrollAnimation animation="scale-in" delay={200}>
                    <div className="relative max-w-md mx-auto">
                      <img
                        src={nbfcAuditFlyerJan16}
                        alt="Seminar on NBFC Audit and Compliances - BBD Bag Professional Association"
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                  </ScrollAnimation>

                  {/* Event Details */}
                  <ScrollAnimation animation="slide-left" delay={400}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">
                      📢 NON CPE SEMINAR ON NBFC AUDIT AND COMPLIANCES 📢
                    </h3>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start text-muted-foreground">
                        <Calendar className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Date:</div>
                          <span>Friday, 16th January 2026</span>
                        </div>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <Clock className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Time:</div>
                          <span>5.00 PM to 7.00 PM</span>
                        </div>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <MapPin className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Venue:</div>
                          <span>BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata – 700013</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <span className="font-semibold text-secondary">🎯 Topic:</span> NBFC Audit and Compliances - RBI Master Directions 2025
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">👤 Session Chairman:</span> Apurva Maheswari
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">👤 Speaker:</span> CA Mohit Bhuteria
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">💰 Fees:</span> NIL (Free to attend)
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">📌 Mode:</span> Physical Seminar
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4">
                      With regards,<br />
                      <span className="font-semibold">B.B.D. PROFESSIONAL ASSOCIATION</span>
                    </p>
                  </ScrollAnimation>
                </div>
                {/* GSTR 9 Event Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Event Flyer */}
                  <ScrollAnimation animation="scale-in" delay={200}>
                    <div className="relative max-w-md mx-auto">
                      <img
                        src={gstr9EventFlyer}
                        alt="Seminar on GSTR 9 and 9C - BBD Bag CA CPE Study Circle"
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                  </ScrollAnimation>

                  {/* Event Details */}
                  <ScrollAnimation animation="slide-left" delay={400}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">
                      🌟 Seminar on GSTR 9 and 9C : Tools, Traps and Techniques for Zero Notice 🌟
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start text-muted-foreground">
                        <Calendar className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Date:</div>
                          <span>Friday, 05th December 2025</span>
                        </div>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <Clock className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Time:</div>
                          <span>From 4pm to 7pm</span>
                        </div>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <MapPin className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Venue:</div>
                          <span>BBD Bag Ashika Conference Hall, Commerce House, 4th Floor</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <span className="font-semibold text-secondary">🧮 CPE Hours:</span> 3 hrs (Structured)
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">💰 Fees:</span> ₹200/-
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">🎯 Topic:</span> GSTR 9 and 9C
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">👤 Session Chairman:</span> CA Ravi Sureka
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">👤 Speaker:</span> CA Pradeep Modi
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      With regards,<br />
                      <span className="font-semibold">B.B.D. BAG CA CPE STUDY CIRCLE OF EIRC OF ICAI</span>
                    </p>
                  </ScrollAnimation>
                </div>

                {/* GST Litigations Event Details Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Event Flyer */}
                  <ScrollAnimation animation="scale-in" delay={200}>
                    <div className="relative max-w-md mx-auto">
                      <img
                        src={cpeEventFlyer}
                        alt="3 CPE Summit on GST Litigations and Tribunal - B.B.D. BAG CA CPE Study Circle"
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                  </ScrollAnimation>

                  {/* Event Details */}
                  <ScrollAnimation animation="slide-left" delay={400}>
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-6">
                      🌟 3 CPE Summit on GST Litigations and Tribunal 🌟
                    </h3>

                    {/* Event Details */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-start text-muted-foreground">
                        <Calendar className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Date:</div>
                          <span>Friday, 28th November, 2025</span>
                        </div>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <Clock className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Time:</div>
                          <span>From 4pm to 7pm</span>
                        </div>
                      </div>
                      <div className="flex items-start text-muted-foreground">
                        <MapPin className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-secondary">Venue:</div>
                          <span>BBD Bag Ashika Conference Hall, Commerce House, 4th Floor</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
                      <div className="space-y-3 text-muted-foreground">
                        <div>
                          <span className="font-semibold text-secondary">🧮 CPE Hours:</span> 3 hrs (Structured)
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">💰 Fees:</span> ₹200/-
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">🎯 Topic:</span> GST Litigations and Tribunal
                        </div>
                        <div>
                          <span className="font-semibold text-secondary">👤 Faculty:</span> CA Abhishek Sanyal
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      With regards,<br />
                      <span className="font-semibold">B.B.D. BAG CA CPE STUDY CIRCLE OF EIRC OF ICAI</span>
                    </p>
                  </ScrollAnimation>
                </div>

                {/* Event Photos Gallery */}
                <div>
                  <ScrollAnimation animation="fade-up" className="text-center mb-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-secondary mb-4">
                      Event <span className="text-primary">Gallery</span>
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      Capturing moments from our successful events
                    </p>
                  </ScrollAnimation>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ScrollAnimation animation="scale-in" delay={100}>
                      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={pastEvent1}
                          alt="CA Ravi Sureka speaking at the GST event"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-in" delay={200}>
                      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={pastEvent2}
                          alt="Leadership team with guest speaker at the event"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-in" delay={300}>
                      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={pastEvent3}
                          alt="Attendees at the BBD Bag CA CPE Study Circle event"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-in" delay={400}>
                      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={pastEvent4}
                          alt="Group photo of participants and organizers"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="scale-in" delay={500}>
                      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img
                          src={pastEvent5}
                          alt="CA Abhishek Sanyal presenting on GSTAT"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
