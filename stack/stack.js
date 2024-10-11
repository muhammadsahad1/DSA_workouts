// class Stack {
//     constructor() {
//         this.stack = []
//         this.top = 0
//     }

//     push(val) {
//         this.top += 1
//         this.stack[this.top] = val
//     }

//     pop() {
//         if (this.top === -1) {
//             console.log("there is data")
//             return

//         }

//         let rEl = this.stack[this.top]
//         this.top -= 1
//         return rEl
//     }

//     peek() {
//         if (this.top === -1) {
//             console.log("there is no data")
//             return
//         }

//         return this.stack[this.top]
//     }

//     size() {
//         return this.top + 1
//     }

//     isEmpty() {
//         return this.top === -1
//     }

//     print() {
//         for (let char of this.stack) {
//             console.log(char)
//         }
//     }
// }


// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.peek());    // Output: 30
// console.log(stack.pop());     // Output: 30
// console.log(stack.size());    // Output: 2
// console.log(stack.isEmpty());


class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)

        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    pop() {
        if (!this.isEmpty()) {
            let removeNode = this.top
            this.top = this.top.next
            this.size--
            return removeNode
        }
    }

    isEmpty() {
        return this.size === 0
    }
}


let stack = new Stack()
stack.push(4)
stack.push(5)
stack.push(7)
stack.push(8)

console.log(stack)


