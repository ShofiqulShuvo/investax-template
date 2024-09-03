// Function to get the input value and parse it as a float
function getInputValue(name) {
  const input = document.querySelector(`input[name="${name}"]`);
  const value = input && input.value.trim();

  // Check if the input has the required attribute
  const isRequired = input && input.hasAttribute('required');

  if (isRequired && !value) {
    input.style.borderColor = 'red'; // Highlight empty field
    errorMessage.style.display = 'block'; // Show error message
    return 0;
  }

  input.style.borderColor = '#B17A4E'; // Highlight empty field
  return parseFloat(value) || 0;
}

// Update global variables
const errorMessage = document.querySelector(".error-message");
const promptMessage = document.getElementById('prompt-message');
const selectElement = document.getElementById('type-select');
const landValueInput = document.querySelector('input[name="land-value"]');
const landTaxRateInput = document.querySelector('input[name="land-tax-rate"]');
const landTaxInput = document.querySelector('input[name="land-tax"]');
const mortgageLoanAmountInput = document.querySelector('input[name="mortgage-loan-amount"]');
const mortgageInterestRateInput = document.querySelector('input[name="interest-rate-mordgage-loan-amount"]');
const interestOnMortgageInput = document.querySelector('input[name="interest-on-Mortgage"]');
const equityLoanAmountInput = document.querySelector('input[name="equity-loan"]');
const equityInterestRateInput = document.querySelector('input[name="interest-rate-equity-loan"]');
const interestOnLoanInput = document.querySelector('input[name="interest-on-loan"]');

const rentPerWeek = document.querySelector('input[name="potential-rent-per-week"]');
const totalRentalWeeks = document.querySelector('input[name="projected-rental-weeks"]');
const netRentalIncome = document.querySelector('input[name="net-rental-income"]');



// calculate net rental income
function calculateNetRentalIncome() {
  if(rentPerWeek.value && totalRentalWeeks.value) {
    const rentalIncome = parseFloat(rentPerWeek.value) * parseFloat(totalRentalWeeks.value);
    netRentalIncome.value = rentalIncome.toFixed(2);
  }
}

// Calculate interest on mortgage
function updateInterestOnMortgage() {
  const loanAmount = parseFloat(mortgageLoanAmountInput.value) || 0;
  const interestRate = parseFloat(mortgageInterestRateInput.value) || 0;
  const interestOnMortgage = (loanAmount * interestRate) / 100;
  interestOnMortgageInput.value = interestOnMortgage.toFixed(0);
}

// Calculate interest on loan
function updateInterestOnLoan() {
  const equityLoanAmount = parseFloat(equityLoanAmountInput.value) || 0;
  const equityInterestRate = parseFloat(equityInterestRateInput.value) || 0;
  const interestOnLoan = (equityLoanAmount * equityInterestRate) / 100;
  interestOnLoanInput.value = parseFloat(interestOnLoan);
}






// Update land tax
function updateLandTax() {
  const landTax = calculateLandTax();
  landTaxInput.value = landTax.toFixed(2);
}



// Add event listeners for inputs
function addEventListeners() {
  
  // Add event listener for land value input
  landValueInput.addEventListener('change', handleLandValueChange);

  // Add event listener for type select change
  selectElement.addEventListener('change', handleTypeSelectChange);

  landValueInput.addEventListener('change', updateLandTax);
  landTaxRateInput.addEventListener('change', updateLandTax);
  mortgageLoanAmountInput.addEventListener('input', updateInterestOnMortgage);
  mortgageInterestRateInput.addEventListener('input', updateInterestOnMortgage);
  equityLoanAmountInput.addEventListener('input', updateInterestOnLoan);
  equityInterestRateInput.addEventListener('input', updateInterestOnLoan);

  rentPerWeek.addEventListener('input', calculateNetRentalIncome);
  totalRentalWeeks.addEventListener('input', calculateNetRentalIncome);

  // Add event listener to all input fields
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
      document.getElementById('result').style.display = "none";
      errorMessage.style.display = 'none';
    });
  });
}

// Handle land value change
function handleLandValueChange(e) {
  const landValue = e.target.value;
  const invalidStates = ['act', 'sa', 'tas', 'nt'];

  if (invalidStates.includes(selectElement.value)) {
    promptMessage.style.display = 'block';
    landTaxRateInput.value = "";
    landTaxRateInput.removeAttribute('disabled');
  } else {
    promptMessage.style.display = 'none';
    landTaxRateInput.setAttribute('disabled', 'disabled');
    setLandTaxRate(landValue);
  }
}

