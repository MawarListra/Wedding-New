import React from "react";
// import Flower from '../Images/Flower Long.png'
import Mask from "../Images/MASK 1.png";
import Distancing from "../Images/DISTANCING 1.png";
import Thermo from "../Images/THERMO 1.png";
import WashHand from "../Images/WASHHAND 1.png";
import Vaccinated from "../Images/VACCINATED 1.png";
import NoGroup from "../Images/NOGROUP 1.png";

function Protokol() {
  return (
    <div
      className="flex flex-col w-full h-full md:w-full md:h-full justify-center items-center mt-4 bg-protokol-image bg-center bg-cover"
      id="protokol"
    >
      <div className="flex flex-col md:w-full w-full h-full justify-center items-center bg-transparent md:px-24 px-5">
        <text className=" flex md:py-8 py-4 font-script md:text-4xl text-xl font-bold text-white">
          Protokol Kesehatan
        </text>
        <div className="md:flex flex-col md:w-full md:h-full py-2 justify-center items-center">
          <div className="md:flex md:flex-row md:space-x-5 md:py-4 py-0 md:space-y-0 space-y-6">
            <div className="flex flex-col md:w-cardP md:h-44 h-32 md:rounded-xl rounded-lg justify-center items-center text-center space-y-2 bg-white">
              <div className="flex md:w-auto md:h-auto w-14 h-8">
                <img src={Mask} alt="card 1" /*width={72} height={45}*/></img>
              </div>
              {/* <img className='md:hidden' src={Mask} alt='card 1' width={56} height={35}></img> */}
              <text className="font-sans md:text-sm text-xs text-yellow-700 items-center px-2">
                Gunakan Selalu Masker Ganda
              </text>
            </div>
            <div className="flex flex-col md:w-cardP md:h-44 h-32 md:rounded-xl rounded-lg justify-center items-center text-center space-y-2 bg-white">
              <div className="flex md:w-auto md:h-auto w-7 h-8">
                <img
                  src={Distancing}
                  alt="card 2" /* width={38} height={45}*/
                ></img>
              </div>
              <text className="font-sans md:text-sm text-xs text-yellow-700 items-center px-2">
                Menjaga Jarak Saat di Lokasi
              </text>
            </div>
            <div className="flex flex-col md:w-cardP md:h-44 h-32 md:rounded-xl rounded-lg justify-center items-center text-center space-y-2 bg-white">
              <div className="flex md:w-auto md:h-auto w-8 h-8">
                <img
                  src={Thermo}
                  alt="card 3" /* width={38} height={45}*/
                ></img>
              </div>
              <text className="font-sans md:text-sm text-xs text-yellow-700 items-center px-2">
                Mengecek Suhu Sebelum Masuk ke Lokasi Acara
              </text>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:space-x-5 py-4 md:space-y-0 space-y-6">
            <div className="flex flex-col md:w-cardP md:h-44 h-32 md:rounded-xl rounded-lg justify-center items-center text-center space-y-2 bg-white">
              <div className="flex md:w-auto md:h-auto w-10 h-8">
                <img
                  src={WashHand}
                  alt="card 4" /* width={38} height={45}*/
                ></img>
              </div>
              <text className="font-sans md:text-sm text-xs text-yellow-700 items-center px-2">
                Mencuci Tangan Dengan Sabun dan Menggunakan Hand Sanitizer
              </text>
            </div>
            <div className="flex flex-col md:w-cardP md:h-44 h-32 md:rounded-xl rounded-lg justify-center items-center text-center space-y-2 bg-white">
              <div className="flex md:w-auto md:h-auto w-8 h-8">
                <img
                  src={Vaccinated}
                  alt="card 5" /* width={38} height={45}*/
                ></img>
              </div>
              <text className="font-sans md:text-sm text-xs text-yellow-700 items-center px-2">
                Tidak Kontak Erat Dengan Pengidap Covid-19 2 Bulan Terakhir
              </text>
            </div>
            <div className="flex flex-col md:w-cardP md:h-44 h-32 md:rounded-xl rounded-lg justify-center items-center text-center space-y-2 bg-white">
              <div className="flex md:w-auto md:h-auto w-7 h-8">
                <img
                  src={NoGroup}
                  alt="card 6" /* width={38} height={45}*/
                ></img>
              </div>
              <text className="font-sans md:text-sm text-xs text-yellow-700 items-center px-2">
                Menghindari Kerumunan di Lokasi
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Protokol;
