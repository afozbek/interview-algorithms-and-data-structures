// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

/*
*
* @author:Furkan Özbek
*
*/

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    //Data can be anything: an array, an object or a variable
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    size() {
        let count = 0;
        //this.head-->holds the current node we are working or null
        let node = this.head;
        while (node) {
            node = node.next;
            count++;
        }
        return count;
    }
    getFirst() {
        return this.head;
    }
    //Some Differences!
    getLast() {
        let node = this.head;
        if (!node) {
            return null;
        }
        while (node.next) {
            node = node.next;
        }
        return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let prev = this.head;
        let node = this.head.next;
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }
    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
        }
        this.getLast().next = new Node(data);
    }
    getAt(index) {
        let counter = -1; //starting index
        let node = this.head;
        while (node) {
            if (counter === index) { return node; }
            counter++;
            node = node.next;
        }
        return null;
    }
    //my sol
    removeAt(index) {
        if (!this.head)
            return;
        if (index === 0) { this.head = this.head.next; return; }
        if (this.getAt(index - 1)) {
            let node = this.getAt(index - 1);
            node.next = this.getAt(index + 1);
        }
    }
}
// let l = new LinkedList();
// l.insertLast(1);
// l.insertLast(2);
// l.insertLast(3);
// l.insertLast(4);

// l.getAt(10);

module.exports = { Node, LinkedList };
