export interface Product {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
}