"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/hoare.js */

		/**
   * rearranges an array in a lower [i, p[ and higher part [p, j[
   *
   * the lower part contains elements for which predicate === 0
   * the higher part contains elements for which predicate === 1
   *
   * @return {int} p the position of the first element of the higher part
   */

		var hoare = function hoare(predicate, a, i, j) {

			var x = i - 1;
			var y = j;
			var tmp = undefined;

			while (true) {

				// search from right to left for an item
				// at the wrong place

				while (true) {

					--y;

					if (x === y) return x + 1;

					tmp = a[y];

					if (predicate(tmp) === 0) break;
				}

				// search from left to right for an item
				// at the wrong place

				while (true) {

					++x;

					if (x === y) return x + 1;

					if (predicate(a[x]) === 1) break;
				}

				// swap elements that are at the wrong place

				a[y] = a[x];
				a[x] = tmp;
			}
		};

		exports.hoare = hoare;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-splitting", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["splitting"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-splitting");
})();