class Node {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class DoublyLinkedListNode {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
    this.prev = null;
  }
}

module.exports = { Node, DoublyLinkedListNode };