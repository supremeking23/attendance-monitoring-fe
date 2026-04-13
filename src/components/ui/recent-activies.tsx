import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dummy Data Array
const recentActivities = [
  {
    id: 1,
    name: "Jonathan Burke Jr.",
    timestamp: "7:30 PM today",
    content: "New member 'Maria Clara' was successfully registered under the Youth Ministry. All documents have been uploaded.",
    avatar: "https://github.com", // Pwede ring mock placeholder
    initial: "JB"
  },
  {
    id: 2,
    name: "System Update",
    timestamp: "5:00 PM today",
    content: "Attendance report for Sunday Service (April 12) has been finalized and sent to the Admin team.",
    initial: "SU"
  },
    {
    id: 3,
    name: "New Event added",
    timestamp: "5:00 PM today",
    content: "Attendance report for Sunday Service (April 12) has been finalized and sent to the Admin team.",
    initial: "AD"
  },
    {
    id: 4,
    name: "System Update",
    timestamp: "5:00 PM today",
    content: "Attendance report for Sunday Service (April 12) has been finalized and sent to the Admin team.",
    initial: "SU"
  },
]

export function RecentActivities() {
  return (
    <div className="space-y-6 pt-4">
      {recentActivities.map((post) => (
        <div key={post.id} className="group flex flex-col space-y-3 border-b pb-6 last:border-0 last:pb-0">
          {/* Header Part: Avatar + Name + Timestamp */}
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={post.avatar} alt={post.name} />
              <AvatarFallback>{post.initial}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
                {post.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.timestamp}
              </span>
            </div>
          </div>

          {/* Content Part: The "Lorem Ipsum" style text */}
          <div className="pl-[52px]"> {/* Match the avatar width + spacing for alignment */}
            <p className="text-sm leading-relaxed text-slate-600">
              {post.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
    