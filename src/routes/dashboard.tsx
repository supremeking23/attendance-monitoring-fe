import { createFileRoute } from '@tanstack/react-router'
import { MainLayout } from '@/components/layout/main_layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Users, CalendarCheck, UserPlus, TrendingUp } from "lucide-react"
import React from 'react'

export const Route = createFileRoute('/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
          <p className="text-muted-foreground text-sm">Welcome back! Here's what's happening in your church today.</p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Members</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-xs text-green-500 font-medium">+12 this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Present Today</CardTitle>
              <CalendarCheck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <p className="text-xs text-muted-foreground">85% of target</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Visitors</CardTitle>
              <UserPlus className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-green-500 font-medium">+3 since Sunday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.2%</div>
              <p className="text-xs text-muted-foreground">Stable</p>
            </CardContent>
          </Card>
        </div>

        {/* Calendar and Recent Activity Section */}
        <div className="grid gap-4 md:grid-cols-7 lg:grid-cols-7">
          <Card className="col-span-4 p-4">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Placeholder para sa Members table soon...</p>
            </CardContent>
          </Card>
          
          <Card className="col-span-3 flex flex-col items-center justify-center p-4">
            <CardHeader className="w-full text-left">
              <CardTitle className="text-lg">Church Calendar</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="w-full flex justify-center items-center scale-110 lg:scale-125 transition-all"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}