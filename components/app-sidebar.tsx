// components/app-sidebar.tsx
"use client";

import type * as React from "react";
import { useEffect, useState } from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useBuilderStore } from "@/store/use-builder-store";
import { useSidebarContentStore } from "@/store/use-content-store";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {
    // Layout Settings
    sidebarPosition,
    sidebarVariant,
    sidebarWidth,
    sidebarMobileWidth,
    // Behavior Settings
    collapseBehavior,
    defaultOpen, // We'll remove this from sidebarProps
    enableKeyboardShortcuts,

    // Structure Settings
    showHeader,
    showFooter,
    showIcons,
    showSectionLabels,

    // Style Settings
    menuButtonSize,
  } = useBuilderStore();
  const { user, teams, navMain, projects } = useSidebarContentStore();

  // Check if we're on mobile
  useEffect(() => {
    setIsMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Setup keyboard shortcuts
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd/Ctrl + B
      if ((e.metaKey || e.ctrlKey) && e.key === "b") {
        e.preventDefault();
        // Toggle sidebar - this would need to be implemented in the actual sidebar component
        console.log("Toggle sidebar with keyboard shortcut");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enableKeyboardShortcuts]);

  // Apply store settings to sidebar
  const sidebarProps = {
    ...props,
    side: sidebarPosition,
    variant: sidebarVariant,
    collapsible: collapseBehavior,
    className: `${props.className || ""} sidebar-custom`,
  };

  // Create a style tag to handle the width properly
  useEffect(() => {
    if (!isMounted) return;

    // Create a style element
    const styleEl = document.createElement("style");
    styleEl.setAttribute("id", "sidebar-custom-styles");

    // Set the CSS
    styleEl.textContent = `
      .sidebar-custom {
        --sidebar-width: ${sidebarWidth};
        --sidebar-width-collapsed: ${sidebarMobileWidth};
      }
    `;

    // Remove any existing style element
    const existingStyle = document.getElementById("sidebar-custom-styles");
    if (existingStyle) {
      existingStyle.remove();
    }

    // Add the style element to the head
    document.head.appendChild(styleEl);

    return () => {
      // Clean up
      styleEl.remove();
    };
  }, [isMounted, sidebarWidth, sidebarMobileWidth]);

  // The SidebarProvider is already in the parent component, so we don't need it here
  return (
    <Sidebar {...sidebarProps}>
      {showHeader && (
        <SidebarHeader>
          <TeamSwitcher teams={teams} />
        </SidebarHeader>
      )}
      <SidebarContent>
        <NavMain
          items={navMain}
          showIcons={showIcons}
          showSectionLabels={showSectionLabels}
          buttonSize={menuButtonSize}
        />
        <NavProjects
          projects={projects}
          showIcons={showIcons}
          showSectionLabels={showSectionLabels}
          buttonSize={menuButtonSize}
        />
      </SidebarContent>
      {showFooter && (
        <SidebarFooter>
          <NavUser user={user} />
        </SidebarFooter>
      )}
      <SidebarRail />
    </Sidebar>
  );
}
