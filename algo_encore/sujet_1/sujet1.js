const fs = require('fs');
const fileName = process.argv[2]

fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return ;
  }

  const arr = data.split(" ").map(string => parseInt(string, 10));
  //Exercice 1
  console.log(bubbleSort(arr, 17));
});


//Exercice 1 : Résous le sujet 1 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.
const bubbleSort = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
       return true;
      }
    }
  }
  return false;
};

//Exercice 3 : Résous le sujet 1 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !)

//Exercice 5 : Résous le sujet 1 en ne faisant qu'un seul passage sur ta liste. Si tu réussis cet exercice, sache qu'il a été posé en entretien par Google. Tu peux postuler à Google. La classe, non ?
