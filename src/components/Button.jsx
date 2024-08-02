const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center rounded-full gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        }`}
    >
      {label}

      {iconURL && (
        <img
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
        />
      )}
    </button>
  );
};

export default Button;
