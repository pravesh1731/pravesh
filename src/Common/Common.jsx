export const Heading = ({ title }) => {
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

export const TechHeading = ({ title }) => {
  return (
    <div>
      <h1 className="text-lg font-medium pb-4">{title}</h1>
    </div>
  );
};

export const TechCard = ({ icon, title, title2 }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-14 h-14 border-2 border-gray-200 rounded-xl flex items-center justify-center">
        <img src={icon} alt={title} className="w-9 h-9 object-contain" />
      </div>
      <div>
        <p className="text-sm text-gray-700">{title}</p>
        <p className="text-sm text-gray-700">{title2}</p>
      </div>
    </div>
  );
};

export const ExpHead = ({ icon: Icon, title, count }) => {
  return (
    <div className="flex-1 flex flex-row">
      <div className="border-1 border-gray-300 p-2 rounded-lg">
        <Icon />
      </div>
      <div className="flex flex-col pl-2 justify-start">
        <p className="text-md font-bold">{count}</p>
        <p className="text-xs text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export const ContactCard = ({ icon: Icon, title, link, mail }) => {
  return (
    <div className="border-2 border-gray-200 rounded-xl p-2 ">
      <div className="flex flex-row items-center gap-2">
        <div className="border-1 border-gray-300 p-2 rounded-lg">
          <Icon />
        </div>
        <div className="flex flex-col pl-2 justify-start">
          <p className="text-md font-bold">{title}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500"
          >
            {mail}
          </a>
        </div>
      </div>
    </div>
  );
};
