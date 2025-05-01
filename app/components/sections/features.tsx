'use client';

import { motion } from 'framer-motion';
import { 
  Wallet, 
  GraduationCap, 
  Trophy,
  Coins,
  BookOpen,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const features = [
  {
    name: 'Web3 Integration',
    description: 'Connect your wallet and start earning tokens while learning about blockchain technology.',
    icon: Wallet,
  },
  {
    name: 'Expert-Led Courses',
    description: 'Learn from industry experts with hands-on experience in blockchain and Web3 development.',
    icon: GraduationCap,
  },
  {
    name: 'Learn to Earn',
    description: 'Earn tokens by completing courses, quizzes, and contributing to the community.',
    icon: Trophy,
  },
  {
    name: 'Token Rewards',
    description: 'Receive token rewards for your achievements and progress in the platform.',
    icon: Coins,
  },
  {
    name: 'Interactive Learning',
    description: 'Engage with interactive content, coding exercises, and real-world projects.',
    icon: BookOpen,
  },
  {
    name: 'Community Driven',
    description: 'Join a vibrant community of learners and experts in the Web3 space.',
    icon: Users,
  },
  {
    name: 'Secure Platform',
    description: 'Your data and earnings are protected with industry-standard security measures.',
    icon: Shield,
  },
  {
    name: 'Fast-Paced Learning',
    description: 'Learn at your own pace with structured courses designed for quick progress.',
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-mint-400/10 via-transparent to-transparent" />
      <div className="container relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4"
          >
            Platform Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Everything you need to start your Web3 learning journey
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mint-400/10 to-coral-400/10 rounded-xl -z-10 group-hover:scale-105 transition-transform duration-300" />
              <div className="glassmorphism p-6 h-full">
                <div className="mb-4 p-3 bg-mint-400/10 w-fit rounded-lg">
                  <feature.icon className="h-6 w-6 text-mint-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 