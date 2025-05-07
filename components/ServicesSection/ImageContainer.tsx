import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useServiceContext } from '@/contexts/ServiceContext';
import { services } from '@/data/services';

const ImageContainer: React.FC = () => {
  const { activeService } = useServiceContext();
  
  // Find the currently active service
  const currentService = services.find(service => service.id === activeService);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  return (
    <div className="hidden lg:block relative w-full h-full md:min-h-[500px] lg:min-h-[400px] rounded-xl overflow-hidden shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="absolute inset-0"
        >
          <img
            src={currentService?.imageUrl}
            alt={currentService?.title}
            className="w-full h-full object-cover rounded-xl"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                servicio
              </span>
              <h4 className="text-white text-xl md:text-2xl font-bold">
                {currentService?.title}
              </h4>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageContainer;