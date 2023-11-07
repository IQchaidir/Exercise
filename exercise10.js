//soal 1
function titleToNumber(s = "") {
  result = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s.toLocaleUpperCase()[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
}

console.log(titleToNumber("BA"));

//soal 2
let single = (arr = []) => {
  newArr1 = [];
  arr.sort((a, b) => a - b);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      newArr1.push(arr[i]);
    }
  }
  return newArr1;
};

console.log(single([2, 3, 2, 1, 2, 1]));

//soal 3
//(str1,str2)
//(tolowercase split str1 => sorting == tolowercase split str2 => sorting)

let anagram = (str1 = "", str2 = "") => {
  if (
    str1.toLocaleLowerCase().split("").sort().toString() ===
    str2.toLocaleLowerCase().split("").sort().toString()
  ) {
    console.log("ini anagram");
  } else console.log("bukan anagram");
};

anagram("rat", "tar");

//soal 4
// kita akan naik se n tangga
// cuman ada 2 step , 1 langkah dan 2 langkah
const climbStairs = (n) => {
  if (n < 1) {
    return "Ivalid";
  }

  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// Example usage:
const n = 5;
const way = climbStairs(n);
console.log(`There are ${way} distinct ways to climb ${n} steps.`);
