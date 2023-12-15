import MyCalendar from "./MyCalendar";
import * as Components from '../Components';

function CalendarMain(props) {
  return (
    <>
    {props.size ? (
      <Components.Group size={props.size}>
        <MyCalendar/>
      </Components.Group>
    ) : (
      <div className="App">
        <MyCalendar/>
      </div>
    )}
    </>
  );
}

export default CalendarMain;
