const fs = require('fs');
const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return ;
  }

  const arrayData = data.split(" ").map(string => parseInt(string, 10));
    selectionSort(arrayData);
});

//Exercice 2 : Résous le sujet 2 avec une complexité algorithmique de O(n²), c'est-à-dire que ton programme devra comparer chaque élément entre eux à l'aide de 2 boucles imbriquées.

const selectionSort = (inputArr) => {
	let count = 0;
  let max = -1;
  let n = inputArr.length;
  for(let i = max+1; i < n; i++) {
    for(let j = i+1; j < n; j++) {
      if(inputArr[j] > inputArr[i]) {
        max=j;
        i=max;
      }
    }
    count++;
  }
  console.log(`Immeuble vue sunset : ${count}`);
}

//Exercice 4 : Résous le sujet 2 avec une complexité algorithmique de O(n), c'est-à-dire que ton programme pourra parcourir plusieurs fois chaque élément du tableau (mais pas de boucle imbriquée !).

//Exercice 6 : Résous le sujet 2 en ne faisant qu'un seul passage sur ta liste. Si tu réussis cet exercice, sache qu'il a été posé en entretien par Mailchimp. Tu peux postuler à Mailchimp. La classe, non ?