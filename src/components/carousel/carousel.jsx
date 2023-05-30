import React, { useState, useRef } from 'react';

const Img = ({ srcImg }) => {
  return (
    <img
      className="block rounded-3xl w-[16.875rem] md:w-[33.75rem] h-[11.25rem] md:h-[22.5rem] transition duration-1000"
      src={srcImg}
      alt="Carousel Image"
    />
  );
};

export const Carousel = () => {
  const [move, setMove] = useState(0);
  const carousel = useRef(null);
  const carouselWidth = 1650; // Largura total do carrossel em pixels
  const itemWidth = 300; // Largura de cada item do carrossel em pixels
  const maxMove = carouselWidth - itemWidth; // Valor máximo para mover o carrossel

  const handleMoveLeft = (e) => {
    e.preventDefault();
    if (move > 0) {
      setMove(move - itemWidth);
      carousel.current.scrollTo({
        left: move - itemWidth,
        behavior: 'smooth',
      });
    } else {
      setMove(maxMove);
      carousel.current.scrollTo({
        left: maxMove,
        behavior: 'smooth',
      });
    }
  };

  const handleMoveRight = (e) => {
    e.preventDefault();
    if (move < maxMove) {
      setMove(move + itemWidth);
      carousel.current.scrollTo({
        left: move + itemWidth,
        behavior: 'smooth',
      });
    } else {
      setMove(0);
      carousel.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-[6.25rem] md:mt-[7.5rem] lg:mt-[5.5rem] flex flex-col gap-14">
      <h1 className="text-center text-2xl md:text-3xl font-bold">My Works</h1>
      <div className="flex overflow-hidden gap-8 " ref={carousel}>
        <Img srcImg="src/assets/image-slide-1.jpg" />
        <Img srcImg="src/assets/image-slide-2.jpg" />
        <Img srcImg="src/assets/image-slide-3.jpg" />
        <Img srcImg="src/assets/image-slide-4.jpg" />
        <Img srcImg="src/assets/image-slide-5.jpg" />
      </div>

      <div className="flex justify-center gap-4">
        <button onClick={handleMoveLeft} className="bg-black rounded-full">
          <img
            className="block p-6"
            src="src/assets/icon-arrow-left.svg"
            alt="Left arrow"
          />
        </button>
        <button onClick={handleMoveRight} className="bg-black rounded-full">
          <img
            className="block p-6"
            src="src/assets/icon-arrow-right.svg"
            alt="Right arrow"
          />
        </button>
      </div>
    </div>
  );
  // return (
  //   <div className="mt-[6.25rem] md:mt-[7.5rem] lg:mt-[5.5rem]">
  //     <h1 className="text-center text-2xl md:text-3xl mb-[56px] font-bold">
  //       My Works
  //     </h1>
  //     <Swiper
  //       slidesPerView={3}
  //       spaceBetween={60}
  //       freeMode={true}
  //       pagination={{
  //         clickable: true,
  //       }}
  //       modules={[Pagination]}
  //       className="mySwiper"
  //     >
  //
  //         <div>
  //           <img
  //             className=" rounded-[20px]"
  //             src="src/assets/image-slide-1.jpg"
  //           />
  //         </div>
  //
  //
  //         <img className=" rounded-[20px]" src="src/assets/image-slide-2.jpg" />
  //
  //
  //         <img className=" rounded-[20px]" src="src/assets/image-slide-3.jpg" />
  //
  //
  //         <img className=" rounded-[20px]" src="src/assets/image-slide-4.jpg" />
  //
  //
  //         <img className=" rounded-[20px]" src="src/assets/image-slide-5.jpg" />
  //
  //     </Swiper>
  //   </div>
  // );
};
