import { describe, it, expect } from 'vitest'
import { HttpError } from './errors'

describe('HttpError class', () => {
    it('should create a new HttpError instance', () => {
        const inputErr = new HttpError(500, { message: 'Something went wrong!' }, "test")

        expect(inputErr).toBeInstanceOf(HttpError)
    })

    it('should not throw an error if not enough arguments passed', () => {
        const inputErr1 = new HttpError();
        const inputErr2 = new HttpError(500)
        const inputErr3 = new HttpError(500, { message: 'Something went wrong' })

        expect(inputErr1).toBeInstanceOf(HttpError)
        expect(inputErr2).toBeInstanceOf(HttpError)
        expect(inputErr3).toBeInstanceOf(HttpError)
    })
    it('should not throw an error if more arguments are passed', () => {
        const inputErr1 = new Error(500, { message: 'test!' }, "test1", "test2")
        const inputErr2 = new Error(500, { message: 'test!' }, "test1", "test2", "test3")


        expect(inputErr1).toBeUndefined()
        expect(inputErr2).toBeUndefined()

    })

})