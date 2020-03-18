const { expect } = require('chai');
const { TimeAmount, TimeUnit } = require('../dist');

describe('TimeAmount works as expected.', () => {
  it('can store a precise number with unit and provide conversions.', () => {
    const timeAmount01 = new TimeAmount(4.5655, TimeUnit.Second);
    expect(timeAmount01.amount).to.equal(4.5655);
    expect(timeAmount01.unit).to.equal(TimeUnit.Second);
    expect(timeAmount01.femtoseconds).to.equal(4565500000000000);
    expect(timeAmount01.picoseconds).to.equal(4565500000000);
    expect(timeAmount01.nanoseconds).to.equal(4565500000);
    expect(timeAmount01.microseconds).to.equal(4565500);
    expect(timeAmount01.milliseconds).to.equal(4565.5);
    expect(timeAmount01.seconds).to.equal(4.5655);
    expect(timeAmount01.minutes).to.equal(0.07609166666666667);
    expect(timeAmount01.hours).to.equal(0.0012681944444444444);
    expect(timeAmount01.days).to.equal(0.00005284143518518519);
    expect(timeAmount01.weeks).to.equal(0.000007548776455026455);
    expect(timeAmount01.months).to.equal(0.0000017360635789793901);
    expect(timeAmount01.years).to.equal(0.00000014467196491494918);
    expect(timeAmount01.decades).to.equal(0.000000014467196491494917);
    expect(timeAmount01.centuries).to.equal(0.0000000014467196491494917);
    expect(timeAmount01.millenia).to.equal(0.00000000014467196491494918);
  });
  it('can store a simple number with unit and provide conversions.', () => {
    const timeAmount01 = new TimeAmount(4, TimeUnit.Hour);
    expect(timeAmount01.amount).to.equal(4);
    expect(timeAmount01.unit).to.equal(TimeUnit.Hour);
    expect(timeAmount01.femtoseconds).to.equal(14400000000000000000);
    expect(timeAmount01.picoseconds).to.equal(14400000000000000);
    expect(timeAmount01.nanoseconds).to.equal(14400000000000);
    expect(timeAmount01.microseconds).to.equal(14400000000);
    expect(timeAmount01.milliseconds).to.equal(14400000);
    expect(timeAmount01.seconds).to.equal(14400);
    expect(timeAmount01.minutes).to.equal(240);
    expect(timeAmount01.hours).to.equal(4);
    expect(timeAmount01.days).to.equal(0.16666666666666666);
    expect(timeAmount01.weeks).to.equal(0.023809523809523808);
    expect(timeAmount01.months).to.equal(0.0054757015742642025);
    expect(timeAmount01.years).to.equal(0.0004563084645220169);
    expect(timeAmount01.decades).to.equal(0.00004563084645220169);
    expect(timeAmount01.centuries).to.equal(0.000004563084645220169);
    expect(timeAmount01.millenia).to.equal(0.0000004563084645220169);
  });
  it('can compare two time amounts.', () => {
    const timeAmount01 = new TimeAmount(45.342, TimeUnit.Hour);
    const timeAmount02 = new TimeAmount(2.34, TimeUnit.Day);
    const timeAmount03 = new TimeAmount(24, TimeUnit.Hour);
    const timeAmount04 = new TimeAmount(1, TimeUnit.Day);
    expect(timeAmount01.isEqualTo(timeAmount02)).to.equal(false);
    expect(timeAmount03.isEqualTo(timeAmount04)).to.equal(true);
    expect(timeAmount03.isGreaterThanOrEqualTo(timeAmount04)).to.equal(true);
    expect(timeAmount03.isLessThanOrEqualTo(timeAmount04)).to.equal(true);
    expect(timeAmount01.isGreaterThan(timeAmount02)).to.equal(false);
    expect(timeAmount01.isGreaterThanOrEqualTo(timeAmount02)).to.equal(false);
    expect(timeAmount03.isGreaterThan(timeAmount04)).to.equal(false);
    expect(timeAmount01.isLessThan(timeAmount02)).to.equal(true);
    expect(timeAmount01.isLessThanOrEqualTo(timeAmount02)).to.equal(true);
    expect(timeAmount03.isLessThan(timeAmount04)).to.equal(false);
  });
  it('can add two time amounts.', () => {
    const timeAmount01 = new TimeAmount(2, TimeUnit.Hour);
    const timeAmount02 = new TimeAmount(15, TimeUnit.Minute);
    const timeAmount03 = new TimeAmount(24, TimeUnit.Hour);
    const timeAmount04 = new TimeAmount(1, TimeUnit.Day);
    expect(timeAmount01.plus(timeAmount02).amount).to.equal(2.25);
    expect(timeAmount01.plus(timeAmount02, timeAmount03).amount).to.equal(26.25);
    expect(timeAmount01.plus(timeAmount02, timeAmount03, timeAmount02).amount).to.equal(26.5);
    expect(timeAmount01.plus(timeAmount02, timeAmount03, timeAmount04).amount).to.equal(50.25);
  });
  it('can subtract two time amounts.', () => {
    const timeAmount01 = new TimeAmount(2, TimeUnit.Hour);
    const timeAmount02 = new TimeAmount(15, TimeUnit.Minute);
    const timeAmount03 = new TimeAmount(24, TimeUnit.Hour);
    const timeAmount04 = new TimeAmount(1, TimeUnit.Day);
    expect(timeAmount01.minus(timeAmount02).amount).to.equal(1.75);
    expect(timeAmount03.minus(timeAmount02, timeAmount01).amount).to.equal(21.75);
    expect(timeAmount04.minus(timeAmount03).amount).to.equal(0);
  });
  it('can multiply two time amounts.', () => {
    const timeAmount01 = new TimeAmount(30, TimeUnit.Second);
    const timeAmount02 = new TimeAmount(10, TimeUnit.Minute);
    const timeAmount03 = new TimeAmount(24, TimeUnit.Hour);
    const timeAmount04 = new TimeAmount(2, TimeUnit.Day);
    expect(timeAmount02.times(timeAmount01).amount).to.equal(300);
    // expect(timeAmount03.minus(timeAmount02, timeAmount01).amount).to.equal(21.75);
    // expect(timeAmount04.minus(timeAmount03).amount).to.equal(0);
  });
});