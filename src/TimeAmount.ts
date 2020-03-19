import TimeUnit, { getPreviousTimeUnit, getConversionValue } from "./TimeUnit";
import TimeDescriptionSetup, { TimeDescriptionTemplateCreator, defaultTemplateCreator } from "./TimeDescriptionSetup";

/**
* Class to store an amount of time with a set unit of time with conversions to other time units
*/
class TimeAmount {
  private _amount: number;
  private _unit: TimeUnit;
  private _base: number;

  /**
  * @class
  * @param {number} amount
  * @param {TimeUnit} unit
  */
  constructor(amount: number, unit: TimeUnit = TimeUnit.Millisecond) {
    this._amount = amount;
    this._unit = unit;
    this._base = unit >= 1 ? amount * getConversionValue(unit) : amount / getConversionValue(unit);
  }

  // Amount -------------------------------------------------- /

  /** @returns {number} */
  get amount(): number {
    return this._amount;
  }

  /** @param {number} amount */
  set amount(amount: number) {
    const { unit } = this;
    this._amount = amount;
    this._base = unit >= 1 ? amount * unit : getConversionValue(unit) / getConversionValue(unit);
  }

  // Unit -------------------------------------------------- /

  /** @returns {TimeUnit} */
  get unit(): TimeUnit {
    return this._unit;
  }

  /** @param {TimeUnit} unit */
  set unit(unit: TimeUnit) {
    const { amount } = this;
    this._unit = unit;
    this._base = unit >= 1 ? amount * getConversionValue(unit) : amount / getConversionValue(unit);
  }

  // Conversions -------------------------------------------------- /

  /**
   * Creates a new Time Amount that is equal to the original but with a new unit
   *
   * @param {TimeUnit} timeUnit
   * @returns {TimeAmount}
   */
  convertTo(timeUnit: TimeUnit): TimeAmount {
    return TimeAmount.convert(this, timeUnit);
  }

  /** @returns {number} */
  get femtoseconds(): number {
    return Math.abs(this._base * getConversionValue(TimeUnit.Femtosecond));
  }

  /** @returns {number} */
  get picoseconds(): number {
    return Math.abs(this._base * getConversionValue(TimeUnit.Picosecond));
  }

  /** @returns {number} */
  get nanoseconds(): number {
    return Math.abs(this._base * getConversionValue(TimeUnit.Nanosecond));
  }

  /** @returns {number} */
  get microseconds(): number {
    return Math.abs(this._base * getConversionValue(TimeUnit.Microsecond));
  }

  /** @returns {number} */
  get milliseconds(): number {
    return Math.abs(this._base * getConversionValue(TimeUnit.Millisecond));
  }

  /** @returns {number} */
  get seconds(): number {
    return this._base * TimeUnit.Second;
  }

  /** @returns {number} */
  get minutes(): number {
    return this._base / TimeUnit.Minute;
  }

  /** @returns {number} */
  get hours(): number {
    return this._base / TimeUnit.Hour;
  }

  /** @returns {number} */
  get days(): number {
    return this._base / TimeUnit.Day;
  }

  /** @returns {number} */
  get weeks(): number {
    return this._base / TimeUnit.Week;
  }

  /** @returns {number} */
  get months(): number {
    return this._base / TimeUnit.Month;
  }

  /** @returns {number} */
  get years(): number {
    return this._base / TimeUnit.Year;
  }

  /** @returns {number} */
  get decades(): number {
    return this._base / TimeUnit.Decade;
  }

  /** @returns {number} */
  get centuries(): number {
    return this._base / TimeUnit.Century;
  }

  /** @returns {number} */
  get millennia(): number {
    return this._base / TimeUnit.Millennium;
  }

  // Comparison -------------------------------------------------- /

  /**
  * @param {TimeAmount} amount
  * @returns {boolean}
  */
  isEqualTo(amount: TimeAmount): boolean {
    return this.seconds === amount.seconds;
  }

  /**
  * @param {TimeAmount} amount
  * @returns {boolean}
  */
  isGreaterThan(amount: TimeAmount): boolean {
    return this.seconds > amount.seconds;
  }

