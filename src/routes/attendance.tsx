import { createFileRoute } from '@tanstack/react-router'
import { MainLayout } from '@/components/layout/main_layout'

export const Route = createFileRoute('/attendance')({
  component: () => (
    <MainLayout>
        <h1 className="text-2xl font-bold">Attendance Records</h1>
        <p className="text-muted-foreground">Manage and monitor daily attendance logs here.</p>

    </MainLayout>
  ),
})