// Handle type select change
function handleTypeSelectChange() {
  promptMessage.style.display = 'none';
  const selectedValue = this.value;
  const landValue = parseFloat(landValueInput.value);
  const invalidStates = ['act', 'sa', 'tas', 'nt'];

  if (invalidStates.includes(selectedValue)) {
    promptMessage.style.display = 'block';
    landTaxRateInput.value = "";
    landTaxInput.value = "";
    landTaxRateInput.removeAttribute('disabled');
  } else {
    promptMessage.style.display = 'none';
    landTaxRateInput.setAttribute('disabled', 'disabled');
    setLandTaxRate(landValue);
  }
}

// Set land tax rate based on land value
function setLandTaxRate(landValue) {
  const landTaxRateInput = document.querySelector('input[name="land-tax-rate"]'); // Assuming you have an input for land tax rate
  const state =  document.getElementById('type-select').value;
  if (state === 'qld') {
    if (landValue >= 10000000) {
      landTaxRateInput.value = 2.25;
    } else if (landValue >= 5000000) {
      landTaxRateInput.value = 1.75;
    } else if (landValue >= 3000000) {
      landTaxRateInput.value = 1.25;
    } else if (landValue >= 1000000) {
      landTaxRateInput.value = 1.65;
    } else if (landValue >= 600000) {
      landTaxRateInput.value = 1.00;
    } else {
      landTaxRateInput.value = 0;
    }
  } else if (state === 'wa') {
    if (landValue >= 11000000) {
      landTaxRateInput.value = 0.0267;
    } else if (landValue >= 5000000) {
      landTaxRateInput.value = 0.02;
    } else if (landValue >= 1800000) {
      landTaxRateInput.value = 0.018;
    } else if (landValue >= 1000000) {
      landTaxRateInput.value = 0.009;
    } else if (landValue >= 420000) {
      landTaxRateInput.value = 0.0025;
    } else {
      landTaxRateInput.value = 0;
    }
  } else if (state === 'nsw') {
    // NSW has a different structure; rates are based on thresholds and are not directly linear.
    if (landValue > 6571000) {
      landTaxRateInput.value = 2.00; // This is a proxy; actual calculation is more complex.
    } else if (landValue > 1075000) {
      landTaxRateInput.value = 1.60; // This is a proxy; actual calculation is more complex.
    } else {
      landTaxRateInput.value = 0;
    }
  } else {
    landTaxRateInput.value = 0; // For states where manual entry is needed or no applicable rate
  }
}



// Calculate land tax based on state
function calculateLandTax() {
  const landValue = parseFloat(document.querySelector('input[name="land-value"]').value) || 0;
  const state = document.getElementById('type-select').value; // Get the selected state

  let landTax = 0;

  switch (state) {
    case 'qld':
      if (landValue >= 10000000) {
        landTax = 150000 + (0.0225 * (landValue - 10000000));
      } else if (landValue >= 5000000) {
        landTax = 62500 + (0.0175 * (landValue - 5000000));
      } else if (landValue >= 3000000) {
        landTax = 37500 + (0.0125 * (landValue - 3000000));
      } else if (landValue >= 1000000) {
        landTax = 4500 + (0.0165 * (landValue - 1000000));
      } else if (landValue >= 600000) {
        landTax = 500 + (0.01 * (landValue - 600000));
      } else {
        landTax = 0;
      }
      break;

    case 'wa':
      if (landValue >= 11000000) {
        landTax = 186550 + (0.0267 * (landValue - 11000000));
      } else if (landValue >= 5000000) {
        landTax = 66550 + (0.02 * (landValue - 5000000));
      } else if (landValue >= 1800000) {
        landTax = 8950 + (0.018 * (landValue - 1800000));
      } else if (landValue >= 1000000) {
        landTax = 1750 + (0.009 * (landValue - 1000000));
      } else if (landValue >= 420000) {
        landTax = 300 + (0.0025 * (landValue - 420000));
      } else {
        landTax = 0;
      }
      break;

    case 'nsw':
      if (landValue > 6571000) {
        landTax = 88036 + (0.02 * (landValue - 6571000));
      } else if (landValue > 1075000) {
        landTax = 100 + (0.016 * (landValue - 1075000));
      } else {
        landTax = 0;
      }
      break;

    case 'vic':
      if (landValue >= 3000000) {
        landTax = 31650 + (0.0265 * (landValue - 3000000));
      } else if (landValue >= 1800000) {
        landTax = 11850 + (0.0165 * (landValue - 1800000));
      } else if (landValue >= 1000000) {
        landTax = 4650 + (0.009 * (landValue - 1000000));
      } else if (landValue >= 600000) {
        landTax = 2250 + (0.006 * (landValue - 600000));
      } else if (landValue >= 300000) {
        landTax = 1350 + (0.003 * (landValue - 300000));
      } else if (landValue >= 100000) {
        landTax = 975;
      } else if (landValue >= 50000) {
        landTax = 500;
      } else {
        landTax = 0;
      }
      break;

    case 'act':
    case 'sa':
    case 'tas':
    case 'nt':
      // For these states, land tax amount needs to be entered manually
      landTax = parseFloat(document.querySelector('input[name="land-tax"]').value) || 0;
      break;

    default:
      landTax = 0;
  }

  return parseFloat(landTax.toFixed(2));
}


