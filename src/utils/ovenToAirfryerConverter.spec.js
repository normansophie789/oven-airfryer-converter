import { expect, test, describe } from 'vitest';
import { convertTemp, convertTime } from './ovenToAirfryerConverter';

const VALID_TEMP = 200;
const VALID_OVEN_TYPE = 'conventional';
const VALID_UNIT = 'c';

describe('convertTemp', () => {
    describe.each([-1, 0, 39, '', 'hot', {}, null])('Invalid temperatures', (temp) => {
        test(`when the temperature is: ${temp} it should return null`, () => {
            expect(convertTemp(temp, VALID_OVEN_TYPE, VALID_UNIT)).toBeNull();
        });
    })

    describe.each(['1', 1, 'd', null, 'oventype', ''])('Invalid oven types', (ovenType) => {
        test(`when the oven type is ${ovenType} it should return null`, () => {
            expect(convertTemp(VALID_TEMP, ovenType, VALID_UNIT)).toBeNull();
        });
    })

    describe.each(['1', 1, 'd', null, 'unit', 'C'])('Invalid units', (unit) => {
        test(`when the unit is ${unit} it should return null`, () => {
            expect(convertTemp(VALID_TEMP, VALID_OVEN_TYPE, unit)).toBeNull();
        });
    })

    // check that it converts celsius correctly
    // 

    // check that it converts fahrenheit correctly

    // check that it converts both oven types correctly
})

describe('convertTime', () => {
    // check that validation works as expected

    // check that it converts duration in minutes correctly
})