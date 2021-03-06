const num1 = +prompt("Введите первое число:");
const num2 = +prompt("Введите второе число:");

if (num2 < 2 || num2 > 36) {
  console.log("Некорректный ввод");
} else if (isNaN(num1) || isNaN(num2)) {
  console.log("Некорректный ввод");
} else {
  console.log("Ответ", parseInt(num1, 10).toString(num2));
}
