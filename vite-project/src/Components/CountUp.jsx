import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function CounterUp() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="w-[100%] bg-black text-white p-[50px] mt-[50px] mb-[50px]">
          <h1 className="text-center font-bold text-[20px]">
            {counterOn && (
              <div className="flex flex-col justify-center items-center gap-2">
                <div>
                  <CountUp start={0} end={100} duration={2} delay={0} />
                  <span>+</span>
                </div>
                <span>Space Voyagers Have Booked</span>
              </div>
            )}
          </h1>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default CounterUp;
