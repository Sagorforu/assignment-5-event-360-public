import Container from "@/components/ui/Container";
import Person from "../../assets/upComingEvents/Photo.png";
import Cpu from "../../assets/upComingEvents/Cpu.svg";
import Stack from "../../assets/upComingEvents/Stack.svg";

const UpComingEvents = () => {
  return (
    <Container className="mt-28 py-11 grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
      <div>
        <h1 className="text-[#061C3D] text-5xl font-extrabold mb-6">
          Upcoming Events
        </h1>
        <p className="text-[#566B84] text-lg font-normal">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <div className="upComing-box-background p-8 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold">
          <div className="flex gap-5">
            <div>
              <img src={Stack} alt="" />
            </div>
            <div>
              <h2 className="text-[#061C3D] mb-2 text-xl font-medium font-inter">
                Golf Clubbers Annual Agenda
              </h2>{" "}
              <p className="text-[#42526B] text-base font-normal font-inter">
                Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                tortor in tellus dictum pellentesque.{" "}
              </p>
            </div>
          </div>
          <div className="border my-8"></div>
          <div className="flex gap-5">
            <div>
              <img src={Cpu} alt="" />
            </div>
            <div>
              <h2 className="text-[#061C3D] mb-2 text-xl font-medium font-inter">
                Music Events at LA
              </h2>{" "}
              <p className="text-[#42526B] text-base font-normal font-inter">
                Vivamus dignissim tortor in tellus dictum pellentesque. Praesent
                mauris metus, dictum quis velit non.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Person} alt="" />
      </div>
    </Container>
  );
};

export default UpComingEvents;
