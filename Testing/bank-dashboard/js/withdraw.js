document.getElementById('withdraw-btn').addEventListener('click', function(){
   const withdrawInputField = document.getElementById('withdraw-field');
   const withdrawOldValue = withdrawInputField.value;
   const withdrawNewValue = parseFloat(withdrawOldValue);

   const withdrawTotal = document.getElementById('withdraw-total');
   const preWithdrawTotalStr = withdrawTotal.innerText;
   const preWithdrawTotal = parseFloat(preWithdrawTotalStr);

   
   

   const totalBalance = document.getElementById('total-balance');
   const preTotalBalanceStr = totalBalance.innerText;
   const preTotalBalance = parseFloat(preTotalBalanceStr);
   if (preTotalBalance===0){
      alert("insufficient Balance")
      return;
   }
   if (preTotalBalance < withdrawNewValue) {
      alert("Withdrawal amount is greater than the available balance.");
      return;
    }
   
   
  else{const newTotalBalance = preTotalBalance - withdrawNewValue;

   totalBalance.innerText = newTotalBalance;
   const currentTotalWithdraw = preWithdrawTotal + withdrawNewValue;
   withdrawTotal.innerText = currentTotalWithdraw;
}

   withdrawInputField.value = '';
})

