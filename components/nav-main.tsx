// components/nav-main.tsx
"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import { IconRenderer } from "@/components/builder/icon-renderer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface NavMainProps {
  items: {
    title: string;
    url: string;
    iconName: string; // Changed from icon to iconName
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  showIcons?: boolean;
  showSectionLabels?: boolean;
  buttonSize?: "default" | "sm" | "lg";
}

export function NavMain({
  items,
  showIcons = true,
  showSectionLabels = true,
  buttonSize = "default",
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
                  {showIcons && item.iconName && (
                    <IconRenderer name={item.iconName} />
                  )}
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
  );
}
