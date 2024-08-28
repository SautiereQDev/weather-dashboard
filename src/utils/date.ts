import { format, parse } from 'date-fns';

/**
 * Converts a date string in the format "yyyy-MM-dd HH:mm:ss" to "HH'h'mm".
 *
 * @param {string} dateString - The date string to convert.
 * @returns {string} - The formatted date string.
 */
export const convertToHourFormat = (dateString: string): string => {
  const date = parse(dateString, 'yyyy-MM-dd HH:mm:ss', new Date());
  return format(date, "HH'h'mm");
};