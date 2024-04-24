import { LuShieldCheck } from "react-icons/lu";
import rocketLogo from "../../assets/roketLogo.png";
import bkashLogo from "../../assets/bkashLogo.png";
import nagadLogo from "../../assets/nagadLogo.png";

const Banking = () => {
  return (
    <div className=" bg-gradient-to-t from-indigo-200 rounded-3xl mt-32">
      <h1 className="md:text-4xl font-bold text-center">Simply Ticketing</h1>
      <p className="text-center md:text-2xl text-[#7342f9] my-5">
        First Ever Unique QR Ticketing Platform <br /> For Event Registration &
        Booking
      </p>
      <div className="text-center">
        <button className="btn btnGradient text-white">
          <LuShieldCheck className="w-6 h-6" /> Secure Payment With
        </button>
      </div>
      <div className="flex justify-center gap-1 items-end my-20">
        <div className="w-3/12 flex flex-col items-end gap-10 md:gap-32 rounded-tl-3xl bg-[#8C3494] h-[140px] md:h-[360px]">
          <p className="bg-white me-10 mt-5 text-white w-5 md:w-24 rounded-full text-sm">
            .
          </p>
          <img className="lg:w-44 w-10" src={rocketLogo} alt="" />
        </div>
        <div className="w-4/12 flex flex-col items-center gap-10 md:gap-32 rounded-t-3xl bg-[#ED0A80] h-[200px] md:h-[480px]">
          <p className="bg-white mt-5 text-white w-5 md:w-24 rounded-full text-sm">
            .
          </p>
          <img className=" lg:w-44 w-16" src={bkashLogo} alt="" />
        </div>
        <div className="w-3/12 flex flex-col items-start gap-6 md:gap-32 rounded-tr-3xl nagadGradient h-[140px] md:h-[360px]">
          <p className="bg-white ml-10 mt-5 text-white w-5 md:w-24 rounded-full text-sm">
            .
          </p>
          <img className="md:ml-10 lg:w-24 w-10" src={nagadLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banking;
