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
        <div className="grid grid-cols-3 gap-2 lg:gap-5 mt-14">
          {data?.map((event) => (
            <div key={event._id}>
              <div className="p-2 lg:p-4 bg-[#d9d9d965] rounded-md">
                <img className="mb-3" src={event.photoURL} alt="" />
                <h3>{event.eventName}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default EventItems;
