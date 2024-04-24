import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsTicketPerforatedFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
        <div className="bannerBG md:w-[1160px] md:h-[441px] text-white mx-auto mt-10">
          <div className="bg-gradient-to-t from-indigo-950 bg-opacity-30 p-5 md:p-28 h-full rounded-3xl">
            <h1 className="md:text-[40px] text-2xl font-bold mb-2">CMA Fest</h1>
            <p className="text-xl md:w-[48ch] mb-8">
              Make memories that will last a lifetime. See your favorite artists
              live at CMA Fest!
            </p>
            <div className="md:flex gap-3">
              <button className="btn border-none text-white btnGradient">
                <BsTicketPerforatedFill /> Get Ticket
              </button>
              <button className="btn hover:bg-[#7342f9] btn-outline text-white">
                Explore All Events
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bannerBG md:w-[1160px] md:h-[441px] text-white mx-auto mt-10">
          <div className="bg-gradient-to-t from-indigo-950 bg-opacity-30 p-5 md:p-28 h-full rounded-3xl">
            <h1 className="md:text-[40px] text-2xl font-bold mb-2">CMA Fest</h1>
            <p className="text-xl md:w-[48ch] mb-8">
              Make memories that will last a lifetime. See your favorite artists
              live at CMA Fest!
            </p>
            <div className="md:flex gap-3">
              <button className="btn border-none text-white btnGradient">
                <BsTicketPerforatedFill /> Get Ticket
              </button>
              <button className="btn hover:bg-[#7342f9] btn-outline text-white">
                Explore All Events
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
