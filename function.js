
// let name 
// let age
// let isstudent
// name="Noor"
// age="22"
// isstudent="yes"
// console.log (name)
// console.log (age)
// console.log (isstudent)


// Task No 2

// let num="100"
// let convertnum= Number(num)
// console.log(convertnum)
// console.log(typeof convertnum)


// Task No 3
// let Number1 = +prompt("Enter first Number");
// let Number2 = +prompt("Enter second number");
// add(Number1,Number2)
// function add(N1,N2){
// alert(N1*N2)
// }

// Task No 4
    // Declare variables
    // let a = null;       // 'null' means intentionally no value
    // let b;              // declared but not assigned → undefined
    // Print both
    // console.log("a =", a);  // Output: a = null
    // console.log("b =", b);  // Output: b = undefined
    // // 
   
     /*Difference:
    - null → assigned manually to represent "no value"
    - undefined → default value of uninitialized variables
    */
    // let input1 = prompt("Enter first value (true/false):").toLowerCase() === "true";
    // let input2 = prompt("Enter second value (true/false):").toLowerCase() === "false";
    // Perform AND, OR, NOT
    // console.log("Input 1:", input1);
    // console.log("Input 2:", input2);
    // console.log("AND (input1 && input2):", input1 && input2);
    // console.log("OR (input1 || input2):", input1 || input2);
    // console.log("NOT (!input1):", !input1);
    // console.log("NOT (!input2):", !input2);



// Conditions if else
    // let age=18
    // let userage= +prompt("Enter you age")
    // if(userage>=age){
    //     console.log("You can drive")
    // }
    //  else{
    //     console.log("You can not drive")
    // }


// Ternary Operator
//    userage >= age ? console.log("You can drive"): console.log("Youcan not drive");


   // If else Condidion    Date 26/09/25
// let age=18
//     let userage= prompt("Enter your age") 
//     if(userage>=20 && userage<=60){
//         console.log("You can drive")

//     }else if(userage<=5 && userage >=0){
//         console.log(" You cannot drive You are kid")
//     }else if(userage<=10 && userage >=5){
//         console.log(" You cannot drive You are not an adult")

//     }else if (userage>=11 && userage<=12){
//       console.log("You are a school boy")
//     }
//     else if (userage<=19 && userage >=13){
//         console.log(" You can only ride bysycle You are Tenager")

//     }else{
//         console.log("You are overage you are prohibited to drive")
//     }


    // Switch condition 
//   let day = +prompt("Enter a number (1-7) for the day of the week:");

// switch(day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid number! Please enter 1–7.");
// }


// Optimize code

// let day = +prompt("Enter a number from (1-7) for a day of the week:");

// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// if(day >= 1 && day <= 7) {
//   console.log(days[day - 1]);  // -1 because array index starts from 0
// } else {
//   console.log("Invalid number! Please enter 1–7 for a day of the week");
// }



// Date 26 /9/25 Class Task  Vilidation
    // let userInput = prompt("Enter you number")
    // if(isNaN(userInput)){
    // console.log("You entered letter")
    // }else if(isNaN(userInput>0)){
    // console.log("This is a number")
    // }else if(userInput<=33 && userInput>=0){
    //     console.log("You are fail")
    // }else if(userInput>33 && userInput<50){
    //     console.log("you got D grade")
    // }else if(userInput>=50 && userInput<70){
    //     console.log("You got grade B")
    // }else if (userInput>=70 && userInput<90){
    //     console.log("You got grade A")
    // }else if(userInput>=90 && userInput<100){
    //     console.log("you got grade A+")
    // }else if(userInput<0){
    //     console.log(" please Enter positive number")
    // }
    // else if(userInput > 100){
    // console.log("please enter number less than 100")
    //    }
    //  else{
    // console.log("This is a  number")

    // }



// Class No 10
// Continue  ,   Break  ,  return 

//Continue

// for ( let i =1; i <=10 ;i++){
//     if(i === 6){
//         continue;
//         }
//     document.writeln(i)
// }

// Break
// for ( let i =1; i <=10 ;i++){
//     if(i === 6){
//         continue;
//         }
//     document.writeln(i)
// }

// Break
// for ( let i =1; i <=10 ;i++){
//     if(i === 4){
//         Break;
//         }
//     document.writeln(i)
// }

//return
// document.writeln(add())
// function add(){
//     document.writeln("Add two number")
//     return(2+2)
// }

// Class Task
//Print numbers divisible by 3 from 1 to 30

let checkDivisibleBy3 = () => {
    let limit = +prompt("Enter a number");

    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0) {
            document.writeln(i + " is divisible by 3 ✅<br>");
        } else {
            document.writeln(i + " is not divisible by 3 ❌<br>");
        }
    }

    // After finishing the loop, check if limit > 30
    if (limit > 30) {
        document.writeln("<br>Your number " + limit + " is greater than 30 🚀");
    }
};

checkDivisibleBy3();


