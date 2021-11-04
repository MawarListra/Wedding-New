import React from "react";
import Gambar from "../Images/Rectangle 27.png";

function GroomBride() {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex flex-col md:w-full w-full h-full justify-center text-center md:px-24">
        <div className="flex flex-col text-white space-y-2 md:px-0 px-5">
          <text className="font-script md:text-4xl text-xl font-light font-bold text-yellow-700">
            Mempelai Pria dan Wanita
          </text>
          <text className="font-sansLight md:text-xl text-xs text-black">
            Atas Ijin dan Kasih Karunia-Nya, Kami Dengan Berbahagia Mengumumkan
            Pernikahan Kami{" "}
          </text>
        </div>
        <div className="flex flex-col md:w-full w-full h-full py-8 justify-center items-center">
          <div className="md:h-full h-40 rounded-xl">
            <img src={Gambar} alt="groom bride"></img>
          </div>
          <div className="flex md:flex-row flex-col md:py-8 pb-8 md:space-x-12 justify-center items-center">
            <div className="flex flex-col h-44 justify-center items-center space-y-2">
              <text className="font-sans md:text-2xl text-base font-bold text-yellow-700">
                Sara Permata Septiandani
              </text>
              <div className="w-24 h-0 bg-chocolate border"></div>
              <text className="font-sansLight md:text-xl text-sm text-black">
                Anak Pertama dari :
              </text>
              <text className="font-sansLight md:text-base text-xs text-black">
                Hidayat
              </text>
              <text className="font-sansLight text-base text-black">&</text>
              <text className="font-sansLight md:text-base text-xs text-black">
                Heni Purnawati Hendri H
              </text>
            </div>
            <div className="flex md:w-44 md:h-44 w-12 h-12 justify-center items-center">
              <text className="font-script md:text-7xl text-4xl text-yellow-700">
                &
              </text>
            </div>
            <div className="flex flex-col h-44 justify-center items-center space-y-2">
              <text className="font-sans md:text-2xl text-base font-bold text-yellow-700">
                Kelvin Eka Pramudita
              </text>
              <div className="w-24 h-0 bg-chocolate border"></div>
              <text className="font-sansLight md:text-xl text-sm text-black">
                Anak Pertama dari :
              </text>
              <text className="font-sansLight md:text-base text-xs text-black">
                Sudarna
              </text>
              <text className="font-sansLight text-base text-black">&</text>
              <text className="font-sansLight md:text-base text-xs text-black">
                Sienny Oktavien
              </text>
            </div>
          </div>
          <div className="flex md:w-groom md:h-groom w-full h-24 justify-center items-center md:py-24 py-8 bg-quotes-image bg-cover bg-center">
            <p className="font-sansLight md:text-xl text-xs text-white text-center p-4 italic">
              “Pernikahan yang Sempurna Bukan Berarti Pasangan Sempurna Menjadi
              Satu. Melainkan Ketika Pasangan yang Tidak Sempurna Belajar
              Memahami, Menikmati , dan Saling Melengkapi Kekurangan Satu Sama
              Lain.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroomBride;
