import { Sidebar } from "@/components/sidebar"
import { MiniNavbar } from "@/components/mini-navbar"
import { SidebarProvider } from "@/context/sidebar-context"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <MiniNavbar />
          <main className="flex-1 overflow-y-auto bg-background p-16">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

