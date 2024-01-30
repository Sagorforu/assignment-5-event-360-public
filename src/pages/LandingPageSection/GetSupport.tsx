import Container from "@/components/ui/Container";
import { ArrowRight, Bolt, FileText, HelpCircle } from "lucide-react";

const GetSupport = () => {
  return (
    <Container className="mt-10 lg:mt-[76px] mb-10 lg:mb-20">
      <div className="mb-10 lg:mb-20">
        <h1 className="text-[#061C3D] text-5xl font-extrabold text-center leading-[53px]">
          Get Support
        </h1>
        <p className="mt-3 text-center text-[#566B84]">
          Find answers to all of your questions here.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#FFF9EE] p-8 rounded-xl flex gap-4">
          <div className="bg-[#F0F5FF] p-3 size-12 rounded-full">
            <FileText />
          </div>
          <div>
            <h2 className="text-[#061C3D] mb-2 text-xl font-medium font-inter">
              Detailed Documentation
            </h2>
            <p className="text-[#42526B] text-base font-normal font-inter">
              Read the documentation and learn how to make the most of your
              theme.
            </p>
            <button className="border-b-2 border-gray-600 py-3 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold  flex items-center gap-2">
              <span>Online Documentation</span> <ArrowRight />
            </button>
          </div>
        </div>
        <div className="bg-[#FFF9EE] p-8 rounded-xl flex gap-4">
          <div className="bg-[#F0F5FF] p-3 size-12 rounded-full">
            <HelpCircle />
          </div>
          <div>
            <h2 className="text-[#061C3D] mb-2 text-xl font-medium font-inter">
              Support & Update
            </h2>
            <p className="text-[#42526B] text-base font-normal font-inter">
              We offer a dedicated & friendly support, regular.
            </p>
            <button className="border-b-2 border-gray-600 py-3 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold  flex items-center gap-2">
              <span>Support & Update</span> <ArrowRight />
            </button>
          </div>
        </div>
        <div className="bg-[#FFF9EE] p-8 rounded-xl flex gap-4">
          <div className="bg-[#F0F5FF] p-3 size-12 rounded-full">
            <Bolt />
          </div>
          <div>
            <h2 className="text-[#061C3D] mb-2 text-xl font-medium font-inter">
              Customization Services
            </h2>
            <p className="text-[#42526B] text-base font-normal font-inter">
              You Need Installation, Customization or Add Specific
              Functionality.
            </p>
            <button className="border-b-2 border-gray-600 py-3 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold  flex items-center gap-2">
              <span>Send Requirement</span> <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default GetSupport;
