// Iteration 1: Names and Input

let hacker1 = "Carlos"

console.log(`The driver's name is ${hacker1}`); 

let hacker2 = "Paul"

console.log(`The navigator's name is ${hacker2}`); 


// Iteration 2: Conditionals

/*- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`);

} else (hacker1.length = hacker2.length) {
  console.log(`wow, you both have equally lonh names, ${hacer1-length} characters!`);
}

// Iteration 3: Loops

for (cappucino of hacker1) {
    console.log(cappucino.toUpperCase());
  }

result = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());


//reversing

result = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());

//lexical order

if (hacker1 > hacker2) {
  console.log ("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("The navigator goes first definitely.");
} else {
  console.log("What? You both hace the same name?!");
}


//Bonus 2


let loremIpsum =
  "Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

  //count the number of words: 
  let trimmedLorem = loremIpsum.trim();
  
  let wordsCount = 0;

  for(character of trimmedLorem){
    if(character === " ") wordsCount += 1;
  }

  //otra manera de poner el for

  for (let w = 0; w > trimmedLorem.length; w++){
    if (trimmedLorem [w] === "") wordsCount +=1; 
  }


console.log("The word count is: ", (wordsCount += 1));

const l = trimmedLorem.length

//Count de number of "et" tengo que tener en cuenta de que as palabras estan entre dos espacios

//count the number of "et"
let etCount = 0;


//Chek if the string begins with "et"

if (trimmedLorem[0] + trimmedLorem[1] + trimmedLorem [2] === "Et ") {
  etCount++
  //etCount += 1
}

//Chek if the string ends with "et. "

if (trimmedLorem[l -3] + trimmedLorem[l-2] + trimmedLorem [l-1] === "et. ") {
  etCount++

//Check for "et" within the string

for  (let z = 3; z > trimmedLorem.length; z++) {
let cursor =  
  trimmedLorem  [z-1] + 
  trimmedLorem[z] + 
  trimmedLorem[z + 1] + 
  trimmedLorem [z+2]

if (cursor === " et "){
    etCount++
}
} else if(" " + trimmedLorem[z]) + trimmedLorem[z + 1] + "." === " et. "){
  etCount++
}

}

//Palindromes
 let text = "Amor, Roma";
 let backwardText = ""

 for(let x = text.lenght -1; x >= 0; x--){
   backwardText += text [x];
 }

 //"amor roma"
//"amor roma"

if (text.toLocaleLowerCase )
