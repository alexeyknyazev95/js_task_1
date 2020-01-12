"use strict";

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

console.log(money, appData.budget);

for (let i = 0; i <= 1; i++) {
    let expensesCategory = prompt("Введите обязательную статью расходов в этом месяце");
    let expensesSum = prompt("Во сколько обойдется?");
    appData.expenses[expensesCategory] = expensesSum;
    appData.budget -= expensesSum;
}

alert("Ваш бюджет на один день: " + appData.budget/30);