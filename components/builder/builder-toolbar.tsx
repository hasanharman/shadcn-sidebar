// components/builder/builder-toolbar.tsx
"use client";

import React from "react";
import { useBuilderStore } from "@/store/use-builder-store";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SidebarSettingsDialog } from "@/components/builder/sidebar-settings-dialog";
import { SidebarContentDialog } from "@/components/builder/sidebar-content-dialog";
import { TerminalIcon } from "@/components/icons/terminal";
import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { TwitterIcon } from "../icons/twitter";

export default function BuilderToolbar() {
  const { activeTab, setActiveTab } = useBuilderStore();

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "preview" | "code")}
          className="w-40"
        >
          <TabsList className="w-full">
            <TabsTrigger value="preview" className="flex-1">
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex-1">
              Code
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Separator orientation="vertical" />
        <span className="ml-2 font-extrabold">Shadcn Sidebar Builder</span>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <SidebarContentDialog />
        <SidebarSettingsDialog />
        <Button variant="outline">
          <TerminalIcon className="" />
          npx shadcn add (todo)
        </Button>
        <Button className="bg-black text-white rounded-md">
          Open in v0 (dream)
        </Button>
        <Button size="icon" asChild>
          <Link
            href="https://x.com/strad3r"
            target="_blank"
          >
            <TwitterIcon />
          </Link>
        </Button>
        <Button size="icon" asChild>
          <Link
            href="https://github.com/hasanharman/shadcn-sidebar"
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
