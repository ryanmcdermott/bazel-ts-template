import { printf } from './printf/printf';

export function add(a: number, b: number): number {
    printf("a = " + a);
    printf("b = " + b);
    return a + b;
}
