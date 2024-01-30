import Container from "@/components/ui/Container";
import axn from "../../assets/customers/axn.svg";
import lenevo from "../../assets/customers/lenevo.svg";
import slack from "../../assets/customers/slack.svg";
import youtube from "../../assets/customers/youtube.svg";
import amazone from "../../assets/customers/amazone.svg";
import google from "../../assets/customers/google.svg";
import useScrollGrowUp from "@/hooks/useScrollGrowUp";
import { motion } from "framer-motion";

const Customers = () => {
  const { style, ref } = useScrollGrowUp();
  return (
    <Container className="mt-24">
      <motion.p
        style={style}
        ref={ref}
        className="text-[#061C3D] mb-6 font-inter text-xl font-semibold tracking-wider text-center"
      >
        We have <span className="text-[#0B63E5]"> 23k+ </span> Satisfied &
        Trusted Customers
      </motion.p>
      <motion.div
        style={style}
        ref={ref}
        className="grid grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-20 items-center justify-items-center"
      >
        <img src={axn} alt="" />

        <img src={lenevo} alt="" />

        <img src={slack} alt="" />

        <img src={youtube} alt="" />

        <img src={amazone} alt="" />

        <img src={google} alt="" />
      </motion.div>
    </Container>
  );
};

export default Customers;
