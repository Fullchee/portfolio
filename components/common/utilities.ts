export const calculateSejour = (date: string) => {
  const interval = new Date().getTime() - new Date(date).getTime();
  const days = Math.floor(interval / (1000 * 60 * 60 * 24));
  const months = Math.round((days % 365) / 30);
  const monthsString = `${months} month${months ? "s" : ""}`;
  const years = Math.floor(days / 365);
  switch (years) {
    case 0:
      return monthsString;
    case 1:
      return "1 year and " + monthsString;
    default:
      return `${years} years and ${monthsString}`;
  }
};
