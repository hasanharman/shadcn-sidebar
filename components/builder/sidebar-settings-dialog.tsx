// components/builder/sidebar-settings-dialog.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
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
    sidebarPosition,
    setSidebarPosition,
    sidebarVariant,
    setSidebarVariant,
    collapseBehavior,
    setCollapseBehavior,
    showHeader,
    setShowHeader,
    showFooter,
    setShowFooter,
    showIcons,
    setShowIcons,
  } = useBuilderStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <SettingsGearIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Sidebar Settings</DialogTitle>
          <DialogDescription>
            Customize your sidebar component properties
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
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
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="show-header">Show Team Switcher</Label>
              <Switch
                id="show-header"
                checked={showHeader}
                onCheckedChange={setShowHeader}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="show-footer">Show User Profile</Label>
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
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Apply Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
