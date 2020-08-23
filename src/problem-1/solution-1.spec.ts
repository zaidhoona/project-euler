import { Solution1 } from "./solution-1";

describe('Sum of multiples of 3 and 5', () => {
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