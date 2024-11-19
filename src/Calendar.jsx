import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';

export default function Calendar() {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-11-15' },
    { title: 'Event 2', date: '2024-11-17' },
  ]);

  const handleDateClick = (selected) => {
    const title = prompt('Enter a new title for your event');
    if (title) {
      const newEvent = {
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        dateClick={handleDateClick}
        editable={true}
        selectable={true}
        height="auto"
        eventColor="#4CAF50"
      />
    </Box>
  );
}
