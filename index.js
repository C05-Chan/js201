/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

/* Global Variables */
let remembered; 

/* Functions */
function id() {
  const number = 'up2199496';
  return number;
}

function fn() {
  let firstName = 'Crystal';
  return firstName;
}

function sn() {
  let surName = 'Chan';
  return surName;
}

function add(a,b) {

  let sum = a + b;

  return sum;
}

function subtract(a,b) {
  let sum = a- b;

  return sum;
}

function checkObject(obj){
  obj.checked = true;

  return obj;
}

function checkObjectInside(obj) {
  if (typeof obj.data === 'object') {
    obj.data.checked = true;
  }
}

function arraySet(arr, i, n) {
  if (Number.isInteger(i) && i >= 0 && i < arr.length) {
    arr[i] = n; 
  }
}

function addAll(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}

function larger(a,b){
  if (a > b){
    return a;
  }else{
    return b;
  }
}

function largest(arr) {
  if (arr.length === 0){
    return null;
  }

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
          largest = arr[i];
      }
  }
  return largest;
}

function compare(a, b) {
  if (a.length !== b.length) {
    return false;
  } 
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; 
    }
  }

  return true;
}

function addToAll(arr,n){
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

function rememberThis(keepsake){
  remembered = keepsake;
}

function nArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) { 
    arr[i] = i + 1;
  }
  return arr;
}

function addAllOpt(arr){
  if (arr == null || arr.length === 0){
    return 0;
  }else{
    let sum = 0
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }    
    return sum;
  }
}

function divisors(arr, div) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % div === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


function multiples(n, m) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i * m);
  }
  return arr;
}
