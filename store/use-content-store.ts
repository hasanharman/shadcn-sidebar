// store/use-sidebar-content-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LucideIcon } from "lucide-react";

interface NavItem {
  title: string;
  url: string;
  iconName: string;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

interface Project {
  name: string;
  url: string;
  iconName: string;
}

interface Team {
  name: string;
  iconName: string;
  plan: string;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface SidebarContentStore {
  // Data
  user: User;
  teams: Team[];
  navMain: NavItem[];
  projects: Project[];

  // Actions
  setUser: (user: User) => void;
  setTeams: (teams: Team[]) => void;
  setNavMain: (navMain: NavItem[]) => void;
  setProjects: (projects: Project[]) => void;
  updateNavItem: (index: number, item: Partial<NavItem>) => void;
  updateTeam: (index: number, team: Partial<Team>) => void;
  updateProject: (index: number, project: Partial<Project>) => void;
}

// Default values
export const defaultData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      iconName: "GalleryVerticalEnd",
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      iconName: "AudioWaveform",
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      iconName: "Command",
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      iconName: "SquareTerminal",
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Models",
      url: "#",
      iconName: "Bot",
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      iconName: "BookOpen",
      items: [
        { title: "Introduction", url: "#" },
        { title: "Get Started", url: "#" },
        { title: "Tutorials", url: "#" },
        { title: "Changelog", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      iconName: "Settings2",
      items: [
        { title: "General", url: "#" },
        { title: "Team", url: "#" },
        { title: "Billing", url: "#" },
        { title: "Limits", url: "#" },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      iconName: "Frame",
    },
    {
      name: "Sales & Marketing",
      url: "#",
      iconName: "PieChart",
    },
    {
      name: "Travel",
      url: "#",
      iconName: "Map",
    },
  ],
};

export const useSidebarContentStore = create<SidebarContentStore>()(
  persist(
    (set) => ({
      // Initial state
      user: defaultData.user,
      teams: defaultData.teams,
      navMain: defaultData.navMain,
      projects: defaultData.projects,

      // Actions
      setUser: (user) => set({ user }),
      setTeams: (teams) => set({ teams }),
      setNavMain: (navMain) => set({ navMain }),
      setProjects: (projects) => set({ projects }),

      updateNavItem: (index, item) =>
        set((state) => ({
          navMain: state.navMain.map((navItem, i) =>
            i === index ? { ...navItem, ...item } : navItem
          ),
        })),

      updateTeam: (index, team) =>
        set((state) => ({
          teams: state.teams.map((t, i) =>
            i === index ? { ...t, ...team } : t
          ),
        })),

      updateProject: (index, project) =>
        set((state) => ({
          projects: state.projects.map((p, i) =>
            i === index ? { ...p, ...project } : p
          ),
        })),
    }),
    {
      name: "sidebar-content",
    }
  )
);
