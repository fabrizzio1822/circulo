import React, { createContext, useState, useContext, ReactNode } from 'react';
import { services } from '../data/services';

interface ServiceContextType {
  activeService: string;
  setActiveService: (id: string) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServiceContext must be used within a ServiceProvider');
  }
  return context;
};

interface ServiceProviderProps {
  children: ReactNode;
}

export const ServiceProvider: React.FC<ServiceProviderProps> = ({ children }) => {
  // Initialize with the first service
  const [activeService, setActiveService] = useState<string>(services[0].id);

  return (
    <ServiceContext.Provider value={{ activeService, setActiveService }}>
      {children}
    </ServiceContext.Provider>
  );
};