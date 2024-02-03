import { describe, test, it, expect } from "vitest";
import { average, fizBuz, max } from ".";

describe("MAX unit testing", () => {
    /*aaa
    //
    //
    */
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
    it("defined function should return something", () => {
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

describe("average calculate from array elements", () => {
    // Test driven approach write test first than write code
    it("should return Nan", () => {
        expect(average([])).toBe(NaN);
    })
    it("should return average of no", () => {
        expect(average([1,2,3])).toBe(2);
    })
})