import React from 'react';
import { Clock, CheckCircle, MessageCircle, Gift } from 'lucide-react';

export const processSteps = [
  {
    title: "Book Consultation",
    description: "Schedule a free consultation to discuss your vision and requirements",
    icon: React.createElement(MessageCircle, { size: 24 })
  },
  {
    title: "Design Process",
    description: "Our team creates a custom design based on your preferences",
    icon: React.createElement(CheckCircle, { size: 24 })
  },
  {
    title: "Review & Revise",
    description: "Review the draft and request any adjustments needed",
    icon: React.createElement(Clock, { size: 24 })
  },
  {
    title: "Final Delivery",
    description: "Receive your perfect video invitation ready to share",
    icon: React.createElement(Gift, { size: 24 })
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: 99,
    popular: false,
    features: [
      "HD Quality Video",
      "2 Revision Rounds",
      "Background Music",
      "Basic Animations",
      "Digital Delivery",
      "24/7 Support"
    ]
  },
  {
    id: 2,
    name: "Premium",
    price: 199,
    popular: true,
    features: [
      "4K Quality Video",
      "Unlimited Revisions",
      "Custom Music Selection",
      "Advanced Animations",
      "Multiple Format Delivery",
      "Priority Support",
      "Social Media Formats"
    ]
  },
  {
    id: 3,
    name: "Luxury",
    price: 399,
    popular: false,
    features: [
      "8K Quality Video",
      "Unlimited Revisions",
      "Custom Music & Voice Over",
      "Premium Animations",
      "All Format Delivery",
      "VIP Support",
      "Social Media Kit",
      "Analytics Dashboard"
    ]
  }
];