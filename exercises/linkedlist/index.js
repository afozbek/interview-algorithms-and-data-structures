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
}

module.exports = { Node, LinkedList };
