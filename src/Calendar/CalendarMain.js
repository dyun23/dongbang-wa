import MyCalendar from "./MyCalender";
import Sidebar from "./Sidebar";

function CalendarMain() {
  return (
    <div className="App">
      <h3>동아리 일정표</h3>
      <div style={{display: 'flex'}}>
        <Sidebar/>
        <MyCalendar/>
      </div>
    </div>
  );
}

export default CalendarMain;