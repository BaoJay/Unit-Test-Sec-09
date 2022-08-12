import { vi, it, expect } from 'vitest'
import { sendDataRequest } from './http'
import { HttpError } from './errors'


const testResponseData = { responseData: 'Success response data' }

// Create a spy to fake fetch function
const fakeFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        // Check if the request body is a string or not
        // Check the stringify() method
        if (typeof options.body !== "string") {
            reject(new Error('Should be a string!'))
        }

        // Define the result object when the request is resolved
        // Replace 'response' variable from real request with testData
        const testData = {
            ok: true,
            status: 500,
            json: () => {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData)
                })

            }
        }
        // Resolve promise with the result data
        resolve(testData)
    })
})

// Use stubGlobal to mock global variables & functions
vi.stubGlobal('fetch', fakeFetch)

it('should send fake request & return any available response data', () => {
    const fakeData = { data: 'data before request' }

    // expect response data to be the same testResponseData
    return expect(sendDataRequest(fakeData)).resolves.toBe(testResponseData)
})

it('should convert the provided data to JSON before sending the request', () => {
    const testData = { key: "test" };
    // return expect(sendDataRequest(testData)).not.rejects.toBe('Should be a string!')

    let errorMessage;
    try {
        sendDataRequest(testData);
    } catch (err) {
        errorMessage = err
    }

    expect(errorMessage).not.toBe('Should be a string!')
})

it('should throw an HttpError, if response.ok is false', () => {

    // Redefine the fakeFetch with mockImplementationOnce
    // This function will execute 1 time
    fakeFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            // Define the result object when the request is resolved
            // Replace 'response' variable from real request with testData
            const testResponse = {
                ok: false,
                json() {
                    return new Promise((resolve, reject) => {
                        resolve(testResponseData)
                    })
                }
            }
            // Resolve promise with the result data
            resolve(testResponse)
        })
    })
    const testData = { key: "test" };

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
})

