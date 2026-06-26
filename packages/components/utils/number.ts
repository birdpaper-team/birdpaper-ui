/**
 * Formats a number by adding commas as thousand separators.
 *
 * @param num - The number to format. If `undefined` or `null`, an empty string is returned.
 * @returns A string representation of the number with commas as thousand separators,
 *          or an empty string if the input is `undefined` or `null`.
 */
export function formatNumberWithCommas(num: number, separator: string): string {
  if (num == null || isNaN(num)) return "";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
