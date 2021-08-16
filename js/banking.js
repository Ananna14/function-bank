


function getInputValue(inputId) {
    const dipositeInput = document.getElementById(inputId);
    const depositAmountText = dipositeInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // clear input field 
    dipositeInput.value = '';

    return depositAmount;

}




// diposite-button 
document.getElementById('deposit-button').addEventListener('click', function () {
    // const dipositeInput = document.getElementById('deposit-input');
    // const depositAmountText = dipositeInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);
    const depositAmount = getInputValue('deposit-input');

    // get current deposit 
    const dipositeTotal = document.getElementById('deposit-total');
    const dipositeTotalText = dipositeTotal.innerText;
    const previousDepositeTotal = parseFloat(dipositeTotalText);
    dipositeTotal.innerText = previousDepositeTotal + depositAmount;
    // console.log(dipositeTotalText);

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceAmountText);

    balanceTotal.innerText = previousbalanceTotal + depositAmount;



});


// handel withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withhdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withhdrawInput.value;
    // const withdrowAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');

    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previouswithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrowAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousbalanceTotal - withdrowAmount;


});

