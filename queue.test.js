const {expect} = require('chai');
const {Queue} = require('./index.js');

describe('Queue Tests', () => {
    const queue = new Queue();

    describe('constructor test', () => {
        it('Create a new Queue.', () => {
            expect(queue).to.be.instanceOf(Queue);
        });

        it('Create a new Queue from an Array.', () => {
            const q = new Queue([1, 2, 3]);
            expect(q).to.be.instanceOf(Queue);
        });
    });

    describe('isEmpty() test', () => {
        it('check if the queue is empty.', () => {
            expect(queue.isEmpty()).to.equal(true);
        });

        it('check if the queue is not empty.', () => {
            queue.push(1);
            expect(queue.isEmpty()).to.equal(false);
        });
    });

    describe('push() test', () => {
        it('Add an element to the end of the queue.', () => {
            expect(queue.push(2)).to.be.instanceOf(Queue);
            expect(queue.front()).to.equal(1);
            expect(queue.end()).to.equal(2);
        });
    });

    describe('size() test', () => {
        it('return the number of elements in the queue.', () => {
            expect(queue.size()).to.equal(2);
        });
    });

    describe('front() test', () => {
        it('return the element at the front of the queue.', () => {
            queue.push(5);
            expect(queue.front()).to.equal(1);
        });
    });

    describe('end() test', () => {
        it('return the element at the end of the queue.', () => {
            queue.push(6);
            expect(queue.end()).to.equal(6);
            expect(queue.size()).to.equal(4);
        });
    });

    describe('pop() test', () => {
        it('remove and return an element from the front of the queue.', () => {
            expect(queue.pop()).to.equal(1);
            expect(queue.size()).to.equal(3);
            expect(queue.front()).to.equal(2);
            // console.log(queue.data, queue.offset); // [1, 2, 5, 6] 1
        });

        it('remove element when more than half.', () => {
            expect(queue.pop()).to.equal(2);
            expect(queue.size()).to.equal(2);
            expect(queue.front()).to.equal(5);
            expect(queue.end()).to.equal(6);
            // console.log(queue.data, queue.offset); // [5, 6] 0
        });

        it('remove element when Queue is empty', () => {
            expect(queue.pop()).to.equal(5);
            expect(queue.pop()).to.equal(6);
            expect(queue.size()).to.equal(0);

            expect(queue.pop()).to.equal(undefined);
        });
    });

    describe('toArray() test', () => {
        it('return an array of elements in the queue.', () => {
            queue.push(8).push(9).push(11);
            expect(queue.toArray()).to.deep.equal([8, 9, 11]);
        });
    });

    describe('clear() test', () => {
        it('remove all elements from the queue.', () => {
            queue.clear();
            expect(queue.size()).to.equal(0);
            expect(queue.isEmpty()).to.equal(true);
        });
    });
});
