import './App.css';
// import { Routes, Route, Link } from 'react-router-dom'
import MyCalendar from "./page/MyCalender";
// import Sidebar from "./page/Sidebar";

function CalendarMain() {
  return (
    <div className="App">
      <h3>동아리 일정표</h3>
      <div style={{display: 'flex'}}>
        {/* <Sidebar/> */}
        <MyCalendar/>
      </div>
    </div>
  );
}

export default CalendarMain;
