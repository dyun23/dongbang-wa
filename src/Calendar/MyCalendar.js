import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"


moment.locale("ko-KR");
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      start: new Date(),
      end: new Date(moment().add(1, "days")),
      title: "Sample Event 1",
    },
    // more events...
  ];
  
  return(
    <div style={{width: 50+"%", height: 600}}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "20" }}
        /* events 배열은 달력에 표시될 이벤트 목록이다. 
        배열의 각 객체는 start, end, 그리고 title 속성을 가져야 한다. */
      />
    </div>
  );
};

export default MyCalendar;