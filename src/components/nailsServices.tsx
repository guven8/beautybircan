import Services from './services';

const nailsServices = [
  {
    id: 1,
    name: 'Service 1',
    href: '#',
    imageSrc: '/nails1.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 2',
    href: '#',
    imageSrc: '/nails2.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 3',
    href: '#',
    imageSrc: '/nails3.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  }
];

export default function NailsServices() {
  return (
    <Services
      heading="Nail Artistry Redefined: Express Your Style with Our Stunning Nail Services"
      services={nailsServices}
    />
  );
}
