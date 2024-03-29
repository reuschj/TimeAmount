import TimeUnit from "./TimeUnit";

/**
 * A function that takes an amount and time unit and formats a string for output
 */
export type TimeDescriptionTemplateCreator = (amount: number, unit: TimeUnit) => string

/**
 * A default template creator to use if none provided
 *
 * @param amount
 * @param unit
 * @returns A string representation of the time amount.
 */
export const defaultTemplateCreator: TimeDescriptionTemplateCreator = (amount: number, unit: TimeUnit): string => {
  const getUnitString = (unitAmount: number = amount, timeUnit: TimeUnit = unit): string => {
    switch (timeUnit) {
      case TimeUnit.Femtosecond: return unitAmount === 1 ? "femtosecond" : "femtoseconds";
      case TimeUnit.Picosecond: return unitAmount === 1 ? "picosecond" : "picoseconds";
      case TimeUnit.Nanosecond: return unitAmount === 1 ? "nanosecond" : "nanoseconds";
      case TimeUnit.Microsecond: return unitAmount === 1 ? "microsecond" : "microseconds";
      case TimeUnit.Millisecond: return unitAmount === 1 ? "millisecond" : "milliseconds";
      case TimeUnit.Second: return unitAmount === 1 ? "second" : "seconds";
      case TimeUnit.Minute: return unitAmount === 1 ? "minute" : "minutes";
      case TimeUnit.Hour: return unitAmount === 1 ? "hour" : "hours";
      case TimeUnit.Day: return unitAmount === 1 ? "day" : "days";
      case TimeUnit.Week: return unitAmount === 1 ? "week" : "weeks";
      case TimeUnit.Month: return unitAmount === 1 ? "month" : "months";
      case TimeUnit.Year: return unitAmount === 1 ? "year" : "years";
      case TimeUnit.Decade: return unitAmount === 1 ? "decade" : "decades";
      case TimeUnit.Century: return unitAmount === 1 ? "century" : "centuries";
      case TimeUnit.Millennium: return unitAmount === 1 ? "millennium" : "millennia";
      default: return "";
    }
  };
  return `${amount} ${getUnitString(amount, unit)}`;
};

/**
 * Interface to describe a setup oject for a time description string builder
 */
interface TimeDescriptionSetup {
  templateCreator?: TimeDescriptionTemplateCreator,
  templateJoiner?: string,
  preciseTo?: TimeUnit,
  levelLimit?: number,
}

export default TimeDescriptionSetup;
