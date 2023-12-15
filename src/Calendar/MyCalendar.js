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
width:300px;
margin: 50px;
background: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;
  
`;
const Container=styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto;
  margin-top: 50px;
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

const MyCalendar = ({}) => {

  const [allEvents, setAllEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState([]);

  const handleAddEvent=(newEvent)=>{
    setAllEvents([...allEvents, newEvent])
  };
  const handleEventClick = (event) => {
    setSelectedEvent([...selectedEvent, event]);
  };

  const handleSave = (editedEvent) => {
    const updatedEvents = allEvents.map((event) =>
      event.id === editedEvent.id ? editedEvent : event
    );
    setAllEvents(updatedEvents);
    setSelectedEvent([]);
  };

  const handleDelete = (deletedEvent) => {
    const updatedEvents = allEvents.filter((event) =>
      event.id !== deletedEvent.id
    );
    setAllEvents(updatedEvents);
    setSelectedEvent([]);
  };


  return(
    <div style={{}}>
      <h2 style={{margin: "50px auto"}}>동아리 일정표</h2>
      <Container>
        <SidebarDiv>
          <AddEvent onAddEvent={handleAddEvent} />
          {selectedEvent.map((event, index) => (
            <EventDetailsModal key={index} selectedEvent={event} allEvents={allEvents} setAllEvents={setAllEvents} onSave={handleSave} onDelete={handleDelete}/>

          ))}
        </SidebarDiv>
        <div style={{width: 60+"%", height: 700}}>
          <Calendar
            localizer={localizer}
            events={allEvents}
            style={{ height: "20" }}
            startAccessor="start"
            endAccessor="end"
            description="description"
            onSelectEvent={handleEventClick}
          />
        </div>
      </Container>
    </div>
  );
};


export default MyCalendar;