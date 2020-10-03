"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUnit_1 = __importStar(require("./TimeUnit"));
var TimeDescriptionSetup_1 = require("./TimeDescriptionSetup");
/**
* Class to store an amount of time with a set unit of time with conversions to other time units
*/
var TimeAmount = /** @class */ (function () {
    /**
    * @class
    * @param {number} amount
    * @param {TimeUnit} unit
    */
    function TimeAmount(amount, unit) {
        if (unit === void 0) { unit = TimeUnit_1.default.Millisecond; }
        this._amount = amount;
        this._unit = unit;
        this._base = unit >= 1 ? amount * TimeUnit_1.getConversionValue(unit) : amount / TimeUnit_1.getConversionValue(unit);
    }
    Object.defineProperty(TimeAmount.prototype, "amount", {
        // Amount -------------------------------------------------- /
        /** @returns {number} */
        get: function () {
            return this._amount;
        },
        /** @param {number} amount */
        set: function (amount) {
            var unit = this.unit;
            this._amount = amount;
            this._base = unit >= 1 ? amount * unit : TimeUnit_1.getConversionValue(unit) / TimeUnit_1.getConversionValue(unit);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "unit", {
        // Unit -------------------------------------------------- /
        /** @returns {TimeUnit} */
        get: function () {
            return this._unit;
        },
        /** @param {TimeUnit} unit */
        set: function (unit) {
            var amount = this.amount;
            this._unit = unit;
            this._base = unit >= 1 ? amount * TimeUnit_1.getConversionValue(unit) : amount / TimeUnit_1.getConversionValue(unit);
        },
        enumerable: false,
        configurable: true
    });
    // Conversions -------------------------------------------------- /
    /**
     * Creates a new Time Amount that is equal to the original but with a new unit
     *
     * @param {TimeUnit} timeUnit
     * @returns {TimeAmount}
     */
    TimeAmount.prototype.convertTo = function (timeUnit) {
        return TimeAmount.convert(this, timeUnit);
    };
    Object.defineProperty(TimeAmount.prototype, "femtoseconds", {
        /** @returns {number} */
        get: function () {
            return Math.abs(this._base * TimeUnit_1.getConversionValue(TimeUnit_1.default.Femtosecond));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "picoseconds", {
        /** @returns {number} */
        get: function () {
            return Math.abs(this._base * TimeUnit_1.getConversionValue(TimeUnit_1.default.Picosecond));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "nanoseconds", {
        /** @returns {number} */
        get: function () {
            return Math.abs(this._base * TimeUnit_1.getConversionValue(TimeUnit_1.default.Nanosecond));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "microseconds", {
        /** @returns {number} */
        get: function () {
            return Math.abs(this._base * TimeUnit_1.getConversionValue(TimeUnit_1.default.Microsecond));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "milliseconds", {
        /** @returns {number} */
        get: function () {
            return Math.abs(this._base * TimeUnit_1.getConversionValue(TimeUnit_1.default.Millisecond));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "seconds", {
        /** @returns {number} */
        get: function () {
            return this._base * TimeUnit_1.default.Second;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "minutes", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Minute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "hours", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Hour;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "days", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Day;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "weeks", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Week;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "months", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Month;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "years", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "decades", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Decade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "centuries", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Century;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TimeAmount.prototype, "millennia", {
        /** @returns {number} */
        get: function () {
            return this._base / TimeUnit_1.default.Millennium;
        },
        enumerable: false,
        configurable: true
    });
    // Comparison -------------------------------------------------- /
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    TimeAmount.prototype.isEqualTo = function (amount) {
        return this.seconds === amount.seconds;
    };
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    TimeAmount.prototype.isGreaterThan = function (amount) {
        return this.seconds > amount.seconds;
    };
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    TimeAmount.prototype.isGreaterThanOrEqualTo = function (amount) {
        return this.seconds >= amount.seconds;
    };
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    TimeAmount.prototype.isLessThan = function (amount) {
        return this.seconds < amount.seconds;
    };
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    TimeAmount.prototype.isLessThanOrEqualTo = function (amount) {
        return this.seconds <= amount.seconds;
    };
    // Arithmetic -------------------------------------------------- /
    /**
    * @param {TimeAmount} timeAmounts
    * @returns {TimeAmount}
    */
    TimeAmount.prototype.plus = function () {
        var timeAmounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            timeAmounts[_i] = arguments[_i];
        }
        var _a = this, seconds = _a.seconds, unit = _a.unit;
        var total = timeAmounts.reduce(function (accumulator, timeAmount) { return accumulator + timeAmount.seconds; }, seconds);
        return new TimeAmount(total / unit, unit);
    };
    /**
    * @param {TimeAmount} timeAmounts
    * @returns {TimeAmount}
    */
    TimeAmount.prototype.minus = function () {
        var timeAmounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            timeAmounts[_i] = arguments[_i];
        }
        var _a = this, seconds = _a.seconds, unit = _a.unit;
        var total = timeAmounts.reduce(function (accumulator, timeAmount) { return accumulator - timeAmount.seconds; }, seconds);
        return new TimeAmount(total / unit, unit);
    };
    /**
    * @param {number} multipliers
    * @returns {TimeAmount}
    */
    TimeAmount.prototype.times = function () {
        var multipliers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            multipliers[_i] = arguments[_i];
        }
        var _a = this, amount = _a.amount, unit = _a.unit;
        var total = multipliers.reduce(function (accumulator, multiplier) { return accumulator * multiplier; }, amount);
        return new TimeAmount(total, unit);
    };
    /**
    * @param {number} divisors
    * @returns {TimeAmount}
    */
    TimeAmount.prototype.dividedBy = function () {
        var divisors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            divisors[_i] = arguments[_i];
        }
        var _a = this, amount = _a.amount, unit = _a.unit;
        var total = divisors.reduce(function (accumulator, devisor) { return accumulator / devisor; }, amount);
        return new TimeAmount(total, unit);
    };
    /**
    * @param {TimeAmount} timeAmounts
    * @returns {number}
    */
    TimeAmount.prototype.dividedByTime = function () {
        var timeAmounts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            timeAmounts[_i] = arguments[_i];
        }
        var _a = this, seconds = _a.seconds, unit = _a.unit;
        return timeAmounts.reduce(function (accumulator, timeAmount) { return accumulator / timeAmount.seconds; }, seconds);
    };
    // String representation -------------------------------------------------- /
    /**
    * Gets a string description with overridable setup options
    *
    * @param setup
    * @returns {string}
    */
    TimeAmount.prototype.getDescription = function (setup) {
        if (setup === void 0) { setup = {}; }
        return TimeAmount.getDescription(this, setup);
    };
    Object.defineProperty(TimeAmount.prototype, "description", {
        /**
        * Default description
        *
        * @returns {string}
        */
        get: function () {
            return this.getDescription();
        },
        enumerable: false,
        configurable: true
    });
    /**
    * @override
    * String representation
    *
    * @returns {string}
    */
    TimeAmount.prototype.toString = function () {
        return this.getDescription();
    };
    /**
    * Utility to get time description
    *
    * @param {TimeAmount} timeAmount
    * @param {TimeDescriptionSetup}
    */
    TimeAmount.getDescription = function (timeAmount, _a) {
        var _b = _a === void 0 ? {} : _a, templateCreator = _b.templateCreator, templateJoiner = _b.templateJoiner, _c = _b.preciseTo, preciseTo = _c === void 0 ? TimeUnit_1.default.Femtosecond : _c, levelLimit = _b.levelLimit;
        var makeDescriptionString = templateCreator !== null && templateCreator !== void 0 ? templateCreator : TimeDescriptionSetup_1.defaultTemplateCreator;
        var descriptionParts = [];
        var unit;
        if (timeAmount.femtoseconds < 1000) {
            unit = TimeUnit_1.default.Femtosecond;
        }
        else if (timeAmount.picoseconds < 1000) {
            unit = TimeUnit_1.default.Picosecond;
        }
        else if (timeAmount.nanoseconds < 1000) {
            unit = TimeUnit_1.default.Nanosecond;
        }
        else if (timeAmount.microseconds < 1000) {
            unit = TimeUnit_1.default.Microsecond;
        }
        else if (timeAmount.milliseconds < 1000) {
            unit = TimeUnit_1.default.Millisecond;
        }
        else if (timeAmount.seconds < 60) {
            unit = TimeUnit_1.default.Second;
        }
        else if (timeAmount.minutes < 60) {
            unit = TimeUnit_1.default.Minute;
        }
        else if (timeAmount.hours < 24) {
            unit = TimeUnit_1.default.Hour;
        }
        else if (timeAmount.days < 7) {
            unit = TimeUnit_1.default.Day;
        }
        else if (timeAmount.weeks < 4) {
            unit = TimeUnit_1.default.Week;
        }
        else if (timeAmount.months < 12) {
            unit = TimeUnit_1.default.Month;
        }
        else if (timeAmount.years < 10) {
            unit = TimeUnit_1.default.Year;
        }
        else if (timeAmount.decades < 10) {
            unit = TimeUnit_1.default.Decade;
        }
        else if (timeAmount.centuries < 10) {
            unit = TimeUnit_1.default.Century;
        }
        else {
            unit = TimeUnit_1.default.Millennium;
        }
        var getAmount = function () {
            switch (unit) {
                case TimeUnit_1.default.Femtosecond: return timeAmount.femtoseconds;
                case TimeUnit_1.default.Picosecond: return timeAmount.picoseconds;
                case TimeUnit_1.default.Nanosecond: return timeAmount.nanoseconds;
                case TimeUnit_1.default.Microsecond: return timeAmount.microseconds;
                case TimeUnit_1.default.Millisecond: return timeAmount.milliseconds;
                case TimeUnit_1.default.Second: return timeAmount.seconds;
                case TimeUnit_1.default.Minute: return timeAmount.minutes;
                case TimeUnit_1.default.Hour: return timeAmount.hours;
                case TimeUnit_1.default.Day: return timeAmount.days;
                case TimeUnit_1.default.Week: return timeAmount.weeks;
                case TimeUnit_1.default.Month: return timeAmount.months;
                case TimeUnit_1.default.Year: return timeAmount.years;
                case TimeUnit_1.default.Decade: return timeAmount.decades;
                case TimeUnit_1.default.Century: return timeAmount.centuries;
                default: return timeAmount.millennia;
            }
        };
        var amount = getAmount();
        var roundingThreshold = 0.000001;
        var currentAmount = amount;
        var currentUnit = unit;
        var remainder = null;
        while (currentUnit !== null && currentUnit >= preciseTo && (remainder === null || remainder > 0) && (!levelLimit || (levelLimit && descriptionParts.length < levelLimit))) {
            var previousAmount = void 0;
            var roundedAmount = Math.round(currentAmount);
            if (Math.abs(currentAmount - roundedAmount) < roundingThreshold) {
                previousAmount = roundedAmount;
                currentAmount = roundedAmount;
            }
            else {
                previousAmount = currentAmount;
                currentAmount = Math.floor(currentAmount);
            }
            if (currentAmount > 0) {
                descriptionParts.push(makeDescriptionString(currentAmount, currentUnit));
                remainder = previousAmount % currentAmount;
            }
            else {
                remainder = previousAmount;
            }
            var roundedRemainder = Math.round(remainder);
            if (Math.abs(roundedRemainder - remainder) < roundingThreshold)
                remainder = roundedRemainder;
            var nextUnitDown = TimeUnit_1.getPreviousTimeUnit(currentUnit);
            if (currentUnit && nextUnitDown) {
                var currentAmountInSeconds = currentUnit >= 1 ? remainder * TimeUnit_1.getConversionValue(currentUnit) : remainder / TimeUnit_1.getConversionValue(currentUnit);
                currentAmount = nextUnitDown >= 1 ? currentAmountInSeconds / TimeUnit_1.getConversionValue(nextUnitDown) : currentAmountInSeconds * TimeUnit_1.getConversionValue(nextUnitDown);
            }
            currentUnit = nextUnitDown;
        }
        return descriptionParts.join(templateJoiner !== null && templateJoiner !== void 0 ? templateJoiner : ", ");
    };
    /**
     * Creates a new Time Amount that is equal to the original but with a new unit
     *
     * @param {TimeAmount} timeAmount
     * @param {TimeUnit} timeUnit
     * @returns {TimeAmount}
     */
    TimeAmount.convert = function (timeAmount, timeUnit) {
        var base = timeAmount._base;
        var amount = timeUnit >= 1 ? base / TimeUnit_1.getConversionValue(timeUnit) : base * TimeUnit_1.getConversionValue(timeUnit);
        return new TimeAmount(amount, timeUnit);
    };
    return TimeAmount;
}());
exports.default = TimeAmount;
