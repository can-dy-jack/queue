export class Queue<A> {
    constructor(arr?: T[]);
    isEmpty(): boolean;
    size(): number;
    front(): A;
    end(): A;
    push(val: A): Queue<A>;
    pop(): A;
    toArray(): A[];
    clear(): void;
}