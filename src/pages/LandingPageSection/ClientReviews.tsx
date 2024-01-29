import Container from "@/components/ui/Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import owner from "../../assets/reviews/Invisible.png";
import netflix from "../../assets/reviews/netflix.svg";
import google from "../../assets/reviews/google.svg";
import youtube from "../../assets/reviews/youtube.svg";

const ClientReviews = () => {
  return (
    <Container className="mt-28 py-6">
      <div className="grid lg:grid-cols-2 justify-items-end items-end">
        <div>
          <h1 className="text-[#061C3D] text-5xl font-extrabold mb-6">
            What client says
          </h1>
          <p className="text-[#566B84] text-lg font-normal">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
        </div>
        <div className="flex gap-4">
          <ArrowLeft className="bg-[#F0F5FF] text-[#0B63E5] h-12 w-12 p-3 rounded-full" />
          <ArrowRight className="bg-[#0B63E5] text-white h-12 w-12 p-3 rounded-full" />
        </div>
      </div>
      <div className="mt-[70px] grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-10 bg-[#FFF9EE] rounded-3xl">
          <div className="flex items-center gap-3">
            <img src={owner} alt="" />
            <div>
              <h2 className="text-[#061C3D] font-inter text-base font-medium">
                Annette Black
              </h2>
              <p className="text-[#42526B] font-inter text-sm font-medium">
                Chief Chairman of{" "}
                <span className="text-[#7534FF]">Netflix</span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-[#061C3D] text-lg font-normal font-inter">
            “Golio is one of the BEST web designers I've ever worked with
            professionally. I am a repeat customer who continues to work with
            Zakir because of his talent/skills, great customer service, work
            ethic, and attention to detail. ”
          </p>
          <img className="mt-10" src={netflix} alt="" />
        </div>
        <div className="p-10 bg-[#E7F5E8] rounded-3xl">
          <div className="flex items-center gap-3">
            <img src={owner} alt="" />
            <div>
              <h2 className="text-[#061C3D] font-inter text-base font-medium">
                Annette Black
              </h2>
              <p className="text-[#42526B] font-inter text-sm font-medium">
                Chief Chairman of{" "}
                <span className="text-[#7534FF]">Netflix</span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-[#061C3D] text-lg font-normal font-inter">
            “Golio is one of the BEST web designers I've ever worked with
            professionally. I am a repeat customer who continues to work with
            Zakir because of his talent/skills, great customer service, work
            ethic, and attention to detail. ”
          </p>
          <img className="mt-10" src={google} alt="" />
        </div>
        <div className="p-10 bg-[#F5F6F7] rounded-3xl">
          <div className="flex items-center gap-3">
            <img src={owner} alt="" />
            <div>
              <h2 className="text-[#061C3D] font-inter text-base font-medium">
                Annette Black
              </h2>
              <p className="text-[#42526B] font-inter text-sm font-medium">
                Chief Chairman of{" "}
                <span className="text-[#7534FF]">Netflix</span>
              </p>
            </div>
          </div>
          <p className="mt-6 text-[#061C3D] text-lg font-normal font-inter">
            “Golio is one of the BEST web designers I've ever worked with
            professionally. I am a repeat customer who continues to work with
            Zakir because of his talent/skills, great customer service, work
            ethic, and attention to detail. ”
          </p>
          <img className="mt-10" src={youtube} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ClientReviews;
