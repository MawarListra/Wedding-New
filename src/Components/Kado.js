import { React, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Kado() {
  let value = "8020339765";
  // const [value, setValue] = useState('');
  // setValue('0382146210')
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    alert("Nomor rekening berhasil di salin");
  };
  // copied = false;
  return (
    <div
      className="flex flex-col w-full h-full justify-center items-center md:px-24 px-5"
      id="kado"
    >
      <div className="flex flex-col w-auto h-auto py-8 md:px-60 justify-center items-center text-center">
        <text className="py-4 font-script md:text-4xl text-2xl font-bold text-center">
          Kado Pernikahan
        </text>
        <text className="font-sansLight md:text-lg text-xs">
          Kami Memahami Bahwa Beberapa dari Anda Mungkin Ingin Memberikan Ucapan
          dan Kado Untuk Kami. Maka dari itu, Anda dapat Mengirimkannya Melalui
          Tombol di Bawah Ini:{" "}
        </text>
      </div>
      <div className="flex flex-col bg-chocolate md:w-96 w-72 h-48 justify-center items-center py-2 space-y-2 rounded-2xl">
        <text className="font-sans md:text-lg text-sm text-white">
          Kelvin Eka Pramudita
        </text>
        <text className="font-sans md:text-lg text-sm text-white">
          AC : 8020339765
        </text>
        <text className="font-sans md:text-lg text-sm text-white">
          Bank Central Asia (BCA)
        </text>
        <CopyToClipboard text={value} onCopy={() => setCopied(!copied)}>
          <button
            className="md:w-48 md:h-10 w-36 h-8 bg-white rounded-3xl md:text-sm text-xs text-yellow-700 animation-pulse"
            onClick={handleClick}
          >
            Salin Nomor Rekening
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default Kado;
