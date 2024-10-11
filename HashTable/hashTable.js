




// HashTable


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key, val) {
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, index]]
//         } else {
//             const sameKeyBucket = bucket.find(item => item[0] === key)
//             if (sameKeyBucket) {
//                 sameKeyBucket[1] = val
//             } else {
//                 bucket.push([key, val])
//             }
//         }
//     }

//     get(key) {
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         if (!bucket) {
//             this.table[index] = [[key, index]]
//         } else {
//             const sameKeyBucket = bucket.find(item => item[0] === key)
//             if (sameKeyBucket) {
//                 return sameKeyBucket[1]
//             }
//         }
//     }
// }

// class HashTable {
//     constructor(size = 8) {
//         this.table = new Array(size)
//         this.size = size
//         this.thredholeSize = 0.7

//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     resize(newSize) {
//         let currentTable = this.table
//         this.table = new Array(newSize)
//         this.size = 0
//         for (let entry in currentTable) {
//             if (entry) {
//                 for (let [key, val] in entry) {
//                     this.set(key, val)
//                 }
//             }
//         }
//     }

//     set(key, val) {
//         // index of mapping by hash
//         let index = this.hash(key)
//         if (!this.table[index]) {
//             this.table[index] = []
//         }

//         for (let i = 0; i < this.table[index]; i++) {
//             if (this.table[index][0] === key) {
//                 this.table[index][1] = val
//                 return
//             }
//         }

//         this.table[index].push([key, val])
//         this.size++

//         if (this.size / this.table.length > this.thredholeSize) {
//             this.resize(this.table.length * 2)
//         }
//     }

//     delete(key){
//         let index = this.hash(key)
//         let bucket = 
//     }
// }


// let table = new HashTable()
// table.set("nam222", "sahad")
// table.set("namee", "sahad1")
// table.set("na", "sahd3")
// console.log(table.get("name3"))
// for (let bucket in table) {
//     console.log(table[bucket])
// }
