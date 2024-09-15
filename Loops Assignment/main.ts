                  //  Loops Homework  //

 //   01 CREATING A LESSON PLAN    (Using For Loop)
 
 
const myWork:  {name: string; status: boolean} [] = [];

for(let i=1; i<=10; i++) {
    let lesson = {
      name: `Lesson ${i}`,
      status: i % 2 === 1 ? true : false 

  }
  if (1 %2 ===1) {
      console.log("The lesson is odd");
  }
  else{
      console.log("The lesson is even");

  }
  myWork.push(lesson);

};
  console.log(myWork);


  //   02 GUESSING GAME     (Using While Loop)


let maxVal= 6;

const randomNumber = Math.floor(Math.random() * maxVal) +1
console.log(randomNumber);
let numberArray : number[] = [1,2,3,4,5,6]
let indexNumber : number = 0;
while(indexNumber< numberArray.length) {
    let currentGuess = numberArray[indexNumber]
    if(currentGuess === randomNumber) {
         console.log("Congratulation you guessed the correct number");

    }
    else if (currentGuess < randomNumber) {
        console.log("Your Guess is too low!");

    }
    else {
        console.log("Your Guess is too high!");

    }
    indexNumber++;

}


//   03 COUNTER INCREMENTER    (Using Do While Loop)


let counter: number = 0;
let step: number = 1;

do {
     console.log(counter);
     counter += step

}while(counter < 100);


//   04 EXPLORING OBJECTS WITH  for.... in LOOP


let myObject = {
    item1: "watch",
    item2: "Shoes",
    item3: "T shirt",
}
for (let X in myObject){
    console.log(`${X}: ${myObject[X]}`);

}


//   05 EXPLORING ARRAYS WITH LOOPS  (Using Loop)


const myArray : number[] = []
for (let i=1; i<= 10; i++){
    myArray.push(i)

}
console.log(myArray);
for(let i=0; i<myArray.length; i++){
    console.log(`Index: ${i}, value: ${myArray[i]}`);

}
for(let x of myArray ) {
     console.log(`Value: ${x}`);

}