  /**
  * @param {TimeAmount} amount
  * @returns {boolean}
  */
  isGreaterThanOrEqualTo(amount: TimeAmount): boolean {
    return this.seconds >= amount.seconds;
  }

  /**
  * @param {TimeAmount} amount
  * @returns {boolean}
  */
  isLessThan(amount: TimeAmount): boolean {
    return this.seconds < amount.seconds;
  }

  /**
  * @param {TimeAmount} amount
  * @returns {boolean}
  */
  isLessThanOrEqualTo(amount: TimeAmount): boolean {
    return this.seconds <= amount.seconds;
  }

  // Arithmetic -------------------------------------------------- /

  /**
  * @param {TimeAmount} timeAmounts
  * @returns {TimeAmount}
  */
  plus(...timeAmounts: Array<TimeAmount>): TimeAmount {
    const { seconds, unit } = this;
    const total = timeAmounts.reduce((accumulator: number, timeAmount: TimeAmount) => accumulator + timeAmount.seconds, seconds);
    return new TimeAmount(total / unit, unit);
  }

  /**
  * @param {TimeAmount} timeAmounts
  * @returns {TimeAmount}
  */
  minus(...timeAmounts: Array<TimeAmount>): TimeAmount {
    const { seconds, unit } = this;
    const total = timeAmounts.reduce((accumulator: number, timeAmount: TimeAmount) => accumulator - timeAmount.seconds, seconds);
    return new TimeAmount(total / unit, unit);
  }

  /**
  * @param {number} multipliers
  * @returns {TimeAmount}
  */
  times(...multipliers: Array<number>): TimeAmount {
    const { amount, unit } = this;
    const total = multipliers.reduce((accumulator: number, multiplier: number) => accumulator * multiplier, amount);
    return new TimeAmount(total, unit);
  }

  /**
  * @param {number} divisors
  * @returns {TimeAmount}
  */
  dividedBy(...divisors: Array<number>): TimeAmount {
    const { amount, unit } = this;
    const total = divisors.reduce((accumulator: number, devisor: number) => accumulator / devisor, amount);
    return new TimeAmount(total, unit);
  }

  /**
  * @param {TimeAmount} timeAmounts
  * @returns {number}
  */
  dividedByTime(...timeAmounts: Array<TimeAmount>): number {
    const { seconds, unit } = this;
    return timeAmounts.reduce((accumulator: number, timeAmount: TimeAmount) => accumulator / timeAmount.seconds, seconds);
  }

  // String representation -------------------------------------------------- /

  /**
  * Gets a string description with overridable setup options
  *
  * @param setup
  * @returns {string}
  */
  getDescription(setup: TimeDescriptionSetup = {}): string {
    return TimeAmount.getDescription(this, setup);
  }

  /**
  * Default description
  *
  * @returns {string}
  */
  get description(): string {
    return this.getDescription();
  }

  /**
  * @override
  * String representation
  *
  * @returns {string}
  */
  toString(): string {
    return this.getDescription();
  }

