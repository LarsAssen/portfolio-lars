import React from "react";

interface TitleProps {
  text: string;
  size?: "small" | "medium" | "large";
  number: string
}

const Title: React.FC<TitleProps> = ({ text, size = "medium", number }) => {
  let fontSize;
  switch (size) {
    case "small":
      fontSize = "text-2xl";
      break;
    case "large":
      fontSize = "text-6xl";
      break;
    default:
      fontSize = "text-4xl";
      break;
  }

  return (
    <>
    <span className="text-primary text-xl">{number}</span>
    <div className={`inline-block ${fontSize} text-white font-bold`}>{text}
      <div className="w-20 h-0.5 bg-primary"></div>
      </div>
    </>
  );
};

export default Title;
