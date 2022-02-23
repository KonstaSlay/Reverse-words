/*  Reverse words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

function reverseString(str) {
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
    	arr[i] = arr[i].split("").reverse().join("");
        
    }
  return arr.join(" ")
}
console.log(reverseString("This is an example!"));
console.log(reverseString("double  spaces"));

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
console.log(reverseWords('apple'));
console.log(reverseWords('a b c d'));
console.log(reverseWords('double  spaced  words'));