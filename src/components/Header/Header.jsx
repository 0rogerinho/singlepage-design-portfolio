import { ButtonBlack } from '../button/button';

export const Header = () => {
  return (
    <header className=" bg-lightCream max-w-full flex justify-between bg-white px-[1rem] md:px-[2.4375rem] lg:px-[10.3125rem] py-[1rem] md:py-[34px] items-center">
      <div className="flex w-[3rem] h-[3rem]">
        <img src="./src/assets/logo.svg" alt="Logo" />
      </div>
      <ButtonBlack
        text="text-[.875rem] md:text-[1rem]"
        py="py-[.875rem] md:py-[.875rem]"
        px="px-[2.8125rem] md:px-[3rem]"
      />
    </header>
  );
};
