function rot13(str) {
  // Split the input string into an array of characters
  return str.split('')
    // Iterate over each character in the array
    .map(function(char) {
      // Convert char to a character code
      var charCode = char.charCodeAt(0);
      // Check if character is a capital letter
      if (charCode >= 65 && charCode <= 90) {
        // Shift the character code by 13
        charCode = ((charCode - 65 + 13) % 26) + 65;
      }
      // Convert character code to a character and return
      return String.fromCharCode(charCode);
    })
    // Join the array of characters back into a string
    .join('');
}

// Example usage:
console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
