import * as React from "react";
import { Bot, Heart, Frame, Map, PieChart, Settings2 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";

const data = {
  navMain: [
    {
      title: "Collections",
      url: "#",
      icon: Heart,
      items: [
        {
          title: "Likes",
          url: "#",
        },
        {
          title: "Playlists1",
          url: "#",
        },
        {
          title: "Playlists2",
          url: "#",
        },
      ],
    },
    {
      title: "Explore",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Recent",
          url: "#",
        },
        {
          title: "Remix",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
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
  return (
    <Sidebar collapsible="icon" {...props} className="relative h-full  ">
      <SidebarHeader className="bg-amber-500"></SidebarHeader>
      <SidebarContent className="flex flex-col gap-2 overflow-hidden bg-amber-500">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-amber-500">footer to gago</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
