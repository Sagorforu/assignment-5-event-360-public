import Container from "@/components/ui/Container";

const RecentEvents = () => {
  return (
    <Container className="mt-28 py-11 grid lg:grid-cols-2 items-center gap-16 lg:gap-24">
      <div>
        <h1 className="text-[#061C3D] text-5xl font-extrabold mb-6">
          Recent Events
        </h1>
        <p className="text-[#566B84] text-lg font-normal">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <button className="bg-[#3461FF] py-3 px-10 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold text-white">
          Learn more
        </button>
      </div>
      <div>
        <h1 className="text-[#061C3D] text-5xl font-extrabold mb-6">
          Recent Events
        </h1>
        <p className="text-[#566B84] text-lg font-normal">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
        <button className="bg-[#3461FF] py-3 px-10 mt-12 tracking-wider font-plus-jakarta-sans text-base font-bold text-white">
          Learn more
        </button>
      </div>
    </Container>
  );
};

export default RecentEvents;
