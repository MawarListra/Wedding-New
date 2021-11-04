import { React, useState, useEffect } from "react";

function Countdown() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    const startTimer = () => {
      const countDownDate = new Date("November 21, 2021").getTime();
      console.log(countDownDate);
      let interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        if (distance < 0) {
          //stop timer
          clearInterval(interval.current);
        } else {
          //update timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
    startTimer();
  }, []);
  return (
    <div
      className="md:flex md:w-full md:h-full justify-center items-center md:py-24"
      id="waktu"
    >
      <div className="flex flex-col w-full h-60 py-8 px-8 justify-center items-center space-y-2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <text className="font-script md:text-4xl text-lg font-bold text-center">
            Pernikahan Kami akan Dilaksanakan Pada
          </text>
          <div className="flex flex-row h-auto w-auto items-center md:space-x-8 space-x-2">
            <div className="md:w-48 w-14 h-0 border border-gray-300"></div>
            <text className="font-sans md:text-xl text-sm text-center">
              21 November 2021
            </text>
            <div className="md:w-48 w-14 h-0 border border-gray-300"></div>
          </div>
        </div>
        <div className="flex flex-row w-auto h-auto space-x-4 md:space-x-8 justify-center items-center py-8">
          <div className="flex flex-col w-auto h-auto justify-center item-center md:space-y-4 space-y-2">
            <div className="flex flex-col md:w-36 md:h-36 w-16 h-14 bg-chocolate text-white justify-center items-center rounded-full">
              <text className="justify-center item-center font-sans md:text-3xl text-xl font-bold">
                {timerDays}
              </text>
            </div>
            <div className="flex justify-center items-center">
              <text className="font-sansLight md:text-xl text-sm">Hari</text>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto justify-center item-center md:space-y-4 space-y-2">
            <div className="flex flex-col md:w-36 md:h-36 w-16 h-14 bg-chocolate text-white justify-center items-center rounded-full">
              <text className="justify-center item-center font-sans md:text-3xl text-xl font-bold">
                {timerHours}
              </text>
            </div>
            <div className="flex justify-center items-center">
              <text className="font-sansLight md:text-xl text-sm">Jam</text>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto justify-center item-center md:space-y-4 space-y-2">
            <div className="flex flex-col md:w-36 md:h-36 w-16 h-14 bg-chocolate text-white justify-center items-center rounded-full">
              <text className="justify-center item-center font-sans md:text-3xl text-xl font-bold">
                {timerMinutes}
              </text>
            </div>
            <div className="flex justify-center items-center">
              <text className="font-sansLight md:text-xl text-sm">Menit</text>
            </div>
          </div>
          <div className="flex flex-col w-auto h-auto justify-center item-center md:space-y-4 space-y-2">
            <div className="flex flex-col md:w-36 md:h-36 w-16 h-14 bg-chocolate text-white justify-center items-center rounded-full">
              <text className="justify-center item-center font-sans md:text-3xl text-xl font-bold">
                {timerSeconds}
              </text>
            </div>
            <div className="flex justify-center items-center">
              <text className="font-sansLight md:text-xl text-sm">Detik</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
