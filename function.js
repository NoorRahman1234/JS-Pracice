
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
    let a = null;       // 'null' means intentionally no value
    let b;              // declared but not assigned → undefined
    // Print both
    console.log("a =", a);  // Output: a = null
    console.log("b =", b);  // Output: b = undefined
    // 
   
     /*Difference:
    - null → assigned manually to represent "no value"
    - undefined → default value of uninitialized variables
    */
    let input1 = prompt("Enter first value (true/false):").toLowerCase() === "true";
    let input2 = prompt("Enter second value (true/false):").toLowerCase() === "false";
    // Perform AND, OR, NOT
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    console.log("AND (input1 && input2):", input1 && input2);
    console.log("OR (input1 || input2):", input1 || input2);
    console.log("NOT (!input1):", !input1);
    console.log("NOT (!input2):", !input2);

