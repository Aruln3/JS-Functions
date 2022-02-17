//Print odd numbers in an array
var a = [1,2,3,4,5,6]
let odds = a.filter(n => n%2)
console.log(odds)

//Convert all the strings to title caps in a string array
function sentenceCase (str) {
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
 return str.replace(/\w\S*/g, 
function(txt){return txt.charAt(0).toUpperCase() +
       txt.substr(1).toLowerCase();});
}
  console.log(sentenceCase("arul at guvi batch b28"));

//Sum of all numbers in an array
const sum = [1,2,3,4,5,6].reduce((partialSum, num) =>
partialSum + num , 0);
console.log(sum);

//Return all the prime numbers in an array
var allNum = [1,2,3,4,5,6]
primeNum = allNum.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
console.log(primeNum);

// Return all the palindromes in an array
const arr = ['malayalam', 1245421, 'DID', 'guvi', 'mom'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));

// Return median of two sorted arrays of the same size
function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2;
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }
    return (m1 + m2)/2;
}
var ar1 = [1,2,3,4,5,6];
var ar2 = [11,22,33,44,55,66];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    console.log("Median is "+ getMedian(ar1, ar2, n1));
else
    console.log(" It is An Unequal Size Array");
 
// Remove duplicates from an array
function removeDuplicates(arr1, n)
{
    if (n==0 || n==1)
        return n;
    var temp = new Array(n);
    var j = 0;
    for (var i=0; i<n-1; i++)
        if (arr1[i] != arr1[i+1])
            temp[j++] = arr1[i];
    temp[j++] = arr1[n-1];

    for (var i=0; i<j; i++)
        arr1[i] = temp[i];
    return j;
}
var arr1 = [1, 2, 3, 4, 4, 5, 5];
    var n = arr1.length;
    n = removeDuplicates(arr1, n);
    for (var i=0; i<n; i++)
      console.log( arr1[i]);

// Rotate an array by k times
function Rotate(a, n, k)
{
    k = k % n;
    for (let i = 0; i < n; i++) {
        if (i < k) {
            console.log(a[n + i - k] + " ");
        }
        else {
            console.log((a[i - k]) + " ");
        }
    }
}
let Array2 = [1,2,3,4,5,6];
let N = Array2.length;
let K = 2;
Rotate(Array2, N, K);


// Print odd numbers in an array
[1,2,3,4].forEach((num) => num % 2 ==! 0 && console.log(num));

// Convert all the strings to title caps in a string array
function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
  console.log(titleCase('iron man'));

// Sum of all numbers in an array
const add = arr3 => arr3.reduce((a, b) => a + b, 0);
var arr3 = [3, 6, 1, 5, 8];
var sum1 = add(arr3);
console.log(sum1);

// Return all the prime numbers in an array
const newArray = [1,2,3,4,5,6,7,8,9];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray);

// Return all the palindromes in an array
const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);
console.log(getAllPalindromes(["hi", "mom", "noon"]));
