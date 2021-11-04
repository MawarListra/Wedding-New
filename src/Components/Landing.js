import { React } from "react";
import CountUp from "react-countup";

function Landing() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center md:px-24">
      <div className="flex flex-col md:w-full w-full md:h-hero h-60 bg-landing-image bg-center text-white bg-cover py-2 overflow-hidden">
        <div className="flex flex-row md:w-full w-full h-auto md:space-x-8 space-x-4 justify-center items-center md:pt-12">
          <div className="md:w-48 w-20 h-0 border-2 bg-white"></div>
          <h1 className="font-sans md:text-2xl text-xs text-center font-bold">
            Perjalanan Cinta
          </h1>
          <div className="md:w-48 w-20 h-0 border-2 bg-white"></div>
        </div>
        <div className="flex flex-row w-auto h-auto md:py-8 py-0 md:space-x-24 space-x-14 justify-center items-center font-script text-white">
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-6xl text-xl font-bold">
              <CountUp end={3440} duration={5}></CountUp>
            </h1>
            <p className="md:text-2xl text-xs font-sansLight">Hari</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-6xl text-xl font-bold">
              <CountUp end={113} duration={5}></CountUp>
            </h1>
            <p className="md:text-2xl text-xs font-sansLight">Bulan</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="md:text-6xl text-xl font-bold">
              <CountUp end={9} duration={5}></CountUp>
            </h1>
            <p className="md:text-2xl text-xs font-sansLight">Tahun</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
