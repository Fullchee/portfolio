/**
 * @returns number of years since `date` (rounded to one decimal place)
 */
export const calculateSejour = (date: Date) => {
  const interval = Date.now() - new Date(date).getTime();
  const days = Math.floor(interval / (1000 * 60 * 60 * 24));

  return Math.round((days / 365) * 10) / 10;
};
