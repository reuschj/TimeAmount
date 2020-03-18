import TimeUnit from "./TimeUnit";
import TimeDescriptionSetup from "./TimeDescriptionSetup";
/**
* Class to store an amount of time with a set unit of time with conversions to other time units
*/
declare class TimeAmount {
    private _amount;
    private _unit;
    private _base;
    /**
    * @class
    * @param {number} amount
    * @param {TimeUnit} unit
    */
    constructor(amount: number, unit?: TimeUnit);
    /** @returns {number} */
    get amount(): number;
    /** @param {number} amount */
    set amount(amount: number);
    /** @returns {TimeUnit} */
    get unit(): TimeUnit;
    /** @param {TimeUnit} unit */
    set unit(unit: TimeUnit);
    /**
     * Creates a new Time Amount that is equal to the original but with a new unit
     *
     * @param {TimeUnit} timeUnit
     * @returns {TimeAmount}
     */
    convertTo(timeUnit: TimeUnit): TimeAmount;
    /** @returns {number} */
    get femtoseconds(): number;
    /** @returns {number} */
    get picoseconds(): number;
    /** @returns {number} */
    get nanoseconds(): number;
    /** @returns {number} */
    get microseconds(): number;
    /** @returns {number} */
    get milliseconds(): number;
    /** @returns {number} */
    get seconds(): number;
    /** @returns {number} */
    get minutes(): number;
    /** @returns {number} */
    get hours(): number;
    /** @returns {number} */
    get days(): number;
    /** @returns {number} */
    get weeks(): number;
    /** @returns {number} */
    get months(): number;
    /** @returns {number} */
    get years(): number;
    /** @returns {number} */
    get decades(): number;
    /** @returns {number} */
    get centuries(): number;
    /** @returns {number} */
    get millenia(): number;
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    isEqualTo(amount: TimeAmount): boolean;
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    isGreaterThan(amount: TimeAmount): boolean;
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    isGreaterThanOrEqualTo(amount: TimeAmount): boolean;
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    isLessThan(amount: TimeAmount): boolean;
    /**
    * @param {TimeAmount} amount
    * @returns {boolean}
    */
    isLessThanOrEqualTo(amount: TimeAmount): boolean;
    /**
    * @param {TimeAmount} timeAmounts
    * @returns {TimeAmount}
    */
    plus(...timeAmounts: Array<TimeAmount>): TimeAmount;
    /**
    * @param {TimeAmount} timeAmounts
    * @returns {TimeAmount}
    */
    minus(...timeAmounts: Array<TimeAmount>): TimeAmount;
    /**
    * @param {number} multipliers
    * @returns {TimeAmount}
    */
    times(...multipliers: Array<number>): TimeAmount;
    /**
    * @param {number} divisors
    * @returns {TimeAmount}
    */
    dividedBy(...divisors: Array<number>): TimeAmount;
    /**
    * @param {TimeAmount} timeAmounts
    * @returns {number}
    */
    dividedByTime(...timeAmounts: Array<TimeAmount>): number;
    /**
    * Gets a string description with overridable setup options
    *
    * @param setup
    * @returns {string}
    */
    getDescription(setup?: TimeDescriptionSetup): string;
    /**
    * Default description
    *
    * @returns {string}
    */
    get description(): string;
    /**
    * @override
    * String representation
    *
    * @returns {string}
    */
    toString(): string;
    /**
    * Utility to get time description
    *
    * @param {TimeAmount} timeAmount
    * @param {TimeDescriptionSetup}
    */
    static getDescription(timeAmount: TimeAmount, { templateCreator, preciseTo, levelLimit }?: TimeDescriptionSetup): string;
    /**
     * Creates a new Time Amount that is equal to the original but with a new unit
     *
     * @param {TimeAmount} timeAmount
     * @param {TimeUnit} timeUnit
     * @returns {TimeAmount}
     */
    static convert(timeAmount: TimeAmount, timeUnit: TimeUnit): TimeAmount;
}
export default TimeAmount;
