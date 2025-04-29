import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useServiceContext } from '@/contexts/ServiceContext';
import { Service } from '@/types/Service';

interface ServiceItemProps {
  service: Service;
  index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
  const { setActiveService, activeService } = useServiceContext();
  const controls = useAnimation();
  
  // Use Intersection Observer to check when service is in view
  const [ref, inView] = useInView({
    threshold: 1, // Trigger when 60% of the item is visible
    triggerOnce: false,
  });

  // When this service comes into view, set it as active
  useEffect(() => {
    if (inView) {
      setActiveService(service.id);
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, service.id, setActiveService, controls]);

  // Animation variants
  const itemVariants = {
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const isActive = activeService === service.id;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={itemVariants}
      className={`min-h-[] service-item py-20 mb-20 px-6 transition-all duration-500 rounded-xl ${
        isActive ? 'bg-lila/5 shadow-lg' : ''
      }`}
    >
      <div className="max-w-xl">
        <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-6 ${
          isActive ? 'bg-lila text-white' : 'bg-indigo-100 text-indigo-600'
        }`}>
          <service.icon size={24} />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
        <a 
          href="#" 
          className="text-lila font-semibold flex items-center hover:text-indigo-700 transition-all"
        >
          Ver más
          <svg 
            className="ml-2 w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceItem;