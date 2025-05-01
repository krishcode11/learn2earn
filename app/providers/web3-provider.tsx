'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { BrowserProvider, JsonRpcSigner } from 'ethers';

interface Web3ContextType {
  isConnected: boolean;
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
}

const Web3Context = createContext<Web3ContextType>({
  isConnected: false,
  address: null,
  connect: async () => {},
  disconnect: () => {},
  provider: null,
  signer: null,
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);

  useEffect(() => {
    // Check if MetaMask is installed
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      setProvider(provider);

      // Check if already connected
      provider.getSigner().then((signer) => {
        signer.getAddress().then((address) => {
          setIsConnected(true);
          setAddress(address);
          setSigner(signer);
        });
      }).catch(() => {
        // Not connected
        setIsConnected(false);
        setAddress(null);
        setSigner(null);
      });

      // Listen for account changes
      window.ethereum.on('accountsChanged', async (accounts: string[]) => {
        if (accounts.length > 0) {
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setIsConnected(true);
          setAddress(address);
          setSigner(signer);
        } else {
          setIsConnected(false);
          setAddress(null);
          setSigner(null);
        }
      });
    }
  }, []);

  const connect = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        
        setIsConnected(true);
        setAddress(address);
        setProvider(provider);
        setSigner(signer);
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    } else {
      alert('Please install MetaMask to use this feature');
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setProvider(null);
    setSigner(null);
  };

  return (
    <Web3Context.Provider
      value={{
        isConnected,
        address,
        connect,
        disconnect,
        provider,
        signer,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
}

export const useWeb3 = () => useContext(Web3Context); 