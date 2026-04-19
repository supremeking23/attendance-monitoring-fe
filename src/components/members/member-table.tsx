import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface Member {
  id: string
  name: string
  role: string
  status: 'Active' | 'Inactive' | string
  joinDate: string
}

interface MemberTableProps {
  data: Member[]
}

export function MemberTable({ data }: MemberTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Full Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Join Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.id}</TableCell>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell>
              <Badge
                className={
                  member.status === 'Active'
                    ? 'bg-green-100 text-green-700 hover:bg-green-100 border-none'
                    : 'bg-red-100 text-red-700 hover:bg-red-100 border-none'
                }
              >
                {member.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{member.joinDate}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
