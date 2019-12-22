const Util = require("./util");
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list
  printLinkedList(head) {

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
    this.length = this.length + 1;

    return this.head;
  }

  // https://www.hackerrank.com/challenges/insert-a-node-at-the-head-of-a-linked-list
  insertNodeAtHead(data) {
    let newNode = new Node(data);

    if (this.head !== null) {
      newNode.next = this.head;
    }

    this.length = this.length + 1;

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

    this.length = this.length + 1;

    return head;
  }

  insertNode(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }

    this.length = this.length + 1;

    return this.head;
  }

  deleteNode(position) {
    let head = this.head;

    if (position === 0) {
      if (head.next !== null) {
        head = head.next;
        this.length = this.length - 1;
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

  removeDuplicates() {
    let node = this.head;
    let values = {};
    if (!node) return null;

    let prevNode = null;
    while (node) {
      let data = node.data;

      if (values[data]) {
        prevNode.next = node.next;
      } else {
        values[data] = true;

        prevNode = node;
      }

      node = node.next;
    }

    return this.head;
  }
}


function main() {
  const util = new Util();

  const ll1 = new LinkedList();
  const ll2 = new LinkedList();

  ll1.insertNode(1)
  ll1.insertNode(3)
  ll1.insertNode(3)
  ll1.insertNode(4)
  ll1.insertNode(5)
  ll1.insertNode(5)
  ll1.insertNode(7)
  ll1.insertNode(9)

  ll2.insertNode(1)
  ll2.insertNode(2)
  ll2.insertNode(6)
  ll2.insertNode(7)

  let result = ll1.removeDuplicates(ll1.head)
  console.log(JSON.stringify(result));
}

main();