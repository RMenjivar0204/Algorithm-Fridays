//The Collatz Conjecture goes like this:

//Take any number n. If n is even, divide it by 2, if n is odd, multiply it by 3 and add 1. 
//Repeat the process indefinitely, and you'll eventually reach 1.

//Given a num variable, can you print all the numbers in num's Collatz sequence until 1 is reached? 
//Print the numbers space-separated (and each test case on its own line).


function collatz(num) {
    while(num != 1){
        if (num % 2 == 0) {
        num = num/2;
        console.log(num)
    }
    else {
        num = num * 3 + 1;
    console.log(num)
    }
}
}

collatz(100)