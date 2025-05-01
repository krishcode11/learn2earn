'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  BookOpen,
  BookMarked,
  BookCheck,
  Star,
  Code,
  Users,
  FileCheck,
  Award,
  Menu,
  X,
  Wallet,
  ChevronDown,
  Home,
  Book,
  HelpCircle,
  Search,
  Bell,
  Settings,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { useWeb3 } from '../providers/web3-provider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Input } from '../components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const NAVIGATION_LINKS = [
  {
    title: 'Learning Dashboard',
    icon: BookOpen,
    href: '/learning-dashboard',
  },
  {
    title: 'Learning Paths',
    icon: BookMarked,
    href: '/learning-paths',
  },
  {
    title: 'Learning Progress',
    icon: BookCheck,
    href: '/learning-progress',
  },
  {
    title: 'Learning Milestones',
    icon: Star,
    href: '/learning-milestones',
  },
  {
    title: 'Peer Review',
    icon: Users,
    href: '/peer-review',
  },
  {
    title: 'Skill Assessment',
    icon: FileCheck,
    href: '/skill-assessment',
  },
  {
    title: 'Certifications',
    icon: Award,
    href: '/certifications',
  },
  {
    title: 'Coding Exercise',
    icon: Code,
    href: '/coding-exercise',
  },
];

// Sample notifications data
const SAMPLE_NOTIFICATIONS = [
  {
    id: '1',
    title: 'New Course Available',
    message: 'Web3 Security course is now available',
    time: '2 hours ago',
    read: false,
  },
  {
    id: '2',
    title: 'Achievement Unlocked',
    message: 'You earned the Quick Learner badge',
    time: '1 day ago',
    read: true,
  },
  {
    id: '3',
    title: 'Course Reminder',
    message: 'Smart Contract Development deadline in 2 days',
    time: '2 days ago',
    read: true,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isConnected, disconnect, address } = useWeb3();
  const [searchQuery, setSearchQuery] = useState('');
  const [unreadNotifications, setUnreadNotifications] = useState(
    SAMPLE_NOTIFICATIONS.filter(n => !n.read).length
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleNotificationClick = (notificationId: string) => {
    // Mark notification as read
    setUnreadNotifications(prev => Math.max(0, prev - 1));
    // Handle notification click (e.g., navigate to relevant page)
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-bold text-xl">
              Learn2Earn
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === '/' ? 'text-mint-400' : 'hover:bg-muted'
                )}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <Link
                href="/courses"
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === '/courses' ? 'text-mint-400' : 'hover:bg-muted'
                )}
              >
                <Book className="h-4 w-4" />
                Courses
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    Learning
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {NAVIGATION_LINKS.map((link) => (
                    <DropdownMenuItem key={link.title} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          'flex items-center gap-2',
                          pathname === link.href && 'text-mint-400'
                        )}
                      >
                        <link.icon className="h-4 w-4" />
                        {link.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/support"
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  pathname === '/support' ? 'text-mint-400' : 'hover:bg-muted'
                )}
              >
                <HelpCircle className="h-4 w-4" />
                Support
              </Link>
            </nav>
                </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 w-64">
              <div className="relative w-full">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-8"
                />
              </div>
            </div>

            {/* Notifications */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-mint-400 text-[10px] font-medium text-white flex items-center justify-center">
                      {unreadNotifications}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" align="end">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Notifications</h4>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/notifications">View All</Link>
                  </Button>
          </div>
                <div className="space-y-4">
                  {SAMPLE_NOTIFICATIONS.map((notification) => (
                    <div
                      key={notification.id}
                      className={cn(
                        'flex items-start gap-4 p-2 rounded-lg cursor-pointer hover:bg-muted',
                        !notification.read && 'bg-muted/50'
                      )}
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <div className="mt-1">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Settings */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/settings')}
            >
              <Settings className="h-5 w-5" />
            </Button>

            {/* Wallet Connection */}
            {isConnected && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </span>
              <Button
                variant="outline"
                size="sm"
                onClick={disconnect}
                  className="ml-2"
              >
                Disconnect
              </Button>
            </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
} 