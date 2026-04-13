import { createFileRoute } from '@tanstack/react-router'
import { MainLayout } from '@/components/layout/main_layout'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { UserPlus } from "lucide-react"

export const Route = createFileRoute('/members')({
  component: MembersComponent,
})

function MembersComponent() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Members Directory</h1>
            <p className="text-muted-foreground text-sm">Manage and view all registered church members.</p>
          </div>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            Add Member
          </Button>
        </div>

        <div className="rounded-md border bg-white">
          <Table>
            <TableCaption>A list of recently added members.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Full Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Mock Data muna para sa UI testing */}
              <TableRow>
                <TableCell className="font-medium">MEM-001</TableCell>
                <TableCell>Ivan Dev</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell>Active</TableCell>
                <TableCell className="text-right">2026-04-13</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  )
}