import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import ScrollAnimation from '@/hooks/useScrollAnimation';
import cpeEventFlyer from '@/assets/CPE-GST-Event-Flyer.jpeg';
import gstr9EventFlyer from '@/assets/GSTR-9-Event-Flyer.jpeg';
import pastEvent1 from '@/assets/past-event-1.jpeg';
import pastEvent2 from '@/assets/past-event-2.jpeg';
import pastEvent3 from '@/assets/past-event-3.jpeg';
import pastEvent4 from '@/assets/past-event-4.jpeg';
import pastEvent5 from '@/assets/past-event-5.jpeg';

const PastEvents = () => {
  return (
    <div className="bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <ScrollAnimation animation="fade-up" className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Past <span className="text-primary">Events</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful events and professional gatherings
          </p>
        </ScrollAnimation>

        {/* GSTR 9 Event Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Event Flyer */}
            <ScrollAnimation animation="scale-in" delay={200}>
              <div className="relative max-w-md mx-auto sticky top-24">
                <img
                  src={gstr9EventFlyer}
                  alt="Seminar on GSTR 9 and 9C - BBD Bag CA CPE Study Circle"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </ScrollAnimation>

            {/* Event Details */}
            <ScrollAnimation animation="slide-left" delay={400}>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                🌟 Seminar on GSTR 9 and 9C : Tools, Traps and Techniques for Zero Notice 🌟
              </h2>

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

              <p className="text-sm text-muted-foreground mt-4">
                With regards,<br />
                <span className="font-semibold">B.B.D. BAG CA CPE STUDY CIRCLE OF EIRC OF ICAI</span>
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* GST Litigations Event Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Event Flyer */}
            <ScrollAnimation animation="scale-in" delay={200}>
              <div className="relative max-w-md mx-auto sticky top-24">
                <img
                  src={cpeEventFlyer}
                  alt="3 CPE Summit on GST Litigations and Tribunal - B.B.D. BAG CA CPE Study Circle"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </ScrollAnimation>

            {/* Event Details */}
            <ScrollAnimation animation="slide-left" delay={400}>
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                🌟 3 CPE Summit on GST Litigations and Tribunal 🌟
              </h2>

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

              <p className="text-sm text-muted-foreground mt-4">
                With regards,<br />
                <span className="font-semibold">B.B.D. BAG CA CPE STUDY CIRCLE OF EIRC OF ICAI</span>
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Event Photos Section */}
        <section className="py-12 mt-8">
          <ScrollAnimation animation="fade-up" className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Event <span className="text-primary">Gallery</span>
            </h2>
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
        </section>
      </div>
    </div>
  );
};

export default PastEvents;
