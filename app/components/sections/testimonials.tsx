'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Blockchain Developer',
    company: 'Web3 Labs',
    image: '/testimonials/sarah.jpg',
    content: 'Learn2Earn transformed my career. The structured learning paths and hands-on projects helped me land my dream job in blockchain development.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Smart Contract Developer',
    company: 'DeFi Protocol',
    image: '/testimonials/michael.jpg',
    content: 'The peer review system and community support made learning complex blockchain concepts much easier. The token rewards are a great motivator!',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Full Stack Developer',
    company: 'Crypto Startup',
    image: '/testimonials/emma.jpg',
    content: 'I love how Learn2Earn combines education with practical experience. The certification program is recognized by top companies in the industry.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Learners Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers who have transformed their careers with Learn2Earn.
            Here's what our community has to say about their learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 