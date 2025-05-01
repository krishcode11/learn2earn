'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Wallet,
  ChevronRight,
  ExternalLink,
  Copy,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const SUPPORTED_CHAINS = [
  {
    id: 1,
    name: 'Ethereum',
    icon: '/chains/ethereum.svg',
  },
  {
    id: 137,
    name: 'Polygon',
    icon: '/chains/polygon.svg',
  },
  {
    id: 56,
    name: 'BSC',
    icon: '/chains/bsc.svg',
  },
];

export function WalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedChain, setSelectedChain] = useState(SUPPORTED_CHAINS[0]);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      await connect();
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Connect Wallet
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!isConnected ? (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              {SUPPORTED_CHAINS.map((chain) => (
                <button
                  key={chain.id}
                  onClick={() => setSelectedChain(chain)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedChain.id === chain.id
                      ? 'border-mint-400 bg-mint-400/10'
                      : 'border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <img
                    src={chain.icon}
                    alt={chain.name}
                    className="w-8 h-8 mx-auto mb-2"
                  />
                  <span className="text-sm">{chain.name}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <Button
                className="w-full"
                onClick={handleConnect}
                disabled={isConnecting}
              >
                <Wallet className="h-4 w-4 mr-2" />
                {isConnecting ? 'Connecting...' : 'Connect with MetaMask'}
              </Button>
              <Button variant="outline" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                Connect with WalletConnect
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>By connecting your wallet, you agree to our</p>
              <p>
                <a href="#" className="text-mint-400 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-mint-400 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-mint-400/20 flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-mint-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Connected</p>
                  <p className="text-xs text-muted-foreground">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={copyAddress}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" asChild>
                <a href="/dashboard">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Go to Dashboard
                </a>
              </Button>
              <Button variant="outline" className="flex-1" onClick={handleDisconnect}>
                Disconnect
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 