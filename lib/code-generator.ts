// lib/code-generator.ts
import { BuilderStore } from "@/store/use-builder-store";

export type CodeFile = {
  name: string;
  path: string;
  content: string;
};

export function generateSidebarCode(settings: BuilderStore): CodeFile[] {
  const files: CodeFile[] = [];

  // Generate app-sidebar.tsx
  files.push({
    name: "app-sidebar.tsx",
    path: "components/app-sidebar.tsx",
    content: generateAppSidebarCode(settings),
  });

  // Generate nav-main.tsx
  files.push({
    name: "nav-main.tsx",
    path: "components/nav-main.tsx",
    content: generateNavMainCode(settings),
  });

  // Generate nav-projects.tsx
  files.push({
    name: "nav-projects.tsx",
    path: "components/nav-projects.tsx",
    content: generateNavProjectsCode(settings),
  });

  // Generate nav-user.tsx
  files.push({
    name: "nav-user.tsx",
    path: "components/nav-user.tsx",
    content: generateNavUserCode(settings),
  });

  // Generate team-switcher.tsx
  files.push({
    name: "team-switcher.tsx",
    path: "components/team-switcher.tsx",
    content: generateTeamSwitcherCode(settings),
  });

  // Generate sidebar CSS variables
  files.push({
    name: "sidebar-variables.css",
    path: "styles/sidebar-variables.css",
    content: generateSidebarCSSCode(settings),
  });

  // Generate example usage
  files.push({
    name: "example-usage.tsx",
    path: "examples/example-usage.tsx",
    content: generateExampleUsageCode(settings),
  });

  // Generate README with installation instructions
  files.push({
    name: "README.md",
    path: "README.md",
    content: generateReadmeCode(settings),
  });

  return files;
}

// Helper functions to generate each file's content
function generateAppSidebarCode(settings: BuilderStore): string {
  // Generate code based on settings
  return `"use client";

import type * as React from "react";
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
  SidebarRail,
} from "@/components/ui/sidebar";

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

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  // You can add additional props here if needed
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  return (
    <Sidebar 
      side="${settings.sidebarPosition}" 
      variant="${settings.sidebarVariant}" 
      collapsible="${settings.collapseBehavior}"
      className="sidebar-custom"
      {...props}
    >
      ${
        settings.showHeader
          ? `<SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>`
          : ""
      }
      <SidebarContent>
        <NavMain 
          items={data.navMain} 
          ${settings.showIcons ? "showIcons={true}" : "showIcons={false}"} 
          ${
            settings.showSectionLabels
              ? "showSectionLabels={true}"
              : "showSectionLabels={false}"
          }
          buttonSize="${settings.menuButtonSize}"
        />
        <NavProjects 
          projects={data.projects} 
          ${settings.showIcons ? "showIcons={true}" : "showIcons={false}"}
          ${
            settings.showSectionLabels
              ? "showSectionLabels={true}"
              : "showSectionLabels={false}"
          }
          buttonSize="${settings.menuButtonSize}"
        />
      </SidebarContent>
      ${
        settings.showFooter
          ? `<SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>`
          : ""
      }
      <SidebarRail />
    </Sidebar>
  );
}`;
}

function generateNavMainCode(settings: BuilderStore): string {
  return `"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

interface NavMainProps {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  showIcons?: boolean
  showSectionLabels?: boolean
  buttonSize?: "default" | "sm" | "lg"
}

export function NavMain({ 
  items, 
  showIcons = ${settings.showIcons}, 
  showSectionLabels = ${settings.showSectionLabels},
  buttonSize = "${settings.menuButtonSize}"
}: NavMainProps) {
  return (
    <SidebarGroup>
      {showSectionLabels && <SidebarGroupLabel>Platform</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title} size={buttonSize}>
                  {showIcons && item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}`;
}

