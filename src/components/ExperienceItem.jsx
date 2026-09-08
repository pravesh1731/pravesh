import React from 'react'

const ExperienceItem = ({ title, company, startDate, endDate }) => {
  return (
    <div>
      <h3 className="text-[14px] font-semibold">
        {title}
      </h3>

      <p className="text-[14px] text-gray-500">
        {company}
      </p>

      <p className="text-[14px] text-gray-500">
        {startDate}
        {endDate && (
          <>
            <span className="mx-3">—</span>
            {endDate}
          </>
        )}
      </p>
    </div>
  );
};

export default ExperienceItem;