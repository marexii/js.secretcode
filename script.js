console.log("Я загадал число от 1 до 10. Попробуй угадать его!");
let secretNumber = Math.floor(Math.random()*10);
// console.log(secretNumber);
let attempts = 3;

while (attempts > 0) {
   let userNumber = Number(prompt('Введите число:'));

   console.log(userNumber<secretNumber);
 if (userNumber < secretNumber) {
    console.log("Секретное число больше");
    attempts = attempts - 1;
 }else if (userNumber === secretNumber) {
    console.log("Вы угадали!")
 }
 else {
    console.log("Секретное число меньше")
    attempts = attempts - 1
 }

}


