const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);

        if(!this.head) {
            this.tail = newNode;
            this.head = newNode;
            this.length++;
            return this.length;
        }

        let curr = this.head;

        while(curr) {
            if(curr.next === null) {
                this.tail.next = newNode;
                this.tail = newNode;
                this.length++;
                return this.length;
            }

            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if(!this.head) return null;

        const removed = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return removed.value;
        }

        this.head = this.head.next;
        this.length--;
        
        return removed.value;
        
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
