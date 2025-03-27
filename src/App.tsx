import React, { useState } from 'react';
import { Play, Star, MessageCircle, Instagram, Facebook, Twitter, Mail, Phone, PlayCircle, CheckCircle, Clock, Sparkles, Award, Heart, Gift, Calendar, Globe, MapPin, Shield, Video, Youtube, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductModal from './components/ProductModal';
import VideoPreviewModal from './components/VideoPreviewModal';
import AnimatedEnvelopes from './components/AnimatedEnvelopes';
import { products } from './data/products';
import { testimonials } from './data/testimonials';
import { showcaseInvites } from './data/showcase';
import { processSteps, pricingPlans } from './data/content';
import home from './assets/home.jpg'
import Crousel from './components/Crousel';
import Printable from './components/Printable'
import New from './components/New';

// Ayush rai is best

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Instagram size={24} />, label: 'Instagram', url: 'https://instagram.com', color: 'hover:text-pink-500' },
    { icon: <Facebook size={24} />, label: 'Facebook', url: 'https://facebook.com', color: 'hover:text-blue-600' },
    { icon: <Twitter size={24} />, label: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: <Youtube size={24} />, label: 'YouTube', url: 'https://youtube.com', color: 'hover:text-red-600' },
    { icon: <Linkedin size={24} />, label: 'LinkedIn', url: 'https://linkedin.com', color: 'hover:text-blue-700' },
    { icon: <MessageCircle size={24} />, label: 'WhatsApp', url: 'https://wa.me/1234567890', color: 'hover:text-green-500' },
  ];

  return (
    <div className="relative w-full">
      <Navbar onNavigate={scrollToSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={home}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <AnimatedEnvelopes />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Craft Your Perfect Moment
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Transform your special occasions into timeless digital memories
          </p>
          <button
            onClick={() => scrollToSection('products')}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 mx-auto animate-bounce-in"
          >
            <Play size={20} />
            Explore Invitations
          </button>
        </div>
      </section>

      {/* Featured Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-gray-400">Invites Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Design Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Latest Creations</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Explore our collection of beautifully crafted video invitations that have captured precious moments and created lasting memories for our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseInvites.map((invite) => (
              <div key={invite.id} className="group relative overflow-hidden rounded-xl">
                <img
                  src={invite.thumbnail}
                  alt={invite.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{invite.title}</h3>
                  <p className="text-gray-300 text-center mb-4">{invite.description}</p>
                  <button
                    onClick={() => {
                      setSelectedVideo(invite);
                      setIsVideoModalOpen(true);
                    }}
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90"
                  >
                    <PlayCircle size={20} />
                    Watch Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Our streamlined process ensures a smooth experience from concept to delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-black text-white rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crousel Section Start */}
      <Crousel 
      heading="Wedding Invites"
      dataone = "Your wedding day is a once-in-a-lifetime celebration, and your invitations should reflect its"
      datatwo = " beauty and uniqueness. At Invitation wala, we offer a stunning collection of wedding invites, from classic and timeless designs to modern and personalized styles."
      />
      <Crousel 
      heading="Save the Date"
      dataone = "Make your wedding announcement unforgettable with our Save the Date invitations! Designed to set the perfect tone for your big day, our digital Save the Dates are elegant, personalized, and"
      datatwo = " crafted to match your wedding theme. we ensure every detail captures the excitement of your upcoming celebration, leaving a lasting impression on your guests."
      />
      <Crousel 
      heading="Custom Story Invite"
      dataone = "Celebrate your love story with our Custom Story Invitations, where every detail of your journey is beautifully illustrated in a personalized invite. From how you met to the big “Yes,” we bring your unique moments to life through creative designs, charming illustrations, and heartfelt"
      datatwo = "  storytelling. Perfect for love birds who want their wedding invitation to be more than just a card, make your guests feel truly connected to your special day."
      />
      {/* Crousel Section End  */}

      <New/>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Pricing Plans</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Choose the perfect package for your special occasion
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`rounded-xl overflow-hidden ${
                plan.popular ? 'border-2 border-black relative' : 'border border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="bg-black text-white text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/invite</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle size={20} className="text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                    className={`w-full py-3 rounded-lg transition-colors ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-black hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Find answers to common questions about our video invitation service
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">How long does it take to create a video invitation?</h3>
                <p className="text-gray-600">Typically, we deliver the first draft within 3-5 business days, with the final version ready within a week after your feedback.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I include my own photos and videos?</h3>
                <p className="text-gray-600">Absolutely! We encourage you to share your personal photos and videos to make your invitation more meaningful and unique.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I share the video invitation?</h3>
                <p className="text-gray-600">We provide multiple sharing options including direct download, social media sharing, and a unique web link for easy distribution.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Can you add music to the video?</h3>
                <p className="text-gray-600">Yes! You can choose from our licensed music library or provide your own music (subject to copyright).</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer rush delivery?</h3>
                <p className="text-gray-600">Yes, we offer expedited service for urgent requests at an additional cost. Contact us for details.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What formats do you deliver?</h3>
                <p className="text-gray-600">We deliver in all popular video formats including MP4, MOV, and web-optimized versions for different platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="mailto:contact@invitationvideos.com"
              className="flex flex-col items-center gap-4 p-8 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <Mail size={32} className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-gray-300">contact@invitationvideos.com</p>
              </div>
            </a>
            
            <a
              href="tel:+1234567890"
              className="flex flex-col items-center gap-4 p-8 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <Phone size={32} className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (234) 567-890</p>
              </div>
            </a>
            
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 rounded-xl bg-white/10 hover:bg-white/20 transition-all group"
            >
              <MessageCircle size={32} className="text-white group-hover:scale-110 transition-transform" />
              <div className="text-center">
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-300">Message us directly</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Connect Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Connect With Us</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest work and announcements
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all ${social.color}`}
              >
                {social.icon}
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Video className="w-8 h-8" />
                <span className="font-bold text-xl">InviteWallah</span>
              </div>
              <p className="text-gray-400">
                Creating unforgettable digital invitations for your special moments.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-white">Products</button></li>
                <li><button onClick={() => scrollToSection('testimonials')} className="text-gray-400 hover:text-white">Testimonials</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                <li className="text-gray-400">Wedding Invitations</li>
                <li className="text-gray-400">Birthday Celebrations</li>
                <li className="text-gray-400">Corporate Events</li>
                <li className="text-gray-400">Baby Showers</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin size={20} />
                  123 Creative Ave, Design City
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail size={20} />
                  contact@invitationvideos.com
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={20} />
                  +1 (234) 567-890
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                © 2024 Invitation Videos. All rights reserved.
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <VideoPreviewModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => {
          setIsVideoModalOpen(false);
          setSelectedVideo(null);
        }}
      />
    </div>
  );
}

export default App;