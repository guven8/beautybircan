import Services from './services';

const eyebrowServices = [
  {
    id: 1,
    name: 'Service 1',
    href: '#',
    imageSrc: '/eyebrows1.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 2',
    href: '#',
    imageSrc: '/eyebrows2.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 3',
    href: '#',
    imageSrc: '/eyebrows3.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 4',
    href: '#',
    imageSrc: '/eyebrows4.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  }
];

export default function EyebrowsServices() {
  return (
    <Services
      heading="Elevate Your Gaze with Our Stunning Eyelash Services"
      services={eyebrowServices}
    />
  );
}
