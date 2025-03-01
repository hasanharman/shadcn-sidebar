// components/builder/sidebar-builder.tsx
"use client";

import { useEffect, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useBuilderStore } from "@/store/use-builder-store";
import { CodeDisplay } from "./code-display";
import { CodeFile, generateSidebarCode } from "@/lib/code-generator";

export function SidebarBuilder() {
  const builderStore = useBuilderStore();
  const { activeTab, defaultOpen } = builderStore;
  const [isMounted, setIsMounted] = useState(false);
  const [generatedFiles, setGeneratedFiles] = useState<CodeFile[]>([]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate code files when the tab changes to "code" or when settings change
  useEffect(() => {
    if (activeTab === "code" || !generatedFiles.length) {
      const files = generateSidebarCode(builderStore);
      setGeneratedFiles(files);
    }
  }, [activeTab, builderStore, generatedFiles.length]);

  return (
    <div className="h-full flex flex-col">
      {/* Content area based on active tab */}
      <div className="relative flex-1 min-h-0">
        {activeTab === "preview" ? (
          <div className="h-full flex">
            <SidebarProvider defaultOpen={defaultOpen}>
              <div className="flex h-full w-full">
                <AppSidebar className="h-full" />
                <SidebarInset className="flex flex-col h-full min-w-0 flex-1">
                  <header className="flex h-14 shrink-0 items-center border-b px-4">
                    <div className="flex items-center gap-2">
                      <SidebarTrigger />
                      <Separator orientation="vertical" className="mx-2 h-4" />
                      <Breadcrumb>
                        <BreadcrumbList>
                          <BreadcrumbItem>
                            <BreadcrumbLink href="#">
                              Building Your Application
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                          <BreadcrumbSeparator />
                          <BreadcrumbItem>
                            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                          </BreadcrumbItem>
                        </BreadcrumbList>
                      </Breadcrumb>
                    </div>
                  </header>

                  <div className="flex-1 p-4 overflow-auto min-h-0">
                    <div className="grid gap-4 md:grid-cols-3 mb-4">
                      <div className="aspect-video rounded-xl bg-muted/50" />
                      <div className="aspect-video rounded-xl bg-muted/50" />
                      <div className="aspect-video rounded-xl bg-muted/50" />
                    </div>
                    <div className="rounded-xl bg-muted/50 h-[500px]" />
                  </div>
                </SidebarInset>
              </div>
            </SidebarProvider>
          </div>
        ) : (
          <div className="h-full p-4 overflow-hidden">
            <CodeDisplay files={generatedFiles} />
          </div>
        )}
      </div>
    </div>
  );
}
