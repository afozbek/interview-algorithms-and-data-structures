// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst();
    let last = list.getFirst();
    while (n > 0) {
        last = last.next;
        n--;
    }
    while (last.next) {
        slow = slow.next;
        last = last.next;
    }
    return slow;
}

module.exports = fromLast;

// function fromLast(list, n) {
//     let slow = list.getFirst();
//     let last = list.getFirst();
//     while (n > 0) {
//         last = last.next;
//         n--;
//     }
//     while (last.next) {
//         slow = slow.next;
//         last = last.next;
//     }
//     return slow;
// }

//MySol
// function fromLast(list, n) {
//     let counter = 0;
//     while (counter !== n) {
//         list.removeLast();
//         counter++;
//     }
//     return list.getLast();
// }