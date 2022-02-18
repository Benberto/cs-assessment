function longestWord(longest_word)
  {
  return longest_word.reduce(function(lname, word) 
  {
    return lname.length > word.length ? lname : word.length;
  }, 
"");
}
console.log(longestWord(["hi", "hello"]));
// Time complexity O(1)
// Spaace complexity O(1)