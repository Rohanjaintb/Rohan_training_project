// Retrieve the loan-btn element
const loanBtn = document.getElementById('loan-btn');

// Add an event listener to the loan-btn element
loanBtn.addEventListener('click', function() {

  // Retrieve the loan-field element
  const loanField = document.getElementById('loan-field');

  // Retrieve the value entered in the loan-field element
  const loanAmount = parseFloat(loanField.value);

  // Retrieve the total-balance element
 
  const totalloan = document.getElementById('total-loan');

  // Retrieve the value of the total-balance element
  const currentloan = parseFloat(totalloan.innerText);
  const newloan = currentloan + loanAmount;
  // Calculate the new balance after adding the loan amount

  const totalBalance = document.getElementById('total-balance');
  const preTotalBalanceStr = totalBalance.innerText;
  const preTotalBalance = parseFloat(preTotalBalanceStr);
  const newTotalBalance = preTotalBalance - loanAmount;
  totalBalance.innerText = newTotalBalance;
  
  // Update the total-balance element with the new balance
 
  totalloan.innerText = newloan;

  // Clear the loan-field element
  loanField.value = '';
});
