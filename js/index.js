// Iteration 1: Names and Input
...safcsdv

// Iteration 2: Conditionals


// Iteration 3: Loops


for (cappucino of hacker1) {
    console.log(cappucino.toUpperCase());
  }

result = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());



let loremIpsum =
  "Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

  let trimmedLorem = loremIpsum.trim()
  
  let wordsCount = 0

  for(character of trimmedLorem){
    if(character === " ") wordsCount += 1;
  }
console.log("The word count is: ", (wordsCount += 1));