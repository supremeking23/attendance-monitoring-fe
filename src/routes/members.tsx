import { createFileRoute } from '@tanstack/react-router'
import { MainLayout } from '@/components/layout/main_layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MemberTable } from '@/components/members/member-table'
import { TablePagination } from '@/components/ui/table-pagination'
import { UserPlus, Search, Filter } from 'lucide-react'

import React from 'react'

export const Route = createFileRoute('/members')({
  component: MembersComponent,
})

// TODO: replace with json mock data or real data once backend is available
const MOCK_MEMBERS = Array.from({ length: 60 }, (_, i) => ({
  id: `MEM-${(i + 1).toString().padStart(3, '0')}`,
  name: i === 0 ? "Ivan Dev" : `Member Name ${i + 1}`,
  role: i % 5 === 0 ? "Admin" : i % 3 === 0 ? "Leader" : "Member",
  status: i % 7 === 0 ? "Inactive" : "Active",
  joinDate: "2026-04-13",
}))

function MembersComponent() {

  // 1. Baguhin ang itemsPerPage into a State
  const [itemsPerPage, setItemsPerPage] = React.useState(10)
  const [currentPage, setCurrentPage] = React.useState(1)

  // 2. Reset to page 1 whenever itemsPerPage changes (Best Practice)
  const handlePageSizeChange = (value: string) => {
    setItemsPerPage(Number(value))
    setCurrentPage(1)
  }

  // 3. Calculate indices
  const totalPages = Math.ceil(MOCK_MEMBERS.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  // 4. Slice the data: Ito ang i-lo-loop natin sa TableBody
  const currentData = MOCK_MEMBERS.slice(startIndex, endIndex)

  return (
    <MainLayout>

    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search members by name or ID..." className="pl-10" />
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter Ministry
        </Button>
      </div>
    </div>     

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
          <MemberTable data={currentData} />
          <TablePagination
            startIndex={startIndex}
            endIndex={endIndex}
            total={MOCK_MEMBERS.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageSizeChange={handlePageSizeChange}
            onPrevious={() => setCurrentPage((p) => Math.max(1, p - 1))}
            onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
        </div>
      </div>
    </MainLayout>
  )
}