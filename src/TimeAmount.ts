import TimeUnit, { getPreviousTimeUnit, getConversionValue } from "./TimeUnit";
import TimeDescriptionSetup, { TimeDescriptionTemplateCreator, defaultTemplateCreator } from "./TimeDescriptionSetup";

/**
 * Class to store an amount of time with a set unit of time with conversions to other time units
 */
class TimeAmount {
  #amount: number;
  #unit: TimeUnit;
  #base: number;

  /**
   * Class to store an amount of time with a set unit of time with conversions to other time units
   *
   * @param amount
   * @param unit
   */
  constructor(amount: number, unit: TimeUnit = TimeUnit.Millisecond) {
    this.#amount = amount;
    this.#unit = unit;
    this.#base = unit >= 1 ? amount * getConversionValue(unit) : amount / getConversionValue(unit);
  }

  // Amount -------------------------------------------------- /

  get amount(): number {
    return this.#amount;
  }

  set amount(amount: number) {
    const { unit } = this;
    this.#amount = amount;
    this.#base = unit >= 1 ? amount * unit : getConversionValue(unit) / getConversionValue(unit);
  }

  // Unit -------------------------------------------------- /

  get unit(): TimeUnit {
    return this.#unit;
  }

  set unit(unit: TimeUnit) {
    const { amount } = this;
    this.#unit = unit;
    this.#base = unit >= 1 ? amount * getConversionValue(unit) : amount / getConversionValue(unit);
  }

  // Base -------------------------------------------------- /

  private get base(): number {
    return this.#base;
  }

  // Conversions -------------------------------------------------- /

  /**
   * @param timeUnit
   * @returns A new Time Amount that is equal to the original but with a new unit
   */
  convertTo(timeUnit: TimeUnit): TimeAmount {
    return TimeAmount.convert(this, timeUnit);
  }

