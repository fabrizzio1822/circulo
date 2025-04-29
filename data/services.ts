import { Person , PeopleMultiple, PeopleGroup} from 'akar-icons'
import { Service } from '@/types/Service';

export const services: Service[] = [
  {
    id: '1',
    title: 'Atención Individual',
    description: 'Desde la perspectiva sistémica, en la terapia individual se trabaja con aspectos de la esfera individual de la persona, así como con aspectos relacionados a sus relaciones interpersonales significativas.',
    icon: Person,
    imageUrl: '/assets/atencion-individual-copia.jpg'
  },
  {
    id: '2',
    title: 'Atención de Parejas',
    description: 'Desde la perspectiva sistémica se considera a la pareja como un sistema, en el que los problemas son considerados como parte de la dinámica del mismo.',
    icon: PeopleMultiple,
    imageUrl: '/assets/atencion-pareja.jpg'
  },
  {
    id: '3',
    title: 'Atención Familiar',
    description: 'Se centra en las relaciones y dinámicas dentro de una familia, entendiendo que los problemas individuales a menudo derivan de interacciones y patrones dentro del sistema familiar.',
    icon: PeopleGroup,
    imageUrl: '/assets/atencion-familiar.jpg'
  }
];