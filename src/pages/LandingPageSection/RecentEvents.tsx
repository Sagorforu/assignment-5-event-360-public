import { getRecentEvents } from "@/api/recentEvents/recentEvents.api";
import Container from "@/components/ui/Container";
import { animationLeftDiv } from "@/hooks/useLeftDivAnimation";
import { animationRightDiv } from "@/hooks/useRightDivAnimation";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const RecentEvents = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recentEvents"],
    queryFn: getRecentEvents,
  });

  if (isError) {
    return (
      <div className="text-center text-2xl text-red-500 mt-10">
        Recent Events data not fetched!!!
      </div>
    );
  }

  return (
    <Container className="mt-28 py-11 grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
      <motion.div
        variants={animationLeftDiv}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <h1 className="text-[#061C3D] text-5xl font-extrabold mb-6">
          Recent Events
        </h1>
        <p className="text-[#566B84] text-lg font-normal">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <motion.button
          whileHover={{ y: -2, x: 2 }}
          className="bg-[#3461FF] py-3 px-10 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold text-white"
        >
          Learn more
        </motion.button>
      </motion.div>
      <motion.div
        variants={animationRightDiv}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        {isLoading ? (
          <div className="text-center text-2xl">Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-5 w-full h-full">
            {data.map((event) => (
              <div key={event._id}>
                <img src={event.imageURL} alt="" />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </Container>
  );
};

export default RecentEvents;
