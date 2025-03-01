// components/builder/sidebar-settings-dialog.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SettingsGearIcon } from "@/components/icons/gear-icon";
import { useBuilderStore } from "@/store/use-builder-store";

export function SidebarSettingsDialog() {
  const {
    // Layout Settings
    sidebarPosition,
    setSidebarPosition,
    sidebarVariant,
    setSidebarVariant,
    sidebarWidthValue,
    setSidebarWidthValue,
    sidebarWidthUnit,
    setSidebarWidthUnit,
    sidebarMobileWidthValue,
    setSidebarMobileWidthValue,
    sidebarMobileWidthUnit,
    setSidebarMobileWidthUnit,

    // Behavior Settings
    collapseBehavior,
    setCollapseBehavior,
    defaultOpen,
    setDefaultOpen,
    enableKeyboardShortcuts,
    setEnableKeyboardShortcuts,

    // Structure Settings
    showHeader,
    setShowHeader,
    showFooter,
    setShowFooter,
    showIcons,
    setShowIcons,
    showSectionLabels,
    setShowSectionLabels,

    // Style Settings
    menuButtonSize,
    setMenuButtonSize,
  } = useBuilderStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <SettingsGearIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Sidebar Settings</DialogTitle>
          <DialogDescription>
            Customize your sidebar component properties
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="layout" className="mt-4">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
          </TabsList>

          {/* Layout Settings Tab */}
          <TabsContent value="layout" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Select
                  value={sidebarPosition}
                  onValueChange={(value) =>
                    setSidebarPosition(value as "left" | "right")
                  }
                >
                  <SelectTrigger id="position">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="left">Left</SelectItem>
                    <SelectItem value="right">Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="variant">Variant</Label>
                <Select
                  value={sidebarVariant}
                  onValueChange={(value) =>
                    setSidebarVariant(value as "sidebar" | "floating" | "inset")
                  }
                >
                  <SelectTrigger id="variant">
                    <SelectValue placeholder="Select variant" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sidebar">Sidebar</SelectItem>
                    <SelectItem value="floating">Floating</SelectItem>
                    <SelectItem value="inset">Inset</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Desktop Width */}
            <div className="space-y-2">
              <Label htmlFor="width">Desktop Width</Label>
              <div className="flex gap-2">
                <Input
                  id="width"
                  type="number"
                  value={sidebarWidthValue}
                  onChange={(e) => setSidebarWidthValue(e.target.value)}
                  className="flex-1"
                />
                <Select
                  value={sidebarWidthUnit}
                  onValueChange={setSidebarWidthUnit}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="px">px</SelectItem>
                    <SelectItem value="rem">rem</SelectItem>
                    <SelectItem value="em">em</SelectItem>
                    <SelectItem value="%">%</SelectItem>
                    <SelectItem value="vw">vw</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Width */}
            <div className="space-y-2">
              <Label htmlFor="mobile-width">Mobile Width</Label>
              <div className="flex gap-2">
                <Input
                  id="mobile-width"
                  type="number"
                  value={sidebarMobileWidthValue}
                  onChange={(e) => setSidebarMobileWidthValue(e.target.value)}
                  className="flex-1"
                />
                <Select
                  value={sidebarMobileWidthUnit}
                  onValueChange={setSidebarMobileWidthUnit}
                >
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="px">px</SelectItem>
                    <SelectItem value="rem">rem</SelectItem>
                    <SelectItem value="em">em</SelectItem>
                    <SelectItem value="%">%</SelectItem>
                    <SelectItem value="vw">vw</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-xs text-muted-foreground">
                Width when viewed on mobile devices or when collapsed
              </p>
            </div>
          </TabsContent>

          {/* Behavior Settings Tab */}
          <TabsContent value="behavior" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="collapsible">Collapse Behavior</Label>
              <Select
                value={collapseBehavior}
                onValueChange={(value) =>
                  setCollapseBehavior(value as "offcanvas" | "icon" | "none")
                }
              >
                <SelectTrigger id="collapsible">
                  <SelectValue placeholder="Select collapse behavior" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="offcanvas">Offcanvas</SelectItem>
                  <SelectItem value="icon">Icon</SelectItem>
                  <SelectItem value="none">None</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground mt-1">
                <strong>Offcanvas:</strong> Sidebar slides in/out completely
                <br />
                <strong>Icon:</strong> Sidebar collapses to show only icons
                <br />
                <strong>None:</strong> Sidebar cannot be collapsed
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="default-open">Default Open</Label>
              <Switch
                id="default-open"
                checked={defaultOpen}
                onCheckedChange={setDefaultOpen}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="keyboard-shortcuts">
                Enable Keyboard Shortcuts
              </Label>
              <Switch
                id="keyboard-shortcuts"
                checked={enableKeyboardShortcuts}
                onCheckedChange={setEnableKeyboardShortcuts}
              />
            </div>

            <div className="text-xs text-muted-foreground mt-2 p-2 bg-muted rounded-md">
              When enabled, users can toggle the sidebar with{" "}
              <kbd className="px-1 py-0.5 bg-background rounded border">
                Cmd
              </kbd>{" "}
              +{" "}
              <kbd className="px-1 py-0.5 bg-background rounded border">B</kbd>{" "}
              (Mac) or{" "}
              <kbd className="px-1 py-0.5 bg-background rounded border">
                Ctrl
              </kbd>{" "}
              +{" "}
              <kbd className="px-1 py-0.5 bg-background rounded border">B</kbd>{" "}
              (Windows)
            </div>
          </TabsContent>

          {/* Structure Settings Tab */}
          <TabsContent value="structure" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="show-header">Show Team Switcher (Header)</Label>
              <Switch
                id="show-header"
                checked={showHeader}
                onCheckedChange={setShowHeader}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-footer">Show User Profile (Footer)</Label>
              <Switch
                id="show-footer"
                checked={showFooter}
                onCheckedChange={setShowFooter}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-icons">Show Icons</Label>
              <Switch
                id="show-icons"
                checked={showIcons}
                onCheckedChange={setShowIcons}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-section-labels">Show Section Labels</Label>
              <Switch
                id="show-section-labels"
                checked={showSectionLabels}
                onCheckedChange={setShowSectionLabels}
              />
            </div>

            <div className="p-2 bg-muted rounded-md mt-2">
              <p className="text-xs text-muted-foreground">
                These settings control the visibility of different sidebar
                elements. Toggle them on/off to customize the sidebar structure.
              </p>
            </div>
          </TabsContent>

          {/* Style Settings Tab */}
          <TabsContent value="style" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="button-size">Menu Button Size</Label>
              <Select
                value={menuButtonSize}
                onValueChange={(value) =>
                  setMenuButtonSize(value as "default" | "sm" | "lg")
                }
              >
                <SelectTrigger id="button-size">
                  <SelectValue placeholder="Select button size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="sm">Small</SelectItem>
                  <SelectItem value="lg">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-2 bg-muted rounded-md mt-4">
              <p className="text-xs text-muted-foreground">
                <strong>Small:</strong> Compact menu items with less padding
                <br />
                <strong>Default:</strong> Standard menu item size
                <br />
                <strong>Large:</strong> Larger menu items with more padding
              </p>
            </div>

            {/* Future expansion for more style options */}
            <div className="border-t pt-4 mt-4">
              <p className="text-sm text-muted-foreground">
                More style options coming soon:
              </p>
              <ul className="text-xs text-muted-foreground mt-2 list-disc pl-4 space-y-1">
                <li>Custom color schemes</li>
                <li>Border radius customization</li>
                <li>Animation speed</li>
                <li>Shadow effects</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
