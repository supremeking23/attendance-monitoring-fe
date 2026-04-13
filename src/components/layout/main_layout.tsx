import { AppSidebar } from './app_sidebar'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <AppSidebar />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Mobile Header & Header Shared */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b md:px-8">
          <div className="flex items-center">
            {/* Mobile Drawer Trigger */}
            <div className="md:hidden mr-4">
               <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <AppSidebar />
                </SheetContent>
              </Sheet>
            </div>
            <h1 className="text-lg font-semibold md:hidden">ChurchName</h1>
          </div>
          
          {/* Right side - User Info / Logout placeholder */}
          <div className="flex items-center space-x-4">
             <span className="text-sm font-medium hidden sm:inline-block">Admin User</span>
             <div className="h-8 w-8 rounded-full bg-slate-200" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-4 md:p-8">
         <div className="w-full">
             {children}
         </div>
        </main>
      </div>
    </div>
  )
}