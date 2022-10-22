import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { format, formatDistance, formatRelative, set, subDays } from "date-fns";

// const day = format(new Date(), "eeee");
// const date = format(new Date(), "d-M-y");
// const time = format(new Date(), "H:mm ");

//   const [value, onChange] = useState(new Date());

// moment.locale("en-GB");
// //momentLocalizer(moment);
// const localizer = momentLocalizer(moment);

// const events = [
//   {
//     id: 11,
//     title: "Public Holiday",
//     start: new Date(),
//     end: format( new Date(22-10-2022), "d-M-y"),
//     resourceId: 4,
//   },
// ];

// const resourceMap = [
//   { resourceId: 1, resourceTitle: "Board room" },

// ];

const styles = {
  container: {
    width: "80wv",
    height: "50vh",
  },
};

export default function Calendar() {
  //momentLocalizer(moment);
  const localizer = momentLocalizer(moment);
  //   const formatMonth = format({ locale: es }, "MMM");
  moment.locale("en-US");

  const [days, setDays] = useState(format(new Date(), "eeee"));
  const [date, setDate] = useState(format(new Date(), "d-M-y"));
  const [time, setTime] = useState(format(new Date(), "H:mm:s "));
  useEffect(() => {
    const interval = setInterval(() => {
      const day = format(new Date(), "eeee");
      setDays(day);
      const date = format(new Date(), "d-M-y");
      setDate(date);
      const time = format(new Date(), "H:mm:ss");
      setTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="realative z-40 bg-white overflow-auto h-full mr-2 border-2 border-gray-300 rounded-lg p-2">
        <div className="flex items-center justify-between mx-4 mb-5 ">
          <div>
            <p className="font-bold text-4xl text-gray-500">{time}</p>
          </div>
          <div>
            <h2 className="font-bold text-3xl text-gray-500">{days}</h2>{" "}
            <p className="italic text-gray-500 text-lg">{date}</p>
          </div>
        </div>
        <div style={styles.container}>
          <BigCalendar
            selectable
            localizer={localizer}
            //   events={events}
            defaultView={Views.MONTH}
            views={[Views.DAY, Views.WEEK, Views.MONTH]}
            steps={60}
            defaultDate={new Date()}
            //   resources={resourceMap}
            //   resourceIdAccessor="resourceId"
            //   resourceTitleAccessor="resourceTitle"
          />
        </div>
      </div>
      <div className="flex flex-col h-32 w-full bg-gray-200 mr-2 p-2 border-2 border-gray-300 mt-3">
        <p className="border-b-2 border-blue-300 pb-2 text-xl">
          Recent Activities
        </p>
      </div>
      <div className="flex flex-col  w-full bg-gray-200 mr-2 p-2 border-2 border-gray-300 mt-3">
        <p className="border-b-2 border-blue-300 pb-2 text-xl">
          Recent Activities
        </p>
        <ul>
          <li>Go Home</li>
          <li>Go Home</li>
          <li>Go Home</li>
        </ul>
      </div>
    </div>
  );
}
