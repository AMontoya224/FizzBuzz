let palabra;
for(let i=1; i<=100; i++) {
    palabra = i;
    if(i % 3 === 0){
        palabra = "Fizz"
    }
    if(i % 5 === 0){
        palabra = "Buzz"
    }
    if(i % 15 === 0){
        palabra = "FizzBuzz"
    }
    console.log(palabra);
 }