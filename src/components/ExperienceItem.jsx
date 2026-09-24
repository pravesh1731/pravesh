const ExperienceItem = ({ title, company, startDate, endDate }) => {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <p className="text-sm text-zinc-600">{company}</p>
      <p className="mt-0.5 text-xs text-zinc-400">
        {startDate}
        {endDate && ` — ${endDate}`}
      </p>
    </div>
  );
};

export default ExperienceItem;
