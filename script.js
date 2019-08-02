// const days = ['usaid', 'sameer', 'usama', 'saad', 'ismail', 'umer'];

// console.log(days[0]);

// days.forEach(function (day, index){

//     console.log(`statt with ${index+1} -- ${day}`);
// })

// exta work

// for (let i = 0; i <= 10; i+=2){
//      console.log(i+1)

// exta work


// Answer No 2

// const arr = ['cat', 'dog', 'fish'];
// for (i = 0; i < arr.length; i++) { 
//   console.log(arr[i])
// }

// ese bhe kr sakte hai

// const arr = ['cat', 'dog', 'fish'];
// arr.forEach(function (arr) {
//   console.log(arr);
// });

// Answer No 3

// const string = 'hello';
// for (let character in string) {  
//     console.log(string[character])
// }

// Answer No 4

// let array1 = ['a', 'b', 'c'];

// array1.forEach(function(element) {
//   console.log(element);
// });

// Answer No 5

// const arraySparse = [1,3,7];
// let numCallbackRuns = 0;

// arraySparse.forEach(function(element){
//   console.log(element);
//   numCallbackRuns++;
// });

// console.log("numCallbackRuns: ", numCallbackRuns);


// Answer No 6


// const items = ['item1', 'item2', 'item3'];
// const copy = [];

// // before
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }

// // after
// items.forEach(function(item){
//   copy.push(item);
// });


// Answer No 7
// mdn se dekha tha
// The following code logs a line for each element in an array:


// function logArrayElements(element, index, array) {
//     console.log(`a [${index +1}]  ${element}`);
//   }

//   // Notice that index 2 is skipped since there is no item at
//   // that position in the array.
//   [2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9


// ye bhe likh sakte hai


//   console.log('a[' + index + '] = ' + element);


// Answer No 8

// function Counter() {
//     this.sum = 0;
//     this.count = 0;
//   }
//   Counter.prototype.add = function(array) {
//     array.forEach(function(entry) {
//       this.sum += entry;
//       ++this.count;
//     }, this);
//     // ^---- Note
//   };

//   const obj = new Counter();
//   obj.add([2, 5, 9]);
//   obj.count;
//   // 3 
//   obj.sum;
//   // 16



// pw3 Exercise

// Answer no 1

// let num = ['1', '2', '3', '5', '6', '7', '8', '9'];

// num.forEach(function (element)
// {
//   console.log(element);
// })

// Answer no 2




// for(let i = 2; i < 3 ; i++){
//   console.log(`Table of ${i}`);
//      for(let j = i; j < 11 ; j++){     
//        console.log(`${i} * ${j} = ${j * i}`)
//      }
//    }


// Answer no 3


// for (let i = 2; i < 10; i++) {
//   console.log("");
//   console.log(`Table of ${i}`);
//   for (let j = 1; j < 11; j++) {
//     console.log(`${i} * ${j} = ${j * i}`)
//   }
// }



// Answer no 4

let students = [
  {
    name: "Amna",
    hobbies: ["eating", "cooking"]
  },
  {
    name: "Daniyal",
    hobbies: ["arts", "shopping"]
  },
  {
    name: "Fahad",
    hobbies: ["coding", "cooking"]
  },
  {
    name: "Hajra",
    hobbies: ["sleep", "reading"]
  }
];



// This is example

// Answer no 5
// Answer no 6

// for (let i = 1; i <= 9; i++) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += " ";
//   }
//   console.log(str + i);

// }






// Answer no 7

// Answer no 8

// for (let i = 1; i <= 9; i++) {
//   let str = "";

//   for (let j = i; j <= 9; j++) {
//     str += " ";
//   }
//   console.log(str + '🌸');

// }

// Answer no 9

