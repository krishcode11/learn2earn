import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface UserSettings {
  profile: {
    displayName: string;
    email: string;
    bio: string;
  };
  notifications: {
    email: boolean;
    push: boolean;
    achievements: boolean;
    rewards: boolean;
  };
  appearance: {
    theme: 'light' | 'dark' | 'system';
  };
  security: {
    twoFactorEnabled: boolean;
    privacyLevel: 'public' | 'private' | 'friends';
    securityNotifications: boolean;
  };
}

interface SettingsState {
  settings: UserSettings;
  updateProfile: (profile: Partial<UserSettings['profile']>) => void;
  updateNotifications: (notifications: Partial<UserSettings['notifications']>) => void;
  updateAppearance: (appearance: Partial<UserSettings['appearance']>) => void;
  updateSecurity: (security: Partial<UserSettings['security']>) => void;
  resetSettings: () => void;
}

const defaultSettings: UserSettings = {
  profile: {
    displayName: '',
    email: '',
    bio: '',
  },
  notifications: {
    email: true,
    push: true,
    achievements: true,
    rewards: true,
  },
  appearance: {
    theme: 'system',
  },
  security: {
    twoFactorEnabled: false,
    privacyLevel: 'public',
    securityNotifications: true,
  },
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      updateProfile: (profile) =>
        set((state) => ({
          settings: {
            ...state.settings,
            profile: { ...state.settings.profile, ...profile },
          },
        })),
      updateNotifications: (notifications) =>
        set((state) => ({
          settings: {
            ...state.settings,
            notifications: { ...state.settings.notifications, ...notifications },
          },
        })),
      updateAppearance: (appearance) =>
        set((state) => ({
          settings: {
            ...state.settings,
            appearance: { ...state.settings.appearance, ...appearance },
          },
        })),
      updateSecurity: (security) =>
        set((state) => ({
          settings: {
            ...state.settings,
            security: { ...state.settings.security, ...security },
          },
        })),
      resetSettings: () => set({ settings: defaultSettings }),
    }),
    {
      name: 'user-settings',
    }
  )
); 