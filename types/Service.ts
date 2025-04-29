import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof LucideIcon;
  imageUrl: string;
}
