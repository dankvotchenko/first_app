'use-strict';
let startBtn = document.getElementById('start'),
    resultTable = document.querySelectorAll('result-table'),
    expenses = document.getElementsByClassName('expenses-item'),
    expenesesBtn = document.getElementsByTagName('button'),
    countBtn = document.getElementsByTagName('button'), 
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    choseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');