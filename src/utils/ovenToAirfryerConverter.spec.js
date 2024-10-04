import { expect, test, describe } from 'vitest';
import { convertTemp, convertTime } from './ovenToAirfryerConverter';

const VALID_TEMP = 200; // in celsius
const VALID_TEMP_F = 392; // in fahrenheit
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

    test('it should calculate the correct temperature in celsius', () => {
        expect(convertTemp(VALID_TEMP, VALID_OVEN_TYPE, VALID_UNIT)).toBe(180);
    })

    test('it should calculate the correct temperature in fahrenheit', () => {
        expect(convertTemp(VALID_TEMP_F, VALID_OVEN_TYPE, 'f')).toBe(367);
    })

    test('it should calculate the correct temperature for fan assisted oven', () => {
        expect(convertTemp(VALID_TEMP, 'fan', VALID_UNIT)).toBe(160);
    })
})

describe('convertTime', () => {
    describe.each([-1, 0, '', 'minute', {}, null])('Invalid times', (time) => {
        test(`when the time is: ${time} it should return null`, () => {
            expect(convertTime(time)).toBeNull();
        });
    })

    test('it should calculate the time correctly', () => {
        expect(convertTime(100)).toBe(80);
    })
})