import React from "react";

const WhyChoose = ({
  bgUri,
  title,
  description,
}: {
  bgUri: string;
  title: string | string[] | React.ReactElement;
  description: string | string[] | React.ReactElement;
}) => {
  return (
    <div
      className={`bg-no-repeat bg-cover bg-center overflow-hidden rounded-xl min-w-[28vmax] min-h-[10vmax] px-[1.44vmax] py-[1.04vmax]`}
      style={{ backgroundImage: `url('/PDESISHome${bgUri}')` }}
    >
      <h3 className="font-bold text-[1.5vmax] text-white">{title}</h3>
      <p className="text-white font-medium text-[1.05vmax]">{description}</p>
    </div>
  );
};

export default WhyChoose;
