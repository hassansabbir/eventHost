import { BsTicketPerforatedFill } from "react-icons/bs";
import { FaLocationDot, FaRegHeart } from "react-icons/fa6";
import { motion } from "framer-motion";
import useScrollGrow from "../hooks/ScrollGrowHook";

interface EventCardProps {
  props: string;
}

const EventCard: React.FC<EventCardProps> = ({ props }) => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div
      style={style}
      ref={componentRef}
      className="border rounded-2xl bg-indigo-50 p-5 shadow-lg hover:shadow-2xl"
    >
      <div className="relative">
        <img className="w-full" src={props} alt="" />
        <button className="absolute top-3 left-3 border-none btn btn-sm btnGradient text-white">
          Online
        </button>
        <button className="absolute top-3 right-3 border-none btn btn-sm btnGradient text-white">
          <FaRegHeart /> Favorite
        </button>
      </div>
      <div className="divider"></div>
      <div className="flex">
        <div>
          <button className="btn btn-sm btnGradient text-white">Music</button>
          <p className="flex items-center my-2 gap-1">
            {" "}
            <FaLocationDot className="text-[#7342f9]" /> Celebrity Convention
            Hall
          </p>
          <h2 className="md:text-[22px] my-2 font-bold">
            Roufian’s HSC-24 Rag Day
          </h2>
        </div>
        <p className="bg-white p-2 w-28 rounded-xl h-28 flex flex-col items-center justify-center">
          Apr <br />
          <span className="text-[32px] font-semibold text-[#7342f9]">20</span>
          10:00 PM
        </p>
      </div>
      <div className="md:flex gap-2">
        <div className="flex gap-2">
          <button className="btn btnGradient text-white">
            <p className="flex gap-2 items-center">
              <BsTicketPerforatedFill /> See Tickets
            </p>
          </button>
          <button className="btn bg-white border-none">
            <span className="text-3xl text-[#7342f9]">20</span>Seat <br /> Left
          </button>
        </div>
        <p className="text-md text-[#7342f9]">See More</p>
      </div>
    </motion.div>
  );
};

export default EventCard;
