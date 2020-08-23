import { Solution1 } from "./solution-1";

describe(`
## Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

_Answer: 233168_
`, () => {
   let solution1: Solution1;

   beforeEach(() => {
      solution1 = new Solution1();
   });
    
   it('if the max number is 10 the sum should be 23', (done) => {
      const sum$ = solution1.getSumOfMultiples(10);
      sum$.subscribe(sum => {
         expect(sum).toBe(23);
         done();
      });
   });

   it('if the max number is 1000 the sum should be ', (done) => {
      const sum$ = solution1.getSumOfMultiples(1000);
      sum$.subscribe(sum => {
         expect(sum).toBe(233168);
         done();
      });
   })
});