const LinkedList = require(".")
const Util = require("./util")
const Node = require("./node");

const util = new Util();

const ll1 = new LinkedList();
const ll2 = new LinkedList();

beforeEach(() => {
  ll1.reset();
  ll2.reset();
});

test("1-Removing Duplicates", () => {
  ll1.insertNode(1)
  ll1.insertNode(3)
  ll1.insertNode(3)
  ll1.insertNode(4)
  ll1.insertNode(5)
  ll1.insertNode(5)
  ll1.insertNode(7)
  ll1.insertNode(9)

  const resultObj = {
    "data": 1,
    "next": {
      "data": 3,
      "next": {
        "data": 4,
        "next": {
          "data": 5,
          "next": {
            "data": 7,
            "next": {
              "data": 9,
              "next": null
            }
          }
        }
      }
    }
  }

  expect(ll1.removeDuplicates()).toMatchObject(resultObj);
});

test("2-Reversing Linked List", () => {
  ll1.insertNode(0)
  ll1.insertNode(1)
  ll1.insertNode(2)

  const resultObj = {
    data: 2,
    next: {
      data: 1,
      next: {
        data: 0,
        next: null
      }
    }
  }

  expect(ll1.reverse()).toMatchObject(resultObj);
});

test("3-Merging Linked Lists", () => {
  ll1.insertNode(0)
  ll1.insertNode(1)
  ll1.insertNode(2)
  ll1.insertNode(7)

  ll2.insertNode(3)
  ll2.insertNode(4)
  ll2.insertNode(4)

  const resultObj = {
    data: 0,
    next: {
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: {
            data: 4,
            next: {
              data: 4,
              next: {
                data: 7,
                next: null
              }
            }
          }
        }
      }
    }
  }

  expect(util.mergeLists(ll1.head, ll2.head)).toMatchObject(resultObj);
});

test("4-Comparing Linked Lists --> Equal values", () => {
  ll1.insertNode(1)
  ll1.insertNode(2)
  ll1.insertNode(3)

  ll2.insertNode(1)
  ll2.insertNode(2)
  ll2.insertNode(3)

  expect(util.compareLists(ll1.head, ll2.head)).toBe(1);
});

test("4-Comparing Linked Lists --> Not Equal Values", () => {
  ll1.insertNode(1)
  ll1.insertNode(2)
  ll1.insertNode(3)

  ll2.insertNode(1)
  ll2.insertNode(2)

  expect(util.compareLists(ll1.head, ll2.head)).toBe(0);
});

test("5-Cycle Testing-Falsy", () => {
  ll1.insertNode(1)
  ll1.insertNode(2)
  ll1.insertNode(3)

  expect(ll1.hasCycle()).toBe(0);
});

test("5-Cycle Testing-Truthy", () => {
  let nodeA = new Node(0);
  let nodeB = nodeA.next = new Node(1);
  let nodeC = nodeB.next = new Node(3);
  let nodeD = nodeC.next = new Node(5);

  nodeD.next = nodeA;

  ll1.head = nodeA;

  expect(ll1.hasCycle()).toBe(1);
});

test("6-Find Merge Node-1", () => {
  let nodeA = new Node(0);
  let nodeB = nodeA.next = new Node(3);
  let nodeC = nodeB.next = new Node(5);
  let nodeD = nodeC.next = new Node(7);

  let nodeE = new Node(8);
  let nodeF = nodeE.next = new Node(12);
  let nodeG = nodeF.next = new Node(-5);
  nodeG.next = nodeC;

  expect(util.findMergeNode(nodeA, nodeE)).toBe(5);
});

test("6-Find Merge Node-2", () => {
  let nodeA = new Node(1);
  let nodeB = nodeA.next = new Node(2);
  let nodeC = nodeB.next = new Node(3);

  let nodeE = new Node(8);
  let nodeF = nodeE.next = new Node(7);
  let nodeG = nodeF.next = new Node(8);
  nodeG.next = nodeA;

  expect(util.findMergeNode(nodeA, nodeE)).toBe(1);
});