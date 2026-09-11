import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import ScrollAnimation from '@/hooks/useScrollAnimation';
import cpeEventFlyer from '@/assets/CPE-GST-Event-Flyer.jpeg';
import gstr9EventFlyer from '@/assets/GSTR-9-Event-Flyer.jpeg';
import labourCodesFlyer from '@/assets/labour-codes-flyer.jpeg';
import charitableTrustsFlyer from '@/assets/charitable-trusts-flyer.jpeg';
import nbfcAuditFlyer from '@/assets/nbfc-audit-flyer.jpeg';
import nbfcAuditFlyerJan16 from '@/assets/nbfc-audit-flyer-jan16.jpeg';
import annualPicnicFlyer from '@/assets/annual-picnic-flyer.jpeg';
import toastmastersFlyer from '@/assets/toastmasters-flyer.jpeg';
import gstSeminarMar17Flyer from '@/assets/gst-seminar-mar17-flyer.jpeg';
import gstAppellateTribunalFlyer from '@/assets/gst-appellate-tribunal-apr24-flyer.jpeg';
import annualConferenceFlyer from '@/assets/annual-conference-2026-flyer.jpg';
import auditSeminarFlyer from '@/assets/audit-seminar-flyer.jpeg.asset.json';
import geetaManthanFlyer from '@/assets/geeta-manthan-flyer.jpeg.asset.json';
import msmeSeminarFlyer from '@/assets/msme-seminar-flyer.jpeg.asset.json';
import pastEvent1 from '@/assets/past-event-1.jpeg';
import pastEvent2 from '@/assets/past-event-2.jpeg';
import pastEvent3 from '@/assets/past-event-3.jpeg';
import pastEvent4 from '@/assets/past-event-4.jpeg';
import pastEvent5 from '@/assets/past-event-5.jpeg';

const assetUrl = (path: string) => new URL(path, 'https://bbdbag.lovable.app').href;

type Detail = {
  label: string;
  value: React.ReactNode;
};

type EventItem = {
  title: string;
  image: string;
  alt: string;
  date: string;
  time?: string;
  venue?: string;
  intro?: React.ReactNode;
  details?: Detail[];
  closing?: React.ReactNode;
};

