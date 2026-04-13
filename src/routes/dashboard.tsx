import { createFileRoute } from '@tanstack/react-router'
import { MainLayout } from '@/components/layout/main_layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Users, CalendarCheck, UserPlus, TrendingUp } from "lucide-react"
import React from 'react'

import { EventCalender } from '@/components/ui/eventCalendar'

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
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-11">
            <Card className="col-span-8 flex flex-col items-center justify-center p-4">
              <CardHeader className="w-full text-left">
                <CardTitle className="text-lg">Church Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <EventCalender />
              </CardContent>
            </Card>
            <Card className="col-span-3 p-4">
              <CardHeader>
                <CardTitle className="text-lg">Recentzz Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Placeholder para sa Members table soon...</p>
              </CardContent>
            </Card>
          </div>
          {/* <div className="w-full">          
            <Card className="col-span-3 flex flex-col items-center justify-center p-4">
              <CardHeader className="w-full text-left">
                <CardTitle className="text-lg">Church Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <EventCalender />
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </MainLayout>
  )
}