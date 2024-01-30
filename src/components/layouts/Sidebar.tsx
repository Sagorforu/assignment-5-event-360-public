import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-[#cadbff] col-span-2 h-screen top-0 left-0 sticky p-1 lg:p-5 overflow-auto">
      <h1 className="text-base lg:text-3xl font-bold text-[#000]">
        Event
        <span className="text-base lg:text-3xl font-bold text-[#0B63E5]">
          {" "}
          360
        </span>
      </h1>
      <nav className="flex flex-col my-6 space-y-2">
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-[#3460ffb6] hover:bg-[#3461FF] py-1 px-2 tracking-wider text-base font-medium hover:text-white truncate",
              {
                "text-white bg-[#3461FF]": isActive,
              }
            )
          }
          to="/admin/create-event"
        >
          Create Event
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-[#3460ffb6] hover:bg-[#3461FF] py-1 px-2 tracking-wider text-base font-medium hover:text-white truncate",
              {
                "text-white bg-[#3461FF]": isActive,
              }
            )
          }
          to="/admin/get-all-events"
        >
          All Events
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-[#3460ffb6] hover:bg-[#3461FF] py-1 px-2 tracking-wider text-base font-medium hover:text-white truncate",
              {
                "text-white bg-[#3461FF]": isActive,
              }
            )
          }
          to="/admin/create-recent-events"
        >
          Recent Create Events
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              "bg-[#3460ffb6] hover:bg-[#3461FF] py-1 px-2 tracking-wider text-base font-medium hover:text-white truncate",
              {
                "text-white bg-[#3461FF]": isActive,
              }
            )
          }
          to="/admin/get-all-recent-events"
        >
          All-Recent-Events
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