const pastEvents: EventItem[] = [
  {
    title: 'Seminar on Audit',
    image: assetUrl(auditSeminarFlyer.url),
    alt: 'Seminar on Audit - BBD Bag CA CPE Study Circle of EIRC of ICAI',
    date: 'Thursday, 10th September 2026',
    time: '04:00 PM to 07:00 PM',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata 700013',
    intro: (
      <p className="text-primary font-semibold mb-3">
        BBD Bag CA CPE Study Circle of EIRC of ICAI presents
      </p>
    ),
    details: [
      { label: 'CPE Hours', value: '3 CPE Hours' },
      { label: 'Topic', value: 'Getting to an Opinion: Audit and Reporting Challenges in SMCs' },
      { label: 'Speaker', value: 'CA Roshan Bajaj' },
      { label: 'Session Chairman', value: 'CA Gaurav More' },
      { label: 'Fees', value: 'Rs. 200/-' },
      {
        label: 'Payment Link',
        value: (
          <a href="https://imjo.in/CHnT4k" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            https://imjo.in/CHnT4k
          </a>
        ),
      },
      { label: 'Convenor', value: 'CA Harsh Satish Udeshi (+91 98363 57711)' },
      { label: 'Deputy Convenor', value: 'CA Chandra Bhanu Sinha (+91 94331 40833)' },
    ],
  },
  {
    title: 'Spiritual Session on Geeta Manthan — Chapter 10, Slokas 12 to 25',
    image: assetUrl(geetaManthanFlyer.url),
    alt: 'Spiritual Session on Geeta Manthan Chapter 10 Slokas 12 to 25 - BBD Bag Professional Association',
    date: 'Sunday, 30th August 2026',
    time: '11:00 AM to 12:00 Noon',
    intro: (
      <p className="text-primary font-semibold mb-3">
        BBD Bag Professional Association presents
      </p>
    ),
    details: [
      { label: 'Speaker', value: 'CA R K Vyas' },
      {
        label: 'Zoom Link',
        value: (
          <a href="https://us06web.zoom.us/j/88265401292?pwd=tpnrvLhMbbYocBTGeG9iwLFtkfPs1s.1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium break-all">
            https://us06web.zoom.us/j/88265401292
          </a>
        ),
      },
      { label: 'Meeting ID', value: '882 6540 1292' },
      { label: 'Passcode', value: '733775' },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">BBD Bag Professional Association</span>
      </>
    ),
  },
  {
    title: 'Seminar on MSME',
    image: assetUrl(msmeSeminarFlyer.url),
    alt: 'Seminar on MSME - BBD Bag CA CPE Study Circle of EIRC of ICAI',
    date: 'Saturday, 29th August 2026',
    time: '4:00 PM to 6:00 PM',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata 700013',
    intro: (
      <p className="text-primary font-semibold mb-3">
        BBD Bag CA CPE Study Circle of EIRC of ICAI presents
      </p>
    ),
    details: [
      { label: 'CPE Hours', value: '2 CPE Hours' },
      { label: 'Topic', value: 'Recent Amendments in MSME Act' },
      { label: 'Speaker', value: 'CA Bishnu Basia' },
      { label: 'Fees', value: 'Rs. 200/-' },
      {
        label: 'Payment Link',
        value: (
          <a href="https://imjo.in/FdrsNe" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            https://imjo.in/FdrsNe
          </a>
        ),
      },
      { label: 'Convenor', value: 'CA Harsh Satish Udeshi (+91 98363 57711)' },
      { label: 'Deputy Convenor', value: 'CA Chandra Bhanu Sinha (+91 94331 40833)' },
    ],
  },
  {
    title: '4th Annual Conference 2026 — Transformation: AI & Networking',
    image: annualConferenceFlyer,
    alt: '4th Annual Conference 2026 - Transformation: AI & Networking - BBD Bag Professional Association',
    date: 'Saturday, 30th May 2026',
    time: '10:00 AM onwards',
    venue: 'Royal Bengal Room, City Centre I, Salt Lake, Kolkata',
    intro: (
      <p className="text-primary font-semibold mb-3">
        BBD Bag Professional Association presents
      </p>
    ),
    details: [
      { label: 'Delegate Fee', value: '₹1800 (including taxes)' },
      {
        label: 'Chief Guest',
        value: 'Mr. Vinod Kumar Gupta, Managing Director, Dollar Industries Ltd.',
      },
      {
        label: 'Eminent Speakers',
        value: 'CA Himanshu Kumar — AI in Tax Practice: From Compliance to Advisory; CA (Dr.) Rakesh Gupta — Search & Block Assessment under Income Tax Act, 2025; CA Nilesh Shivji Vikamsey — Networking of CA Firms and Models of Aggregation; Mr. Anuj Singhal — The Future of the Indian Capital Market in a Deglobalised World',
      },
      {
        label: 'Brochure',
        value: (
          <a href="/documents/bbd-bag-4th-annual-conference-brochure.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            View full brochure
          </a>
        ),
      },
      {
        label: 'Registration Link',
        value: (
          <a href="https://forms.gle/sCjyiW7GbDMpiZdE7" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            https://forms.gle/sCjyiW7GbDMpiZdE7
          </a>
        ),
      },
    ],
  },
  {
    title: 'Seminar on GST',
    image: gstAppellateTribunalFlyer,
    alt: 'Seminar on GST Appellate Tribunal Filing and Procedure - BBD Bag CA CPE Study Circle',
    date: 'Friday, 24th April 2026',
    time: '04:00 PM to 07:00 PM',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata 700013',
    intro: (
      <p className="text-primary font-semibold mb-3">
        BBD Bag CA CPE Study Circle of EIRC of ICAI presents
      </p>
    ),
    details: [
      { label: 'Topic', value: 'GST Appellate Tribunal Filing & Procedure' },
      { label: 'Eminent Speaker', value: 'Adv. (CA) Tarun Kr. Gupta' },
      { label: 'Session Moderator', value: 'CA Ravi Sureka' },
      { label: 'Registration Fees', value: 'Rs 200' },
      { label: 'CPE', value: '3 hrs' },
      {
        label: 'Registration Link',
        value: (
          <a href="https://imjo.in/5WSywv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            https://imjo.in/5WSywv
          </a>
        ),
      },
    ],
  },
  {
    title: 'Seminar on Goods & Services Tax',
    image: gstSeminarMar17Flyer,
    alt: 'Seminar on Goods and Services Tax - BBD Bag CA CPE Study Circle of EIRC of ICAI',
    date: 'Tuesday, 17th March 2026',
    time: '4.00 PM - 7.00 PM',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata 700013',
    details: [
      { label: 'CPE Hours', value: '3 CPE Hour' },
      { label: 'Theme', value: 'Decoding GST Complexities & Practical Challenges' },
      { label: 'Topics', value: 'Classification of Goods/Services, Place of Supply Goods/Services, Reverse Charge Mechanism, Price Vs Valuation' },
      { label: 'Eminent Speaker', value: 'CA Sushil Kumar Goyal' },
      { label: 'Session Chairman', value: 'CA Ravi Sureka' },
      { label: 'Fees', value: 'Rs. 200/-' },
      { label: 'Payment Link', value: 'https://imjo.in/r2dWQU' },
      { label: 'Convenor', value: 'CA Harsh Satish Udeshi (+91 98363 57711)' },
      { label: 'Deputy Convenor', value: 'CA Muskan Sethia (+91 98309 31197)' },
    ],
  },
  {
    title: '🎤 Build Confidence. Speak with Impact. Lead with Presence! 🚀',
    image: toastmastersFlyer,
    alt: 'FREE Toastmasters Demo Meeting - BBD Bag Professional Association',
    date: '31st January 2026',
    time: '4:00 PM – 6:00 PM',
    venue: 'BBD Bag Ashika Conference Hall',
    intro: (
      <>
        <p className="text-lg text-muted-foreground mb-6">
          BBD Bag Professional Association invites you to a <span className="font-semibold text-primary">FREE Toastmasters Demo Meeting</span> — a perfect opportunity to sharpen your public speaking, communication, and leadership skills in a safe & supportive environment.
        </p>
        <p className="text-muted-foreground mb-6">
          ✨ Whether you're a professional or student or entrepreneur — this is your chance to step out of your comfort zone and grow with like-minded individuals.
        </p>
      </>
    ),
    details: [
      {
        label: 'WhatsApp Group',
        value: (
          <a href="https://chat.whatsapp.com/Gy4oTYBX3ga9FVXGK31vkq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
            https://chat.whatsapp.com/Gy4oTYBX3ga9FVXGK31vkq
          </a>
        ),
      },
    ],
    closing: (
      <>
        Regards,<br />
        <span className="font-semibold">BBD Bag Professional Association</span>
      </>
    ),
  },
  {
    title: '🎉 BBD Bag Professional Association Annual Picnic 2026 🎉',
    image: annualPicnicFlyer,
    alt: 'BBD Bag Professional Association Annual Picnic 2026',
    date: 'Sunday, 18th January 2026',
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">Team BBD Bag Professional Association</span>
      </>
    ),
  },
  {
    title: '📢 NON CPE SEMINAR ON NBFC AUDIT AND COMPLIANCES 📢',
    image: nbfcAuditFlyerJan16,
    alt: 'Seminar on NBFC Audit and Compliances - BBD Bag Professional Association',
    date: 'Friday, 16th January 2026',
    time: '5.00 PM to 7.00 PM',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata – 700013',
    details: [
      { label: '🎯 Topic', value: 'NBFC Audit and Compliances - RBI Master Directions 2025' },
      { label: '👤 Session Chairman', value: 'Apurva Maheswari' },
      { label: '👤 Speaker', value: 'CA Mohit Bhuteria' },
      { label: '💰 Fees', value: 'NIL (Free to attend)' },
      { label: '📌 Mode', value: 'Physical Seminar' },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">B.B.D. PROFESSIONAL ASSOCIATION</span>
      </>
    ),
  },
  {
    title: '🌟 Seminar on NBFC Audit and Compliances 🌟',
    image: nbfcAuditFlyer,
    alt: 'Seminar on NBFC Audit and Compliances - BBD Bag Professional Association',
    date: 'Friday, 16th January 2026',
    time: 'From 5pm to 7pm',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 2A Ganesh Chandra Avenue, 4th Floor, Room No 1, Kolkata 700013',
    details: [
      { label: '🎯 Topic', value: 'NBFC Audit and Compliances' },
      { label: '👤 Session Chairman', value: 'CA Apurva Maheswari' },
      { label: '👤 Speaker', value: 'CA Mohit Bhuteria' },
      { label: '💰 Fees', value: 'NIL' },
      { label: 'Mode', value: <span className="text-primary font-semibold">Physical Seminar</span> },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">B.B.D. PROFESSIONAL ASSOCIATION</span>
      </>
    ),
  },
  {
    title: '🌟 Seminar on Charitable Trusts 🌟',
    image: charitableTrustsFlyer,
    alt: 'Seminar on Charitable Trusts - BBD Bag Professional Association',
    date: 'Saturday, 10th January 2026',
    time: 'From 4pm to 6pm',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 4th Floor, Room No 1, Kolkata 700013',
    details: [
      { label: '🎯 Topic', value: 'A brief discussion on new provisions of Charitable Trusts in Income Tax Act 2025' },
      { label: '👤 Session Chairman', value: 'CA Ashoke Maheshwari' },
      { label: '👤 Faculty', value: 'CA Suresh Kejriwal' },
      { label: '💰 Fees', value: 'NIL' },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">B.B.D. PROFESSIONAL ASSOCIATION</span>
      </>
    ),
  },
  {
    title: '🌟 Webinar on New Labour Codes 🌟',
    image: labourCodesFlyer,
    alt: 'Webinar on New Labour Codes - BBD Bag Professional Association',
    date: 'Friday, 9th January 2026',
    time: 'From 5pm to 7pm',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 4th Floor, Room No 1, Kolkata 700013',
    details: [
      { label: '🎯 Topic', value: 'Decoding of New Labour Codes; Accounting for Employees Benefits; Payroll Restructuring' },
      { label: '👤 Session Chairman', value: 'CA R K Vyas' },
      { label: '👤 Faculty', value: 'CA Vivek Agarwal' },
      { label: '💰 Fees', value: 'NIL' },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">B.B.D. PROFESSIONAL ASSOCIATION</span>
      </>
    ),
  },
  {
    title: '🌟 Seminar on GSTR 9 and 9C : Tools, Traps and Techniques for Zero Notice 🌟',
    image: gstr9EventFlyer,
    alt: 'Seminar on GSTR 9 and 9C - BBD Bag CA CPE Study Circle',
    date: 'Friday, 05th December 2025',
    time: 'From 4pm to 7pm',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 4th Floor',
    details: [
      { label: '🧮 CPE Hours', value: '3 hrs (Structured)' },
      { label: '💰 Fees', value: '₹200/-' },
      { label: '🎯 Topic', value: 'GSTR 9 and 9C' },
      { label: '👤 Session Chairman', value: 'CA Ravi Sureka' },
      { label: '👤 Speaker', value: 'CA Pradeep Modi' },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">B.B.D. BAG CA CPE STUDY CIRCLE OF EIRC OF ICAI</span>
      </>
    ),
  },
  {
    title: '🌟 3 CPE Summit on GST Litigations and Tribunal 🌟',
    image: cpeEventFlyer,
    alt: '3 CPE Summit on GST Litigations and Tribunal - B.B.D. BAG CA CPE Study Circle',
    date: 'Friday, 28th November, 2025',
    time: 'From 4pm to 7pm',
    venue: 'BBD Bag Ashika Conference Hall, Commerce House, 4th Floor',
    details: [
      { label: '🧮 CPE Hours', value: '3 hrs (Structured)' },
      { label: '💰 Fees', value: '₹200/-' },
      { label: '🎯 Topic', value: 'GST Litigations and Tribunal' },
      { label: '👤 Faculty', value: 'CA Abhishek Sanyal' },
    ],
    closing: (
      <>
        With regards,<br />
        <span className="font-semibold">B.B.D. BAG CA CPE STUDY CIRCLE OF EIRC OF ICAI</span>
      </>
    ),
  },
];

