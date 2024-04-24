import { NavLink } from "react-router-dom";
import card1Img from "../../assets/Rectangle 16.png";
import card2Img from "../../assets/Rectangle 16-1.png";
import card3Img from "../../assets/Rectangle 16-2.png";
import EventCard from "../../components/EventCard";
import eventBannerImg from "../../assets/Group 29.png";
import clock from "../../assets/clock.png";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import useScrollGrow from "../../hooks/ScrollGrowHook";

const Event = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <div className="my-20">
      <h1 className="md:text-5xl text-2xl font-bold text-center">Events</h1>
      <div>
        <div className="flex flex-col md:flex-row gap-7 my-5 items-center justify-center">
          <NavLink to="">All</NavLink>
          <NavLink to="">For You</NavLink>
          <NavLink to="">This Day</NavLink>
          <NavLink to="">This Week</NavLink>
          <NavLink className=" btn btn-sm btnGradient text-white" to="">
            Music
          </NavLink>
          <NavLink to="">Union</NavLink>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          <EventCard props={card1Img} />
          <EventCard props={card2Img} />
          <EventCard props={card3Img} />
        </div>
      </div>
      <motion.div
        style={style}
        ref={componentRef}
        className="md:flex md:relative navGradient p-5 md:p-16 my-32 rounded-3xl"
      >
        <img src={eventBannerImg} alt="" />
        <div className="text-white md:p-10">
          <h1 className="md:text-3xl text-xl mt-5 font-bold">
            Host Your Eventd Easily & Automatedly With Us
          </h1>
          <p className="md:text-2xl md:w-[40ch] my-5">
            We Provide The Best Event Ticketing & Management Solutions
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="">
                <FaCheckCircle className="w-5 h-5" />
              </span>
              Host Your Event With Easy Steps!
            </p>
            <p className="flex items-center gap-2">
              <span className="">
                <FaCheckCircle className="w-5 h-5" />
              </span>
              Automated Payment System & Ticket Will Be Sent To Mail.
            </p>
            <p className="flex items-center gap-2">
              <span className="">
                <FaCheckCircle className="w-5 h-5" />
              </span>
              Access To Registration And Transaction Reports
            </p>
            <p className="flex items-center gap-2">
              <span className="">
                <FaCheckCircle className="w-5 h-5" />
              </span>
              Send Bulk Personalized Mail With Attachments
            </p>
          </div>
        </div>
        <img
          className="md:absolute hidden md:block bottom-0 right-0"
          src={clock}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Event;
