# Time Amount

This package allows you to store an amount of time with a set unit of time. It also provides built-in conversions to other time units.

For example, you can store 60 as a measurement of seconds. The minutes conversion would be 1 and the milliseconds conversion would be 60000.

Time units are specified with the `TimeUnit` enum. Time units are available from as low as femtoseconds and as high as millennia.

## Contents
* [Installation](#installation)
* [Create a new instance](#create-a-new-instance)
* [TimeUnit Enum](#timeunit-enum)
* [Conversion](#conversion)
* [Comparison](#comparison)
* [Arithmetic](#arithmetic)
* [Description](#description)

## Installation

Install the module with NPM:

```bash
npm install --save timeamount
```

Import `TimeAmount` and `TimeUnit` into your project:

```javascript
import { TimeAmount, TimeUnit } from 'timeamount';
```

These are likely the only imports you will need, but others include:
 - **getConversionValue:** Gets a non-decimal conversion value for a time unit (the one stored in `TimeUnit` may be a decimal)
 - **getTimeUnitPosition:** Gets a integer position for each `TimeUnit` enum case
 - **getTimeUnitFromPosition:** Looks up the `TimeUnit` associated with the given position integers
 - **getPreviousTimeUnit:** Gets next lower `TimeUnit`
 - **getNextTimeUnit:** Gets next higher `TimeUnit`
 - **TimeDescriptionSetup:** The TypeScript interface to define setup object for time description settings
 - **TimeDescriptionTemplateCreator:** A typealias for a function to map time amount values to an output string
 - **defaultTemplateCreator:** The default function for above. This makes a default english string, but a custom or translated one can be used in it's place.

## Create a new instance

To create a new `TimeAmount` instance:

```javascript
const timeInterval = new TimeAmount(60, TimeUnit.Second);
console.log(timeInterval.amount); // 60
console.log(timeInterval.unit); // 1 (or TimeUnit.Second... the enum value is the amount of seconds in that unit)
console.log(timeInterval.minutes); // 1
console.log(timeInterval.milliseconds); // 60000
```

## TimeUnit Enum

The `TimeUnit` enum has cases for most major time units. The value is the amount of seconds in that unit: 
- **Femtosecond** = 0.000000000000001
- **Picosecond** = 0.000000000001
- **Nanosecond** = 0.000000001
- **Microsecond** = 0.000001
- **Millisecond** = 0.001
- **Second** = 1
- **Minute** = 60
- **Hour** = 3600
- **Day** = 86400
- **Week** = 604800
- **Month** = 2629800
- **Year** = 31557600
- **Decade** = 315576000
- **Centruy** = 3155760000
- **Millenium** = 31557600000

## Conversion

To convert to another `TimeUnit`, use the `convertTo(timeUnit: TimeUnit) => TimeAmount` method. This method creates a new `TimeAmount` with the requested `TimeUnit`:

```javascript
const timeInterval = new TimeAmount(60, TimeUnit.Second);
const timeMS = timeInterval.convertTo(TimeUnit.Millisecond)
console.log(timeMS.amount); // 60000
console.log(timeMS.unit); // 0.001 (TimeUnit.Millisecond)
```

You can also get quick conversions by accessing computed properties of your `timeInterval` instance:

```javascript
const timeInterval = new TimeAmount(60, TimeUnit.Second);
console.log(timeInterval.milliseconds); // 60000
console.log(timeInterval.minutes); // 1
// Etc... there is one property like this for each `TimeUnit` case
```

## Comparison

You can make comparisons between any two `TimeAmount` instances regardless of if the unit matches:

```javascript
const timeInterval = new TimeAmount(60, TimeUnit.Second);
const timeInterval02 = new TimeAmount(1, TimeUnit.Minute);
const timeInterval03 = new TimeAmount(12000, TimeUnit.Millisecond);
console.log(timeInterval.isEqualTo(timeInterval02)); // true
console.log(timeInterval.isEqualTo(timeInterval03)); // false
console.log(timeInterval03.isGreaterThan(timeInterval02)); // true
console.log(timeInterval03.isGreaterThanOrEqualTo(timeInterval02)); // true
console.log(timeInterval03.isLessThan(timeInterval02)); // false
console.log(timeInterval03.isLessThanOrEqualTo(timeInterval02)); // false
```

## Arithmetic

You can perform basic arithmetic with `TimeAmount` instances:

### Addition

Add another `TimeAmount` instance (or several) to your current one with the `plus(...timeAmounts: Array<TimeAmount>) => TimeAmount` method. It will produce a new `TimeAmount` instance with the same time unit as the one you called the method from:

```javascript
const timeInterval = new TimeAmount(60, TimeUnit.Second);
const timeInterval02 = new TimeAmount(1, TimeUnit.Minute);
const combined = timeInterval.plus(timeInterval02);
console.log(combined.amount); // 120
console.log(combined.unit); // 1 (TimeUnit.Second)
// or 
const combined02 = timeInterval02.plus(timeInterval);
console.log(combined.amount); // 2
console.log(combined.unit); // 60 (TimeUnit.Minute)
console.log(timeInterval.isEqualTo(timeInterval02)); // true
```
The `plus()` method will take any number of parameters, so pass as many `TimeAmount` units as you wish to add to the first, comma-separated.

### Subtraction

Subtract another `TimeAmount` instance (or several) from your current one with the `subtract(...timeAmounts: Array<TimeAmount>) => TimeAmount` method. It will produce a new `TimeAmount` instance with the same time unit as the one you called the method from:

```javascript
const timeInterval = new TimeAmount(1, TimeUnit.Minute);
const timeInterval02 = new TimeAmount(30, TimeUnit.Second);
const combined = timeInterval.minus(timeInterval02);
console.log(combined.amount); // 0.5
console.log(combined.unit); // 60 (TimeUnit.Minute)
```

The `minus()` method will take any number of parameters, so pass as many `TimeAmount` units as you wish to subtract from the first, comma-separated.

### Multiplication

Multiply a `TimeAmount` instance by a number (or numbers) `times(...multipliers: Array<number>) => TimeAmount` method. It will produce a new `TimeAmount` instance with the same time unit as the one you called the method from:

```javascript
const timeInterval = new TimeAmount(3, TimeUnit.Minute);
const combined = timeInterval.times(4);
console.log(combined.amount); // 12
console.log(combined.unit); // 60 (TimeUnit.Minute)
```

The `times()` method will take any number of parameters, so pass as many numbers as you wish to multiply the first by, comma-separated.

### Division

Divide a `TimeAmount` instance by a number (or numbers) `dividedBy(...multipliers: Array<number>) => TimeAmount` method. It will produce a new `TimeAmount` instance with the same time unit as the one you called the method from:

```javascript
const timeInterval = new TimeAmount(12, TimeUnit.Minute);
const combined = timeInterval.dividedBy(4);
console.log(combined.amount); // 3
console.log(combined.unit); // 60 (TimeUnit.Minute)
```

The `dividedBy()` method will take any number of parameters, so pass as many numbers as you wish to divide the first by, comma-separated.

You can also divide a `TimeAmount` instance by another `TimeUnit` with the `dividedByTime(...timeAmounts: Array<TimeAmount>) => number` method. It will produce a number that represents the number of times that `TimeAmount` will go into the first:

```javascript
const timeInterval = new TimeAmount(12, TimeUnit.Minute);
const timeInterval02 = new TimeAmount(120, TimeUnit.Second);
const combined = timeInterval.dividedByTime(timeInterval02);
console.log(combined.amount); // 6
console.log(combined.unit); // 60 (TimeUnit.Minute)
```

The `dividedByTime()` method will take any number of parameters, so pass as many numbers as you wish to divide the first by, comma-separated.

## Description

The string description of `TimeAmount` instance can be accessed with the `toString()` method (can access by using the instance in string interpolation) or the `.description` computed property:

```javascript
const timeInterval = new TimeAmount(12, TimeUnit.Minute);
console.log(timeInterval.description); // 12 minutes
console.log(timeInterval.toString()); // 12 minutes
console.log(`${timeInterval}`); // 12 minutes
```

For more complex numbers that don't represent as a integer for the time unit, the algorithm finds the highest unit that can be represented with an integer (1 or more) and then lists the remainders cascading down. For example:

```javascript
const timeInterval = new TimeAmount(45.4323, TimeUnit.Week);
console.log(timeInterval.description); // 10 months, 1 week, 6 days, 15 hours, 37 minutes, 35 seconds, 40 milliseconds

const timeInterval02 = new TimeAmount(60004, TimeUnit.Millisecond);
console.log(timeInterval02.description); // 1 minute, 4 milliseconds

const timeInterval03 = new TimeAmount(2.34456, TimeUnit.Decade);
console.log(timeInterval03.description); // 2 decades, 3 years, 5 months, 1 week, 3 days, 13 hours, 37 minutes, 46 seconds, 559 milliseconds, 999 microseconds, 992 nanoseconds, 773 picoseconds, 555 femtoseconds
```

This a default description, but when a more customizable user-facing string is needed, the `getDescription(setup: TimeDescriptionSetup) => string` method can be used. The setup object can be set with a few optional properties to customize the description output (for example, if you need to translate or output in different format):

Property | Type | Required | Default | Notes
--- | --- | --- | --- | ---
`templateCreator` | `TimeDescriptionTemplateCreator` | false | `defaultTemplateCreator` | This is a function with the signature `(amount: number, unit: TimeUnit) => string` that is used to build the string for each level of time unit. A custom function can be provided translate the output or make other formatting changes.
`templateJoiner` | `string` | false | ", " | Each level is joined with a string (", " by default). You can use this property to join with a custom string.
`preciseTo` | `TimeUnit` | false | `TimeUnit.Femtosecond` | This specifies the lowest level of detail to report in the description. By default, the limit is femtoseconds (no limit on detail). For example, if you specified the limit as `TimeUnit.Second`, any measurement lower than 1 seconds will be omitted. 
`levelLimit` | `number` | false | undefined | This sets a limit to how many levels of detail to go down to drill down to after the highest level. For example, with a limit of 1, "4 hours, 2 minutes, 10 seconds" would be reduced to "4 hours". Upping the level to 2 would include minutes as well, etc. By default, if omitted, this value is undefined and there is no limit on levels.