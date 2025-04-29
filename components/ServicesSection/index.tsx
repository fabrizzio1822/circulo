import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceItem from './ServiceItem';
import ImageContainer from './ImageContainer';
import { useServiceContext } from '@/contexts/ServiceContext';
import { services } from '@/data/services';

const ServicesSection: React.FC = () => {
  const { activeService } = useServiceContext();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track when services section enters/exits viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // You can use this to add additional logic when the section enters/exits viewport
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-gray-50 py-20"
      id="services"
    >
      <div className="container mx-auto px-6">
      <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold color-gris text-center py-10">Nuestros <br/> <span className="text-lila">Servicios</span></h2>    
        
        <div 
          ref={containerRef}
          className="relative flex flex-col lg:flex-row max-w-6xl mx-auto"
        >
          {/* Left side: Services list */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-10 space-y-24 mb-20 lg:mb-0">
            {services.map((service, index) => (
              <ServiceItem 
                key={service.id}
                service={service}
                index={index}
              />
            ))}
          </div>
          
          {/* Right side: Sticky image container */}
          <div className="w-full lg:w-1/2">
            <div className="lg:sticky lg:top-24 lg:h-[auto]">
              <ImageContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;