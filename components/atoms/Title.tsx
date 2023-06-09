import React from "react";

interface TitleProps {
  text: string;
  size?: "small" | "medium" | "large";
}

const Title: React.FC<TitleProps> = ({ text, size = "medium" }) => {
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
      <div className={`relative ${fontSize} text-white font-bold`}>{text}
      <div className="h-1 w-20 bg-primary"></div>
      </div>
  );
};

export default Title;