const galleryImages = [
  { src: pastEvent1, alt: 'CA Ravi Sureka speaking at the GST event' },
  { src: pastEvent2, alt: 'Leadership team with guest speaker at the event' },
  { src: pastEvent3, alt: 'Attendees at the BBD Bag CA CPE Study Circle event' },
  { src: pastEvent4, alt: 'Group photo of participants and organizers' },
  { src: pastEvent5, alt: 'CA Abhishek Sanyal presenting on GSTAT' },
];

type PastEventsListProps = {
  stickyFlyers?: boolean;
};

const PastEventsList = ({ stickyFlyers = false }: PastEventsListProps) => {
  return (
    <div className="space-y-16">
      {pastEvents.map((event) => (
        <section key={`${event.title}-${event.date}`} className="py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollAnimation animation="scale-in" delay={200}>
              <div className={`relative max-w-md mx-auto ${stickyFlyers ? 'lg:sticky lg:top-24' : ''}`}>
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-left" delay={400}>
              <h3 className="text-2xl lg:text-4xl font-bold text-secondary mb-6">
                {event.title}
              </h3>

              {event.intro}

              <div className="space-y-3 mb-8">
                <div className="flex items-start text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-secondary">Date:</div>
                    <span>{event.date}</span>
                  </div>
                </div>
                {event.time && (
                  <div className="flex items-start text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary">Time:</div>
                      <span>{event.time}</span>
                    </div>
                  </div>
                )}
                {event.venue && (
                  <div className="flex items-start text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-secondary">Venue:</div>
                      <span>{event.venue}</span>
                    </div>
                  </div>
                )}
              </div>

              {event.details && event.details.length > 0 && (
                <div className="bg-card rounded-lg p-6 mb-6 shadow-sm">
                  <div className="space-y-3 text-muted-foreground">
                    {event.details.map((detail) => (
                      <div key={detail.label}>
                        <span className="font-semibold text-secondary">{detail.label}:</span> {detail.value}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {event.closing && (
                <p className="text-sm text-muted-foreground mt-4">
                  {event.closing}
                </p>
              )}
            </ScrollAnimation>
          </div>
        </section>
      ))}

      <section className="py-0 mt-8">
        <ScrollAnimation animation="fade-up" className="text-center mb-8">
          <h3 className="text-2xl lg:text-4xl font-bold text-secondary mb-4">
            Event <span className="text-primary">Gallery</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Capturing moments from our successful events
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollAnimation key={image.src} animation="scale-in" delay={(index + 1) * 100}>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PastEventsList;
