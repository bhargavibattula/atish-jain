import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  // UI State
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // User preferences
  selectedMembership: string | null;
  setSelectedMembership: (id: string | null) => void;

  // Notification
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
}

interface Notification {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),

      selectedMembership: null,
      setSelectedMembership: (id) => set({ selectedMembership: id }),

      notifications: [],
      addNotification: (notification) =>
        set((state) => ({
          notifications: [
            ...state.notifications,
            { ...notification, id: Math.random().toString(36).substring(2) },
          ],
        })),
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
    }),
    {
      name: "cwa-store",
      partialize: (state) => ({ selectedMembership: state.selectedMembership }),
    }
  )
);
