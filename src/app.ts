// ! operador de asercion no nula le decimos a typescript que no puede ser nulo
// typeCasting usaremos as luego de la query o el elemento

const creditDebit = document.querySelector('#creditDebitSelect') as HTMLSelectElement;
const toFromElement = document.querySelector('#toFromInput') as HTMLInputElement;
const amountElement = document.getElementById('amountInput') as HTMLInputElement;
const details = document.getElementById('details') as HTMLTextAreaElement;
const checkbox = document.getElementById('sendEmail') as HTMLInputElement;
const Form = document.getElementById('form') as HTMLFormElement;
const Total = document.getElementById('total') as HTMLSpanElement;

//console.log(creditDebit, toFromElement, amountElement, details, checkbox, Form);

//console.log(Total)

interface TransactionInterface {
  creditDebit: string,
  toFrom: string,
  amount: number,
  details: string,
  sendEmail: boolean
}

Form.addEventListener('submit', (e) => {
  e.preventDefault();
  const transaction: TransactionInterface = {
    creditDebit: creditDebit.value,
    toFrom: toFromElement.value,
    amount: amountElement.valueAsNumber,
    details: details.value,
    sendEmail: checkbox.checked
} 
renderTransaction(transaction);
Form.reset();
getTotal()
})

const renderTransaction = (transaction: TransactionInterface) => {
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

  const tbody = document.querySelector('tbody')!
  tbody.prepend(tableRow);
}


const getTotal = (): number | string => {
  const tbody = document.querySelector('tbody')! as HTMLTableSectionElement;
  const Total = tbody.querySelectorAll('tr');
  let total = 0;
  for (const row of Total) {
    const amount = row.querySelector('td:nth-child(3)')!.textContent;
    console.log(amount);
  }
  return total;
}


