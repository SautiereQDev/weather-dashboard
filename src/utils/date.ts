import {addDays, format, parse} from 'date-fns';
import {fr} from 'date-fns/locale';

const INITIAL_DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
const LONG_DATE_FORMAT = "eeee d MMMM yyyy";

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter capitalized.
 */
const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Converts a date string in the format "yyyy-MM-dd HH:mm:ss" to "HH'h'mm".
 *
 * @param {string} dateString - The date string to convert.
 * @returns {string} - The formatted date string.
 */
export const convertToHourFormat = (dateString: string): string => {
  const date = parse(dateString, INITIAL_DATE_FORMAT, new Date());
  return format(date, "HH'h'mm", {locale: fr});
};

/**
 * Converts a date string into a long date format.
 *
 * @param {string} dateString - The date string to convert.
 * @returns {string} The date in the long date format.
 */
export const getLongDate = (dateString: string): string => {
  const date = parse(dateString, INITIAL_DATE_FORMAT, new Date());
  const formattedDate = format(date, LONG_DATE_FORMAT, {locale: fr});
  const [dayOfWeek, dayOfMonth, month, year] = formattedDate.split(' ');

  return `${capitalizeFirstLetter(dayOfWeek)} ${dayOfMonth} ${capitalizeFirstLetter(month)} ${year}`;
};

/**
 * Converts a given date string to a short date format.
 *
 * @param {string} dateString - The date string to convert.
 *
 * @returns {string} The converted short date string.
 */
export const getShortDate = (dateString: string): string => {
  const date = parse(dateString, INITIAL_DATE_FORMAT, new Date());
  const formattedDate = format(date, 'eee d', {locale: fr});
  const [dayOfWeek, dayOfMonth] = formattedDate.split(' ');

  return `${capitalizeFirstLetter(dayOfWeek)} ${dayOfMonth}`;
};

/**
 * Retrieves the current date in a specific format.
 * @returns {string} The current date formatted as "dayOfWeek dayOfMonth MonthName year".
 */
export const getCurrentDate = (): string => {
  const formattedDate = format(new Date(), LONG_DATE_FORMAT, {locale: fr});
  const [dayOfWeek, dayOfMonth, month, year] = formattedDate.split(' ');

  return `${capitalizeFirstLetter(dayOfWeek)} ${dayOfMonth} ${capitalizeFirstLetter(month)} ${year}`;
};

/**
 * Retrieves the updated date by adding a specific number of days to the current date.
 * @param {number} days - The number of days to add.
 * @returns {string} The updated date formatted as "dayOfWeek dayOfMonth MonthName year".
 */
export const getUpdatedDate = (days: number): string => {
  const formattedDate = format(addDays(new Date(), days), LONG_DATE_FORMAT, {locale: fr});
  const [dayOfWeek, dayOfMonth, month, year] = formattedDate.split(' ');

  return `${capitalizeFirstLetter(dayOfWeek)} ${dayOfMonth} ${capitalizeFirstLetter(month)} ${year}`;
};

/**
 * Converts a date string to a day format.
 * @param {string} dateString - The date string to convert.
 * @returns {string} The converted day string.
 */
export const convertDateToDay = (dateString: string): string => {
  const date = parse(dateString, INITIAL_DATE_FORMAT, new Date());
  const formattedDate = format(date, 'iii d', {locale: fr});
  return capitalizeFirstLetter(formattedDate);
};