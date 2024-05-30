import React, { useState } from "react";
import { Calendar, dayjsLocalizer, Views } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configuración de localización
const localizer = dayjsLocalizer(dayjs);

const MyCalendar = () => {
  // Estado para los eventos
  const [events, setEvents] = useState([]);

  // Función para manejar la selección de un rango de fechas
  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Nuevo evento: nombre del evento");
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
        defaultView={Views.MONTH}
        views={{ month: true, week: true, day: true, agenda: true }} //cambiar el true o false dependiendo de que se quiera mostar
      />
    </div>
  );
};

export default MyCalendar;
