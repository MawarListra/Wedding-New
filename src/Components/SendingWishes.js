import { React, useState, useEffect, Fragment } from "react";
import Card1 from "../Images/S6.png";
import Card2 from "../Images/S4.png";
import Card3 from "../Images/S7.png";
import Card4 from "../Images/S3.png";
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'

function SendingWishes() {
  const [name, setNama] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [tempelate, setTempelate] = useState("1");
  const [isOpen, setIsOpen] = useState(false)
  const closeModal= () =>{
    setIsOpen(false)
  }
  const openModal = () =>{
    setIsOpen(true)
  }
  useEffect(() => {
    console.log("first 1");
    // console.log(cardSelected);
  }, []);
  const handleCardChange = (e) => {
    const selected = e.target;
    setTempelate(selected.value);
    // console.log(cardSelected);
  };
  const handleInputNameChange = (e) => {
    // const temp =
    setNama(e.target.value);
    // console.log(name);
  };
  const handleInputMessageChange = (e) => {
    // const temp = e.target.value
    setMessage(e.target.value);
    setCount(e.target.value.length);
    // console.log(message);
  };
  async function PostWishes() {
    const url = "https://weddingsk.xyz/v1/Undangan/create";
    const data = {
      name: name,
      message: message,
      tempelate: tempelate,
    };
    try {
      const response = await axios.post(url, data);
      console.log("👉 Returned data:", response);
      console.log(data);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
    console.log(data);
    setNama("");
    setMessage("");
    openModal()
    // tempelate = '1'
  }
  // const stylesR = {
  //     radioGray: {
  //         background: '0.5px solid #DCD6D8',
  //     },
  //     radioPink: {
  //       border: "10px solid #EF959D",
  //     },
  //     radioRed: {
  //       border: "10px solid #90DDD0",
  //     }
  //   };
  return (
    <div
      className="flex md:w-full md:h-full justify-center items-center"
      id="kirim-ucapan"
    >
      <div className="flex flex-col w-9/12 h-full justify-center items-center">
        <text className="py-8 font-script md:text-4xl text-xl font-bold">
          Kirim Ucapan Untuk Kami
        </text>
        <div className="flex flex-col w-auto h-auto space-y-2 py-2 items-center">
          <text className="font-sans md:text-xl text-sm  italic">Nama</text>
          <input
            className="md:w-xl h-14 px-4 border-gray-200 border-2 font-sansLight text-xl items-justify rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            value={name}
            onChange={handleInputNameChange}
          ></input>
        </div>
        <div className="flex flex-col w-auto h-auto space-y-2 py-2 items-center">
          <text className="font-sans md:text-xl text-sm  italic">Pesan</text>
          <textarea
            className="md:w-xl h-48 px-4 border-gray-200 border-2 font-sansLight text-xl  pt-2 items-justify rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            value={message}
            onChange={handleInputMessageChange}
            maxLength="250"
          ></textarea>
          <p className="font-sans text-xs italic">{count}/250</p>
        </div>
        <div className="flex flex-col w-full h-auto px-8 items-center py-2 space-y-4">
          <text className="font-sans md:text-xl text-sm italic ">
            Pilih kartu ucapan
          </text>
          <div className="flex md:flex-row flex-col md:space-x-8 space-x-0 md:space-y-0 space-y-4">
            <div className="flex flex-row justify-center space-x-2">
              <input
                type="radio"
                value="1"
                onChange={handleCardChange}
                checked={tempelate === "1"}
              />
              <img
                className="shadow-2xl rounded-md"
                src={Card1}
                alt="card 1"
              ></img>
            </div>
            <div className="flex flex-row justify-center space-x-2">
              <input
                className="border-opacity-0 ring-gray-700 checked:bg-gray-700 checked:border-transparent"
                type="radio"
                value="2"
                onChange={handleCardChange}
                checked={tempelate === "2"}
              />
              <img
                className="shadow-2xl rounded-md"
                src={Card2}
                alt="card 2"
              ></img>
            </div>
            <div className="flex flex-row justify-center space-x-2">
              <input
                type="radio"
                value="3"
                onChange={handleCardChange}
                checked={tempelate === "3"}
              />
              <img
                className="shadow-2xl rounded-md"
                src={Card3}
                alt="card 3"
              ></img>
            </div>
            <div className="flex flex-row justify-center space-x-2">
              <input
                type="radio"
                value="4"
                onChange={handleCardChange}
                checked={tempelate === "4"}
              />
              <img
                className="shadow-2xl rounded-md"
                src={Card4}
                alt="card 4"
              ></img>
            </div>
          </div>
        </div>
        <div className="sm:flex md:w-full md:h-auto py-10">
          <button
            className="md:w-screen w-64 md:h-12 h-14 bg-chocolate text-white justify-center items-center rounded-md font-sansLight md:text-xl md:text-xl text-sm"
            onClick={PostWishes}
          >
            Kirim
          </button>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden lg:inline-block lg:h-screen lg:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block md:w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl shadow-2xl">
                <Dialog.Title
                  as="h3"
                  className="md:text-lg text-sm font-medium leading-6 text-gray-900"
                >
                  Pesanmu sudah terkirim!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="md:text-sm text-xs text-gray-500">
                    Terima kasih sudah mengirimkan kartu ucapan
                  </p>
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default SendingWishes;
