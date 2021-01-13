const fs = require('fs');
const fileName = process.argv[2];

//Alerts if NaN in list
const alertIfNaN = (arrayData) => {
  if(arrayData.includes(NaN))return true;
}

fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return ;
  }

  const arrayData = data.split(" ").map(string => parseInt(string, 10));
  if (!alertIfNaN(arrayData)) {
    bubbleSort(arrayData);
    selectionSort(arrayData);

  } else {
    console.log('ERROR: wrong input values or empty file');
  }
});


//BUBBLE SORT
let bubbleSort = (inputArr) => {
  let count = 0;
  let len = inputArr.length; //mesure la longueur de l'array
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      count++;
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j]; //stock temporairement data
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  console.log(`Tri a bulle : ${count} comparaisons - [${inputArr}]`);
};

//SELECTION SORT
const selectionSort = (inputArr) => {
  let count = 0;
  let n = inputArr.length;
  for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++){
      if(inputArr[j] < inputArr[min]) {
          min=j; 
      }
      count++;
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i]; 
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;      
    }
  }
  console.log(`Tri par selection : ${count} comparaisons - [${inputArr}]`);
}

//MERGE SORT
const merge = (arr1, arr2) => {
  let sorted = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  };

  return sorted.concat(arr1.slice().concat(arr2.slice()));
};

const mergeSort = (inputArr) => {
  if ((inputArr).length <= 1) return inputArr;
  let mid = Math.floor((inputArr).length / 2),
      left = mergeSort((inputArr).slice(0, mid)),
      right = mergeSort((inputArr).slice(mid));

  return merge(left, right);
};



