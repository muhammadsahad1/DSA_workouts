// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }

//     // insert value
//     insert(val) {

//         let newNode = new Node(val)
//         if (!this.head) {
//             this.head = this.tail = newNode
//             return
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//     }

//     display() {
//         if (!this.head) {
//             return null
//         }

//         let res = []

//         let current = this.head
//         while (current) {
//             res.push(current.val)
//             current = current.next
//         }
//         console.log(res.join(' -> '))
//     }

//     insertNodeAtPosition(pos, val) {
//         let newNode = new Node(val)
//         if (!this.head) {
//             this.head = this.tail = newNode
//             return
//         }

//         let count = 0
//         let prev = null
//         let current = this.head
//         while (current && count != pos) {
//             count++
//             prev = current
//             current = current.next
//         }
//         if (count === pos) {
//             prev.next = newNode
//             newNode.next = current
//         }
//     }

//     insertAfterNode(nodeVal, val) {
//         let newNode = new Node(val)
//         if (!this.head) {
//             this.head = this.tail = newNode
//             return
//         }
//         let current = this.head
//         while (current.val && current.val !== nodeVal) {
//             current = current.next
//         }

//         current.next
//     }

//     deleteNode(val) {
//         if (!this.head) {
//             return null
//         }

//         let current = this.head
//         let prev = this.head

//         if (current.val === val) {
//             current = null
//             return
//         }

//         while (current.val && current.val != val) {
//             prev = current
//             current = current.next
//         }
//         prev.next = current.next

//     }

//     search(val) {
//         let current = this.head
//         while (current) {
//             if (current.val === val) return true
//             current = current.next
//         }

//         return false
//     }

//     insertAtHead(val) {
//         let newNode = new Node(val)
//         if (!this.head) {
//             this.head = this.tail = newNode
//             return
//         } else {
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }
//     reverse(head) {
//         let prev = null;
//         let current = head;
//         while (current) {
//             let next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         return prev; // Return new head of the reversed list
//     }
//     //Find the middle element of the linked list.
//     findMiddleElement() {
//         let slow = this.head;
//         let fast = this.head

//         while (fast && fast.next) {
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.val
//     }

//     mergeTwoLists(l1, l2) {
//         let dummy = new Node(0)
//         let current = dummy

//         while (l1 && l2) {
//             if (l1.val < l2.val) {
//                 current.next = l1
//                 l1 = l1.next
//             } else {
//                 current.next = l2
//                 l2 = l2.next
//             }
//             current = current.next
//         }

//         current.next = l1 || l2
//         return dummy.next

//     }

//     removeDuplicatesForSorted() {
//         let current = this.head
//         while (current && current.next) {
//             if (current.val === current.next.val) {
//                 current.next = current.next.next

//             }
// current = current.next
//         }

//     }

//     removeDuplicatesValues() {
//         let current = this.head
//         let prev = null
//         let seen = new Set()

//         while (current) {
//             if (seen.has(current.val)) {
//                 prev.next = current.next
//             } else {
//                 seen.add(current.val)
//                 prev = current
//             }
//             current = current.next
//         }
//     }

//     isPalindrome() {
//         if (!this.head) return null;

//         let slow = this.head
//         let fast = this.head

//         while (fast && fast.next) {
//             slow = slow.next
//             fast = fast.next.next
//         }

//         let reveredLinkedList = this.reverse(slow)
//         let current = this.head

//         while (reveredLinkedList) {
//             if (reveredLinkedList.val !== current.val) {
//                 return false
//             }
//             current = current.next
//             reveredLinkedList = reveredLinkedList.next
//         }
//         return true
//     }
// }

// let l1 = new LinkedList();
// l1.insert(1);
// l1.insert(3);
// l1.insert(5);
// l1.insert(0);
// l1.insert(3);
// l1.insert(1);

// let l2 = new LinkedList();
// l2.insert(2);
// l2.insert(4);
// l2.insert(6);
// l2.insert(8);
// // L.insertNodeAtPosition(0, 100)
// // L.deleteNode(90)
// // L.display()
// // L.Reverse()
// console.log("LinkedList 1:");
// l1.display();

// console.log("LinkedList 2:");
// l2.display();

// let mergedList = new LinkedList()
// mergedList.head = mergedList.mergeTwoLists(l1.head, l2.head)

// console.log("Merged LinkedList:");
// mergedList.display();

// mergedList.removeDuplicatesForSorted()

// console.log("Merged LinkedList after remove dupli:");
// mergedList.display();

// console.log("Is Palindrome:", l1.isPalindrome());


// class Node {
//     constructor(data) {
//         this.node = data
//         this.next = null
//         this.prev = null
//     }
// }

// class LinkedListDouble {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }

//     append(val) {
//         let newNode = new Node(val)
//         if (!this.head) {
//             this.head = this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             newNode.prev = this.tail
//             this.tail = newNode
//         }
//     }

//     reverse() {

//         let reversed = ''
//         let current = this.tail
//         while (current) {
//             reversed += current.node
//             current = current.prev
//         }
//         return reversed

//     }

//     reverseFunction(str) {
//         let LinkedList = new LinkedListDouble()

//         for (let i = 0; i < str.length; i++) {
//             LinkedList.append(str[i])
//         }

//         let strReversed = LinkedList.reverse()
//         return strReversed

//     }

// }
// let str = "sahad"
// const L = new LinkedListDouble()
// console.log(L.reverseFunction(str))



// class Node {
//     constructor(val) {
//         this.node = val
//         this.next = null
//         this.prev = null
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//     }

//     append(val) {
//         let node = new Node(val)
//         if (!this.head) {
//             this.head = this.tail = node
//         } else {
//             this.tail.next = node
//             node.prev = this.tail
//             node = this.tail
//         }
//     }

//     prepend(val) {
//         let node = new Node(val)
//         if (this.head) {
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         } else {
//             this.head = this.tail = node
//         }
//  


//     delete(val) {
//         let current = this.head
//         while (current) {
//             if (current.val === val) {
//                 if (current === this.head) {
//                     this.head = current.next
//                     if (this.head) {
//                         this.head.prev = null
//                     } else {
//                         this.tail = null
//                     }
//                 } else if (current === this.tail) {
//                     this.tail = current.prev
//                     this.tail.next = null
//                 } else {
//                     current.prev.next = current.next
//                     current.next.prev = current.next
//                 }
//                 return
//             }
//             current = current.next
//         }
//     }

//     revese() {
//         let current = this.head

//         while (current) {
//             let temp = current.prev
//             current.prev = current.next
//             current.next = temp
//             current = current.prev
//         }
//         if (temp) {
//             this.tail = this.head
//             this.head = temp.prev
//         }

//     }

// isCycle() {
//     let slow = this.head
//     let fast = this.head

//     while (fast && fast.next) {
//         slow = slow.next
//         fast = fast.next.next
//     }

//     return slow
// }

// createCycle(pos) {
//     let index = 0
//     let current = this.head
//     let node = null

//     while (current.next) {
//         if (pos === index) {
//             node = current
//         }
//         current = current.next
//         index++
//     }
//     current.next = node
// }









