import Services from './services';

const makeUpServices = [
  {
    id: 1,
    name: 'Service 1',
    href: '#',
    imageSrc: '/makeup1.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 2',
    href: '#',
    imageSrc: '/makeup2.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 3',
    href: '#',
    imageSrc: '/makeup3.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  },
  {
    id: 1,
    name: 'Service 4',
    href: '#',
    imageSrc: '/makeup4.jpeg',
    imageAlt: '',
    price: '£££',
    description: '...'
  }
];

export default function MakeUpServices() {
  return (
    <Services
      heading="Unveil Your Inner Glamour: Bespoke Makeup Services for Every Occasion"
      services={makeUpServices}
    />
  );
}
