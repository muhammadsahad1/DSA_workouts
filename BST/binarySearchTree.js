// BST practice 

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }

}
class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        console.log(val)
        if (!this.root) {
            this.root = new Node(val)
            return
        }
        this.insertRecursive(this.root, val)
    }

    insertRecursive(node, value) {

        if (value < node.val) {
            if (node.left === null) {
                node.left = new Node(value)
            } else {
                this.insertRecursive(node.left, value)
            }
        } else if (value > node.val) {
            if (node.right === null) {
                node.right = new Node(value)
            } else {
                this.insertRecursive(node.right, value)
            }
        }
    }

    inOrder() {
        let result = []
        this.inOrderRecursive(this.root, result)
        return result
    }

    inOrderRecursive(node, result) {
        if (node) {
            this.inOrderRecursive(node.left, result)
            result.push(node.val)
            this.inOrderRecursive(node.right, result)
        }
    }

    preOrder() {
        let result = []
        this.preOrderRecursive(this.root, result)
        return result

    }
    preOrderRecursive(node, result) {
        if (node) {
            result.push(node.val)
            this.preOrderRecursive(node.left, result)
            this.preOrderRecursive(node.right, result)
        }
    }

    postOrder() {
        let result = []
        this.postOrderRecursive(this.root, result)
        return result
    }

    postOrderRecursive(node, result) {
        if (node) {
            this.postOrderRecursive(node.left, result)
            this.postOrderRecursive(node.right, result)
            result.push(node.val)
        }
    }

    bfs() {
        if (!this.root) return []
        // console.log("root =>", this.root)
        const result = []
        const queue = [this.root]
        console.log("Q =>", queue)
        console.log("queue look like =>", queue);
        while (queue.length > 0) {
            let current = queue.shift()
            result.push(current.val)

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        return result

    }

    search(value) {
        let currentNode = this.root

        while (currentNode) {
            if (currentNode.val === value) {
                return true
            } else if (value < currentNode.val) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        return false
    }

    delete(val) {
        this.root = this.deleteRecursive(this.root, val)
    }

    deleteRecursive(node, val) {
        if (!node) return null

        if (val < node.val) {
            node.left = this.deleteRecursive(node.left, val)
            return node
        } else if (val > node.val) {
            node.right = this.deleteRecursive(node.right, val)
            return node
        }

        if (node.left === null && node.right === null) {
            return null
        }

        if (node.left === null) {
            return node.right
        } else if (node.right === null) {
            return node.left
        }

        node.val = this.minVal(node.right)

        node.right = this.deleteRecursive(node.right, node.val)
        return node
    }

    findSecLargest() {
        let array = this.inOrder()
        return array[array.length - 2]
    }

    getHeigh() {
        return this.heightRecursive(this.root)
    }

    heightRecursive(node) {
        if (node === null) {
            return -1
        }

        let leftH = this.heightRecursive(node.left)
        let rightH = this.heightRecursive(node.right)

        return Math.max(leftH, rightH) + 1
    }

    print() {
        console.log('inOrder =>', this.inOrder())
        console.log('pre =>', this.preOrder())
        console.log('post =>', this.postOrder())
        console.log('BFS =>', this.bfs())
    }


    minVal(node) {
        if (!node) return null
        let minVal = node.val
        while (node.left !== null) {
            node = node.left
            minVal = node.val
        }
        return minVal
    }

    maxVal(node) {
        if (!node) return null
        let maxVal = node.val
        while (node.right !== null) {
            node = node.right
            maxVal = node.val
        }
        return maxVal
    }


    isBST(node) {
        if (node === null) return true
        console.log("L::", node.left);

        if (node.left !== null && this.maxVal(node.left) >= node.val) return false
        if (node.right !== null && this.minVal(node.right) <= node.val) return false

        return this.isBST(node.left) && this.isBST(node.right)

    }
}


let bst = new BST()
bst.insert(15)
bst.insert(9)
bst.insert(12)
bst.insert(8)
bst.insert(13)
bst.insert(16)
bst.insert(18)
bst.insert(15.8)
// bst.delete()
// bst.root()
// bst.print()
console.log(" ===> ", bst.isBST(bst.root));

// console.log(bst.search(20))
// console.log(bst.findSecLargest());
// console.log("H =>", bst.getHeigh())