  /**
  * Utility to get time description
  *
  * @param {TimeAmount} timeAmount
  * @param {TimeDescriptionSetup}
  */
  static getDescription(timeAmount: TimeAmount, { templateCreator, templateJoiner, preciseTo = TimeUnit.Femtosecond, levelLimit }: TimeDescriptionSetup = {}): string {
    const makeDescriptionString: TimeDescriptionTemplateCreator = templateCreator ?? defaultTemplateCreator;
    const descriptionParts = [];
    let unit: TimeUnit;
    if (timeAmount.femtoseconds < 1000) {
      unit = TimeUnit.Femtosecond;
    } else if (timeAmount.picoseconds < 1000) {
      unit = TimeUnit.Picosecond;
    } else if (timeAmount.nanoseconds < 1000) {
      unit = TimeUnit.Nanosecond;
    } else if (timeAmount.microseconds < 1000) {
      unit = TimeUnit.Microsecond;
    } else if (timeAmount.milliseconds < 1000) {
      unit = TimeUnit.Millisecond;
    } else if (timeAmount.seconds < 60) {
      unit = TimeUnit.Second;
    } else if (timeAmount.minutes < 60) {
      unit = TimeUnit.Minute;
    } else if (timeAmount.hours < 24) {
      unit = TimeUnit.Hour;
    } else if (timeAmount.days < 7) {
      unit = TimeUnit.Day;
    } else if (timeAmount.weeks < 4) {
      unit = TimeUnit.Week;
    } else if (timeAmount.months < 12) {
      unit = TimeUnit.Month;
    } else if (timeAmount.years < 10) {
      unit = TimeUnit.Year;
    } else if (timeAmount.decades < 10) {
      unit = TimeUnit.Decade;
    } else if (timeAmount.centuries < 10) {
      unit = TimeUnit.Century;
    } else {
      unit = TimeUnit.Millennium;
    }
    const getAmount = (): number => {
      switch (unit) {
        case TimeUnit.Femtosecond: return timeAmount.femtoseconds;
        case TimeUnit.Picosecond: return timeAmount.picoseconds;
        case TimeUnit.Nanosecond: return timeAmount.nanoseconds;
        case TimeUnit.Microsecond: return timeAmount.microseconds;
        case TimeUnit.Millisecond: return timeAmount.milliseconds;
        case TimeUnit.Second: return timeAmount.seconds;
        case TimeUnit.Minute: return timeAmount.minutes;
        case TimeUnit.Hour: return timeAmount.hours;
        case TimeUnit.Day: return timeAmount.days;
        case TimeUnit.Week: return timeAmount.weeks;
        case TimeUnit.Month: return timeAmount.months;
        case TimeUnit.Year: return timeAmount.years;
        case TimeUnit.Decade: return timeAmount.decades;
        case TimeUnit.Century: return timeAmount.centuries;
        default: return timeAmount.millennia;
      }
    };
    const amount = getAmount();
    const roundingThreshold = 0.000001;
    let currentAmount: number = amount;
    let currentUnit: TimeUnit|null = unit;
    let remainder: number|null = null;
    while (currentUnit !== null && currentUnit >= preciseTo && (remainder === null || remainder > 0) && (!levelLimit || (levelLimit && descriptionParts.length <= levelLimit))) {
      let previousAmount: number;
      const roundedAmount = Math.round(currentAmount);
      if (Math.abs(currentAmount - roundedAmount) < roundingThreshold) {
        previousAmount = roundedAmount;
        currentAmount = roundedAmount;
      } else {
        previousAmount = currentAmount;
        currentAmount = Math.floor(currentAmount);
      }
      if (currentAmount > 0) {
        descriptionParts.push(makeDescriptionString(currentAmount, currentUnit));
        remainder = previousAmount % currentAmount;
      } else {
        remainder = previousAmount;
      }
      const roundedRemainder = Math.round(remainder);
      if (Math.abs(roundedRemainder - remainder) < roundingThreshold) remainder = roundedRemainder;
      const nextUnitDown = getPreviousTimeUnit(currentUnit);
      if (currentUnit && nextUnitDown) {
        const currentAmountInSeconds = currentUnit >= 1 ? remainder * getConversionValue(currentUnit) : remainder / getConversionValue(currentUnit);
        currentAmount = nextUnitDown >= 1 ? currentAmountInSeconds / getConversionValue(nextUnitDown) : currentAmountInSeconds * getConversionValue(nextUnitDown);
      }
      currentUnit = nextUnitDown;
    }
    return descriptionParts.join(templateJoiner ?? ", ");
  }

  /**
   * Creates a new Time Amount that is equal to the original but with a new unit
   *
   * @param {TimeAmount} timeAmount
   * @param {TimeUnit} timeUnit
   * @returns {TimeAmount}
   */
  static convert(timeAmount: TimeAmount, timeUnit: TimeUnit): TimeAmount {
    const { _base: base } = timeAmount;
    const amount = timeUnit >= 1 ? base / getConversionValue(timeUnit) : base * getConversionValue(timeUnit);
    return new TimeAmount(amount, timeUnit);
  }
}

export default TimeAmount;
