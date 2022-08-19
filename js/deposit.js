//step-1: add event listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function(){
  //step-2: get the deposite amont from the deposite input feild
  //For input feild use.value to the value inside the input field
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  
  //step-3: Get the current total amount
  //for non-input(element other than input,textarea) use innertext to get the text
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //step-4: add Numbers to total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;   
  // set the  deposit total
  depositTotalElement.innerText =  currentDepositTotal;

  //step-5: get balance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balnce
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //step-7: clear the deposit field
  depositField.value = '';
})