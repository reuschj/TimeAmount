"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Enum of time units
* Stored value is the amount of time for that unit in seconds
*/
var TimeUnit;
(function (TimeUnit) {
    TimeUnit[TimeUnit["Femtosecond"] = 1e-15] = "Femtosecond";
    TimeUnit[TimeUnit["Picosecond"] = 1e-12] = "Picosecond";
    TimeUnit[TimeUnit["Nanosecond"] = 1e-9] = "Nanosecond";
    TimeUnit[TimeUnit["Microsecond"] = 0.000001] = "Microsecond";
    TimeUnit[TimeUnit["Millisecond"] = 0.001] = "Millisecond";
    TimeUnit[TimeUnit["Second"] = 1] = "Second";
    TimeUnit[TimeUnit["Minute"] = 60] = "Minute";
    TimeUnit[TimeUnit["Hour"] = 3600] = "Hour";
    TimeUnit[TimeUnit["Day"] = 86400] = "Day";
    TimeUnit[TimeUnit["Week"] = 604800] = "Week";
    TimeUnit[TimeUnit["Month"] = 2629800] = "Month";
    TimeUnit[TimeUnit["Year"] = 31557600] = "Year";
    TimeUnit[TimeUnit["Decade"] = 315576000] = "Decade";
    TimeUnit[TimeUnit["Centruy"] = 3155760000] = "Centruy";
    TimeUnit[TimeUnit["Millenium"] = 31557600000] = "Millenium";
})(TimeUnit || (TimeUnit = {}));
/**
 * Assigns a integer position to each enum case
 *
 * @param {TimeUnit} timeUnit
 * @returns {number|null}
 */
exports.getTimeUnitPosition = function (timeUnit) {
    switch (timeUnit) {
        case TimeUnit.Femtosecond: return -5;
        case TimeUnit.Picosecond: return -4;
        case TimeUnit.Nanosecond: return -3;
        case TimeUnit.Microsecond: return -2;
        case TimeUnit.Millisecond: return -1;
        case TimeUnit.Second: return 0;
        case TimeUnit.Minute: return 1;
        case TimeUnit.Hour: return 2;
        case TimeUnit.Day: return 3;
        case TimeUnit.Week: return 4;
        case TimeUnit.Month: return 5;
        case TimeUnit.Year: return 6;
        case TimeUnit.Decade: return 7;
        case TimeUnit.Centruy: return 8;
        case TimeUnit.Millenium: return 9;
        default: return null;
    }
};
/**
 * Looks up the time unit associated with the given position integers
 *
 * @param {number} position
 * @returns {TimeUnit|null}
 */
exports.getTimeUnitFromPosition = function (position) {
    switch (position) {
        case -5: return TimeUnit.Femtosecond;
        case -4: return TimeUnit.Picosecond;
        case -3: return TimeUnit.Nanosecond;
        case -2: return TimeUnit.Microsecond;
        case -1: return TimeUnit.Millisecond;
        case 0: return TimeUnit.Second;
        case 1: return TimeUnit.Minute;
        case 2: return TimeUnit.Hour;
        case 3: return TimeUnit.Day;
        case 4: return TimeUnit.Week;
        case 5: return TimeUnit.Month;
        case 6: return TimeUnit.Year;
        case 7: return TimeUnit.Decade;
        case 8: return TimeUnit.Centruy;
        case 9: return TimeUnit.Millenium;
        default: return null;
    }
};
/**
 * Gets the next lower time unit (or looks a given number of positions down the chain)
 *
 * @param {TimeUnit} timeUnit
 * @param {number} decrement - Amount of positions to decrease by
 * @returns {TimeUnit|null}
 */
exports.getPreviousTimeUnit = function (timeUnit, decrement) {
    if (decrement === void 0) { decrement = 1; }
    var position = exports.getTimeUnitPosition(timeUnit);
    var previousPosition = position !== null ? position - decrement : null;
    return previousPosition !== null ? exports.getTimeUnitFromPosition(previousPosition) : null;
};
/**
 * Gets the next higher time unit (or looks a given number of positions up the chain)
 *
 * @param {TimeUnit} timeUnit
 * @param {number} increment - Amount of positions to increase by
 * @returns {TimeUnit|null}
 */
exports.getNextTimeUnit = function (timeUnit, increment) {
    if (increment === void 0) { increment = 1; }
    var position = exports.getTimeUnitPosition(timeUnit);
    var nextPosition = position !== null ? position + increment : null;
    return nextPosition !== null ? exports.getTimeUnitFromPosition(nextPosition) : null;
};
exports.default = TimeUnit;
