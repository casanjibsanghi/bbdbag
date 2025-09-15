import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-up-scale';
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

export const ScrollAnimation = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}: ScrollAnimationProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClasses = {
    'fade-up': {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0'
    },
    'fade-in': {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    'slide-left': {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    'slide-right': {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    'scale-in': {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    },
    'fade-up-scale': {
      initial: 'opacity-0 translate-y-8 scale-95',
      animate: 'opacity-100 translate-y-0 scale-100'
    }
  };

  const selectedAnimation = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${inView ? selectedAnimation.animate : selectedAnimation.initial}
        ${className}
      `}
      style={{
        transitionDelay: inView ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;