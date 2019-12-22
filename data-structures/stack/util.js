const Node = require("./node");

class Util {
  // https://www.hackerrank.com/challenges/compare-two-linked-lists/problem
  compareLists(l1, l2) {
    if (l1 && !l2 || !l1 && l2 || l1.data !== l2.data) return 0;

    let head1 = l1;
    let head2 = l2;

    while (head1) {
      if (!head1.next && !head2.next) return 1;

      if (head1.next && !head2.next || !head1.next && head2.next ||
        head1.next.data !== head2.next.data) {
        return 0;
      }

      head1 = head1.next;
      head2 = head2.next;
    }

    return 1;
  }

  // https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists
  mergeLists(head1, head2) {
    let headNode = new Node(0);

    let tail = headNode;

    while (true) {
      if (!node1 || !node2) { tail.next = node1 || node2; break; }

      if (head1.data <= head2.data) {
        tail.next = head1;
        head1 = head1.next;
      }

      else {
        tail.next = head2;
        head2 = head2.next
      }

      tail = tail.next;
    }

    return headNode.next;
  }

  mergeLists2(head1, head2) {
    if (head1.data <= head2.data) {
      head1.next = this.mergeLists2(head1.next, head2)
      return head1;
    }

    else {
      head2.next = this.mergeLists2(head1, head2.next)
      return head2;
    }
  }
}

module.exports = Util;
