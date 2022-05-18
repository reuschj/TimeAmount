/**
 * Enum of time units
 * The value is the amount of seconds in that unit
 */
enum TimeUnit {
  Femtosecond = 0.000000000000001,
  Picosecond = 0.000000000001,
  Nanosecond = 0.000000001,
  Microsecond = 0.000001,
  Millisecond = 0.001,
  Second = 1,
  Minute = 60,
  Hour = 3600,
  Day = 86400,
  Week = 604800,
  Month = 2629800,
  Year = 31557600,
  Decade = 315576000,
  Century = 3155760000,
  Millennium = 31557600000,
}

/**
 * This corrects sub-second values to the inverse (amount of that unit in one second).
 * This is to avoid floating point rounding issues.
 * This will make different logic for sub-second conversion (divide where you would multiply or multiply where you would divide).
 *
 * @param timeUnit
 * @returns A non-decimal conversion value to use from a time unit.
 */
export const getConversionValue = (timeUnit: TimeUnit): number => {
  switch (timeUnit) {
    case TimeUnit.Femtosecond: return 1000000000000000;
    case TimeUnit.Picosecond: return 1000000000000;
    case TimeUnit.Nanosecond: return 1000000000;
    case TimeUnit.Microsecond: return 1000000;
    case TimeUnit.Millisecond: return 1000;
    default: return timeUnit as number;
  }
};

/**
 * @param timeUnit
 * @returns An integer position for each enum case
 */
export const getTimeUnitPosition = (timeUnit: TimeUnit): number | undefined => {
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
    case TimeUnit.Century: return 8;
    case TimeUnit.Millennium: return 9;
    default: return undefined;
  }
};

/**
 * @param position
 * @returns The time unit associated with the given position integers
 */
export const getTimeUnitFromPosition = (position: number): TimeUnit | undefined => {
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
    case 8: return TimeUnit.Century;
    case 9: return TimeUnit.Millennium;
    default: return undefined;
  }
};

/**
 * @param timeUnit
 * @param decrement - Amount of positions to decrease by
 * @returns The next lower time unit (or looks a given number of positions down the chain)
 */
export const getPreviousTimeUnit = (timeUnit: TimeUnit, decrement: number = 1): TimeUnit | undefined => {
  const position = getTimeUnitPosition(timeUnit);
  const previousPosition = typeof position !== "undefined" ? position - decrement : undefined;
  return typeof previousPosition !== "undefined" ? getTimeUnitFromPosition(previousPosition) : undefined;
};

/**
 * @param timeUnit
 * @param increment - Amount of positions to increase by
 * @returns The next higher time unit (or looks a given number of positions up the chain)
 */
export const getNextTimeUnit = (timeUnit: TimeUnit, increment: number = 1): TimeUnit | undefined => {
  const position = getTimeUnitPosition(timeUnit);
  const nextPosition = typeof position !== "undefined" ? position + increment : undefined;
  return typeof nextPosition !== "undefined" ? getTimeUnitFromPosition(nextPosition) : undefined;
};

export default TimeUnit;
