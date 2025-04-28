import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import { SidebarOpen } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SidebarProvider className="relative">
        <AppSidebar />
        <SidebarTrigger />
        <main>{children}</main>
      </SidebarProvider>
    </>
  );
}
