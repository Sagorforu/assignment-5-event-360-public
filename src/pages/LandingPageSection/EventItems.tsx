import { getEventItems } from "@/api/recentEvents/eventItems.api";
import Container from "@/components/ui/Container";
import { useQuery } from "@tanstack/react-query";

const EventItems = () => {
  const { data, isLoading, isError } = useQuery<
    {
      _id: string;
      photoURL: string;
      eventName: string;
    }[]
  >({
    queryKey: ["eventItems"],
    queryFn: getEventItems,
  });

  if (isError) {
    return (
      <div className="text-center text-2xl text-red-500 mt-10">
        Recent Events data not fetched!!!
      </div>
    );
  }

  return (
    <Container className="mt-10 lg:mt-[76px]">
      <div className="">
        <h1 className="text-[#061C3D] text-5xl font-extrabold text-center leading-[53px]">
          Event Items
        </h1>
        <p className="mt-3 text-center text-[#566B84]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      {isLoading ? (
        <div className="text-2xl text-center mt-14">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-5 mt-14">
          {data?.map((event, index) => (
            <div
              key={event._id}
              className={`${
                index === 0 &&
                "md:col-span-2 md:row-span-2 h-1/2 w-full bg-[#d9d9d965]  rounded-md"
              } ${
                index === 1 &&
                "md:col-span-2 md:row-span-2 h-1/2  w-full bg-[#d9d9d965]  rounded-md"
              } ${
                index === 2 &&
                "md:col-span-2 md:row-span-2 w-full bg-[#d9d9d965]  rounded-md"
              } ${
                index === 3 &&
                "md:col-span-1 md:row-span-2 h-full w-full bg-[#d9d9d965] rounded-md"
              }
              ${
                index === 4 &&
                "md:col-span-1 md:row-span-2 h-full w-full bg-[#d9d9d965]  rounded-md"
              } ${
                index === 5 &&
                "md:col-span-2 md:row-span-2 h-full w-full bg-[#d9d9d965]  rounded-md"
              }`}
            >
              <div>
                <img className=" p-2 lg:p-4" src={event.photoURL} alt="" />
                <h3 className="px-2 lg:px-4">{event.eventName}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default EventItems;
