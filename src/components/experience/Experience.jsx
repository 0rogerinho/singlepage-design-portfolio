export const Experience = () => {
  const Div = ({ width, heigth, bgColor, srcImg, title, gap }) => {
    return (
      <div
        className={` flex flex-col items-end p-4 ${gap}  rounded-lg w-full ${width} ${heigth} ${bgColor}`}
      >
        <img className="max-w-full flex flex-col" src={srcImg} />

        <h1 className="font-bold text-lightCream w-full">{title}</h1>
      </div>
    );
  };
  return (
    <main className="flex flex-row  flex-wrap gap-4 justify-center">
      <Div
        width="max-w-[21.4375rem]"
        heigth="max-h-[22.75rem]"
        bgColor="bg-galacticBlue"
        srcImg="src/assets/pattern-graphic-design.svg"
        title="Graphic Design"
        gap="gap-[120px]"
      />
      <div className=" w-full max-w-[343px] flex flex-col gap-5  ">
        <div className="flex flex-row gap-6 ">
          <Div
            width="max-w-[9.9375rem]"
            heigth="max-h-[11.375rem]"
            bgColor="bg-summerYellow"
            srcImg="src/assets/pattern-ui-ux.svg"
            title="UI/UX"
            gap="gap-[75px]"
          />
          <Div
            width="max-w-[9.9375rem]"
            heigth="max-h-[11.375rem]"
            bgColor="bg-pink"
            srcImg="src/assets/pattern-apps.svg"
            title="Apps"
            gap="gap-[73px]"
          />
        </div>
        <Div
          width="max-w-[21.4375rem]"
          heigth="h-[162px]"
          bgColor="bg-lightRed"
          srcImg="src/assets/pattern-illustrations.svg"
          title="Apps"
          gap="gap-[45px]"
        />
      </div>
      <div className="  w-[343px] md:w-full lg:w-full xl:w-[343px] flex flex-col md:flex-row  lg:flex-row xl:flex-col justify-center gap-5">
        <Div
          width="max-w-[21.4375rem]"
          heigth="h-[183px] "
          bgColor="bg-cyan"
          srcImg="src/assets/pattern-photography.svg"
          title="Photogrphy"
          gap="gap-[70px]"
        />
        <Div
          width="max-w-[21.4375rem]"
          heigth="h-[183px] xl:h-[160px] "
          bgColor="bg-darkPurple"
          srcImg="src/assets/pattern-motion-graphics.svg"
          title="Motion Graphics"
          gap="gap-[70px] lg:gap-[50px]"
        />
      </div>
    </main>
  );
};
