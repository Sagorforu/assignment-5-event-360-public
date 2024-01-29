import { ArrowRight, Euro, Globe } from "lucide-react";
import accessibility from "../../assets/accessibility.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container lg:px-[310px] px-2">
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 py-12">
        <div>
          {" "}
          <h1 className="text-3xl text-[#FFFFFF] font-extrabold">
            Event <span className="text-[#0B63E5]">360</span>
          </h1>
        </div>
        <div>
          <h1 className="text-base font-medium text-white mb-3">Product</h1>
          <ul className="flex flex-col">
            <a href="" className="text-white text-xs mb-3">
              Pricing
            </a>
            <a href="" className="text-white text-xs mb-3">
              Overview
            </a>
            <a href="" className="text-white text-xs mb-3">
              Browse
            </a>
            <a href="" className="text-white text-xs mb-3">
              Accessibility
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium text-white mb-3">Solutions</h1>
          <ul className="flex flex-col">
            <a href="" className="text-white text-xs mb-3">
              Brainstorming
            </a>
            <a href="" className="text-white text-xs mb-3">
              Ideation
            </a>
            <a href="" className="text-white text-xs mb-3">
              WireFraming
            </a>
            <a href="" className="text-white text-xs mb-3">
              Research
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium text-white mb-3">Resources</h1>
          <ul className="flex flex-col">
            <a href="" className="text-white text-xs mb-3">
              Help Center
            </a>
            <a href="" className="text-white text-xs mb-3">
              Blog
            </a>
            <a href="" className="text-white text-xs mb-3">
              Tutorials
            </a>
            <a href="" className="text-white text-xs mb-3">
              FAQs
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium text-white mb-3">Support</h1>
          <ul className="flex flex-col">
            <a href="" className="text-white text-xs mb-3">
              Contact Us
            </a>
            <a href="" className="text-white text-xs mb-3">
              Developers
            </a>
            <a href="" className="text-white text-xs mb-3">
              Documentation
            </a>
            <a href="" className="text-white text-xs mb-3">
              Integrations
            </a>
          </ul>
        </div>
        <div>
          <h1 className="text-base font-medium text-white mb-3">Company</h1>
          <ul className="flex flex-col">
            <a href="" className="text-white text-xs mb-3">
              About
            </a>
            <a href="" className="text-white text-xs mb-3">
              Press
            </a>
            <a href="" className="text-white text-xs mb-3">
              Events
            </a>
            <a
              href=""
              className="text-white text-xs mb-3 flex  items-center gap-2"
            >
              Request Demo <ArrowRight className="h-5" />
            </a>
          </ul>
        </div>
      </div>
      <div className="border border-[#0b62e517]"></div>
      <div className="grid lg:grid-cols-6 py-6">
        <div className="col-span-4 text-white text-xs">
          {" "}
          @ {currentYear}. All rights reserved.
        </div>
        <div>
          <div className="lg:space-x-8 lg:flex items-center">
            <div>
              <a className="text-white text-xs" href="">
                Term
              </a>
            </div>
            <div>
              <a className="text-white text-xs" href="">
                Privacy
              </a>
            </div>
            <div>
              <a className="text-white text-xs" href="">
                Contact
              </a>
            </div>
            <a className="text-white text-xs" href="">
              <div className="flex items-center gap-2 my-2 lg:my-0">
                <Globe className="h-5" /> <span>EN</span>
              </div>
            </a>
            <a className="text-white text-xs" href="">
              <div className="flex items-center gap-2">
                <Euro className="h-5" /> <span>EUR</span>
              </div>
            </a>
            <img src={accessibility} alt="" className="h-5 mt-2 lg:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
