// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. 
// Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse,
// the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

function hypotenuse(side1, side2){
    let side3 = Math.pow(side1, 2) + Math.pow(side2, 2);
    console.log(Math.sqrt(side3)); 
}
console.log(hypotenuse(2,3));


// Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

function midrange(num1, num2, num3){
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);
    return (min + max) / 2
 }
 console.log(midrange(10, 20, 17));


 // Write a function area that calculates the area of a circle. The function is given the radius of the circle.

 function area(circleCalculation){
    area = (circleCalculation * circleCalculation)* Math.PI ;
    return area.toFixed(1);
}
console.log(area(2));


// Write a function round100 that rounds a number to the nearest hundred.

function round100(num){
    result = Math.round(num / 100) * 100;
    return result;
}
console.log(round100(49.999));


// Write a function dice that returns like a dice a random number between 1 and 6.

function dice(){
    let x = Math.round( Math.random() * 5 + 1);
    return x;
}
console.log(dice());


// Write a function add that takes a string with a summation task and returns its result as a number. 
// Two natural numbers should be added.
// The summation task is a string of the form '102+17'.

function add(string){
    let sum = parseInt(string, 10);
    let soma = string.indexOf('+');
    let depoisSoma = string.substr(soma + 1);
    let sum2 = parseInt(depoisSoma, 10)

    return sum + sum2;
 }
console.log(add('12+5'));


//Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

function nand(value1, value2){
    if(value1 === true && value2 === true){
        return false;
    } else {
        return true;
    }
}

console.log(nand(2+2 === 5, 3+5 === 8));


// Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

function isEven(value){
    if(value % 2 === 0){
        console.log("Par");
        return true;
    }
    console.log("Impar");
    return false;
}

console.log(isEven(30));

// Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

function unequal(x,y,z){
    if(x !== y && x !== z && y !== z){
    return true;
    }
    return false;
}

console.log(unequal(3,2,true));

// Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. 
// If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'


function repdigit(n) {
    let ones = n % 10;
    let tens = Math.floor(n / 10);
    if (ones === tens) {
      return 'Repdigit!';
    }
    return 'No Repdigit!';
}

console.log(repdigit(55));

//Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1.
// For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

function addWithSurcharge(value1, value2){
    if(value1 <= 10){
        value1++;
    }
    else if(value1 === 10 && value1 <= 20){
        value1 +=2;
    }
    else {
        value1 +=3;
    }

    if(value2 <= 10){
        value2++;
    }  
    else if(value2 === 10 && value2 <= 20){
        value2 += 2;
    }
    else if(value2 > 20) {
        value2 += 3;
    } else {
        console.log('Digite um dígito correto.');
    }
    let result = value1 + value2;
    return result;
}

console.log(addWithSurcharge(10,21));

// Write a function getLastElement that takes an array and returns the last element of the array.

function getLastElement(array){
    let newArray = array[array.length -1]
    return newArray;
}
console.log(getLastElement([1,5,32,18,3,45,56]));

//Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left.
// The 0th element should be placed at the end of the array. The rotated array should be returned.



function rotate(array){
    let itemOff = array.shift()
    array.push(itemOff)
    return array
}

console.log(rotate([1, 'b', 'c', 37]));

//


// function add(array, nova){
//     let comparar = nova.indexOf()
    
//     let incluir = array.includes(comparar)
//     let newarray = array.split(incluir)

//     return newarray 
// }





