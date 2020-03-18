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
  Centruy = 3155760000,
  Millenium = 31557600000,
}

/**
 * Gets a conversion value to use from a time unit
 * This corrects sub-second values to the inverse (amount of that unit in one second)
 * This is to avoid floating point rounding issues
 * This will make different logic for subsecond conversion (divide where you would multiply or multiply where you would divide)
 *
 * @param {TimeUnit} timeUnit
 * @returns {number}
 */
export const getConversionValue = (timeUnit: TimeUnit): number => {
  switch (timeUnit) {
    case TimeUnit.Femtosecond: return 1000000000000000;
    case TimeUnit.Picosecond: return 1000000000000;
    case TimeUnit.Nanosecond: return 1000000000;
    case TimeUnit.Microsecond: return 1000000;
    case TimeUnit.Millisecond: return 1000;
    default: return <number>timeUnit;
  }
};

/**
 * Assigns a integer position to each enum case
 *
 * @param {TimeUnit} timeUnit
 * @returns {number|null}
 */
export const getTimeUnitPosition = (timeUnit: TimeUnit): number|null => {
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
export const getTimeUnitFromPosition = (position: number): TimeUnit|null => {
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
export const getPreviousTimeUnit = (timeUnit: TimeUnit, decrement: number = 1): TimeUnit|null => {
  const position = getTimeUnitPosition(timeUnit);
  const previousPosition = position !== null ? position - decrement : null;
  return previousPosition !== null ? getTimeUnitFromPosition(previousPosition) : null;
};

/**
 * Gets the next higher time unit (or looks a given number of positions up the chain)
 *
 * @param {TimeUnit} timeUnit
 * @param {number} increment - Amount of positions to increase by
 * @returns {TimeUnit|null}
 */
export const getNextTimeUnit = (timeUnit: TimeUnit, increment: number = 1): TimeUnit|null => {
  const position = getTimeUnitPosition(timeUnit);
  const nextPosition = position !== null ? position + increment : null;
  return nextPosition !== null ? getTimeUnitFromPosition(nextPosition) : null;
};

export default TimeUnit;
