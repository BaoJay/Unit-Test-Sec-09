import { it, expect } from 'vitest'
import { extractPostData } from './posts'

it('should extract the title & content data from the Form', () => {
    // Arrange
    const testTitle = 'Test Title';
    const testContent = 'Test Content';
    // Create a fake Form class 
    const testFormData = {
        title: testTitle,
        content: testContent,
        get(identifier) {
            return this[identifier]
        }
    }

    // Act
    const data = extractPostData(testFormData)

    // Assert
    // Check if it returns the correct data
    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);

})