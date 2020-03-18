import TimeUnit from "./TimeUnit";
/**
* A function that takes an amount and time unit and formats a string for output
*/
export declare type TimeDescriptionTemplateCreator = (amount: number, unit: TimeUnit) => string;
/**
 * A default template creator to use if none provided
 *
 * @param {number} amount
 * @param {TimeUnit} unit
 * @returns {string}
 */
export declare const defaultTemplateCreator: TimeDescriptionTemplateCreator;
/**
* Inteface to describe a setup oject for a time description string builder
*/
interface TimeDescriptionSetup {
    templateCreator?: TimeDescriptionTemplateCreator;
    preciseTo?: TimeUnit;
    levelLimit?: number;
}
export default TimeDescriptionSetup;
