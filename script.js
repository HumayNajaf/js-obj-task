//---------------------------------------------------- 1. get keys ----------------------------------------------------

// const student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// let keys = Object.keys(student).toString();

// console.log(keys);

//---------------------------------------------------- 2. ----------------------------------------------------

// const library = [
//     {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     libraryID: 1254,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     libraryID: 4264,
//   },
//   {
//       title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     libraryID: 3245,
//   },
// ];

// function objChange(obj) {
//     let sortArr = obj.sort((a, b) => b.libraryID - a.libraryID);
//     const newObj = {

//             title: obj.author,
//             author:  this.title,
//             libraryID: this.libraryID,

//     }
//     return newObj
// }

// console.log(objChange(library));

//---------------------------------------------------- 3. ----------------------------------------------------

// function hasProperty(property) {
//     const myObj = {
//         fullName: "David Rayy",
//         age: 23,
//         city: "Qəbələ"
//       };
//       let bool = myObj.hasOwnProperty(property)
//       return bool
//   }
//   console.log( hasProperty("name"));
//   console.log( hasProperty("fullName"));
//   console.log( hasProperty("age"));
//   console.log( hasProperty("class"));
//   console.log( hasProperty("citizen"));

//---------------------------------------------------- 4. ----------------------------------------------------

// function subSet(str) {
//   const newArr = [];
//   for (let i = 0; i < str.length; i++) {
//     newArr.push(str.slice(0, i+1))
//   }
//   for (let i = str.length; i>0; i--) {
//     newArr.push(str.split('').reverse().splice(0, i).reverse().join(''))
//   }
//   return newArr
// }
// console.log(subSet('dog'));
// console.log(subSet('dunya'));

//---------------------------------------------------- 5. ----------------------------------------------------

// function reverseValue(obj) {
//   const opposite = {};
//   for (const key in myObj) {
//     opposite[obj[key]] = key;
//   }
//   return opposite;
// }
// const myObj = {
//   fullName: "David Rayy",
//   age: 23,
//   city: "Qəbələ",
// };
// console.log(reverseValue(myObj));

//---------------------------------------------------- 6. ----------------------------------------------------

// function mathFunc() {
//   const nums = Math.chain(5).add(3).substract(4).divide(2).multiply(10);
//   return nums;
// }

// console.log(mathFunc(nums));

