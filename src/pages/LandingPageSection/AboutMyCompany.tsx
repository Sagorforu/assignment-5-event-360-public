import Container from "@/components/ui/Container";
import aboutMyCompany1 from "../../assets/aboutMyCompany/aboutMyCompany1.png";
import aboutMyCompany2 from "../../assets/aboutMyCompany/aboutMyCompany2.png";
import vector from "../../assets/Vector.svg";
import { motion } from "framer-motion";
import { animationRightDiv } from "@/hooks/useRightDivAnimation";
import { animationLeftDiv } from "@/hooks/useLeftDivAnimation";

const AboutMyCompany = () => {
  return (
    <Container className="mt-28 py-11 grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
      <motion.div
        variants={animationLeftDiv}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="relative  w-3/4 mx-auto  lg:w-full mb-10 lg:mb-20"
      >
        <img className="rounded-full" src={aboutMyCompany1} alt="" />
        <img
          className="absolute bottom-0 right-0 transform translate-x-12 translate-y-6 border-[10px] border-white rounded-full w-3/4 lg:w-1/2"
          src={aboutMyCompany2}
          alt=""
        />
      </motion.div>
      <motion.div
        variants={animationRightDiv}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 className="text-[#0B63E5] text-xl font-bold mb-6 tracking-widest">
          About Our Company
        </h2>
        <h1 className="text-[#061C3D] text-5xl font-extrabold mb-6">
          We Execute Our ideas From The Start to Finish
        </h1>
        <p className="text-[#566B84] text-lg font-normal">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <ul className="space-y-4 mt-6">
          <div className="flex gap-[6px] items-center">
            <img src={vector} className="size-4 bg-[#0B63E5] p-1" alt="" />
            <p className="text-[#454545] font-medium text-lg font-inter">
              Development of Financial Models
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <img src={vector} className="size-4 bg-[#0B63E5] p-1" alt="" />
            <p className="text-[#454545] font-medium text-lg font-inter">
              Events management team is a diverse network of consultants
            </p>
          </div>
          <div className="flex gap-[6px] items-center">
            <img src={vector} className="size-4 bg-[#0B63E5] p-1" alt="" />
            <p className="text-[#454545] font-medium text-lg font-inter">
              Industry professionals with a global mindset
            </p>
          </div>
        </ul>
        <motion.button
          whileHover={{ y: -2, x: 2 }}
          className="bg-[#3461FF] py-3 px-10 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold text-white"
        >
          Read details
        </motion.button>
      </motion.div>
    </Container>
  );
};

export default AboutMyCompany;
