import { expect, it } from 'vitest';
import { validateNotEmpty } from './validation'

it('should throw an error, if an empty text is passed', () => {
    const input = '';

    const resultFn = () => validateNotEmpty(input)

    expect(resultFn).toThrow()
})

it('should throw an error, if a blank space input is passed', () => {
    const input = '  ';

    const resultFn = () => validateNotEmpty(input)

    expect(resultFn).toThrow()
})

it('should throw an error with provided message, if an empty text is passed', () => {
    const input = '';
    const testMessage = 'Not an empty string'

    const resultFn = () => validateNotEmpty(input, testMessage)

    expect(resultFn).toThrow(testMessage)
})

it('should pass, if non-empty text is provided', () => {
    const input1 = 'test message';
    const input2 = '       test message           ';

    const resultFn1 = () => validateNotEmpty(input1, 'not to throw');
    const resultFn2 = () => validateNotEmpty(input2, 'not to throw');

    expect(resultFn1).not.toThrow()
    expect(resultFn2).not.toThrow()
})