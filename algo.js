// Create the sentence to read
var sentence = "This is a sentence. It has some words in it.";

// Initialize the counters to 0
var length = 0;
var words = 0;
var vowels = 0;

// Create a variable to store the current position in the sentence
var index = 0;

// Iterate over the characters in the sentence
while (index < sentence.length) {
  // Read the current character
  var char = sentence[index];

  // Check if the character is a space, vowel, or point
  if (char == " ") {
    // Increment the word counter
    words += 1;
  } else if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    // Increment the vowel counter
    vowels += 1;
  } else if (char == ".") {
    // Break out of the while loop
    break;
  }

  // Increment the index to move to the next character
  index += 1;
}

// Set the length variable to the number of characters in the sentence
length = index;

// Output the results
console.log("Length: " + length);
console.log("Words: " + words);
console.log("Vowels: " + vowels);
