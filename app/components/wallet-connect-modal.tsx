'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X } from 'lucide-react';
import Image from 'next/image';

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (provider: 'metamask' | 'google') => void;
}

export function WalletConnectModal({ isOpen, onClose, onConnect }: WalletConnectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative"
          >
            <Card className="w-[400px] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Connect Wallet</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full h-14 flex items-center justify-start gap-4 px-4"
                  onClick={() => onConnect('metamask')}
                >
                  <Image
                    src="/metamask-fox.svg"
                    alt="MetaMask"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">MetaMask</span>
                    <span className="text-sm text-muted-foreground">Connect with MetaMask</span>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-14 flex items-center justify-start gap-4 px-4"
                  onClick={() => onConnect('google')}
                >
                  <Image
                    src="/google.svg"
                    alt="Google"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-medium">Google</span>
                    <span className="text-sm text-muted-foreground">Sign in with Google</span>
                  </div>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6">
                By connecting your wallet, you agree to our Terms of Service and Privacy Policy
              </p>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 