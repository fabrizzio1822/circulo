import { ComponentType, SVGProps } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; // este tipo es ideal para íconos SVG
  imageUrl: string;
}
