// components/sidebar-content-dialog.tsx
"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Plus, Trash2, RefreshCw } from "lucide-react";
import { useSidebarContentStore } from "@/store/use-content-store";

import { defaultData } from "@/store/use-content-store";
import { SquarePenIcon } from "@/components/icons/square-pen";

export function SidebarContentDialog() {
  const {
    user,
    teams,
    navMain,
    projects,
    setUser,
    setTeams,
    setNavMain,
    setProjects,
  } = useSidebarContentStore();
  const [activeTab, setActiveTab] = React.useState("user");
  const [mounted, setMounted] = React.useState(false);

  // Handle hydration
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleResetAll = () => {
    if (defaultData) {
      setUser(defaultData.user);
      setTeams(defaultData.teams);
      setNavMain(defaultData.navMain);
      setProjects(defaultData.projects);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <SquarePenIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-scroll flex flex-col">
        <DialogHeader>
          <DialogTitle>Edit Sidebar Content</DialogTitle>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 flex flex-col"
        >
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="teams">Teams</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto pr-4">
            {/* User Settings */}
            <TabsContent value="user" className="space-y-4 mt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label>Avatar URL</Label>
                  <Input
                    value={user.avatar}
                    onChange={(e) =>
                      setUser({ ...user, avatar: e.target.value })
                    }
                  />
                </div>
              </div>
            </TabsContent>

            {/* Teams Settings */}
            <TabsContent value="teams" className="space-y-4 mt-4">
              {teams.map((team, index) => (
                <div key={index} className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Team {index + 1}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setTeams(teams.filter((_, i) => i !== index))
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      value={team.name}
                      onChange={(e) => {
                        const newTeams = [...teams];
                        newTeams[index] = { ...team, name: e.target.value };
                        setTeams(newTeams);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Icon Name</Label>
                    <Input
                      value={team.iconName}
                      onChange={(e) => {
                        const newTeams = [...teams];
                        newTeams[index] = { ...team, iconName: e.target.value };
                        setTeams(newTeams);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Plan</Label>
                    <Input
                      value={team.plan}
                      onChange={(e) => {
                        const newTeams = [...teams];
                        newTeams[index] = { ...team, plan: e.target.value };
                        setTeams(newTeams);
                      }}
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={() =>
                  setTeams([
                    ...teams,
                    { name: "New Team", iconName: "Users", plan: "Free" },
                  ])
                }
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Team
              </Button>
            </TabsContent>

            {/* Navigation Settings */}
            <TabsContent value="navigation" className="space-y-4 mt-4">
              {navMain.map((nav, index) => (
                <div key={index} className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Navigation Item {index + 1}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setNavMain(navMain.filter((_, i) => i !== index))
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input
                      value={nav.title}
                      onChange={(e) => {
                        const newNav = [...navMain];
                        newNav[index] = { ...nav, title: e.target.value };
                        setNavMain(newNav);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>URL</Label>
                    <Input
                      value={nav.url}
                      onChange={(e) => {
                        const newNav = [...navMain];
                        newNav[index] = { ...nav, url: e.target.value };
                        setNavMain(newNav);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Icon Name</Label>
                    <Input
                      value={nav.iconName}
                      onChange={(e) => {
                        const newNav = [...navMain];
                        newNav[index] = { ...nav, iconName: e.target.value };
                        setNavMain(newNav);
                      }}
                    />
                  </div>

                  {/* Sub-items */}
                  <div className="space-y-2">
                    <Label>Sub Items</Label>
                    {nav.items?.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex gap-2 mt-2">
                        <Input
                          value={item.title}
                          onChange={(e) => {
                            const newNav = [...navMain];
                            if (!newNav[index].items) {
                              newNav[index].items = [];
                            }
                            newNav[index].items[itemIndex].title =
                              e.target.value;
                            setNavMain(newNav);
                          }}
                          placeholder="Title"
                        />
                        <Input
                          value={item.url}
                          onChange={(e) => {
                            const newNav = [...navMain];
                            if (!newNav[index].items) {
                              newNav[index].items = [];
                            }
                            newNav[index].items[itemIndex].url = e.target.value;
                            setNavMain(newNav);
                          }}
                          placeholder="URL"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            const newNav = [...navMain];
                            newNav[index].items = (nav.items || []).filter(
                              (_, i) => i !== itemIndex
                            );
                            setNavMain(newNav);
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      onClick={() => {
                        const newNav = [...navMain];
                        newNav[index].items = [
                          ...(nav.items || []),
                          { title: "New Item", url: "#" },
                        ];
                        setNavMain(newNav);
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Sub Item
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                onClick={() =>
                  setNavMain([
                    ...navMain,
                    {
                      title: "New Item",
                      url: "#",
                      iconName: "Circle",
                      items: [],
                    },
                  ])
                }
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Navigation Item
              </Button>
            </TabsContent>

            {/* Projects Settings */}
            <TabsContent value="projects" className="space-y-4 mt-4">
              {projects.map((project, index) => (
                <div key={index} className="space-y-4 rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">Project {index + 1}</h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setProjects(projects.filter((_, i) => i !== index))
                      }
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input
                      value={project.name}
                      onChange={(e) => {
                        const newProjects = [...projects];
                        newProjects[index] = {
                          ...project,
                          name: e.target.value,
                        };
                        setProjects(newProjects);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>URL</Label>
                    <Input
                      value={project.url}
                      onChange={(e) => {
                        const newProjects = [...projects];
                        newProjects[index] = {
                          ...project,
                          url: e.target.value,
                        };
                        setProjects(newProjects);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Icon Name</Label>
                    <Input
                      value={project.iconName}
                      onChange={(e) => {
                        const newProjects = [...projects];
                        newProjects[index] = {
                          ...project,
                          iconName: e.target.value,
                        };
                        setProjects(newProjects);
                      }}
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={() =>
                  setProjects([
                    ...projects,
                    { name: "New Project", url: "#", iconName: "Folder" },
                  ])
                }
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </TabsContent>
          </div>
        </Tabs>
        <DialogFooter className="mt-4 pt-4 border-t">
          <Button variant="outline" onClick={handleResetAll} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Reset to Default
          </Button>
          {/* <Button onClick={() => setDialogOpen(false)}>Done</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
