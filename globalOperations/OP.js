
// A
// 11
// BBB
// 2222
// CCCCC
// 333333

// function calc(row) {
//     let val = 65
//     for (let i = 1; i <= row; i++) {
//         if (i % 2 !== 0) {
//             let char = String.fromCharCode(val)
//             let line = char.repeat(i)
//             console.log(line);
//             val++

//         } else {
//             let line = (i - 1).toString().repeat(i)
//             console.log(line)
//         }
//     }
//     val++
// }
// calc(5)

// let str = "Hello by"
// let char = ''
// for (let i = str.length - 1; i >= 0; i--) {

//     if (str[i] !== " ") {
//         char += str[i]
//     }
//     char += " "

// }

// console.log(char)

// let arr = ["saahd", "akihl", "peer"]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[i + 1]) {
//             [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]]
//         }
//     }
// }

// console.log(arr)

// const arr = [4, 5, 6, 7, 3, 4, 5, 6]
// let res = []

// for (let i = 0; i < arr.length; i++) {
//     let dupli = false

//     for (let j = 0; j < arr.length; j++){
//         if(arr[i] === res[j]){
//             dupli = true
//             break
//         }
//     }

//     if(!dupli){
//         res.push(arr[i])
//     }
// }

// console.log(res);


// function bns(arr, target) {
//     let l = 0;
//     let r = arr.length - 1

//     while (l < r) {
//         let midd = Math.floor(l + r / 2)
//         if (arr[midd] === target) {
//             return midd
//         } else if (arr[midd] > target) {
//             r = midd - 1
//         } else {
//             l = midd + 1
//         }
//     }
// }
// let arr = ["apple", "banana", "cat"]

// let target = "banana";
// console.log(bns(arr, target));




// function mergesort(arr) {
//     console.log(arr)
//     if (arr.length <= 1) {
//         return arr
//     }

//     let midd = Math.floor(arr.length / 2)
//     let lArr = arr.slice(0, midd)
//     let rArr = arr.slice(midd)

//     return merge(mergesort(lArr), mergesort(rArr))

// }

// function merge(lArr, rArr) {
//     let sortedArr = []

//     while (lArr.length && rArr.length) {
//         if (lArr[0] < rArr[0]) {
//             sortedArr.push(lArr.shift())
//         } else {
//             sortedArr.push(rArr.shift())
//         }

//     }
//     return [...sortedArr, ...lArr, ...rArr]
// }

// console.log(mergesort(arr))

// const arr = [4, 7, 52, 1, 5, 6]

// function qk(arr) {
//     if (arr.length <= 1) {
//         return arr
//     }

//     let pivot = arr[0]
//     let left = []
//     let right = []

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }

//     return [...qk(left), pivot, ...qk(right)]
// }


// console.log(qk(arr))

// let q = [2, 3, [6, 1],[43,5], 8, 9]
// // Ans [9,8,[1,6],3,2]

// function rever(arr) {
//     for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//         let temp = arr[i]
//         arr[i] = arr[arr.length - i - 1]
//         arr[arr.length - i - 1] = temp
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             let temp = arr[i][0]
//             arr[i][0] = arr[i][1]
//             arr[i][1] = temp
//         }
//     }

//     console.log(arr)
// }

// rever(q)




