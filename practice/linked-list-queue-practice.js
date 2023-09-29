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

        let mid = Math.floor((this.length - 1) / 2);
        return this.findNthNode(mid);
            // How do the implementation for singly and doubly vary if at all?
            /*
                both implementations should be exactly the same. no difference
                since they will go from the head to the mid point through
                iterations
            */

        // Write your hypothesis on the time complexity of this method here
        /*
            this one seems to be in a gray area that I don't yet understand
            because the worst possible case is half of n. So it's not quite
            O(n). Could it be O(1)?
        */
    }

    reverse() {
        // Returns a new reversed version of the linked list

        const newList = new SinglyLinkedList();

        for(let i = this.length - 1; i >= 0; i--) {
            newList.addToTail(this.findNthNode(i).value);
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
        /*
            O(n^2) because not only is it iterating through the entire list
            once, but it is contstantly going through each 'last' node
            subtracting one through each iteration
        */
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        const len = this.listLength();

        let index = len - 1;
        let node1 = this.findNthNode(index);

        while (node1) {
            this.addToTail(node1.value);

            node1 = this.findNthNode(index - 1);
            index--;
        }

        let node2 = this.head;

        for (let i = 0; i < len; i++) {
            const next = node2.next;

            node2.next = null;
            this.head = next;

            node2 = next;
        }

        // Write your hypothesis on the time complexity of this method here
        /*
            This is O(n^2) because we iterate through the list once
        */
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
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        if(this.length === 0) return null;
        if(this.length === 1) return this.head;

        let mid = Math.floor((this.length - 1) / 2);

        let count = 0; 

        let curr = this.head;

        while(curr) {
            if(count === mid) {
                return curr;
            }

            count++;
            curr = curr.next;
        }

        return null;

            // How do the implementation for singly and doubly vary if at all?
            /*
                both implementations should be exactly the same. no difference
                since they will go from the head to the mid point through
                iterations
            */

        // Write your hypothesis on the time complexity of this method here
        /*
            this one seems to be in a gray area that I don't yet understand
            because the worst possible case is half of n. So it's not quite
            O(n). Could it be O(1)?
        */
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let newList = new DoublyLinkedList();
        let curr = this.tail;

        while(curr) {
            newList.addToTail(curr.value);

            curr = curr.prev;
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
        /*
            This takes O(n) time complexity due to it having to iterate
            through the entire list and copy it over to a new list
        */
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let len = 0;
        let node1 = this.tail

        while (node1) {
            this.addToTail(node1.value);
            node1 = node1.prev;
            len++;
        }

        let node2 = this.head;

        for (let i = 0; i < len; i++) {
            const next = node2.next;

            node2.prev = null;
            node2.next = null;
            this.head = next;

            node2 = next;
        }

        this.head.prev = null;


        // Write your hypothesis on the time complexity of this method here
        /*
            This is O(n) because we iterate through the list once
        */
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
