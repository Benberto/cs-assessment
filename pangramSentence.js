
const pangramSentence = (string) => {
  let alpha = string.toUpperCase().split("");

  for (let beta = 65; beta < 91; beta++) {
      
      let gamma = String.fromCharCode(beta);
      if (alpha.includes(gamma)) {
          continue;
      }
      else {
          return false;
      }
  }
  return true;
}

console.log(pangramSentence("The quick brown fox jumps over the lazy dog!"));
// Time complexity O(n)
// Spaace complexity O(n)