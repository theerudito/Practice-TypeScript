"use strict";
// ! operador de asercion no nula le decimos a typescript que no puede ser nulo
// typeCasting usaremos as luego de la query o el elemento
const creditDebit = document.querySelector('#creditDebitSelect');
const toFromElement = document.querySelector('#toFromInput');
const amountElement = document.getElementById('amountInput');
const details = document.getElementById('details');
const checkbox = document.getElementById('sendEmail');
const Form = document.getElementById('form');
const Total = document.getElementById('total');
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const transaction = {
        creditDebit: creditDebit.value,
        toFrom: toFromElement.value,
        amount: amountElement.valueAsNumber,
        details: details.value,
        sendEmail: checkbox.checked
    };
    renderTransaction(transaction);
    Form.reset();
    getTotal();
});
const renderTransaction = (transaction) => {
    const tableRow = document.createElement('tr');
    const creditDebitData = document.createElement('td');
    creditDebitData.textContent = transaction.creditDebit;
    const toFromData = document.createElement('td');
    toFromData.textContent = transaction.toFrom;
    const amountData = document.createElement('td');
    amountData.textContent = transaction.amount.toFixed(2);
    const detailsData = document.createElement('td');
    detailsData.textContent = transaction.details;
    tableRow.appendChild(creditDebitData);
    tableRow.appendChild(toFromData);
    tableRow.appendChild(amountData);
    tableRow.appendChild(detailsData);
    const tbody = document.querySelector('tbody');
    tbody.prepend(tableRow);
};
const getTotal = () => {
    const tbody = document.querySelector('tbody');
    const Total = tbody.querySelectorAll('tr');
    let total = 0;
    for (const row of Total) {
        const amount = row.querySelector('td:nth-child(3)').textContent;
        console.log(amount);
    }
    return total;
};
