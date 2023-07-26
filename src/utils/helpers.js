/**
 *
 * @param {string} string A string for which the first character will be capatalized (if possible).
 * @returns {string}
 */
export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Generate a random UUID
 * @returns {string}
 */
export function uuid() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}
