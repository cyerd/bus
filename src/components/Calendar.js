import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

  const day = format(new Date(), "eeee");
  const date = format(new Date(), "d-M-y");
  const time = format(new Date(), "H:mm ");

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
  useEffect(() => {
    moment.locale("en-US");
  }, []);
  return (
    <div className="realative z-40 bg-white overflow-auto h-full">
      <div className="flex items-center justify-between mx-4 mb-5 ">
        <div >
          <p className="font-bold text-2xl text-gray-500">{time}</p>
        </div>
        <div >
          <h2 className="font-bold text-xl text-gray-500">{day}</h2>{" "}
          <p className="italic text-gray-500 text-sm">{date}</p>
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
  );
}
