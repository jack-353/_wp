function countLetters(str) {
  const letterMap = new Map();

  for (let char of str) {
    if (/[a-zA-Z]/.test(char)) { 
      char = char.toLowerCase(); 
      letterMap.set(char, (letterMap.get(char) || 0) + 1);
    }
  }

  return letterMap;
}


console.log(countLetters("banana")); 


