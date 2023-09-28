// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;

        this.head = newNode;
        this.length += 1;

        return this;

        // Write your hypothesis on the time complexity of this method here
            /*
                O(1) because we are not accessing any other part of the list because the head
            */
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
            /* 
                this is O(n) because we have to iterate through the entire
                list in order to get to the end to add the last node
            */

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.addToHead(val);
            return this;
        }

        let curr = this.head;
        while (curr) {
            if(curr.next === null) {
                curr.next = newNode;
                this.length += 1;
                return this;
            }
            curr = curr.next;
        }
    }

    removeFromHead() {
        // Remove node at head
        if(this.length === 0) return;

        const removed = this.head;

        this.head = this.head.next;
        this.length -= 1;

        return removed;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(1) time complexity because this is only affecting
                the head and the second node of the entire list and not
                iterating through it
            */
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length === 0) return;
        if(this.length === 1) {
            this.head = null;
            this.length -= 1;
            return;
        }

        let curr = this.head;
        let removed;

        while(curr) {
            if(curr.next.next === null) {
                removed = curr.next;
                curr.next = null;
                this.length -= 1;
                return removed;
            }

            curr = curr.next;
        }

        // Write your hypothesis on the time complexity of this method here
            /*
                This is very similar to addToTail in that it must iterate
                through the entire list to get to the second to last node
                and null its next pointer. Therefore, it's O(n)
            */
    }

    peekAtHead() {
        // Return value of head node
        if(this.length === 0) return undefined;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
            /*
                This is the best example of O(1) since the head pointer
                doesn't move and all we are doing is returning a single
                variable's value
            */
    }

    print() {
        // Print out the linked list
        let curr = this.head;

        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        
        // Write your hypothesis on the time complexity of this method here
            /*
                This is O(n) time complexity because we are iterating
                through every single node in this list
            */
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
