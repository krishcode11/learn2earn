'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { useWeb3 } from '../../providers/web3-provider';
import { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronDown, Sparkles } from 'lucide-react';
import { Card } from '../ui/card';
import { useRouter } from 'next/navigation';
import { WalletConnectModal } from '../wallet-connect-modal';

const floatingElements = [
  { icon: '🔗', text: 'Blockchain' },
  { icon: '💎', text: 'NFTs' },
  { icon: '🌐', text: 'Web3' },
  { icon: '📱', text: 'dApps' },
  { icon: '💰', text: 'DeFi' },
  { icon: '🔐', text: 'Security' },
];

export function HeroSection() {
  const { isConnected, connect, disconnect } = useWeb3();
  const router = useRouter();
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAIAssistant(true);
      setAiMessage('Hi! I\'m your AI learning assistant. How can I help you today?');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWalletConnect = async (provider: 'metamask' | 'google') => {
    if (provider === 'metamask') {
      await connect();
    } else {
      // Handle Google login
      // Add your Google authentication logic here
    }
    setShowWalletModal(false);
    // Navigate to dashboard after successful connection
    router.push('/dashboard');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-mint-400/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={element.text}
          className="absolute"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            delay: index * 0.5
          }}
          style={{
            left: `${(index * 15) + 5}%`,
            top: `${(index * 10) + 10}%`
          }}
        >
          <div className="glassmorphism p-3 rounded-full flex items-center gap-2">
            <span className="text-2xl">{element.icon}</span>
            <span className="text-sm font-medium">{element.text}</span>
          </div>
        </motion.div>
      ))}

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint-400/10 text-mint-400 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              New: AI-Powered Learning Paths
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Learn Web3,{' '}
            <span className="text-gradient">Earn Tokens</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Master blockchain development and earn rewards while you learn.
            Join our community of developers building the future of Web3.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="mint"
              size="lg"
              onClick={() => setShowWalletModal(true)}
              className="group"
            >
              {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => router.push('/courses')}
            >
              Explore Courses
            </Button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {[
              { value: '10K+', label: 'Active Learners' },
              { value: '100+', label: 'Courses' },
              { value: '50+', label: 'Experts' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="glassmorphism p-4 rounded-xl"
              >
                <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Wallet Connect Modal */}
      <WalletConnectModal
        isOpen={showWalletModal}
        onClose={() => setShowWalletModal(false)}
        onConnect={handleWalletConnect}
      />

      {/* Scroll Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant */}
      <AnimatePresence>
        {showAIAssistant && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Card className="w-80 p-4 shadow-lg">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-mint-400/10 rounded-full">
                    <MessageCircle className="h-5 w-5 text-mint-400" />
                  </div>
                  <span className="font-medium">AI Assistant</span>
                </div>
                <button
                  onClick={() => setShowAIAssistant(false)}
                  className="p-1 hover:bg-muted rounded-full"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">{aiMessage}</p>
              <div className="mt-4 flex gap-2">
                <Button variant="mint" size="sm" className="flex-1">
                  Start Learning
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Ask Question
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 