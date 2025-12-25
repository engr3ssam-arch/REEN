// let students=[
//     {name:"ali",age:20 ,total:200, gender:"male"},
//     {name:"mona",age:21 ,total:210,gender:"female"},
//     {name:"ahmed",age:20 ,total:190,gender:"male"},
//     {name:"mohamed",age:22,total:180,gender:"male"},
//     {name:"rana",age:21 ,total:230,gender:"female"},
//     {name:"jana",age:21 ,total:240,gender:"female"},
// ];
   
//  function getBiggestTotal(studentList){
//     //
//  let maleList=studentList.filter(student =>
//      student.gender == "male"

//  );
//  let femaleList=studentList.filter(student =>
//      student.gender == "female"

//  );

   
//   let male= maleList.sort((a, b) => b.total - a.total)[0].name;
//  let female= femaleList.sort((a, b) => b.total - a.total)[0].name;
 
//  console.log(male);
//  console.log(female);

 

// }
// getBiggestTotal(students);

let number=parseInt(prompt("enter number"));  
  let fact=1; 
for(let i=1; i <= number;i++){
 
  fact =fact *i;
  
}
console.log(`The Factorial of ${number} is ${fact}`);


