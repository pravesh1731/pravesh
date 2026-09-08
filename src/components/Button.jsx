import React from "react";

const Button = ({px, py , title}) => {
  return (
    <div className={`border ${px} ${py} rounded-2xl border-gray-300 hover:border-gray-700 transition-colors duration-200`}>
      {title}
    </div>
  );
};

export default Button;
