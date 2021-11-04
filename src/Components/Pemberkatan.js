import React from "react";
import Curch from "../Images/Pemberkatan.png";
// import Curch2 from '../Images/Picture.png'
import Heart from "../Images/Heart.png";

function Pemberkatan() {
  const handleOnClick = () => {
    window.open(
      "https://www.google.com/maps/dir//Adhiwangsa+Hotel+%26+Convention,+Jl.+Adi+Sucipto+No.146,+Jajar,+Kec.+Laweyan,+Kota+Surakarta,+Jawa+Tengah+57144/@-7.5484203,110.7877213,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e7a1427ac04f2bb:0xef1d746e25602ad5!2m2!1d110.7878389!2d-7.5484696!3e0"
    );
  };
  // const showInMapClicked = () => {
  //     window.open("https://maps.google.com?q="+ 7,5484+","+  110,7877);
  // };
  return (
    // <div className='flex w-full h-full justify-center items-center py-4'>
    <div className="flex md:flex-row flex-col w-full h-full justify-center items-center text-center py-4 space-x-4 md:px-28">
      <div className="flex md:w-full w-full h-full">
        <img src={Curch} alt="Place" />
      </div>
      {/* <div className='md:hidden flex w-full h-full justify-center items-center '>
                    <img src={Curch2} alt='Place' />
                </div> */}
      <div className="flex flex-col md:w-full w-screen h-full justify-center items-center py-8 md:space-y-4 space-y-8 ">
        <div className="flex md:flex-row flex-col w-auto h-auto justify-center items-center md:space-x-8 md:space-y-0 space-y-8">
          <div className="flex flex-col justify-center items-center space-y-2">
            <text className="font-sans md:text-2xl text-xl font-bold text-black">
              Pemberkatan
            </text>
            <img src={Heart} alt="heart" />
            <text className="font-sans md:text-xl text-base text-black">
              Minggu, 21 November 2021
            </text>
            <text className="font-sansLight md:text-base text-xs text-black ">
              16.00 WIB
            </text>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2">
            <text className="font-sans md:text-2xl text-xl font-bold text-black">
              Resepsi
            </text>
            <img src={Heart} alt="heart" />
            <text className="font-sans md:text-xl text-base text-black">
              Minggu, 21 November 2021
            </text>
            <text className="font-sansLight md:text-base text-xs text-black ">
              18.00 WIB
            </text>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <text className="font-sans md:text-2xl text-xl font-bold text-black">
            Lokasi
          </text>
          <text className="font-sans md:text-xl text-base text-black justify-center items-center">
            Poolside Adhiwangsa Hotel & Convention Hall
          </text>
          <p
            className="text-sm text-yellow-700 font-sans underline italic cursor-pointer "
            onClick={handleOnClick}
          >
            Lihat di Google Maps
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Pemberkatan;
