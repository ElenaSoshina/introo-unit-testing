import {definePrime} from "./definePrime.js";

describe("tests for definePrime function", ()=> {
    const simple = 17;
    const complex = 18;
    it("should operate correctly with simple number", () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое число`)
    }),
        it("should operate correctly with complex number", () => {
            expect(definePrime(complex)).toBe(`Число ${complex} - составное число`)
        }),
            it("should operate correctly with invalid number", () => {
             expect(definePrime(1001)).toBe('Данные неверны')
            })
})