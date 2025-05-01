'use client';

import { useRouter } from 'next/navigation';
import { Button } from './button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function BackButton({ href, className, onClick }: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className={`flex items-center gap-2 ${className || ''}`}
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </Button>
  );
} 