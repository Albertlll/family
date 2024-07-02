import { render } from "@testing-library/react"
import { expect, test, describe } from 'vitest'
import App from "../App"


describe('Component', () => {
    test('demo', () => {
        expect(true).toBe(true)
    })
    
    test("Renders the main page", () => {
        render(<App />)
        expect(true).toBeTruthy()
    })

})