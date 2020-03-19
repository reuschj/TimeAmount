"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUnit_1 = __importDefault(require("./TimeUnit"));
/**
 * A default template creator to use if none provided
 *
 * @param {number} amount
 * @param {TimeUnit} unit
 * @returns {string}
 */
exports.defaultTemplateCreator = function (amount, unit) {
    var getUnitString = function (unitAmount, timeUnit) {
        if (unitAmount === void 0) { unitAmount = amount; }
        if (timeUnit === void 0) { timeUnit = unit; }
        switch (timeUnit) {
            case TimeUnit_1.default.Femtosecond: return unitAmount === 1 ? "femtosecond" : "femtoseconds";
            case TimeUnit_1.default.Picosecond: return unitAmount === 1 ? "picosecond" : "picoseconds";
            case TimeUnit_1.default.Nanosecond: return unitAmount === 1 ? "nanosecond" : "nanoseconds";
            case TimeUnit_1.default.Microsecond: return unitAmount === 1 ? "microsecond" : "microseconds";
            case TimeUnit_1.default.Millisecond: return unitAmount === 1 ? "millisecond" : "milliseconds";
            case TimeUnit_1.default.Second: return unitAmount === 1 ? "second" : "seconds";
            case TimeUnit_1.default.Minute: return unitAmount === 1 ? "minute" : "minutes";
            case TimeUnit_1.default.Hour: return unitAmount === 1 ? "hour" : "hours";
            case TimeUnit_1.default.Day: return unitAmount === 1 ? "day" : "days";
            case TimeUnit_1.default.Week: return unitAmount === 1 ? "week" : "weeks";
            case TimeUnit_1.default.Month: return unitAmount === 1 ? "month" : "months";
            case TimeUnit_1.default.Year: return unitAmount === 1 ? "year" : "years";
            case TimeUnit_1.default.Decade: return unitAmount === 1 ? "decade" : "decades";
            case TimeUnit_1.default.Century: return unitAmount === 1 ? "century" : "centuries";
            case TimeUnit_1.default.Millennium: return unitAmount === 1 ? "millennium" : "millennia";
            default: return "";
        }
    };
    return amount + " " + getUnitString(amount, unit);
};
