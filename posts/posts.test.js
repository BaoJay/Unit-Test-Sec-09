import { it, expect, describe, beforeEach } from 'vitest'
import { extractPostData } from './posts'

describe('extractPostData()', () => {
    const testTitle = 'Test Title';
    const testContent = 'Test Content';
    // Create a fake Form class 
    let testFormData;

    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get(identifier) {
                return this[identifier]
            }
        }
    })
    it('should extract the title & content data from the Form', () => {
        // Arrange

        // Act
        const data = extractPostData(testFormData)

        // Assert
        // Check if it returns the correct data
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);

    })
})
