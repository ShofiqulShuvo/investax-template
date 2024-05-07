document.addEventListener("DOMContentLoaded", function () {
  let taxableIncome,
    netInvestmentLoss,
    reportableFringeBenefit,
    reportableSuperContribution,
    exemptForeignEmploymentIncome;

  // Get the input elements
  const taxableIncomeInput = document.querySelector(
    'input[name="taxable-income"]'
  );
  const netInvestmentLossInput = document.querySelector(
    'input[name="net-investment-loss"]'
  );
  const reportableFringeBenefitInput = document.querySelector(
    'input[name="reportable-fringe-benefit"]'
  );
  const reportableSuperContributionInput = document.querySelector(
    'input[name="reportable-super-contribution"]'
  );
  const exemptForeignEmploymentIncomeInput = document.querySelector(
    'input[name="exempt-foreign-employment-income"]'
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
      taxableIncomeInput,
      netInvestmentLossInput,
      reportableFringeBenefitInput,
      reportableSuperContributionInput,
      exemptForeignEmploymentIncomeInput,
    ];
    const isValid = inputs.every(validateInput);

    if (isValid) {
      // If all inputs are valid, perform calculations
      taxableIncome = parseFloat(taxableIncomeInput.value.trim());
      netInvestmentLoss = parseFloat(netInvestmentLossInput.value.trim());
      reportableFringeBenefit = parseFloat(
        reportableFringeBenefitInput.value.trim()
      );
      reportableSuperContribution = parseFloat(
        reportableSuperContributionInput.value.trim()
      );
      exemptForeignEmploymentIncome = parseFloat(
        exemptForeignEmploymentIncomeInput.value.trim()
      );

      calculateResults();
    }
  }

  // Function to perform calculations
  function calculateResults() {
    // Calculate Repayment Income
    let repaymentIncome =
      taxableIncome +
      netInvestmentLoss +
      reportableFringeBenefit +
      reportableSuperContribution +
      exemptForeignEmploymentIncome;

    const loanRepayment = calculateLoanRepayment(repaymentIncome);

    displayResults(repaymentIncome, loanRepayment);
  }

  // calculate loan repayment
  function calculateLoanRepayment(repaymentIncome) {
    if (repaymentIncome < 51550) {
      return 0;
    } else if (repaymentIncome >= 51550 && repaymentIncome <= 59518) {
      return repaymentIncome * 0.01;
    } else if (repaymentIncome >= 59519 && repaymentIncome <= 63089) {
      return repaymentIncome * 0.02;
    } else if (repaymentIncome >= 63090 && repaymentIncome <= 66875) {
      return repaymentIncome * 0.025;
    } else if (repaymentIncome >= 66876 && repaymentIncome <= 70888) {
      return repaymentIncome * 0.03;
    } else if (repaymentIncome >= 70889 && repaymentIncome <= 75140) {
      return repaymentIncome * 0.035;
    } else if (repaymentIncome >= 75141 && repaymentIncome <= 79649) {
      return repaymentIncome * 0.04;
    } else if (repaymentIncome >= 79650 && repaymentIncome <= 84429) {
      return repaymentIncome * 0.045;
    } else if (repaymentIncome >= 84430 && repaymentIncome <= 89494) {
      return repaymentIncome * 0.05;
    } else if (repaymentIncome >= 89495 && repaymentIncome <= 94865) {
      return repaymentIncome * 0.055;
    } else if (repaymentIncome >= 94866 && repaymentIncome <= 100557) {
      return repaymentIncome * 0.06;
    } else if (repaymentIncome >= 100558 && repaymentIncome <= 106590) {
      return repaymentIncome * 0.065;
    } else if (repaymentIncome >= 106591 && repaymentIncome <= 112985) {
      return repaymentIncome * 0.07;
    } else if (repaymentIncome >= 112986 && repaymentIncome <= 119764) {
      return repaymentIncome * 0.075;
    } else if (repaymentIncome >= 119765 && repaymentIncome <= 126950) {
      return repaymentIncome * 0.08;
    } else if (repaymentIncome >= 126951 && repaymentIncome <= 134568) {
      return repaymentIncome * 0.085;
    } else if (repaymentIncome >= 134569 && repaymentIncome <= 142642) {
      return repaymentIncome * 0.09;
    } else if (repaymentIncome >= 142643 && repaymentIncome <= 151200) {
      return repaymentIncome * 0.095;
    } else {
      return repaymentIncome * 0.1;
    }
  }

  // Function to display the calculated results
  function displayResults(repaymentIncome, loanRepayment) {
    
    // Get the result elements
    // large text element
    const calculatedLoanRepaymentTaxLarge = document.querySelector('.calculated-result #calculated-loan-repayment-in-large-size');

    // description element
    const currentTaxableIncomeInDescription = document.querySelector('.calculated-result .current-taxable-income');
    
    const netInvestmentLossInDescription = document.querySelector('.calculated-result .net-investment-loss');
    
    const reportableFringeBenefitInDescription = document.querySelector('.calculated-result .reportable-fringe-benefit');
    
    const reportableSuperContributionInDescription = document.querySelector('.calculated-result .reportable-super-contribution');
    
    const exemptForeignEmploymentIncomeInDescription = document.querySelector('.calculated-result .exempt-foreign-employment-income');
    
    const calculatedLoanRepaymentInDescription = document.querySelector('.calculated-result .calculated-loan-repayment-in-description');
    // description element end
    
    // summery element
    const repaymentIncomeSummery = document.querySelector('.calculated-result .repayment-income-summery');
    const loanRepaymentSummery = document.querySelector('.calculated-result .loan-repayment');
    // summery element end
    
    // currency in AUD
    const currencyOptions = { style: 'currency', currency: 'AUD', maximumFractionDigits: 0 };

    // Display results in the HTML elements without decimal part in Australian dollars

    // show calculated tax in large view
    calculatedLoanRepaymentTaxLarge.textContent = loanRepayment.toLocaleString('en-AU', currencyOptions);
    
    // show data in description
    currentTaxableIncomeInDescription.textContent = taxableIncome.toLocaleString('en-AU', currencyOptions);

    netInvestmentLossInDescription.textContent = netInvestmentLoss.toLocaleString('en-AU', currencyOptions);

    reportableFringeBenefitInDescription.textContent = reportableFringeBenefit.toLocaleString('en-AU', currencyOptions);

    reportableSuperContributionInDescription.textContent = reportableSuperContribution.toLocaleString('en-AU', currencyOptions);

    exemptForeignEmploymentIncomeInDescription.textContent = exemptForeignEmploymentIncome.toLocaleString('en-AU', currencyOptions);

    calculatedLoanRepaymentInDescription.textContent = loanRepayment.toLocaleString('en-AU', currencyOptions);
    
    // show data in description end
    
    // show data in summery 
    repaymentIncomeSummery.textContent = repaymentIncome.toLocaleString('en-AU', currencyOptions);

    loanRepaymentSummery.textContent = loanRepayment.toLocaleString('en-AU', currencyOptions);
    // show data in summery end
  }

  // Add event listener to the inputs for live validation
  [
    taxableIncomeInput,
    netInvestmentLossInput,
    reportableFringeBenefitInput,
    reportableSuperContributionInput,
    exemptForeignEmploymentIncomeInput,
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
