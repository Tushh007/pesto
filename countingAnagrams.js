/*
Write a function which given a string, returns valid number of anagrams in it.
*/
const anagram = (str1, str2) => {
  // lenght of the anagrams strings are same. If not, they are not anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Frequency counter for string 1 and checker for string 2
  let lookup = {};

  //  creating frequency counter for string 1
  for (let letter of str1) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  // checking if str2 characters exist in lookup and whether frequencies are same or not
  for (let letter of str2) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

// Driver Code
const countAnagrams = (str) => {
  // splitting incomming string at empty spaces into an array and filitering duplicate elements from it
  str = str
    .split(" ")
    .filter((value, index, self) => self.indexOf(value) === index);

  // Setting up pointers for array traversal, check flag for storing anagram check result and counter for anagram count
  let i, j, check, count;
  i = check = count = 0;
  j = 1;

  // traversing array with two pointers i at 0 and j at 1 and counting anagramns
  while (i < str.length - 1) {
    check = anagram(str[i], str[j]);

    // if anagram, increment the angram counter and remove the element at jth index to avoid duplicate counting in further traversal
    // increment jth pointer index only when the check is false
    if (check === true) {
      str.splice(j, 1);
      count++;
    } else {
      j++;
    }

    // increment the ith pointer index once the jth reaches the end of the array
    if (j === str.length) {
      i++;
      j = i + 1;
    }
  }

  return count;
};

console.log(countAnagrams("aa aa odg dog gdo")); // 2
console.log(countAnagrams("ac bc run urn urn")); // 1
console.log(countAnagrams("k k k bar foo")); // 0
