import { Solution2 } from "./solution-2";

describe(`
## Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

_Answer: 4613732_
`, () => {
    let solution2: Solution2;

    beforeEach(() => {
        solution2 = new Solution2();
    });

    it('the sum should be 44 when the max is 100', (done) => {
        solution2.getSumOfEvenFibonanci(100).subscribe(sum => {
            expect(sum).toBe(44);
            done();
        })
    });

    it('the sum should be x when the max is 4000000', (done) => {
        solution2.getSumOfEvenFibonanci(4000000).subscribe(sum => {
            expect(sum).toBe(4613732);
            done();
        })
    });
});