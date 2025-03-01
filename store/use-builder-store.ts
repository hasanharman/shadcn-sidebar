// store/use-builder-store.ts
import { create } from "zustand";

type BuilderStore = {
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;

  // Sidebar settings
  sidebarPosition: "left" | "right";
  setSidebarPosition: (position: "left" | "right") => void;
  sidebarVariant: "sidebar" | "floating" | "inset";
  setSidebarVariant: (variant: "sidebar" | "floating" | "inset") => void;
  collapseBehavior: "offcanvas" | "icon" | "none";
  setCollapseBehavior: (behavior: "offcanvas" | "icon" | "none") => void;
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
  showFooter: boolean;
  setShowFooter: (show: boolean) => void;
  showSections: boolean;
  setShowSections: (show: boolean) => void;
  showIcons: boolean;
  setShowIcons: (show: boolean) => void;
};

export const useBuilderStore = create<BuilderStore>((set) => ({
  activeTab: "preview",
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Default sidebar settings
  sidebarPosition: "left",
  setSidebarPosition: (position) => set({ sidebarPosition: position }),
  sidebarVariant: "sidebar",
  setSidebarVariant: (variant) => set({ sidebarVariant: variant }),
  collapseBehavior: "offcanvas",
  setCollapseBehavior: (behavior) => set({ collapseBehavior: behavior }),
  showHeader: true,
  setShowHeader: (show) => set({ showHeader: show }),
  showFooter: true,
  setShowFooter: (show) => set({ showFooter: show }),
  showSections: false,
  setShowSections: (show) => set({ showSections: show }),
  showIcons: true,
  setShowIcons: (show) => set({ showIcons: show }),
}));
