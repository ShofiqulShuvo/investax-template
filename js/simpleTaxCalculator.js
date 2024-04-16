document.addEventListener('DOMContentLoaded', function () {
  let wageIncome, deductions, donation, investmentIncome, netCapitalGian, businessIncome, businessDeductions;

  // Get the input elements
  const wageIncomeInput = document.querySelector('input[name="wage-income"]');
  const deductionsInput = document.querySelector('input[name="deductions"]');
  const donationInput = document.querySelector('input[name="donation"]');
  const investmentIncomeInput = document.querySelector('input[name="investment-income"]');
  const netCapitalGianInput = document.querySelector('input[name="net-capital-gian"]');
  const businessIncomeInput = document.querySelector('input[name="business-income"]');
  const businessDeductionsInput = document.querySelector('input[name="business-deductions"]');



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
    const inputs = [wageIncomeInput, deductionsInput, donationInput, investmentIncomeInput, netCapitalGianInput, businessIncomeInput, businessDeductionsInput];
    const isValid = inputs.every(validateInput);

    if (isValid) {
      // If all inputs are valid, perform calculations
      wageIncome = parseFloat(wageIncomeInput.value.trim());
      deductions = parseFloat(deductionsInput.value.trim());
      donation = parseFloat(donationInput.value.trim());
      investmentIncome = parseFloat(investmentIncomeInput.value.trim());
      netCapitalGian = parseFloat(netCapitalGianInput.value.trim());
      businessIncome = parseFloat(businessIncomeInput.value.trim());
      businessDeductions = parseFloat(businessDeductionsInput.value.trim());

      calculateResults();
    }
  }

  // Function to perform calculations
  function calculateResults() {
    // Calculate taxable income
    let taxableIncome = (wageIncome + investmentIncome + netCapitalGian + businessIncome) - (deductions + donation + businessDeductions);

    const currentTaxableIncome = Math.max( taxableIncome, 0);

    // calculate tax
    const calculatedTax = calculateSimpleTax(currentTaxableIncome);

    // calculate medicare leavy
    const medicareLevy = calculateMedicareLevy(currentTaxableIncome)
    
    // Calculate capital gains tax payable based on provided logic
    // const capitalGainsTaxPayableWithcurrentTaxableIncome = calculateCapitalGainsTax(currentTaxableIncome);
    // Display the results
    displayResults(currentTaxableIncome, calculatedTax, medicareLevy);
  }

  // function for calculate Medicare Levy
  function calculateMedicareLevy (currentTaxableIncome) {
    const medicareLevyRate = 2; // in percent

    return (medicareLevyRate*currentTaxableIncome)/100;
  }

  // // Function to calculate simple tax based on income
  function calculateSimpleTax(currentTaxableIncome) {
    if (currentTaxableIncome <= 18200) {
      return 0;
    } else if (currentTaxableIncome <= 45000) {
      return (currentTaxableIncome - 18200) * 0.19;
    } else if (currentTaxableIncome <= 120000) {
      return 5092 + (currentTaxableIncome - 45000) * 0.325;
    } else if (currentTaxableIncome <= 180000) {
      return 29467 + (currentTaxableIncome - 120000) * 0.37;
    } else {
      return 51667 + (currentTaxableIncome - 180000) * 0.45;
    }
  }
  
  

  // Function to display the calculated results
  function displayResults(currentTaxableIncome, calculatedTax, medicareLevy) {
    // Get the result elements
    const calculatedTaxLarge = document.querySelector('.calculated-result #calculated-tax-in-large-size');

    const currentTaxableIncomeInParagraph = document.querySelector('.calculated-result .description .current-taxable-income');

    const estimatedTaxElementInParagraph = document.querySelector('.calculated-result .description .estimated-tax');
    
    const taxableIncomeElementInSummery = document.querySelector('.calculated-result .summary .taxable-income');
    
    const calculatedTaxElementInSummery = document.querySelector('.calculated-result .summary .calculated-tax');
    
    const medicareLevyElementInSummery = document.querySelector('.calculated-result .summary .medicare-levy');
    
  
    // currency in AUD
    const currencyOptions = { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 };

    // Display results in the HTML elements without decimal part in Australian dollars
    
    // show calculated tax in large view
    calculatedTaxLarge.textContent = calculatedTax.toLocaleString('en-AU', currencyOptions);
    
    // show taxable income in paragraph
    currentTaxableIncomeInParagraph.textContent = currentTaxableIncome.toLocaleString('en-AU', currencyOptions);
    
    // show estimated tax in paragraph
    estimatedTaxElementInParagraph.textContent = calculatedTax.toLocaleString('en-AU', currencyOptions);
    
    // show taxable income in summery
    taxableIncomeElementInSummery.textContent = currentTaxableIncome.toLocaleString('en-AU', currencyOptions);
    
    // show calculated tax in summery
    calculatedTaxElementInSummery.textContent = calculatedTax.toLocaleString('en-AU', currencyOptions);
    
    // show medicare levy in summery
    medicareLevyElementInSummery.textContent = medicareLevy.toLocaleString('en-AU', currencyOptions);
    
  }
  
  

  // Add event listener to the inputs for live validation
  [wageIncomeInput, deductionsInput, donationInput, investmentIncomeInput, netCapitalGianInput, businessIncomeInput, businessDeductionsInput].forEach(function (input) {
    input.addEventListener('input', function () {
      validateInput(input);
    });
  });



  // Add event listener to calculate button
  document.querySelector('.calculate-btn').addEventListener('click', validateAndCalculate);
});
