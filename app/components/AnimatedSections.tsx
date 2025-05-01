'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { features, techStack, supportedChains, faqs } from "../constants/design";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const courses = [
  {
    title: "Learn to design and develop stunning websites with HTML & CSS",
    duration: "01h 23 min",
    lessons: "07 lessons",
    reviews: 162,
    rating: 4.5,
    price: 59.99,
    originalPrice: 79.99,
    instructor: "Thomas Jim",
    image: "/course1.jpg"
  },
  {
    title: "Responsive Design: Craft Websites for Any Device",
    duration: "01h 23 min",
    lessons: "07 lessons",
    reviews: 48,
    rating: 4.0,
    price: 39.99,
    originalPrice: 59.99,
    instructor: "Thomas Jim",
    image: "/course2.jpg"
  },
  {
    title: "JavaScript Fundamentals for Web Development",
    duration: "01h 23 min",
    lessons: "07 lessons",
    reviews: 254,
    rating: 4.8,
    price: 99.99,
    originalPrice: 129.99,
    instructor: "Thomas Jim",
    image: "/course3.jpg"
  }
];

const companies = [
  "Rapyd",
  "Lucid",
  "mparticle",
  "Restream",
  "Brex",
  "super"
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block bg-mint/10 text-mint px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Web3 Learning Revolution
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Launch Your Own
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-mint to-coral">
                Web3 Learn2Earn Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let your users learn, earn, and own—fully customizable on-chain LMS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(32, 201, 151, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-mint text-black rounded-xl font-semibold border border-mint/50 backdrop-blur-sm"
              >
                Launch Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 122, 90, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-coral/50 text-coral rounded-xl font-semibold backdrop-blur-sm"
              >
                Deploy Now
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[600px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-mint/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-coral/20 rounded-full blur-3xl"></div>
              <Image
                src="/hero-3d.png"
                alt="Web3 Learning Platform"
                fill
                className="object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mint/5 to-transparent"></div>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features for
            <span className="text-mint"> Web3 Learning</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to launch your own token-powered learning platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-mint/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Built with Modern
            <span className="text-coral"> Web3 Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade infrastructure for scalable learning platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChainsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent via-coral/5 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Deploy on Any
            <span className="text-coral"> Chain</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Support for all major EVM-compatible networks
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {supportedChains.map((chain, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              style={{ boxShadow: `0 0 20px ${chain.color}20` }}
            >
              <div className="w-12 h-12 relative">
                <Image
                  src={chain.icon}
                  alt={chain.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked
            <span className="text-mint"> Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold">Learn2Earn</span>
            </div>
            <p className="text-gray-400">
              The future of education is on-chain. Build yours today.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">API Reference</a>
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">Smart Contracts</a>
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">Tutorials</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">Discord</a>
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">Twitter</a>
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">GitHub</a>
              <a href="#" className="block text-gray-400 hover:text-mint transition-colors">Blog</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>hello@learn2earn.xyz</p>
              <p>Support available 24/7</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            © 2024 Learn2Earn. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-mint transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-mint transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-mint transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 