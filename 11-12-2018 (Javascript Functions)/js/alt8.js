// // // // // // // // var employee = {
// // // // // // // //     "name": "raj",
// // // // // // // //     "age": 25,
// // // // // // // //     "salary": 35000,
// // // // // // // //     "dob": "29-05-1993"
// // // // // // // // }
// // // // // // // // console.log(employee);
// // // // // // // var employees = [
// // // // // // //     {
// // // // // // //     "name": "brahmaiah",
// // // // // // //     "age": 26,
// // // // // // //     "salary": 50000,
// // // // // // //     "dob": "29-05-1992"
// // // // // // // }
// // // // // // // ,{
// // // // // // //     "name": "harsha",
// // // // // // //     "age": 25,
// // // // // // //     "salary": 35000,
// // // // // // //     "dob": "29-05-1993" 
// // // // // // // }
// // // // // // // ,{
// // // // // // //     "name": "vardhan",
// // // // // // //     "age": 24,
// // // // // // //     "salary": 32000,
// // // // // // //     "dob": "29-05-1994" 
// // // // // // // }
// // // // // // // ];
// // // // // // // console.log(employees[0].name);

// // // // // // function test(a,b) {
// // // // // //     return a+b;
// // // // // // }
// // // // // // // test(2,3);
// // // // // // console.log(test(2,3));

// // // // // (function(){
// // // // //     var a =2;
// // // // //     console.log(a);
// // // // // })();
// // // var x = test();
// // // function test(){
// // //     return this;
// // // }
// // var myObject = {
// //     firstName:"John",
// //     lastName: "Doe",
// //     fullName: function () {
// //       return myObject.firstName + " " + myObject.lastName;
// //     }
// //   }
// //   myObject.fullName(); 
// //   console.log(myObject.fullName);
// var person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   var person1 = {
//     firstName:"John",
//     lastName: "Doe",
//   }
//   var person2 = {
//     firstName:"Mary",
//     lastName: "Doe",
//   }
//   console.log(person.fullName.call(person2));
