import { FaCheckCircle } from "react-icons/fa";
import { IoMail, IoQrCodeSharp } from "react-icons/io5";
import { PiCursorClickFill } from "react-icons/pi";
import { motion } from "framer-motion";
import useScrollGrow from "../../hooks/ScrollGrowHook";

const Features = () => {
  const { style, componentRef } = useScrollGrow();

  return (
    <motion.div>
      <div className="text-center my-20">
        <h1 className="md:text-5xl text-2xl font-bold">Automated QR Scanner</h1>
        <p className="md:text-2xl md:w-[50ch] mx-auto my-5 text-[#7342f9]">
          Scan & Verify The Attendees Directly By Our QR Scanning Solution.
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
          <motion.div
            style={style}
            ref={componentRef}
            className="bg-indigo-50 flex flex-col items-start rounded-3xl border p-6"
          >
            <PiCursorClickFill className="text-[#7342f9] w-16 h-16 bg-white p-5 rounded-full" />
            <h1 className="text-2xl md:text-4xl font-bold">One Click</h1>
            <p className="text-lg">QR Verification System</p>
          </motion.div>
          <motion.div
            style={style}
            ref={componentRef}
            className="bg-indigo-50 flex flex-col items-start rounded-3xl border p-6"
          >
            <IoQrCodeSharp className="text-[#7342f9] w-16 h-16 bg-white p-5 rounded-full" />
            <h1 className="text-2xl md:text-4xl font-bold">One Time</h1>
            <p className="text-lg">QR Code</p>
          </motion.div>
          <motion.div
            style={style}
            ref={componentRef}
            className="bg-indigo-50 flex flex-col items-start rounded-3xl border p-6"
          >
            <FaCheckCircle className="text-[#7342f9] w-16 h-16 bg-white p-5 rounded-full" />
            <h1 className="text-2xl md:text-4xl font-bold">Easy Access</h1>
            <p className="text-lg">Easily Accessable</p>
          </motion.div>
          <motion.div
            style={style}
            ref={componentRef}
            className="bg-indigo-50 flex flex-col items-start rounded-3xl border p-6"
          >
            <IoMail className="text-[#7342f9] w-16 h-16 bg-white p-5 rounded-full" />
            <h1 className="text-2xl md:text-4xl font-bold">Mail</h1>
            <p className="text-lg text-start">
              Send bulk personalized mail with attachments
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
