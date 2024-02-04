import { getServices } from "@/api/recentEvents/services.api";
import Container from "@/components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import greenVector from "../../assets/greenVector.png";
import { motion } from "framer-motion";

const OurServices = () => {
  const { data, isLoading, isError } = useQuery<
    {
      _id: string;
      title: string;
      image: string;
      description: string;
      features: string[];
      button: string;
    }[]
  >({
    queryKey: ["services"],
    queryFn: getServices,
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
          Our Services
        </h1>
        <p className="mt-3 text-center text-[#566B84]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div>
        {isLoading ? (
          <div className="text-2xl text-center mt-14">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5 mt-14 justify-center items-center">
            {data?.map((service, index) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={index}
                className={`${
                  index === 1
                    ? "bg-[#d9d9d944] rounded-md h-full"
                    : "bg-[#D9D9D965] bg-gradient-to-b from-[#f0f0f0ad] to-[#FFFFFF] rounded-md"
                }`}
              >
                <div className="px-6 py-8">
                  {service.image && (
                    <img className="w-full mb-6" src={service.image} alt="" />
                  )}
                  {service.title && (
                    <h3 className="font-semibold text-2xl">{service.title}</h3>
                  )}
                  {service.description && (
                    <h3 className="mt-8 text-[#566B84]">
                      {service.description}
                    </h3>
                  )}
                  {service.features && (
                    <div className="mt-6">
                      {service.features.map((feature, index) => (
                        <div
                          className="flex items-center gap-4 mt-4"
                          key={index}
                        >
                          <img
                            className="size-4 bg-white p-1 rounded-full"
                            src={greenVector}
                            alt=""
                          />
                          <p className="text-lg font-plus-jakarta-sans font-medium">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  {service.button && (
                    <motion.button
                      whileHover={{ y: -2, x: 2 }}
                      className="w-full bg-[#0B63E5] py-3 mt-20 text-white font-bold font-plus-jakarta-sans text-base tracking-widest"
                    >
                      {service.button}
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default OurServices;
