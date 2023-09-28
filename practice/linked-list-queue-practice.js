// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0; 
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        /*
            // O(n) time complexity implementation
            // let count = 0; 

            // let curr = this.head;

            // while(curr) {
            //     count++;

            //     curr = curr.next;
            // }

            // return count;
        */

        // O(1) time complexity implementation
        return this.length;

        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0; 

        let curr = this.head;

        while(curr) {
            sum += curr.value;

            curr = curr.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
        /*
            This is O(n) because it has to iterate through the complete list
            of n nodes to add each value to the sum
        */
    }

    averageValue() {
        // Returns the average value of all the nodes
        return this.sumOfNodes() / this.listLength();

        // Write your hypothesis on the time complexity of this method here
        /*
            This can go two ways depending on the listLength method. If the
            listLength method gets the length at O(n) variation, then this
            method's time complexity will be O(n^2). If the method uses the
            O(1) variation, then this method will be O(n). You can also 
            break this method down to count and add during the same while
            loop which will return O(n) time complexity. 
        */
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let count = 0; 

        let curr = this.head;

        while(curr) {
            if(count === n) {
                return curr;
            }

            count++;
            curr = curr.next;
        }

        return null;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        if(this.length === 0) return null;
        if(this.length === 1) return this.head;

        let mid = Math.floor(this.length / 2);
        console.log(mid);
        console.log(this.findNthNode(mid))
        return this.findNthNode(mid);
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
