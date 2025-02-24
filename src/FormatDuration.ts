const calculateDuration = (date1: Date, date2: Date) => {
  const differenceInMS =
    (date2 ? new Date(date2) : new Date()).getTime() -
    new Date(date1).getTime();

  const MS_IN_DAY = 1000 * 60 * 60 * 24;
  const MS_IN_MONTH = MS_IN_DAY * 30;

  const totalMonths = Math.ceil(differenceInMS / MS_IN_MONTH);
  const durationYears = Math.floor(totalMonths / 12);

  return {
    years: durationYears,
    months: totalMonths % (Math.max(1, durationYears) * 12),
  };
};

const pluralize = (count: number, noun: string, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

export const getFormattedDuration = (date1: Date, date2: Date) => {
  const { years, months } = calculateDuration(date1, date2);

  return (
    `${years > 0 ? `${pluralize(years, "year")}` : ""}` +
    `${years > 0 && months > 0 ? ", " : ""}` +
    `${months > 0 ? `${pluralize(months, "month")}` : ""}`
  );
};
