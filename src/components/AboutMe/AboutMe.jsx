import { ButtonLightRed } from '../button/Button';

export const AboutMe = () => {
  return (
    <div className="mt-[136px] flex flex-col items-center md:flex-row gap-10 md:gap-[69px] lg:gap-[50px] xl:gap-[125px] md:ml-[-55px] lg:ml-0 md:px-5 lg:justify-center ">
      <img
        className="block w-[18.75rem] md:w-[22.75rem] xl:w-[400px] h-[18.75rem] md:h-[22.75rem] xl:h-[400px] "
        src="src/assets/image-removebg-preview(563) (1).svg"
        alt="my"
      />
      <section className="flex flex-col gap-4 md:gap-[32px] items-center md:items-start">
        <h1 className=" md:w-[339px] lg:w-[500px] font-bold text-[1.375rem] md:text-[2rem] lg:text-[20px] md:text-start md:text-3x1 text-center">
          I’m Amy, and I’d love to work on your next project
        </h1>
        <article>
          <p className=" md:w-[339px] lg:w-[500px] text-[16px] lg:text-[19px] text-center md:text-start">
            I love working with others to create beautiful design solutions.
            I’ve designed everything from brand illustrations to complete mobile
            apps. I’m also handy with a camera!
          </p>
        </article>
        <ButtonLightRed
          text="text-[.875rem]"
          py="py-[.625rem] md:py-[.875rem]"
          px="px-[1.75rem] md:px-[2.8125rem]"
          width="w-[14.25rem]"
        />
      </section>
    </div>
  );
};
