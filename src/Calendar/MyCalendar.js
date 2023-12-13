import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "./react-big-calendar.css";
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import styled from "styled-components";
import AddEvent from './EventModalPopUp';
import EventDetailsModal from './EventDetailsModal';


const SidebarDiv=styled.div`
width: 300px;
height: 300px;
margin: 50px;
background: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
`;

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
  //     //start: new Date(5,12,2023),
  //     //end: new Date(5,12,2023),
  //     start: new Date(),
  //     end: new Date(moment().add(1, "days")),
  //     description : true, //일정내용
  //   },
  //   {
  //     id: 0,
  //     title: 'Big Meeting',
  //     allDay: true,
  //     start: new Date(5,12,2023),
  //     end: new Date(5,12,2023),
  //     description : true, //일정내용
  //   },
  // ];
  
  //새로운 이벤트 생성
  const [allEvents, setAllEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);

  const handleAddEvent=(newEvent)=>{
    setAllEvents([...allEvents, newEvent])
  };
  const handleEventClick = (event) => {
    setSelectedEvent([...selectedEvent, event]); //여러번 클릭해도 여러번 모달창 보여줌
    //<EventDetailsModal/>
  };

  const handleSave = (editedEvent) => {
    const updatedEvents = allEvents.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
      // event.id === selectedEvent.id ? editedEvent : event
    );
  
    setAllEvents(updatedEvents);
    setSelectedEvent([]); // 선택된 이벤트 초기화
  };

  const handleDelete = (deletedEvent) => {
    const updatedEvents = allEvents.filter((event) =>
      event.id !== deletedEvent.id
      // event.id !== selectedEvent.id
    );

    setAllEvents(updatedEvents);
    setSelectedEvent([]);
  };


  return(
    <div style={{}}>
      <h2 style={{marginTop: 50}}>동아리 일정표</h2>
      <div style={{display: "flex", margin: "auto auto", marginTop: 50}}>
        <SidebarDiv>
          <AddEvent onAddEvent={handleAddEvent} />
          {selectedEvent.map((event, index) => (
            <EventDetailsModal key={index} selectedEvent={event} allEvents={allEvents} setAllEvents={setAllEvents} onSave={handleSave} onDelete={handleDelete}/>

          ))}
        </SidebarDiv>
        <div style={{width: 60+"%", height: 700}}>
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
        </div>
      </div>`
    </div>
  );
};


export default MyCalendar;