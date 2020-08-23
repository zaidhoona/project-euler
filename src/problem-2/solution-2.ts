import { Observable, from } from "rxjs";
import { filter, reduce, tap, takeUntil, takeWhile } from "rxjs/operators";

export class Solution2 {
    *fibonanci() {
        var num1 = 1;
        var num2 = 1;
        while (1) {
            var current = num2;
            num2 = num1;
            num1 = num1 + current;
            yield current;
        }
    }

    getSumOfEvenFibonanci(max: number): Observable<number> {
        return from(this.fibonanci()).pipe(
            takeWhile((num) => num < max),
            filter(num => num % 2 === 0),
            reduce((acc, num) => acc + num, 0)
        );
    }
}