  get femtoseconds(): number {
    return Math.abs(this.#base * getConversionValue(TimeUnit.Femtosecond));
  }

  get picoseconds(): number {
    return Math.abs(this.#base * getConversionValue(TimeUnit.Picosecond));
  }

  get nanoseconds(): number {
    return Math.abs(this.#base * getConversionValue(TimeUnit.Nanosecond));
  }

  get microseconds(): number {
    return Math.abs(this.#base * getConversionValue(TimeUnit.Microsecond));
  }

  get milliseconds(): number {
    return Math.abs(this.#base * getConversionValue(TimeUnit.Millisecond));
  }

  get seconds(): number {
    return this.#base * TimeUnit.Second;
  }

  get minutes(): number {
    return this.#base / TimeUnit.Minute;
  }

  /** @returns {number} */
  get hours(): number {
    return this.#base / TimeUnit.Hour;
  }

  get days(): number {
    return this.#base / TimeUnit.Day;
  }

  get weeks(): number {
    return this.#base / TimeUnit.Week;
  }

  get months(): number {
    return this.#base / TimeUnit.Month;
  }

  get years(): number {
    return this.#base / TimeUnit.Year;
  }

  get decades(): number {
    return this.#base / TimeUnit.Decade;
  }

  get centuries(): number {
    return this.#base / TimeUnit.Century;
  }

  get millennia(): number {
    return this.#base / TimeUnit.Millennium;
  }

  // Comparison -------------------------------------------------- /

  /**
   * @param amount 
   * @returns If time amounts are equal
   */
  isEqualTo(amount: TimeAmount): boolean {
    return this.seconds === amount.seconds;
  }

  /**
   * @param amount 
   * @returns If time amounts is greater than
   */
  isGreaterThan(amount: TimeAmount): boolean {
    return this.seconds > amount.seconds;
  }

  /**
   * @param amount 
   * @returns If time amounts is greater than or equal to
   */
  isGreaterThanOrEqualTo(amount: TimeAmount): boolean {
    return this.seconds >= amount.seconds;
  }

  /**
   * @param amount 
   * @returns If time amounts is less than
   */
  isLessThan(amount: TimeAmount): boolean {
    return this.seconds < amount.seconds;
  }

  /**
   * @param amount 
   * @returns If time amounts is less than or equal to
   */
  isLessThanOrEqualTo(amount: TimeAmount): boolean {
    return this.seconds <= amount.seconds;
  }

  // Arithmetic -------------------------------------------------- /

  /**
   * @param timeAmounts - One or more time amounts
   * @returns The sum of the time amounts
   */
  plus(...timeAmounts: TimeAmount[]): TimeAmount {
    const { amount, unit } = this;
    const alignedAmounts = timeAmounts.map((timeAmount) => timeAmount.convertTo(unit).amount);
    const total = alignedAmounts.reduce((accumulator, adder) => accumulator + adder, amount);
    return new TimeAmount(total, unit);
  }

  /**
   * @param timeAmounts - One or more time amounts
   * @returns The amount after each time amount is subtracted from the last
   */
  minus(...timeAmounts: TimeAmount[]): TimeAmount {
    const { amount, unit } = this;
    const alignedAmounts = timeAmounts.map((timeAmount) => timeAmount.convertTo(unit).amount);
    const total = alignedAmounts.reduce((accumulator, subtractAmount) => accumulator - subtractAmount, amount);
    return new TimeAmount(total, unit);
  }

  /**
   * @param timeAmounts - One or more time amounts
   * @returns The product of the time amount and multipliers
   */
  times(...multipliers: number[]): TimeAmount {
    const { amount, unit } = this;
    const total: number = multipliers.reduce((accumulator, multiplier) => accumulator * multiplier, amount);
    return new TimeAmount(total, unit);
  }

  /**
   * @param timeAmounts - One or more time amounts
   * @returns The amount after each time amount is divided by the divisors
   */
  dividedBy(...divisors: number[]): TimeAmount {
    const { amount, unit } = this;
    const total = divisors.reduce((accumulator, devisor) => accumulator / devisor, amount);
    return new TimeAmount(total, unit);
  }

  /**
  * @param timeAmounts
  * @returns The number of times the time amounts go into the original
  */
  dividedByTime(...timeAmounts: TimeAmount[]): number {
    const { amount, unit } = this;
    const alignedAmounts = timeAmounts.map((timeAmount) => timeAmount.convertTo(unit).amount);
    return alignedAmounts.reduce((accumulator, divisor) => accumulator / divisor, amount);
  }

  // String representation -------------------------------------------------- /

  /**
   * @param setup - Options for customizing time description
   * @returns A string description with overridable setup options
   */
  getDescription(setup?: TimeDescriptionSetup): string {
    return TimeAmount.getDescription(this, setup);
  }

  /**
   * Default description
   */
  get description(): string {
    return this.getDescription();
  }

  /**
   * @returns String representation
   */
  toString(): string {
    return this.getDescription();
  }

  /**
   * A utility to get time description from a time amount
   *
   * @param timeAmount
   * @param [setup] - Options to configure the time amount description
   * @returns A string representation of the time amount
   */
  static getDescription(
    timeAmount: TimeAmount,
    setup?: TimeDescriptionSetup,
  ): string {
    const { templateCreator, templateJoiner, preciseTo = TimeUnit.Femtosecond, levelLimit } = setup ?? {};
    const makeDescriptionString: TimeDescriptionTemplateCreator = templateCreator ?? defaultTemplateCreator;
    const descriptionParts = [];
    const unit: TimeUnit = (() => {
      if (timeAmount.femtoseconds < 1000) {
        return TimeUnit.Femtosecond;
      } else if (timeAmount.picoseconds < 1000) {
        return TimeUnit.Picosecond;
      } else if (timeAmount.nanoseconds < 1000) {
        return TimeUnit.Nanosecond;
      } else if (timeAmount.microseconds < 1000) {
        return TimeUnit.Microsecond;
      } else if (timeAmount.milliseconds < 1000) {
        return TimeUnit.Millisecond;
      } else if (timeAmount.seconds < 60) {
        return TimeUnit.Second;
      } else if (timeAmount.minutes < 60) {
        return TimeUnit.Minute;
      } else if (timeAmount.hours < 24) {
        return TimeUnit.Hour;
      } else if (timeAmount.days < 7) {
        return TimeUnit.Day;
      } else if (timeAmount.weeks < 4) {
        return TimeUnit.Week;
      } else if (timeAmount.months < 12) {
        return TimeUnit.Month;
      } else if (timeAmount.years < 10) {
        return TimeUnit.Year;
      } else if (timeAmount.decades < 10) {
        return TimeUnit.Decade;
      } else if (timeAmount.centuries < 10) {
        return TimeUnit.Century;
      } else {
        return TimeUnit.Millennium;
      }
    })();
    const amount: number = (() => {
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
    })();
    const roundingThreshold = 0.000001;
    let currentAmount: number = amount;
    let currentUnit: TimeUnit | undefined = unit;
    let remainder: number | undefined;
    while (typeof currentUnit !== "undefined" && currentUnit >= preciseTo && (typeof remainder === "undefined" || remainder > 0) && (!levelLimit || (levelLimit && descriptionParts.length < levelLimit))) {
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
   * Creates a new time amount that is equal to the original but with a new unit
   *
   * @param timeAmount - The original time amount
   * @param timeUnit - The new time unit to convert to
   * @returns A new time amount that is equal to the original but with a new unit
   */
  static convert(
    timeAmount: TimeAmount,
    timeUnit: TimeUnit
  ): TimeAmount {
    const { base } = timeAmount;
    const amount = timeUnit >= 1 ? base / getConversionValue(timeUnit) : base * getConversionValue(timeUnit);
    return new TimeAmount(amount, timeUnit);
  }
}

export default TimeAmount;
