// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) because it is only access the head and the 
                head.next pointers
            */

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length += 1;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        if(this.length === 0) {
            this.addToHead(val);
            return this;
        }

        const newNode = new DoublyLinkedNode(val);

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) because it is only access the tail and the 
                tail.next and newNode.prev pointers
            */
    }

    removeFromHead() {
        // Remove node at head
        if(this.length === 0) return undefined;

        const removed = this.head;

        if(this.length === 1) {
            this.head = null;
        } else {
            this.head.next.prev = null;
            this.head = this.head.next;
        }

        this.length--;
        return removed.value;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) because it is only access the head and the 
                head.next pointers
            */
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length === 0) return undefined;

        const removed = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
        }

        this.length--;
        return removed.value;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) because it is only access the tail and the 
                tail.next and newNode.prev pointers
            */
    }

    peekAtHead() {
        // Return value of head node
        if(this.length === 0) return undefined;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) since it is only accessing one node in the list
            */
    }

    peekAtTail() {
        // Return value of tail node
        if(this.length === 0) return undefined;

        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) since it is only accessing one node in the list
            */
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
