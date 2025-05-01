'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Coins } from 'lucide-react';

const stats = [
  {
    name: 'Active Learners',
    value: '10,000+',
    icon: Users,
    description: 'Students actively learning',
  },
  {
    name: 'Courses',
    value: '100+',
    icon: BookOpen,
    description: 'Expert-led courses',
  },
  {
    name: 'Certificates',
    value: '5,000+',
    icon: Award,
    description: 'Certificates awarded',
  },
  {
    name: 'Tokens Earned',
    value: '1M+',
    icon: Coins,
    description: 'Tokens distributed',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint-400/10 to-coral-400/10 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="glassmorphism p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.name}</p>
                    <h3 className="text-3xl font-bold tracking-tight">
                      {stat.value}
                    </h3>
                  </div>
                  <div className="p-2 bg-mint-400/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-mint-400" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
                <div className="mt-4 h-1 w-full bg-gradient-to-r from-mint-400/20 to-coral-400/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-mint-400 to-coral-400"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 