import React from 'react';
import ScrollAnimation from '@/hooks/useScrollAnimation';
import PastEventsList from '@/components/PastEventsList';

const PastEvents = () => {
  return (
    <div className="bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up" className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Past <span className="text-primary">Events</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our successful events and professional gatherings
          </p>
        </ScrollAnimation>

        <PastEventsList stickyFlyers />
      </div>
    </div>
  );
};

export default PastEvents;
