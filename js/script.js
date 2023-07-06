'use strict'

//    Arrow function basic
//1. Напишіть стрілкову функцію, яка приймає параметр num і повертає квадрат числа.
// let getSquare = (num) => num**2;
// console.log('Квадрат числа: ' + getSquare(3));

//2. Створіть стрілкову функцію, яка обчислює суму двох чисел a і b.
// let getSum = (a, b) => a + b;
// console.log('Сума чисел: ' + getSum(8, 5));

//3. Напишіть стрілкову функцію, яка перевіряє, чи є задане число num парним і повертає true, якщо так, або false, якщо ні.
// let isEven = (num) => (num % 2 === 0) ? 'Число є парним' : 'Число не парне';
// console.log(isEven(23));

//4. Напишіть стрілкову функцію, яка приймає два числа a і b і повертає більше з них.
// let getBigger = (a, b) => (a > b) ? a : b;
// console.log(getBigger(7, 5));

//5. Створіть стрілкову функцію, яка приймає число n і повертає суму всіх чисел від 1 до n.
// let getSum = (n) => {
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     return sum
// };

// console.log(getSum(10));

//6. Напишіть стрілкову функцію, яка приймає два числа a і b і повертає true, якщо a ділиться на b без залишку, або false, якщо ні.
// let division = (a, b) => (a % b === 0) ? true : false
// console.log(division(6, 2));

//7.* Створіть стрілкову функцію, яка приймає число n і виводить в консоль перші n чисел Фібоначчі.


//8. Замініть Функціональні Вирази на стрілкові функції:
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask(
//     "Ви згодні?",
//     function() { alert("Ви погодились."); },
//     function() { alert("Ви скасували виконання."); }
//   );

// function ask(question, yes, no){
//    if(confirm(question)) yes()
//     else no()
// }
//     ask(
//         "Ви згодні?",
//         () => alert('Ви погодились'),
//         () => alert('Ви скасували виконання')
//     );
