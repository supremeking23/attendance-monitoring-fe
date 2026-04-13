import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/attendance')({
  component: () => (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Attendance Records</h1>
      <p className="text-muted-foreground">Manage and monitor daily attendance logs here.</p>
    </div>
  ),
})
