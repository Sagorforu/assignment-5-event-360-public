import heroImage from "../../assets/images/hero-image.jpeg";
import play from "../../assets/Play.svg";

const HeroSection = () => {
  return (
    <div className="pt-32 mx-auto bg-[#F5F6F7] lg:px-[310px]">
      <div className=" pl-2 lg:pl-0">
        <div className="lg:flex lg:gap-[128px] text-[#061C3D] items-center justify-between">
          <h1 className="text-3xl lg:text-[64px] mb-4 lg:mb-0 font-extrabold uppercase lg:leading-[70px]">
            Best Event management firm
          </h1>
          <p className="font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate.
          </p>
        </div>
        <div className="mt-8 pl-[2px]">
          <button className="font-plus-jakarta-sans bg-[#0B63E5] px-10 py-2 font-semibold text-white text-base tracking-wider">
            Explore
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mt-12 md:h-[600px] bg-red-400 md:relative">
          <img
            src={heroImage}
            className="object-cover md:absolute inset-0 w-full h-full"
            alt=""
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white size-16 md:size-24 rounded-full flex items-center justify-center  border-[8px] md:border-[16px] border-opacity-5">
            <img src={play} alt="" className="size-5 md:size-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
