/**
 *
 * @param {string} string A string for which the first character will be capatalized (if possible).
 * @returns {string}
 */
export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
