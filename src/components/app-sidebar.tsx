import { Calendar, Download, Heart, Inbox, List, Search, Settings } from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { link } from "fs"
 
// Menu items.
const items = [
  {
    title: "Liked Songs",
    url: "Collections",
    icon: Heart,
  },
  {
    title: "Playlist 1",
    url: "Playlist1",
    icon: List,
  },
  {
    title: "Playlist 2",
    url: "Playlist2",
    icon: List,
  },
  {
    title: "Downloads",
    url: "Downloads",
    icon: Download,
  },
  {
    title: "Settings",
    url: "Settings",
    icon: Settings,
  },
]
 
export function AppSidebar() {
  return (
    <Sidebar  className="absolute ">
      <SidebarContent>
        <SidebarGroup className="bg-stone-950  text-white h-screen relative">
          <SidebarGroupLabel className="text-xl text-white pb-10">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="pb-2 font-semibold">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}