import { Smartphone } from "lucide-react";

export const Heading = ({title}) => {
  return (
    <div>
      <h1 className="text-2xl font-medium pb-5">{title}</h1>
    </div>
  );
};


export const Divider = () => {
  return (
    <div className="text-gray-200 w-full h-[1px] bg-gray-300 mt-14 mb-14"></div>
  );
};


export const TechHeading = ({title}) => {
  return (
    <div>
      <h1 className="text-lg font-medium pb-4">{title}</h1>
    </div>
  );
}

export const TechCard = ({ icon, title , title2}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 border-2 border-gray-200 rounded-xl flex items-center justify-center">
        <img
          src={icon}
          alt={title}
          className="w-11 h-11 object-contain"
        />
      </div>
      <div>
        <p className="text-sm text-gray-700">
        {title}
      </p>
      <p className="text-sm text-gray-700">
        {title2}
      </p>
      </div>
    </div>
  );
};



          