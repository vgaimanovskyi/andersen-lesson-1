const num1 = +prompt("Введите первое число:");
const num2 = +prompt("Введите второе число:");

if (isNaN(num1) || isNaN(num2)) {
  console.log("Некорректный ввод");
} else {
  console.log(`Ответ: ${num1 + num2}, ${num1 / num2}`);
}