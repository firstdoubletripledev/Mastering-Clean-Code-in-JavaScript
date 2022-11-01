const { calculateAvg } = require("../avg-calculator");

describe("AvgCalculator", () => {
    it("should return the average of all numbers given", () => {
        let testNumbers = [4, 5, 3];
        let avg = calculateAvg(testNumbers);
        expect(avg).toEqual(4);
    });

    it("should throw an 'Invalid Input' error when given invalid array", () => {
        expect(() => calculateAvg(null)).toThrow(new Error("Invalid Input"));
    })
})

