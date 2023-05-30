export const ButtonBlack = ({ text, py, px }) => {
  return (
    <div>
      <button
        className={`${text} text-lightCream bg-black rounded-[1.75rem] hover:bg-galacticBlue transition-bg duration-500 px-[1.75rem] ${py} ${px}`}
      >
        Free Consultation
      </button>
    </div>
  );
};

export const ButtonLightRed = ({ text, py, px }) => {
  return (
    <button
      className={` ${text} text-lightCream bg-lightRed rounded-[1.75rem] ${py} ${px} hover:bg-summerYellow transition-bg duration-500`}
    >
      Free Consultation
    </button>
  );
};
