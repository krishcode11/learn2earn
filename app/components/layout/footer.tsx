'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Twitter,
  Github,
  Linkedin,
  Youtube,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { Button } from '../ui/button';

const footerLinks = {   
  platform: [
    { name: 'Courses', href: '/courses' },
    { name: 'Learning Dashboard', href: '/learning-dashboard' },
    { name: 'Learning Paths', href: '/learning-paths' },
    { name: 'Learning Progress', href: '/learning-progress' },
    { name: 'Learning Milestones', href: '/learning-milestones' },
    { name: 'Peer Review', href: '/peer-review' },
    { name: 'Skill Assessment', href: '/skill-assessment' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Leaderboard', href: '/leaderboard' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/career' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ],
  resources: [
    { name: 'Documentation', href: '/documentation' },
    { name: 'Help Center', href: '/help-center' },
    { name: 'Community', href: '/community' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Licenses', href: '/licenses' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/learn2earn' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/learn2earn' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/learn2earn' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@learn2earn' }
];

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-radial from-mint-400/5 via-transparent to-transparent" />
      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Section */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold text-gradient mb-4"
              >
                Learn2Earn
              </motion.div>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Master blockchain development and earn rewards while you learn.
              Join our community of developers building the future of Web3.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-mint-400/10 rounded-full text-mint-400 hover:bg-mint-400/20 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Learn2Earn. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="mint" size="sm" asChild>
                <Link href="/courses">
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 