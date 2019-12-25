const Util = require("./util");
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list
  printLinkedList() {
    let n = this.head;

    while (n) {
      console.log(n.data);

      n = n.next;
    }
  }

  // https://www.hackerrank.com/challenges/insert-a-node-at-the-tail-of-a-linked-list
  insertNodeAtTail(data) {

    const newNode = new Node(data);

    let node = this.head;

    if (node === null) {
      return newNode;
    }

    while (node.next !== null) {
      node = node.next;
    }

    node.next = newNode;
    this.tail = newNode;
    this.length += 1;

    return this.head;
  }

  // https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list
  insertNodeAtHead(data) {
    let newNode = new Node(data);

    if (this.head !== null) {
      newNode.next = this.head;
    }

    this.length += 1;

    return newNode;
  }

  // https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list
  insertNodeAtPosition(data, position) {
    let newNode = new Node(data);
    let index = 1;
    let head = this.head;

    if (position === 0) {
      newNode.next = head;
      head = newNode;
    }

    else {
      let node = head;

      while (node.next !== null) {
        if (index === position) {
          const temp = node.next;

          node.next = newNode;
          newNode.next = temp;

          return head;
        }

        node = node.next;
        index++;
      }
    }

    this.length += 1;

    return head;
  }

  // Insert node at the end of the linked list
  insertNode(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    this.length += 1;

    return this.head;
  }

  // Insert multiple nodes
  insertMultipleNodes(...nodes) {
    if(!Array.isArray(nodes)) {
      return this.head;
    }
    console.log(nodes);
    nodes.forEach(node => {
      if (node instanceof Node || node instanceof DoublyLinkedListNode) {
        if(!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          this.tail.next = node;
          node.prev = this.tail;
          this.tail = node;
        }

        this.length += 1;
      }
    });

    return this.head;
  }

  // https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list/problem
  deleteNode(position) {
    let head = this.head;

    if (position === 0) {
      if (head.next !== null) {
        head = head.next;
        this.length -= 1;
      }

      else {
        head = null;
        this.length = 0;
      }
    }

    else {
      let currentPos = 1;
      let node = head.next;
      let prev = head;

      while (node.next !== null) {
        if (currentPos === position) {
          prev.next = node.next;
          this.length = this.length - 1;

          return head;
        }

        node = node.next;
        prev = prev.next;
        currentPos++;
      }
    }
    return head;
  }

  // https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse/
  reversePrint() {
    let values = [];

    let node = this.head;
    while (node !== null) {
      values.unshift(node.data);
      node = node.next;
    }

    for (let i = 0, len = values.length; i < len; i++) {
      console.log(values[i]);
    }
  }

  // https://www.hackerrank.com/challenges/reverse-a-linked-list/problem
  reverse() {
    let head = this.head;
    if (!head) {
      return head;
    }

    let node = head.next;
    let prev = head;
    prev.next = null;

    if (!node) {
      return head;
    }

    else {
      let temp;
      while (node) {
        temp = node;
        node = node.next;
        temp.next = prev;
        prev = temp;
      }
    }

    return prev;
  }

  // https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail
  getNode(positionFromTail) {
    let head = this.head;

    if (!head) return null;

    let nodes = {};
    let counter = 0;

    let node = head;
    while (node) {
      nodes[counter] = node;

      node = node.next;
      counter++
    }

    counter--;

    let retrievedNode = nodes[counter - positionFromTail];

    return retrievedNode.data;
  }

  // https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list
  removeDuplicates() {
    let node = this.head;
    let values = {};

    if (!node) return null;

    let prevNode = null;
    while (node) {
      let data = node.data;

      if (values[data]) {
        prevNode.next = node.next;
        this.length--;
      } else {
        values[data] = true;

        prevNode = node;
      }

      node = node.next;
    }

    return this.head;
  }

  // https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle/problem
  hasCycle() {
    let head = this.head;
    if(!head) return 0;

    while(head) {
      if(head.visited){
        return 1;
      } else {
        head.visited = true;
      }

      head = head.next;
    }

    return 0;
  }
}


function main() {
  const util = new Util();

  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  let nodeA = new DoublyLinkedListNode(0);
  let nodeB = nodeA.next = new DoublyLinkedListNode(3);
  let nodeC = nodeB.next = new DoublyLinkedListNode(5);
  let nodeD = nodeC.next = new DoublyLinkedListNode(7);

  // 0 -> 3 -> 5 -> 7

  nodeB.prev = nodeA;
  nodeC.prev = nodeB;
  nodeD.prev = nodeC;

  ll1.insertMultipleNodes(nodeA, nodeB, nodeC, nodeD);


  console.log(ll1.sortedInsert(4));
}

main();

module.exports = LinkedList;