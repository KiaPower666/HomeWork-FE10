// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//  Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// const res = arr.slice(2,5);

// console.log(res);

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//  Переставить "Janett", "Franz" в начало массива

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// arr.unshift(arr.splice(5,7));
// console.log(arr);

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//  Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// arr.splice(4,2, "Oleg","Valerchik")

// console.log(arr);

// Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//  "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")

// const arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];

// arr.reverse();
// arr.splice(0,4, "Mitrofan","Mitrofan","Mitrofan","Mitrofan")

// console.log(arr);

// Даны два массива ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"] ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]
//  Взять из второго массива все имена начина с "Aristarkh" (включительно) и добавить их в 1ый массив (не должно получится двумерного массива)

// const arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// const arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];

// arr1.unshift(arr2.splice(2,3));

// arr1.flat(); // Почему flat не работает????

// console.log(arr1);

// var flattened = arr1.reduce(function(a, b) {
//     return a.concat(b);
// });
// console.log(flattened);

// Дана строка 'Мама мыла раму' С помощью prompt() получите строку.
//  Поменяйте в строке 'Мама мыла раму' слово раму на введеное слов из Prompt

// const str = 'Мама мыла раму'
// console.log(str.split('раму').join(prompt()));