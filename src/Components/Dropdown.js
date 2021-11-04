import React from "react";
import { Link } from "react-scroll";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "flex flex-col text-center items-center bg-gray-300 -m-1 mb-10 space-y-2"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link
        to="waktu"
        smooth={true}
        duration={1000}
        className="text-xs font-sansLight text-black cursor-pointer pt-2"
      >
        Waktu dan Lokasi
      </Link>
      {/* <Link
        to="pemberkatan"
        smooth={true}
        duration={1000}
        className="text-xs font-sansLight text-black cursor-pointer"
      >
        Lokasi
      </Link> */}
      <Link
        to="kado"
        smooth={true}
        duration={1000}
        className="text-xs font-sansLight text-black cursor-pointer"
      >
        Kirim Kado
      </Link>
      <Link
        to="kirim-ucapan"
        smooth={true}
        duration={1000}
        className="text-xs font-sansLight text-black cursor-pointer"
      >
        Kirim Ucapan
      </Link>
      <Link
        to="gallery"
        smooth={true}
        duration={1000}
        className="text-xs font-sansLight text-black cursor-pointer pb-2"
      >
        Galeri Foto
      </Link>
    </div>
  );
};

export default Dropdown;
