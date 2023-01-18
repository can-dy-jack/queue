/**
 * @copyright can-dy-jack kartjim 2023
 */

/**
 * @class Queue
 */
class Queue {
    /**
     * @description Create a new Queue.
     */
    constructor(arr) {
        if (Array.isArray(arr)) {
            this.data = arr;
        } else {
            this.data = [];
        }
        this.offset = 0;
    }

    /**
     * @description check if the queue is empty.
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * @description return the number of elements in the queue.
     */
    size() {
        return this.data.length - this.offset;
    }

    /**
     * @description return the element at the front of the queue.
     */
    front() {
        return this.data[this.offset];
    }

    /**
     * @description return the element at the end of the queue.
     */
    end() {
        return this.data[this.data.length - 1];
    }

    /**
     * @description Add an element to the end of the queue.
     * @returns {Queue}
     */
    push(val) {
        this.data.push(val);
        return this;
    }

    /**
     * @description remove and return an element from the front of the queue.
     */
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        const front = this.front();
        this.offset += 1;
        if (this.offset * 2 < this.data.length) {
            return front;
        }

        // 走到一半再删除，避免频繁的删除导致时间复杂度上升
        this.data = this.data.slice(this.offset);
        this.offset = 0;
        return front;
    }

    /**
     * @description return an array of all elements in the queue.
     */
    toArray() {
        return this.data.slice(this.offset);
    }

    /**
     * @description remove all elements from the queue.
     */
    clear() {
        this.data = [];
        this.offset = 0;
    }
}

exports.Queue = Queue;
