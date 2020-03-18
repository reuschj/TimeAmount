/**
* Enum of time units
* Stored value is the amount of time for that unit in seconds
*/
declare enum TimeUnit {
    Femtosecond = 1e-15,
    Picosecond = 1e-12,
    Nanosecond = 1e-9,
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
    Millenium = 31557600000
}
/**
 * Assigns a integer position to each enum case
 *
 * @param {TimeUnit} timeUnit
 * @returns {number|null}
 */
export declare const getTimeUnitPosition: (timeUnit: TimeUnit) => number | null;
/**
 * Looks up the time unit associated with the given position integers
 *
 * @param {number} position
 * @returns {TimeUnit|null}
 */
export declare const getTimeUnitFromPosition: (position: number) => TimeUnit | null;
/**
 * Gets the next lower time unit (or looks a given number of positions down the chain)
 *
 * @param {TimeUnit} timeUnit
 * @param {number} decrement - Amount of positions to decrease by
 * @returns {TimeUnit|null}
 */
export declare const getPreviousTimeUnit: (timeUnit: TimeUnit, decrement?: number) => TimeUnit | null;
/**
 * Gets the next higher time unit (or looks a given number of positions up the chain)
 *
 * @param {TimeUnit} timeUnit
 * @param {number} increment - Amount of positions to increase by
 * @returns {TimeUnit|null}
 */
export declare const getNextTimeUnit: (timeUnit: TimeUnit, increment?: number) => TimeUnit | null;
export default TimeUnit;
