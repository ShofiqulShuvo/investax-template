document.addEventListener("DOMContentLoaded", function () {
  let typeSelected, annualIncome;

  // anualIncome
  const annualIncomeInput = document.querySelector(
    'input[name="annual-income"]'
  );

  
  // selected type single/family
  const typeSelectedInput = document.querySelector(
    '#type-select'
  );


  // Function to validate input
  function validateInput(input) {
    const value = input.value.trim();
    const isValid = value !== "";

    // Add or remove .not-valid class based on validation
    if (isValid) {
      input.classList.remove("not-valid");
    } else {
      input.classList.add("not-valid");
    }

    return isValid;
  }

  // Function to validate and perform calculations
  function validateAndCalculate() {
    const inputs = [
      annualIncomeInput, typeSelectedInput
    ];
    const isValid = inputs.every(validateInput);

    if (isValid) {
      // If all inputs are valid, perform calculations
      annualIncome = parseFloat(annualIncomeInput.value.trim());
      typeSelected = typeSelectedInput.value.trim();

      calculateResults();
    }
  }

  // Function to perform calculations
  function calculateResults() {
    // Calculate Medicare Levy Surcharge
    const medicareLevySurcharge = calculateMedicareLevySurcharge(annualIncome, typeSelected);

    displayResults(annualIncome, medicareLevySurcharge);
  }

  // calculate loan repayment
  function calculateMedicareLevySurcharge(annualIncome, typeSelected) {

    // console.log(typeSelected)
    if(typeSelected == "single"){
     return calculateMedicareLevyForSingle(annualIncome) 
    } 

    if(typeSelected == "family"){
     return calculateMedicareLevyForFimily(annualIncome) 
    } 

  }

  // calculateMedicareLevy for single
  function calculateMedicareLevyForSingle(annualIncome) {
    if (annualIncome <= 97000) {
      return 0;
    } else if (annualIncome >= 97001 && annualIncome <= 113000) {
      return annualIncome * 0.01
    }  else if (annualIncome >= 113001 && annualIncome <= 151000) {
      return annualIncome * 0.0125
    } else if (annualIncome >= 151001) {
      return annualIncome * 0.015
    }
  }
  // calculateMedicareLevy for family
  function calculateMedicareLevyForFimily(annualIncome) {
    if (annualIncome <= 194000) {
      return 0;
    } else if (annualIncome >= 194001 && annualIncome <= 226000) {
      return annualIncome * 0.01
    }  else if (annualIncome >= 226001 && annualIncome <= 302000) {
      return annualIncome * 0.0125
    } else if (annualIncome >= 302001) {
      return annualIncome * 0.015
    }
  }

  // Function to display the calculated results
  function displayResults(annualIncome, medicareLevySurcharge) {

    // get the results element
    // large elemnt
    const calculatedMedicareLevySurchargeTaxLarge = document.querySelector('.calculated-result #calculated-medicare-levy-surcharge-large-size')

    // in description
    const annualIncomeInDescription = document.querySelector('.calculated-result .annual-income-in-description')
    const medicareLevySurchargeInDescription = document.querySelector('.calculated-result .medicare-levy-surcharge-in-description')
    
    // in summery
    const annualIncomeInSummery = document.querySelector('.calculated-result .anual-income-summery')
    const medicareLevySurchargeInSummery = document.querySelector('.calculated-result .medicare-levy-surcharge-summery')



    // show the result
    // large elemnt
    calculatedMedicareLevySurchargeTaxLarge.textContent = medicareLevySurcharge.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })

    // in description
    annualIncomeInDescription.textContent = annualIncome.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    medicareLevySurchargeInDescription.textContent = medicareLevySurcharge.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    
    // in summery
    annualIncomeInSummery.textContent = annualIncome.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    medicareLevySurchargeInSummery.textContent = medicareLevySurcharge.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    
  }

  // Add event listener to the inputs for live validation
  [
    annualIncomeInput,
    typeSelectedInput
  ].forEach(function (input) {
    input.addEventListener("input", function () {
      validateInput(input);
    });
  });

  // Add event listener to calculate button
  document
    .querySelector(".calculate-btn")
    .addEventListener("click", validateAndCalculate);
});
