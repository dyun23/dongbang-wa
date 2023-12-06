import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import ReactDatePicker from 'react-datepicker';
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import AddEvent from './EventModalPopUp';
import EventDetailsModal from './EventDetailsModal';

const locales={
  "en-US": require("date-fns/locale/en-US")
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const MyCalendar = (props) => {
  
  // const events = [
  //   {
  //     id: 0,
  //     title: 'All Day Event very long title',
  //     allDay: true,
  //     start: new Date(2023,11,5),
  //     end: new Date(2023,11,5),
  //     // start: new Date(),
  //     // end: new Date(moment().add(1, "days")),
  //     description : true, //일정내용
  //   },
  //   {
  //     id: 0,
  //     title: 'Big Meeting',
  //     allDay: true,
  //     start: new Date(2023,11,5),
  //     end: new Date(2023,11,5),
  //     description : true, //일정내용
  //   },
  // ];
  
  //새로운 이벤트 생성
  const [allEvents, setAllEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleAddEvent=(newEvent)=>{
    setAllEvents([...allEvents, newEvent])
  };
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    //<EventDetailsModal/>
  };

  return(
    <div style={{width: 50+"%", height: 600}}>
      <Calendar
        localizer={localizer}
        // defaultView="month"
        events={allEvents}
        style={{ height: "20" }}
        startAccessor="start"
        endAccessor="end"
        description="description"
        onSelectEvent={handleEventClick}
        /* events 배열은 달력에 표시될 이벤트 목록이다. 
        배열의 각 객체는 start, end, 그리고 title 속성을 가져야 한다. */
      />
      <AddEvent onAddEvent={handleAddEvent} />
      {selectedEvent && (<EventDetailsModal selectedEvent={selectedEvent} onClose={() => setSelectedEvent(setAllEvents)}
      />)}
    </div>
  );
};


export default MyCalendar;