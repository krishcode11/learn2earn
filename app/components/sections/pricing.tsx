'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    description: 'Perfect for getting started with blockchain development',
    features: [
      'Access to basic courses',
      'Community support',
      'Basic learning paths',
      'Limited token rewards',
    ],
    cta: 'Start Learning',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '29',
    description: 'Best for serious developers looking to advance their career',
    features: [
      'All Free features',
      'Advanced courses',
      'Priority support',
      'Higher token rewards',
      'Study groups',
      'Peer review access',
      'Skill assessments',
    ],
    cta: 'Get Pro',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For teams and organizations',
    features: [
      'All Pro features',
      'Custom learning paths',
      'Team analytics',
      'Dedicated support',
      'Custom integrations',
      'API access',
      'White-label options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function PricingSection() {
  const [isIndia, setIsIndia] = useState(false);
  const [usdToInr, setUsdToInr] = useState<number | null>(null);

  useEffect(() => {
    // Detect country using ipapi.co (free, no key required)
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code === 'IN') {
          setIsIndia(true);
        }
      });
  }, []);

  useEffect(() => {
    if (isIndia) {
      // Fetch USD to INR rate from exchangerate-api.com (free tier)
      fetch('https://open.er-api.com/v6/latest/USD')
        .then((res) => res.json())
        .then((data) => {
          if (data && data.rates && data.rates.INR) {
            setUsdToInr(data.rates.INR);
          }
        });
    }
  }, [isIndia]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey. All plans include access to our
            community and basic learning resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${plan.popular ? 'border-mint-400' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.popular && (
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-mint-400/10 text-mint-400">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                      </span>
                      {isIndia && plan.price !== 'Custom' && usdToInr && (
                        <span className="text-lg font-semibold text-orange-500 ml-2">
                          ₹{Math.round(Number(plan.price) * usdToInr).toLocaleString('en-IN')}
                        </span>
                      )}
                      {plan.price !== 'Custom' && (
                        <span className="text-muted-foreground ml-2">/month</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-mint-400" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? 'default' : 'outline'}
                    className="w-full"
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
