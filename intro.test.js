import { describe, test, it, expect } from "vitest";
import { fizBuz, max } from ".";

describe("MAX unit testing", () => {

    it("should return a is max", () => {
        expect(max(3, 2)).toBe(3)
    })

    it("should return b is max", () => {
        expect(max(1, 2)).toBe(2)
    })

    it("should return a", () => {
        expect(max(2, 2)).toBe(2)
    })
})

describe("FIZBUZ unit testing", () => {
    it("defined function should return something",()=>{
        expect(fizBuz(15)).toBeDefined()
    })
    it("should return fiz buz", () => {
        expect(fizBuz(15)).toBe("FIZZBUZZ");
    })
    it("should return fiz", () => {
        expect(fizBuz(3)).toBe("FIZZ");
    })
    it("should return buz", () => {
        expect(fizBuz(5)).toBe("BUZZ");
    })
})