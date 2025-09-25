
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
let age=18
    let userage= prompt("Enter your age") 
    if(userage>=20){
        console.log("You can drive")

    }else if(userage<=5){
        console.log(" You cannot drive You are kid")
    }else if(userage<=10){
        console.log(" You cannot drive You are not an adult")

    }else if (userage<=19){
        console.log(" You can only ride bysycle You a Tenager")

    }else{
        console.log("you need training first")
    }


    // Switch condition 
  let day = +prompt("Enter a number (1-7) for the day of the week:");

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid number! Please enter 1–7.");
}


// Optimize code

let day = +prompt("Enter a number from (1-7) for a day of the week:");

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if(day >= 1 && day <= 7) {
  console.log(days[day - 1]);  // -1 because array index starts from 0
} else {
  console.log("Invalid number! Please enter 1–7 for a day of the week");
}

