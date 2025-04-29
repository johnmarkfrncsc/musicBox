import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import Content from "./Content";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        <SidebarProvider className="relative">
          <AppSidebar />

          <header className="w-full bg-black">
            <div className="flex items-center px-4">
              <SidebarTrigger className="-ml-1 relative"/>
              <Separator orientation="vertical"/>
            </div>
            <Content />
          </header>
          <main>{children}</main>
          {/* <div className="bg-amber-950 w-full">adasd</div> */}
        </SidebarProvider>
        
      </div>
    </>
  );
}
