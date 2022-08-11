import { expect, it } from 'vitest';
import { validateNotEmpty } from './validation'

it('should throw an error if an empty text is provided', () => {
    const input = '';
    const testMessage = 'Not an empty string'

    const result = validateNotEmpty(input, testMessage)

    expect(result).toThrow()
})
