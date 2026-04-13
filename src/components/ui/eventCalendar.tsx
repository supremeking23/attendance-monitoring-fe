import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// EventCalendar shows a calendar with month/week views and sample events.
// Update this file when you need to change:
// - visible views: initialView and headerToolbar
// - how many day events show before "+n more": dayMaxEvents
// - what happens when the more link is clicked: moreLinkClick
// - event colors and text colors: eventContent/eventDidMount
// - sample data in the events array
export function EventCalender() {
  return (
    <div className="admin-calendar-wrapper w-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek'
        }}
        height="500px" // Max height for the calendar
        // limit visible events in month view; additional events will be collapsed into +n more
        dayMaxEvents={2} // zero based index, so 2 means 3 events total
        // show hidden events in a popover when +n more is clicked
        moreLinkClick="popover"
        // Custom event rendering: keeps title text readable and wraps long titles.
        eventContent={(arg) => (
          <div
            title={arg.event.title}
            style={{
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: (arg.event as any).textColor || '#ffffff',
            }}
          >
            {arg.event.title}
          </div>
        )}
        // Apply colors explicitly on mount so month view and week view match.
        eventDidMount={(arg) => {
          const el = arg.el as HTMLElement
          const event = arg.event as any
          const bg = event.backgroundColor || event.color
          const border = event.borderColor || event.color
          const text = event.textColor || event.extendedProps?.textColor || '#ffffff'
          if (bg) el.style.backgroundColor = bg
          if (border) el.style.borderColor = border
          if (text) {
            el.style.color = text
            const titleEl = el.querySelector('.fc-event-title') as HTMLElement | null
            const timeEl = el.querySelector('.fc-event-time') as HTMLElement | null
            if (titleEl) titleEl.style.color = text
            if (timeEl) timeEl.style.color = text
          }
        }}
        // Sample event data. Add or replace with real events here.
        // Use full ISO strings for timed events (start/end). All-day events can omit time.
        events={[
          { title: 'Sunday Service', start: '2026-04-12', color: '#3b82f6' },
          { title: 'Sunday Service 2', start: '2026-04-12T09:00:00', end: '2026-04-12T10:30:00', color: '#3b82f6' },
          { title: 'Sunday Service 3', start: '2026-04-12T10:00:00', end: '2026-04-12T11:30:00', color: '#3b82f6' },
          { title: 'Sunday Service 4', start: '2026-04-12T11:00:00', end: '2026-04-12T12:30:00', color: '#f59e0b' },
          { title: 'Sunday Service 5', start: '2026-04-12T14:00:00', end: '2026-04-12T15:30:00', color: '#f59e0b' },
          { title: 'Sunday Service 6', start: '2026-04-12T15:00:00', end: '2026-04-12T16:30:00', color: '#f59e0b' },
          { title: 'Sunday Service 7', start: '2026-04-12T16:00:00', end: '2026-04-12T17:30:00', color: '#f59e0b' },
          { title: 'Youth Night', start: '2026-04-15', color: '#10b981' },
          { title: 'Prayer Meeting', start: '2026-04-17T19:00:00', end: '2026-04-17T20:30:00', color: '#f59e0b' },
          { title: 'Prayer Meeting -- whole day', start: '2026-04-17', end: '2026-04-17', color: '#f59e0b' },
          { title: 'Bible Study', start: '2026-04-18T18:00:00', end: '2026-04-18T19:30:00', color: '#8b5cf6' },
          { title: 'Community Outreach', start: '2026-04-20', color: '#ef4444' },
          { title: 'Worship Practice', start: '2026-04-20T08:00:00', end: '2026-04-20T09:00:00', color: '#06b6d4' },
          { title: 'Choir Rehearsal', start: '2026-04-20T09:30:00', end: '2026-04-20T10:30:00', color: '#06b6d4' },
          { title: 'Sunday School', start: '2026-04-26T10:00:00', end: '2026-04-26T11:00:00', color: '#84cc16' },
          { title: 'Fellowship Dinner', start: '2026-04-26T18:00:00', end: '2026-04-26T20:00:00', color: '#f97316' },
          { title: 'Midweek Service', start: '2026-04-23T19:30:00', end: '2026-04-23T21:00:00', color: '#ec4899' },
          { title: 'Youth Group Meeting', start: '2026-04-25T17:00:00', end: '2026-04-25T18:30:00', color: '#6366f1' },
          { title: 'Prayer Breakfast', start: '2026-04-28T07:00:00', end: '2026-04-28T09:00:00', color: '#14b8a6' },
          { title: 'Evangelism Training', start: '2026-04-30T14:00:00', end: '2026-04-30T16:00:00', color: '#a855f7' },
          { title: 'Church Anniversary', start: '2026-04-30', color: '#dc2626' },
        ]}
        // Modern styling via classNames or direct CSS
        contentHeight="auto"
      />
    </div>
  )
}