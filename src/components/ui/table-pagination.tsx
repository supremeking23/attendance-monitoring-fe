import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface TablePaginationProps {
  startIndex: number
  endIndex: number
  total: number
  itemsPerPage: number
  currentPage: number
  totalPages: number
  onPageSizeChange: (value: string) => void
  onPrevious: () => void
  onNext: () => void
}

export function TablePagination({
  startIndex,
  endIndex,
  total,
  itemsPerPage,
  currentPage,
  totalPages,
  onPageSizeChange,
  onPrevious,
  onNext,
}: TablePaginationProps) {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-t bg-slate-50/50">
      <div className="text-sm text-muted-foreground">
        Showing <strong>{startIndex + 1}</strong> to <strong>{Math.min(endIndex, total)}</strong> of <strong>{total}</strong> members
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select value={itemsPerPage.toString()} onValueChange={onPageSizeChange}>
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={itemsPerPage} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" size="sm" onClick={onPrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <div className="text-sm font-medium">Page {currentPage} of {totalPages}</div>
        <Button variant="outline" size="sm" onClick={onNext} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  )
}
