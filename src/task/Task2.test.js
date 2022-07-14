import {getMonth} from "./Task2";

describe('Test getMonth function', () => {
    it("must operate correctly with number from 1 to 12", () => {
        expect(getMonth(1)).toBe('Январь');
    });

    it("must operate correctly with invalid number (more then 12 or less then 1", () => {
        expect(getMonth(13)).toBe("Число должно быть от 1 до 12");
    });

    it("must operate correctly if value not a number", () => {
        expect(getMonth('abc')).toBe("n должно быть числом");
    });
});