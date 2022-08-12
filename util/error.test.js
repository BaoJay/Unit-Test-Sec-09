import { describe, it, expect } from 'vitest'
import { HttpError, ValidationError } from './errors'

const string = 'test';
const obj = { message: 'Something went wrong!' };
const num = 500;
// const emptyString = '';
// ========== HttpError =================
describe('HttpError Class', () => {

    const error1 = new HttpError()
    const error2 = new HttpError(num)
    const error3 = new HttpError(num, obj)
    const error41 = new HttpError(num, obj, string)
    const error42 = new HttpError(num, string, string)
    const error43 = new HttpError(num, obj, obj)
    const error44 = new HttpError(num, string, obj)
    const error6 = new HttpError(num, obj, string, string, string)
    const error5 = new HttpError(num, obj, string, string)

    it('should be an instance if not enough arguments are passed', () => {
        expect(error1).toBeInstanceOf(HttpError)
        expect(error2).toBeInstanceOf(HttpError)
        expect(error3).toBeInstanceOf(HttpError)
    })

    it('should be an instance if enough arguments are passed', () => {
        expect(error41).toBeInstanceOf(HttpError)
    })

    it('should be an instance if more arguments are passed', () => {
        expect(error5).toBeInstanceOf(HttpError)
        expect(error6).toBeInstanceOf(HttpError)
    })

    it('has constructor working correctly', () => {
        expect(error41.statusCode).toEqual(num);
        expect(error41.message).toEqual(obj);
        expect(error41.data).toEqual(string);

        expect(error42.statusCode).toEqual(num);
        expect(error42.message).toEqual(string);
        expect(error42.data).toEqual(string);

        expect(error43.statusCode).toEqual(num);
        expect(error43.message).toEqual(obj);
        expect(error43.data).toEqual(obj);

        expect(error44.statusCode).toEqual(num);
        expect(error44.message).toEqual(string);
        expect(error44.data).toEqual(obj);
    })
})

// ========== HttpError =================
describe('ValidationError Class', () => {
    const valid1 = new ValidationError(num)
    const valid2 = new ValidationError(string)
    const valid3 = new ValidationError(obj)

    it('has constructor working correctly', () => {
        expect(valid1.message).toEqual(num);
        expect(valid2.message).toEqual(string);
        expect(valid3.message).toEqual(obj);
    })

    it('should be an instance, if more or less than one argument is provided', () => {
        const valid1 = new ValidationError()
        const valid2 = new ValidationError(string, string)
        const valid3 = new ValidationError(obj, obj, obj)

        expect(valid1).toBeInstanceOf(ValidationError)
        expect(valid2).toBeInstanceOf(ValidationError)
        expect(valid3).toBeInstanceOf(ValidationError)
    })
})  
