// class Heap {
//     constructor() {
//       this.heap = [];
//     }
//     getParentIndex(i) {
//       return Math.floor((i - 1) / 2);
//     }
//     getLeftChildIndex(i) {
//       return 2 * i + 1;
//     }
//     getRightChildIndex(i) {
//       return 2 * i + 2;
//     }

//     swap(i, j) {
//       [this.heap[j], this.heap[i]] = [this.heap[i], this.heap[j]];
//     }

//     push(data) {
//       this.heap.push(data);
//       this.heapifyDown();
//     }

//     heapifyUp() {
//       let currentIndex = this.heap.length - 1;
//       let parentIndex = this.getParentIndex(currentIndex);
//       while (
//         currentIndex > 0 &&
//         this.heap[parentIndex] < this.heap[currentIndex]
//       ) {
//         this.swap(currentIndex, parentIndex);
//         currentIndex = parentIndex;
//         parentIndex = this.getParentIndex(currentIndex);
//       }
//     }

//     heapifyDown() {

//     let currentIndex = 0
//     while(this.getLeftChildIndex(currentIndex) < this.heap.length){
//     let biggestIndex = this.getLeftChildIndex(currentIndex)
//     let rightIndex = this.getRightChildIndex(currentIndex)
//     if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[biggestIndex]){
//       biggestIndex = rightIndex

//     }
//     if(this.heap[currentIndex] < this.heap[biggestIndex]){
//       this.swap(currentIndex,biggestIndex)
//       currentIndex = biggestIndex
//     }else{
//       return
//     }

//   }
//     }


//     poll() {
//       if (this.heap.length === 0) return null;

//       let maxValue = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown();
//       return maxValue;
//     }
//   }

//   function heapSort(array) {

//     let heap = new Heap()
//     for(let i = 0 ; i < array.length; i++){
//       heap.push(array[i])
//     }

//     let sortedArr = []
//     for(let i = 0;i < array.length;i ++){
//       sortedArr.unshift(heap.poll())
//     }
//     return sortedArr
//   }



//   let heap = new Heap();
//   heap.push(10);
//   heap.push(20);
//   heap.push(4);
//   heap.push(14);
//   heap.push(6);
//   heap.push(7);
//   heap.push(17);
//   heap.push(3);

//   console.log(heap.heap);
//   console.log( heap.poll()); 
//   console.log(heap.poll(),
//       heap.poll(),
//       heap.poll(),
//       heap.poll(),
//       heap.poll(),
//       heap.poll(),
//       heap.poll(),
//       heap.poll());
//   console.log(heap.heap);

//   let array = [12, 34, 55, 62, 12, 34, 44, -1, 223, 5, -3, 5];
//   const sorted = heapSort(array);
//   console.log(sorted);




class MaxHeap {
    constructor() {
        this.heap = []
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    getLeftChildIndex(i) {
        return (2 * i) + 1
    }

    getRightChildIndex(i) {
        return (2 * i) + 2
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    push(data) {
        this.heap.push(data)
        this.heapifyUp()
    }

    heapifyDown() {
        let currentIndex = 0
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
            let bigIndex = this.getLeftChildIndex(currentIndex)
            let rightIndex = this.getRightChildIndex(currentIndex)

            if (rightIndex < this.heap.length && this.heap[bigIndex] < this.heap[rightIndex]) {
                bigIndex = rightIndex
            }

            if (this.heap[currentIndex] < this.heap[bigIndex]) {
                this.swap(currentIndex, bigIndex)
                currentIndex = bigIndex
            } else {
                return null
            }
        }
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1
        let parentIndex = this.getParentIndex(currentIndex)

        while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = this.getParentIndex(currentIndex)
        }
    }

    poll() {
        console.log
        if (this.heap.length === 0) {
            return null
        }


        let maxVal = this.heap[0]
        console.log("m", maxVal);

        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return maxVal
    }

}

function heapSort(arr) {
    let heap = new MaxHeap()
    let sorted = []
    for (let i = 0; i < arr.length; i++) {
        heap.push(arr[i])
    }
    console.log("H", heap);


    for (let i = 0; i < arr.length; i++) {
        sorted.push(heap.poll())
    }

    console.log(sorted)
}


let heap = new MaxHeap()
const arr = [56, 7, 7, 88, 4, 3, 23, 2,]
heapSort(arr)