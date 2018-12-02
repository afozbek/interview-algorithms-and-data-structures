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
}

module.exports = { Node, LinkedList };
