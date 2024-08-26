const ProductCard = ({
  imgUri,
  title,
  description,
  btnTitle,
}: {
  imgUri: string;
  title: string | string[] | React.ReactElement;
  description: string | string[] | React.ReactElement;
  btnTitle: string | React.ReactElement;
}) => {
  return (
    <div className="flex flex-col items-center justify-evenly gap-[2vmin] shadow-main border border-main rounded-lg py-[2vmax] max-w-[20vmax] px-[2.5vmax]">
      <img
        src={`/PDESISHome/${imgUri}`}
        alt="service"
        width={272}
        className="max-w-[15vmax]"
      />
      <div className="flex flex-col items-center gap-[1.2vmin]">
        <h2 className="capitalize text-[1.5vmax] font-semibold text-center text-secondary">
          {title}
        </h2>
        <p className="text-[1.05vmax] text-center text-secondary font-medium line-clamp-3">
          {description}
        </p>
      </div>
      <a
        href="#"
        className="capitalize font-semibold text-[1vmax] text-center text-white bg-red-gradient rounded-full w-[8vmax] py-[1vmin] truncate"
      >
        {btnTitle}
      </a>
    </div>
  );
};

export default ProductCard;
