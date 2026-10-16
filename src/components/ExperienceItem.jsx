const ExperienceItem = ({ title, company, startDate, endDate, current }) => {
  const isCurrent = current || endDate?.toLowerCase() === "present";

  return (
    <div className="relative">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-zinc-900">{title}</h4>
        {isCurrent && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Current
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-600">{company}</p>
      <p className="mt-0.5 text-xs text-zinc-400">
        {startDate}
        {endDate && ` — ${endDate}`}
      </p>
    </div>
  );
};

export default ExperienceItem;
