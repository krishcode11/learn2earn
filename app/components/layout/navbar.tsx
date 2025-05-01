'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { useWeb3 } from '../../providers/web3-provider';
import {
  Menu,
  X,
  Wallet,
  BookOpen,
  Trophy,
  Users,
  MessageCircle,
  Bell,
  User,
  LogOut,
  Settings,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  Target,
  Award,
  Code,
  BookMarked,
  BookCheck,
  Star,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import { NotificationPanel } from '../notifications/notification-panel';

const mainNavigation = [
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Support', href: '/support', icon: MessageCircle },
];

const learningLinks = [
  {
    name: 'Learning Dashboard',
    href: '/learning-dashboard',
    icon: LayoutDashboard,
    description: 'Track your learning progress and achievements',
    category: 'Overview',
  },
  {
    name: 'Learning Paths',
    href: '/learning-paths',
    icon: BookMarked,
    description: 'Structured learning paths for all levels',
    category: 'Learning',
  },
  {
    name: 'Learning Progress',
    href: '/learning-progress',
    icon: BookCheck,
    description: 'View your course completion and skill mastery',
    category: 'Learning',
  },
  {
    name: 'Learning Milestones',
    href: '/learning-milestones',
    icon: Star,
    description: 'Track your achievements and rewards',
    category: 'Achievements',
  },
  {
    name: 'Peer Review',
    href: '/peer-review',
    icon: Users,
    description: 'Get feedback from the community',
    category: 'Community',
  },
  {
    name: 'Skill Assessment',
    href: '/skill-assessment',
    icon: Target,
    description: 'Test your blockchain development skills',
    category: 'Assessment',
  },
  {
    name: 'Certifications',
    href: '/certifications',
    icon: GraduationCap,
    description: 'Get certified in blockchain development',
    category: 'Achievements',
  },
  {
    name: 'Coding Exercise',
    href: '/coding-exercise',
    icon: Code,
    description: 'Practice your coding skills with interactive exercises',
    category: 'Practice',
  },
];

// Group learning links by category
const groupedLearningLinks = learningLinks.reduce((acc, link) => {
  if (!acc[link.category]) {
    acc[link.category] = [];
  }
  acc[link.category].push(link);
  return acc;
}, {} as Record<string, typeof learningLinks>);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const pathname = usePathname();
  const router = useRouter();
  const { isConnected, connect, disconnect, address } = useWeb3();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProfileClick = (action: string) => {
    switch (action) {
      case 'profile':
        router.push('/profile');
        break;
      case 'dashboard':
        router.push('/dashboard');
        break;
      case 'settings':
        router.push('/settings');
        break;
      case 'disconnect':
        disconnect();
        break;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-gradient"
            >
              Learn2Earn
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {mainNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-mint-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}

            {/* Learning Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Learning
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                {Object.entries(groupedLearningLinks).map(([category, links]) => (
                  <div key={category}>
                    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                      {category}
                    </div>
                    {links.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href} className="flex items-start gap-2 p-2">
                      <link.icon className="h-5 w-5 text-mint-400" />
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {link.description}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <NotificationPanel />

            {isConnected ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden md:inline">
                      {address?.slice(0, 6)}...{address?.slice(-4)}
                    </span>
                    <ChevronDown className="h-4 w-4" />
            </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleProfileClick('profile')}>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleProfileClick('dashboard')}>
                    <Trophy className="h-4 w-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleProfileClick('settings')}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => handleProfileClick('disconnect')}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
            <Button
                variant="mint"
              size="sm"
                onClick={connect}
              className="hidden md:flex items-center gap-2"
            >
              <Wallet className="h-4 w-4" />
                Connect Wallet
            </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {mainNavigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-mint-400'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}

                {/* Mobile Learning Links */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">
                    Learning
                  </div>
                  <div className="space-y-2">
                    {learningLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <link.icon className="h-4 w-4" />
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {isConnected ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleProfileClick('profile');
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleProfileClick('dashboard');
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <Trophy className="h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        disconnect();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Disconnect
                    </Button>
                  </>
                ) : (
                <Button
                    variant="mint"
                  size="sm"
                    onClick={connect}
                  className="flex items-center gap-2"
                >
                  <Wallet className="h-4 w-4" />
                    Connect Wallet
                </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 