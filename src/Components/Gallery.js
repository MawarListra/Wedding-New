import React from "react";
import Gambar1 from "../Images/Rectangle 20.png";
import Gambar2 from "../Images/Rectangle 21.png";
import Gambar2Res from "../Images/Rectangle 21(1).png";
import Gambar3 from "../Images/Rectangle 22.png";
import Gambar4 from "../Images/Rectangle 25.png";
// import Gambar4Res from "../Images/Rectangle 22(1).png";
import Gambar5 from "../Images/Rectangle 23.png";
import Gambar6 from "../Images/unnamed.jpg";
import ModalImage from "react-modal-image";

function Gallery() {
  return (
    <div
      className="flex md:w-full md:h-full justify-center items-center md:py-4 pb-14 overflow-auto"
      id="gallery"
    >
      <div className="flex flex-col w-full h-full justify-center items-center md:px-24 px-8">
        <text className="font-script md:text-4xl text-xl font-bold">
          Galeri Foto Kami
        </text>
        <div className="flex md:flex-row flex-col md:w-full w-11/12 h-full justify-center items-center pt-4 md:space-y-0 space-y-2">
          <div className="flex flex-col w-auto h-auto space-y-2">
            <div>
              <ModalImage
                small={Gambar1}
                large={Gambar1}
                hideDownload={true}
                hideZoom={true}
                // alt="1"
              />
            </div>
            <div className="md:flex hidden">
              <ModalImage
                small={Gambar4}
                large={Gambar4}
                hideDownload={true}
                hideZoom={true}
                // alt="4"
              />
            </div>
          </div>
          <div className="md:hidden flex flex-row space-x-2 w-auto h-full items-center">
            <div>
              <ModalImage
                small={Gambar2Res}
                large={Gambar4}
                hideDownload={true}
                hideZoom={true}
                className="w-160"
                // alt="2"
              />
            </div>
            <div>
              <ModalImage
                small={Gambar2}
                large={Gambar2}
                hideDownload={true}
                hideZoom={true}
                className="w-56"
                // alt="4"
              />
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto space-y-2 mx-2">
            <div className="md:flex hidden">
              <ModalImage
                small={Gambar2}
                large={Gambar2}
                hideDownload={true}
                hideZoom={true}
                // alt="2"
              />
            </div>
            <div className="md:flex hidden">
              <ModalImage
                small={Gambar5}
                large={Gambar5}
                hideDownload={true}
                hideZoom={true}
                // alt="5"
              />
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto space-y-2">
            <div>
              <ModalImage
                small={Gambar3}
                large={Gambar3}
                hideDownload={true}
                hideZoom={true}
                // alt="3"
              />
            </div>
            <div className="md:flex ">
              <ModalImage
                small={Gambar6}
                large={Gambar6}
                hideDownload={true}
                hideZoom={true}
                className='md:h-281 md:w-4/5'
                // alt="6"
              />
            </div>
          </div>
          <div className="md:hidden flex flex-row h-full justify-center items-center">
            <div>
              <ModalImage
                small={Gambar5}
                large={Gambar5}
                hideDownload={true}
                hideZoom={true}
                className="w-340"
                // alt="5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