function numberToCurrency(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

// Main calculation function
function calculate() {
  const resultElement = document.getElementById("result");
  resultElement.style.display = "none";
  errorMessage.style.display = 'none';

  // Get income details input values
  const purchasePrice = getInputValue("purchase-price");
  const mortgageLoanAmount = getInputValue("mortgage-loan-amount");
  const interestRateMortgageLoan = getInputValue("interest-rate-mordgage-loan-amount");
  const equityLoan = getInputValue("equity-loan");
  const interestRateEquityLoan = getInputValue("interest-rate-equity-loan");
  const landValue = getInputValue("land-value");
  const landTaxRate = getInputValue("land-tax-rate");
  const potentialRentPerWeek = getInputValue("potential-rent-per-week");
  const projectedRentalWeeks = getInputValue("projected-rental-weeks");

  // Get expenses input values
  const advertisingTenants = getInputValue("advertising-tenants");
  const bodyCorporateFees = getInputValue("body-corporate-fees");
  const borrowingExpenses = getInputValue("borrowing-expenses");
  const cleaning = getInputValue("g-cleaning");
  const councilRates = getInputValue("h-council-rates");
  const capitalAllowances = getInputValue("capital-allowances");
  const gardeningLawnMowing = getInputValue("gardening-lawn-mowing");
  const insurance = getInputValue("k-insurance");
  const legalFees = getInputValue("legal-fees");
  const pestControl = getInputValue("pest-control");
  const propertyAgentFeesCommission = getInputValue("property-agent-fees-commission");
  const repairsAndMaintenance = getInputValue("repairs-and-maintenance");
  const capitalWorkDeduction = getInputValue("capital-work-deduction");
  const stationeryTelephonePostage = getInputValue("stationery-telephone-postage");
  const waterCharges = getInputValue("water-charges");
  const sundryRentalExpenses = getInputValue("sundry-rental-expenses");
  const anualTaxRate = getInputValue("annual-tax-rate");
  const interestOnMortgage = getInputValue("interest-on-Mortgage");
  const interestOnLoan = getInputValue("interest-on-loan");
  const landTax = getInputValue("land-tax");

    

  // Validate required fields
  if (!purchasePrice || !mortgageLoanAmount || !interestRateMortgageLoan || !equityLoan || !interestRateEquityLoan || !landValue || !potentialRentPerWeek || !projectedRentalWeeks || (landTaxRate === undefined || landTaxRate === null || landTaxRate < 0) || (!anualTaxRate || anualTaxRate <= 0)) {
    errorMessage.style.display = 'block'; // Show error message
    return; // Exit function if validation fails
  }


// open modal
const modalId = 'modal-lead-collect';
const modal = document.getElementById(modalId);

if (modal) {
  openModal(modal);
}

  // Calculate gross rental income
  const grossRentalIncome = parseFloat((potentialRentPerWeek * projectedRentalWeeks));

  // Calculate total expenses
  const totalExpenses = parseFloat(
    advertisingTenants +
    bodyCorporateFees +
    borrowingExpenses +
    cleaning +
    councilRates +
    capitalAllowances +
    gardeningLawnMowing +
    insurance +
    landTax +
    legalFees +
    pestControl +
    propertyAgentFeesCommission +
    repairsAndMaintenance +
    capitalWorkDeduction +
    stationeryTelephonePostage +
    waterCharges +
    sundryRentalExpenses +
    interestOnMortgage +
    interestOnLoan
  );


  // Calculate net rental income
  const taxableIncomeOrLosses = parseFloat((grossRentalIncome - totalExpenses));

  // Calculate tax
  const anualTaxRateModified = parseFloat((anualTaxRate / 100));
  const anualTaxLiabilityRefund = parseFloat((anualTaxRateModified * taxableIncomeOrLosses));

  // Calculate depreciation addback/reversal
  const depreciationAddbackReversal = parseFloat((capitalAllowances + capitalWorkDeduction));

  // Calculate net cashflow
  let anualNetCashflow = parseFloat((Math.abs(taxableIncomeOrLosses) - (Math.abs(anualTaxLiabilityRefund) + Math.abs(depreciationAddbackReversal))));
  if (taxableIncomeOrLosses < 0) {
    anualNetCashflow *= -1;
  }

  // Calculate weekly net cashflow
  const weeklyNetCashflow = parseFloat((anualNetCashflow / 52));

  // Display results
  displayResults(anualTaxRate, anualTaxLiabilityRefund, depreciationAddbackReversal, anualNetCashflow, weeklyNetCashflow, resultElement, grossRentalIncome, totalExpenses);
}

// Display results
function displayResults(anualTaxRate, anualTaxLiabilityRefund, depreciationAddbackReversal, anualNetCashflow, weeklyNetCashflow, resultElement, grossRentalIncome, totalExpenses) {

  

  // Net Rental Income
  document.getElementById("net-rental-income").innerHTML = `${numberToCurrency(grossRentalIncome)}`;

  // Total expenses
  document.getElementById("total-expenses").innerHTML = `${numberToCurrency(totalExpenses)}`;

  // Annual Tax Rate
  document.getElementById("anual-tax-rate").innerHTML = `${anualTaxRate}%`;

  // Annual Tax Liability/Refund
  let anualTaxLiabilityRefundFormatted = anualTaxLiabilityRefund.toFixed(2);
  if (anualTaxLiabilityRefund < 0) {
    anualTaxLiabilityRefundFormatted = `-$${Math.abs(anualTaxLiabilityRefundFormatted)}`;
  } else {
    anualTaxLiabilityRefundFormatted = `$${Math.abs(anualTaxLiabilityRefundFormatted)}`;
  }
  document.getElementById("anual-tax-liability-refund").innerHTML = numberToCurrency(anualTaxLiabilityRefundFormatted);

  // Depreciation Addback/Reversal (Non Cash)
  document.getElementById("depreciation-addback-reversal").innerHTML = `${numberToCurrency(depreciationAddbackReversal)}`;

  // Annual Net Cashflow
  let anualNetCashflowFormatted = anualNetCashflow.toFixed(2);
  if (anualNetCashflow < 0) {
    anualNetCashflowFormatted = `-$${Math.abs(anualNetCashflowFormatted)}`;
  } else {
    anualNetCashflowFormatted = `$${Math.abs(anualNetCashflowFormatted)}`;
  }
  document.getElementById("annual-net-cashflow").innerHTML = numberToCurrency(anualNetCashflowFormatted);

  // Weekly Net Cashflow
  let weeklyNetCashflowFormatted = weeklyNetCashflow.toFixed(2);
  if (weeklyNetCashflow < 0) {
    weeklyNetCashflowFormatted = `-$${Math.abs(weeklyNetCashflowFormatted)}`;
  } else {
    weeklyNetCashflowFormatted = `$${Math.abs(weeklyNetCashflowFormatted)}`;
  }
  document.getElementById("weekly-net-cashflow").innerHTML = numberToCurrency(weeklyNetCashflowFormatted);

  if (resultElement) {
    resultElement.style.display = "block";
    resultElement.scrollIntoView({ behavior: 'smooth' });
  }

  console.log("Net Rental Income", numberToCurrency(grossRentalIncome))
  console.log("Total expenses", numberToCurrency(totalExpenses))
  console.log(" Annual Tax Rate", `${numberToCurrency(anualTaxRate)} %`)
  console.log("Annual Tax Liability/Refund", anualTaxLiabilityRefundFormatted)
  console.log("Depreciation Addback/Reversal (Non Cash)", numberToCurrency(depreciationAddbackReversal))
  console.log("Annual Net Cashflow", numberToCurrency(anualNetCashflowFormatted))
  console.log("Weekly Net Cashflow", numberToCurrency(weeklyNetCashflowFormatted))
}

// Initialize event listeners on page load
addEventListeners();
