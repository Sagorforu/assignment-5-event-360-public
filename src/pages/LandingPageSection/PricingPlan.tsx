import Container from "@/components/ui/Container";
import vector from "../../assets/Vector.svg";
import cross from "../../assets/cross.svg";
import { motion } from "framer-motion";

const PricingPlan = () => {
  return (
    <Container className="mt-10 lg:mt-[76px]">
      <div className="">
        <h1 className="text-[#061C3D] text-5xl font-extrabold text-center leading-[53px]">
          Explore our pricing plans
        </h1>
        <p className="mt-3 text-center text-[#566B84]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-[25px]">
        <motion.div
          whileHover={{ y: -5 }}
          className="border pt-12 px-[33px] pb-[33px] rounded-lg shadow-xl"
        >
          <div className=" space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Starter
              </h1>
              <h1 className="text-[25px] text-[#0B63E5] font-semibold  font-inter">
                $10
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-[#0B63E5] py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get this package
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features options
              </p>
            </div>
            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Free Custom Domain*
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Unlimited Bandwith{" "}
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Contributors
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  SquareSpace Extension
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Customer Support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Project Roles
                </p>
              </div>
            </ul>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="border pt-12 px-[33px] pb-[33px]  rounded-lg shadow-xl"
        >
          <div className=" space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Basic
              </h1>
              <h1 className="text-[25px] text-[#0B63E5] font-semibold  font-inter">
                $15
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-[#0B63E5] py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get this package
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features options
              </p>
            </div>
            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Free Custom Domain*
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Unlimited Bandwith{" "}
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Contributors
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  SquareSpace Extension
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Customer Support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Project Roles
                </p>
              </div>
            </ul>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="border  pb-[33px]  rounded-lg shadow-xl"
        >
          <div className="bg-[#0B63E5]  rounded-t-lg">
            <p className="text-center py-2 text-white font-inter text-[10px] font-medium leading-3 tracking-wider">
              Popular Plan
            </p>
          </div>
          <div className="px-[33px] pt-4 space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Standard
              </h1>
              <h1 className="text-[25px] text-[#0B63E5] font-semibold  font-inter">
                $35
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-[#0B63E5] py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get this package
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features options
              </p>
            </div>
            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Free Custom Domain*
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Unlimited Bandwith{" "}
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Contributors
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  SquareSpace Extension
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Customer Support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Project Roles
                </p>
              </div>
            </ul>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ y: -5 }}
          className="border pt-12 px-[33px] pb-[33px]  rounded-lg shadow-xl"
        >
          <div className=" space-y-6">
            <div className="text-center">
              <h1 className="text-xl font-bold tracking-wider  font-inter">
                Professional
              </h1>
              <h1 className="text-[25px] text-[#0B63E5] font-semibold  font-inter">
                $15
              </h1>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="w-full mx-auto font-semibold bg-[#0B63E5] py-2 rounded-md text-white tracking-widest text-[12px] lg:text-[15px]  font-inter"
            >
              Get this package
            </motion.button>
            <p className="text-[#566B84] text-[12px] font-normal tracking-wider text-center  font-inter">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida.
            </p>
            <div className="bg-[#E8E8E8]">
              <p className="text-[12px] font-normal tracking-wider py-1 text-center font-inter text-[#000000] leading-4">
                All features options
              </p>
            </div>
            <ul className="space-y-4">
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Free Custom Domain*
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Unlimited Bandwith{" "}
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Contributors
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={vector}
                  className="size-4 bg-[#0B63E5] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Basic Website Metrics
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  SquareSpace Extension
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Customer Support
                </p>
              </div>
              <div className="flex gap-[6px]">
                <img
                  src={cross}
                  className="size-4 bg-[#FFB6D9] rounded-full p-1"
                  alt=""
                />
                <p className="text-[#454545] font-normal text-[11px] font-inter">
                  Project Roles
                </p>
              </div>
            </ul>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default PricingPlan;
