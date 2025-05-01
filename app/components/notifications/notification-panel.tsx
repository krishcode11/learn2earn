'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Check, AlertCircle, Info } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { BackButton } from '../ui/back-button';

interface Notification {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  link?: string;
}

const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Course Completed',
    message: 'Congratulations! You have completed the "Introduction to Blockchain" course.',
    timestamp: '2 hours ago',
    read: false,
    link: '/courses/introduction-to-blockchain',
  },
  {
    id: '2',
    type: 'info',
    title: 'New Achievement',
    message: 'You have earned the "Early Learner" badge.',
    timestamp: '5 hours ago',
    read: true,
    link: '/profile/achievements',
  },
  {
    id: '3',
    type: 'warning',
    title: 'Study Reminder',
    message: 'You have a study session scheduled in 30 minutes.',
    timestamp: '1 day ago',
    read: false,
    link: '/dashboard/schedule',
  },
];

export function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(SAMPLE_NOTIFICATIONS);

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success':
        return <Check className="h-5 w-5 text-green-400" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-400" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-400" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-400" />;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 h-2 w-2 bg-mint-400 rounded-full" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 mt-2 w-80"
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                  <BackButton 
                    className="h-8 w-8 p-0" 
                    onClick={() => setIsOpen(false)}
                  />
                  <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  {unreadCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-xs"
                    >
                      Mark all as read
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.length === 0 ? (
                    <div className="text-center py-4 text-sm text-muted-foreground">
                      No notifications
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start gap-3 p-2 rounded-lg transition-colors ${
                          notification.read ? 'bg-transparent' : 'bg-white/5'
                        }`}
                      >
                        <div className="mt-1">
                          {getNotificationIcon(notification.type)}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{notification.title}</p>
                            <span className="text-xs text-muted-foreground">
                              {notification.timestamp}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {notification.message}
                          </p>
                          {notification.link && (
                            <a
                              href={notification.link}
                              className="text-xs text-mint-400 hover:underline"
                              onClick={() => setIsOpen(false)}
                            >
                              View details →
                            </a>
                          )}
                        </div>
                        {!notification.read && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => markAsRead(notification.id)}
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 