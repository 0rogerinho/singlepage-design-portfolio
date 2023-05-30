import React from 'react';
import { ButtonLightRed } from '../button/Button';

const CallMe = () => {
  return (
    <main className="max-w-full p-2 flex justify-center mt-[6.25rem]">
      <div className="w-full max-w-[69.375rem] bg-black px-6 py-12 lg:px-[65px] lg:py-20 flex flex-wrap lg:flex-nowrap gap-6 justify-center lg:justify-between items-center rounded-xl">
        <div className="text-lightCream flex flex-wrap gap-6 justify-center lg:justify-normal lg:w-[540px]">
          <h1 className="text-[1.625rem] font-bold">Book a call with me</h1>
          <p className="text-center lg:text-start">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </p>
        </div>
        <div>
          <ButtonLightRed py="py-[14px]" px="px-[45px]" />
        </div>
      </div>
    </main>
  );
};

export default CallMe;
