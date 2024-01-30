import Container from "@/components/ui/Container";
import picture1 from "../../assets/gallery/picture1.png";
import Picture2 from "../../assets/gallery/Picture2.png";
import Picture3 from "../../assets/gallery/Picture3.png";
import Picture4 from "../../assets/gallery/Picture4.png";
import Picture5 from "../../assets/gallery/Picture5.png";
import Picture6 from "../../assets/gallery/Picture6.png";
import Picture7 from "../../assets/gallery/Picture7.png";
import Picture8 from "../../assets/gallery/Picture8.png";
import Picture9 from "../../assets/gallery/Picture9.png";
import Picture10 from "../../assets/gallery/Picture10.png";
import Picture11 from "../../assets/gallery/Picture11.png";
import Picture12 from "../../assets/gallery/Picture12.png";
import { motion } from "framer-motion";
import useScrollGrowUp from "@/hooks/useScrollGrowUp";

const Gallery = () => {
  const { style, ref } = useScrollGrowUp();
  return (
    <Container className="mt-10 lg:mt-[76px]">
      <motion.div style={style} ref={ref} className="">
        <h1 className="text-[#061C3D] text-5xl font-extrabold text-center leading-[53px]">
          Gallery
        </h1>
        <p className="mt-3 text-center text-[#566B84]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </motion.div>
      <div className="mt-20 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 lg:justify-items-center lg:items-center gap-4 lg:px-24 px-5">
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={picture1} alt="" />
          <motion.img whileHover={{ scale: 1.05 }} src={Picture2} alt="" />
        </div>
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={Picture3} alt="" />
        </div>
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={Picture4} alt="" />
          <motion.img whileHover={{ scale: 1.05 }} src={Picture5} alt="" />
        </div>
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={Picture6} alt="" />
          <motion.img whileHover={{ scale: 1.05 }} src={Picture7} alt="" />
        </div>
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={Picture8} alt="" />
          <motion.img whileHover={{ scale: 1.05 }} src={Picture9} alt="" />
        </div>
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={Picture10} alt="" />
        </div>
        <div>
          <motion.img whileHover={{ scale: 1.05 }} src={Picture11} alt="" />
          <motion.img whileHover={{ scale: 1.05 }} src={Picture12} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
