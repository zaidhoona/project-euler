import { Observable, EMPTY, interval, generate } from "rxjs";
import { filter, reduce, tap, defaultIfEmpty } from "rxjs/operators";

export class Solution1 {

    getSumOfMultiples(max: number = 0): Observable<number> {
        if (max < 3) { EMPTY };

        return generate(1, x => x < max, x => x + 1)
        .pipe(
            filter(num => num % 3 === 0 || num % 5 === 0),
            reduce((acc, num) => acc + num, 0)
        );
    }
}