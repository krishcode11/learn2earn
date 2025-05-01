'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-mint/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Start Your Blockchain Learning Journey Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already building their future in blockchain
            technology. Earn while you learn and become part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-mint hover:bg-mint/90">
              <Link href="/courses">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. Start with our free plan and upgrade anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 