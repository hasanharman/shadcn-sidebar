// store/use-builder-store.ts
import { create } from "zustand";

// Export the BuilderStore type so it can be used in the code generator
export type BuilderStore = {
  // UI State
  activeTab: "preview" | "code";
  setActiveTab: (tab: "preview" | "code") => void;

  // Layout Settings
  sidebarPosition: "left" | "right";
  setSidebarPosition: (position: "left" | "right") => void;
  sidebarVariant: "sidebar" | "floating" | "inset";
  setSidebarVariant: (variant: "sidebar" | "floating" | "inset") => void;
  sidebarWidth: string;
  setSidebarWidth: (width: string) => void;
  sidebarWidthValue: string; // Just the numeric value
  setSidebarWidthValue: (value: string) => void;
  sidebarWidthUnit: string; // The unit (px, rem, etc.)
  setSidebarWidthUnit: (unit: string) => void;
  sidebarMobileWidth: string;
  setSidebarMobileWidth: (width: string) => void;
  sidebarMobileWidthValue: string; // Just the numeric value
  setSidebarMobileWidthValue: (value: string) => void;
  sidebarMobileWidthUnit: string; // The unit (px, rem, etc.)
  setSidebarMobileWidthUnit: (unit: string) => void;

  // Behavior Settings
  collapseBehavior: "offcanvas" | "icon" | "none";
  setCollapseBehavior: (behavior: "offcanvas" | "icon" | "none") => void;
  defaultOpen: boolean;
  setDefaultOpen: (isOpen: boolean) => void;
  enableKeyboardShortcuts: boolean;
  setEnableKeyboardShortcuts: (enable: boolean) => void;

  // Structure Settings
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
  showFooter: boolean;
  setShowFooter: (show: boolean) => void;
  showIcons: boolean;
  setShowIcons: (show: boolean) => void;
  showSectionLabels: boolean;
  setShowSectionLabels: (show: boolean) => void;

  // Style Settings
  menuButtonSize: "default" | "sm" | "lg";
  setMenuButtonSize: (size: "default" | "sm" | "lg") => void;
};

export const useBuilderStore = create<BuilderStore>((set) => ({
  // UI State
  activeTab: "preview",
  setActiveTab: (tab) => set({ activeTab: tab }),

  // Layout Settings
  sidebarPosition: "left",
  setSidebarPosition: (position) => set({ sidebarPosition: position }),
  sidebarVariant: "sidebar",
  setSidebarVariant: (variant) => set({ sidebarVariant: variant }),
  sidebarWidth: "16rem",
  setSidebarWidth: (width) => set({ sidebarWidth: width }),
  sidebarWidthValue: "16",
  setSidebarWidthValue: (value) =>
    set((state) => ({
      sidebarWidthValue: value,
      sidebarWidth: `${value}${state.sidebarWidthUnit}`,
    })),
  sidebarWidthUnit: "rem",
  setSidebarWidthUnit: (unit) =>
    set((state) => ({
      sidebarWidthUnit: unit,
      sidebarWidth: `${state.sidebarWidthValue}${unit}`,
    })),
  sidebarMobileWidth: "4rem",
  setSidebarMobileWidth: (width) => set({ sidebarMobileWidth: width }),
  sidebarMobileWidthValue: "4",
  setSidebarMobileWidthValue: (value) =>
    set((state) => ({
      sidebarMobileWidthValue: value,
      sidebarMobileWidth: `${value}${state.sidebarMobileWidthUnit}`,
    })),
  sidebarMobileWidthUnit: "rem",
  setSidebarMobileWidthUnit: (unit) =>
    set((state) => ({
      sidebarMobileWidthUnit: unit,
      sidebarMobileWidth: `${state.sidebarMobileWidthValue}${unit}`,
    })),

  // Behavior Settings
  collapseBehavior: "icon",
  setCollapseBehavior: (behavior) => set({ collapseBehavior: behavior }),
  defaultOpen: true,
  setDefaultOpen: (isOpen) => set({ defaultOpen: isOpen }),
  enableKeyboardShortcuts: true,
  setEnableKeyboardShortcuts: (enable) =>
    set({ enableKeyboardShortcuts: enable }),

  // Structure Settings
  showHeader: true,
  setShowHeader: (show) => set({ showHeader: show }),
  showFooter: true,
  setShowFooter: (show) => set({ showFooter: show }),
  showIcons: true,
  setShowIcons: (show) => set({ showIcons: show }),
  showSectionLabels: true,
  setShowSectionLabels: (show) => set({ showSectionLabels: show }),

  // Style Settings
  menuButtonSize: "default",
  setMenuButtonSize: (size) => set({ menuButtonSize: size }),
}));