function generateNavProjectsCode(settings: BuilderStore): string {
  return `"use client"

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface NavProjectsProps {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
  showIcons?: boolean
  showSectionLabels?: boolean
  buttonSize?: "default" | "sm" | "lg"
}

export function NavProjects({ 
  projects, 
  showIcons = ${settings.showIcons},
  showSectionLabels = ${settings.showSectionLabels},
  buttonSize = "${settings.menuButtonSize}"
}: NavProjectsProps) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      {showSectionLabels && <SidebarGroupLabel>Projects</SidebarGroupLabel>}
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild size={buttonSize}>
              <a href={item.url}>
                {showIcons && <item.icon />}
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem>
                  <Folder className="text-muted-foreground" />
                  <span>View Project</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Forward className="text-muted-foreground" />
                  <span>Share Project</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="text-muted-foreground" />
                  <span>Delete Project</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70" size={buttonSize}>
            {showIcons && <MoreHorizontal className="text-sidebar-foreground/70" />}
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}`;
}

function generateNavUserCode(settings: BuilderStore): string {
  return `"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface NavUserProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="${settings.menuButtonSize}"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}`;
}

function generateTeamSwitcherCode(settings: BuilderStore): string {
  return `"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

interface TeamSwitcherProps {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}

export function TeamSwitcher({ teams }: TeamSwitcherProps) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="${settings.menuButtonSize}"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-xs border">
                  <team.logo className="size-4 shrink-0" />
                </div>
                {team.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 p-2">
              <div className="bg-background flex size-6 items-center justify-center rounded-md border">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}`;
}

function generateSidebarCSSCode(settings: BuilderStore): string {
  return `:root {
  --sidebar-width: ${settings.sidebarWidth};
  --sidebar-width-collapsed: ${settings.sidebarMobileWidth};
}

/* Override the default sidebar width with our custom variables */
[data-sidebar-main] {
  width: var(--sidebar-width) !important;
  transition: width 0.3s ease;
}

[data-sidebar-main][data-state="closed"] {
  width: var(--sidebar-width-collapsed) !important;
}

/* For icon-only mode */
[data-sidebar-main][data-collapsible="icon"][data-state="closed"] {
  width: var(--sidebar-width-collapsed) !important;
}`;
}

function generateExampleUsageCode(settings: BuilderStore): string {
  return `"use client"

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={${settings.defaultOpen}} ${
    settings.enableKeyboardShortcuts ? "enableKeyboardShortcut" : ""
  }>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}`;
}

function generateReadmeCode(settings: BuilderStore): string {
  return `# Custom Sidebar Component

This package contains a customized sidebar component built with shadcn/ui.

## Installation

1. Make sure you have shadcn/ui installed in your project.
2. Copy these files to your project.
3. Import the CSS variables in your global CSS file:

\`\`\`css
/* In your globals.css */
@import "./styles/sidebar-variables.css";
\`\`\`

4. Use the \`AppSidebar\` component in your layout.

## Configuration

The sidebar has been configured with the following settings:

- Position: ${settings.sidebarPosition}
- Variant: ${settings.sidebarVariant}
- Collapse Behavior: ${settings.collapseBehavior}
- Width: ${settings.sidebarWidth}
- Mobile Width: ${settings.sidebarMobileWidth}
- Show Header: ${settings.showHeader}
- Show Footer: ${settings.showFooter}
- Show Icons: ${settings.showIcons}
- Show Section Labels: ${settings.showSectionLabels}
- Menu Button Size: ${settings.menuButtonSize}

## Usage

See the example in \`examples/example-usage.tsx\`:

\`\`\`tsx
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={${settings.defaultOpen}}>
      <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
\`\`\`

## Keyboard Shortcuts

${
  settings.enableKeyboardShortcuts
    ? "The sidebar can be toggled with Cmd+B (Mac) or Ctrl+B (Windows)."
    : "Keyboard shortcuts are disabled for this sidebar."
}

## Customization

You can customize the sidebar further by modifying the component files directly. The components are designed to be modular and easy to customize.

## Components

- \`app-sidebar.tsx\`: The main sidebar component that brings everything together
- \`nav-main.tsx\`: The main navigation menu
- \`nav-projects.tsx\`: The projects navigation menu
- \`nav-user.tsx\`: The user profile component
- \`team-switcher.tsx\`: The team switcher component
- \`sidebar-variables.css\`: CSS variables for sidebar width and other properties
`;
}
