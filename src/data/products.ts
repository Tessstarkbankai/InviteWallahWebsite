import { Product } from '../types';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p from '../assets/p.jpg';


export const products: Product[] = [
  {
    id: 1,
    title: 'Wedding Invitations',
    shortDescription: 'Elegant and romantic video invitations for your special day',
    description: 'Make your wedding announcement unforgettable with our premium video invitations. We combine your love story with stunning visuals and music to create a unique experience for your guests.',
    image: p1,
    features: [
      'Personalized story narration',
      'Professional voice-over options',
      'Custom music selection',
      'High-quality motion graphics',
      'Multiple sharing formats'
    ]
  },
  {
    id: 2,
    title: 'Birthday Celebrations',
    shortDescription: 'Fun and exciting video invites for birthday parties',
    description: 'Create excitement for your birthday celebration with our vibrant and engaging video invitations. Perfect for both kids and adults, our designs capture the joy of celebration.',
    image: p2,
    features: [
      'Age-appropriate themes',
      'Interactive elements',
      'Custom color schemes',
      'Fun animations',
      'Easy social media sharing'
    ]
  },
  {
    id: 3,
    title: 'Corporate Events',
    shortDescription: 'Professional video invitations for business events',
    description: 'Make your corporate event stand out with our professional video invitations. Perfect for conferences, seminars, product launches, and company celebrations.',
    image: p3,
    features: [
      'Brand integration',
      'Professional templates',
      'Event agenda inclusion',
      'RSVP tracking',
      'Analytics dashboard'
    ]
  },
  {
    id: 4,
    title: 'Baby Showers',
    shortDescription: 'Sweet and tender announcements for your bundle of joy',
    description: 'Announce your upcoming bundle of joy with our heartwarming baby shower video invitations. We create touching moments that friends and family will love.',
    image: p,
    features: [
      'Gender reveal options',
      'Cute animations',
      'Family photos integration',
      'Customizable themes',
      'Easy sharing options'
    ]
  }
];