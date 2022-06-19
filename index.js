 
 //Using a loop print all odd numbers up to and including n. Don’t include 0. 
 var n;
    for (n=1;n <=10;n++)
    {
   if (n%2!=0)
   console.log (n);
 }

///Take a number and return all the even digits of the number.

let num = [1,2,3,4,5,6,7,8,9,];

console.log('even numbers are');
for (var i = 1 ; i < 10 ; i += 2 ) {
   console.log(i);
}

//Print the sum of all even numbers in a range from a to b. (Including a,b)

function sumNatural(n)
{
    let sum = Math.floor(n * (n + 1));
    return sum;
}
 
function sumEven(a, b)
{
    return sumNatural(Math.floor(b/2)) - sumNatural(Math.floor(a-1) / 2);
}
     
        let a = 2, b = 5;
        console.log ("Sum of Natural numbers from a to b is "+
         sumEven(a, b));

//Check whether the given number is equal to its reverse number or not 

let rev=0;
let d=12345
let lastDigit;
while(d!=0){
  lastDigit=d%10;
  rev=rev*10+lastDigit;
  d=Math.floor(d/10);
}
console.log("Reverse number :" +rev);


//Write a program to read the first and last digit of a number

let m = 98562;
function firstdigit(m)
    {
        while (m >= 10) 
            m /= 10;
        return Math.floor(m);
    }
    function lastdigit(m){
        return Math.floor(m % 10);
    }

    console.log(firstdigit(m) + " "+ lastdigit(m));
   
    