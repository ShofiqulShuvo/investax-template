document.addEventListener('DOMContentLoaded', function () {
  let purchasePrice, soldPrice, costPurchase, costSelling, currentTaxableIncome, moreThanYear;

  // Get the input elements
  const purchasePriceInput = document.querySelector('input[name="purchase-price"]');
  const soldPriceInput = document.querySelector('input[name="sold-price"]');
  const costPurchaseInput = document.querySelector('input[name="cost-purchase"]');
  const costSellingInput = document.querySelector('input[name="cost-selling"]');
  const currentTaxableIncomeInput = document.querySelector('input[name="current-taxable-income"]');
  const moreThanYearRadio = document.querySelector('input[name="more-than-year"]');

  // Function to validate input
  function validateInput(input) {
    const value = input.value.trim();
    const isValid = value !== '';

    // Add or remove .not-valid class based on validation
    if (isValid) {
      input.classList.remove('not-valid');
    } else {
      input.classList.add('not-valid');
    }

    return isValid;
  }

  // Function to validate and perform calculations
  function validateAndCalculate() {
    const inputs = [purchasePriceInput, soldPriceInput, costPurchaseInput, costSellingInput, currentTaxableIncomeInput];
    const isValid = inputs.every(validateInput);

    if (isValid) {
      // If all inputs are valid, perform calculations
      purchasePrice = parseFloat(purchasePriceInput.value.trim());
      soldPrice = parseFloat(soldPriceInput.value.trim());
      costPurchase = parseFloat(costPurchaseInput.value.trim());
      costSelling = parseFloat(costSellingInput.value.trim());
      currentTaxableIncome = parseFloat(currentTaxableIncomeInput.value.trim());
      moreThanYear = moreThanYearRadio.checked;

      calculateResults();
    }
  }

  // Function to perform calculations
  function calculateResults() {
    // Calculate capital gain
    let capitalGain = soldPrice - purchasePrice - costPurchase - costSelling;

    // Ensure taxable capital gain is not negative
    const taxableCapitalGain = Math.max(capitalGain, 0);

    // Calculate taxable capital gain based on ownership duration
    const finalTaxableCapitalGain = moreThanYear ? taxableCapitalGain / 2 : taxableCapitalGain;

    // Update current taxable income
    const updatedTaxableIncome = currentTaxableIncome + finalTaxableCapitalGain;

    // Calculate capital gains tax payable based on provided logic
    const capitalGainsTaxPayableWithcurrentTaxableIncome = calculateCapitalGainsTax(currentTaxableIncome);
    const capitalGainsTaxPayableWithUpdatedTaxableIncome = calculateCapitalGainsTax(updatedTaxableIncome);
    const capitalGainsTaxPayable = capitalGainsTaxPayableWithUpdatedTaxableIncome - capitalGainsTaxPayableWithcurrentTaxableIncome;

    // Display the results
    displayResults(capitalGain, finalTaxableCapitalGain, currentTaxableIncome, capitalGainsTaxPayable);
  }

  // Function to calculate capital gains tax based on income
  function calculateCapitalGainsTax(income) {
    if (income <= 18200) {
      return 0;
    } else if (income <= 45000) {
      return (income - 18200) * 0.19;
    } else if (income <= 120000) {
      return 5092 + (income - 45000) * 0.325;
    } else if (income <= 180000) {
      return 29467 + (income - 120000) * 0.37;
    } else {
      return 51667 + (income - 180000) * 0.45;
    }
  }

  // Function to display the calculated results
  function displayResults(capitalGain, finalTaxableCapitalGain, currentTaxableIncome, capitalGainsTaxPayable) {
    // Get the result elements
    const amountElement = document.querySelector('.calculated-result .amount span:last-child');
    const currentTaxableIncomeInParagraph = document.querySelector('.calculated-result .description .current-income');
    const purchasePriceElement = document.querySelector('.calculated-result .description .purchase-price');
    const soldPriceElement = document.querySelector('.calculated-result .description .sold-price');
    const capitalGainPayableInParagraph = document.querySelector('.calculated-result .description .capital-gain-payable');
    const capitalGainElement = document.querySelector('#tex-estimator .calculated-result .summary .capital-gain');
    const taxableCapitalGainElement = document.querySelector('#tex-estimator .calculated-result .summary .texable-capital-gain');
    const currentTaxableIncomeElement = document.querySelector('#tex-estimator .calculated-result .summary .current-taxable-income');
    const capitalGainPayableElement = document.querySelector('#tex-estimator .calculated-result .summary .capital-gain-tax-payable');

    // Display results in the HTML elements
    amountElement.textContent = capitalGainsTaxPayable.toFixed(2);
    currentTaxableIncomeInParagraph.textContent = currentTaxableIncome.toFixed(2);
    purchasePriceElement.textContent = purchasePrice.toFixed(2);
    soldPriceElement.textContent = soldPrice.toFixed(2);
    capitalGainPayableInParagraph.textContent = capitalGainsTaxPayable.toFixed(2);
    capitalGainElement.textContent = capitalGain.toFixed(2);
    taxableCapitalGainElement.textContent = finalTaxableCapitalGain.toFixed(2);
    currentTaxableIncomeElement.textContent = currentTaxableIncome.toFixed(2);
    capitalGainPayableElement.textContent = capitalGainsTaxPayable.toFixed(2);
  }

  // Add event listener to the inputs for live validation
  [purchasePriceInput, soldPriceInput, costPurchaseInput, costSellingInput, currentTaxableIncomeInput].forEach(function (input) {
    input.addEventListener('input', function () {
      validateInput(input);
    });
  });

  // Add event listener to calculate button
  document.querySelector('.calculate-btn').addEventListener('click', validateAndCalculate);
});
