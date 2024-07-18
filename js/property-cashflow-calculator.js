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
  const rentalIncome = parseFloat(rentPerWeek.value) * parseFloat(totalRentalWeeks.value);
  netRentalIncome.value = rentalIncome.toFixed(2);
}

// Update land tax
function updateLandTax() {
  const landTax = calculateLandTax();
  landTaxInput.value = landTax.toFixed(2);
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
  interestOnLoanInput.value = interestOnLoan.toFixed(2);
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
  rentPerWeek.addEventListener('input', updateLandTax);
  totalRentalWeeks.addEventListener('input', updateLandTax);

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
  if (landValue >= 3000000) {
    landTaxRateInput.value = "2.65";
  } else if (landValue >= 1800000) {
    landTaxRateInput.value = "1.65";
  } else if (landValue >= 1000000) {
    landTaxRateInput.value = "0.9";
  } else if (landValue >= 600000) {
    landTaxRateInput.value = "0.6";
  } else if (landValue >= 300000) {
    landTaxRateInput.value = "0.3";
  } else {
    landTaxRateInput.value = "0";
  }
}

// Calculate land tax
function calculateLandTax() {

  const currentLandValue = parseFloat(document.querySelector('input[name="land-value"]').value) || 0;
  const currentLandTaxValue = parseFloat(document.querySelector('input[name="land-tax-rate"]').value) || 0;
  const currentLandTaxRate = parseFloat(currentLandTaxValue / 100);

  if (currentLandValue >= 3000000) {
    return 31650 + (currentLandTaxRate * (currentLandValue - 3000000));
  } else if (currentLandValue >= 1800000) {
    return 11850 + (currentLandTaxRate * (currentLandValue - 1800000));
  } else if (currentLandValue >= 1000000) {
    return 4650 + (currentLandTaxRate * (currentLandValue - 1000000));
  } else if (currentLandValue >= 600000) {
    return 2250 + (currentLandTaxRate * (currentLandValue - 600000));
  } else if (currentLandValue >= 300000) {
    return 1350 + (currentLandTaxRate * (currentLandValue - 300000));
  } else if (currentLandValue >= 100000) {
    return 975;
  } else if (currentLandValue >= 50000) {
    return 500;
  } else {
    return 0;
  }
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
  document.getElementById("net-rental-income").innerHTML = `$${grossRentalIncome}`;

  // Total expenses
  document.getElementById("total-expenses").innerHTML = `$${totalExpenses}`;

  // Annual Tax Rate
  document.getElementById("anual-tax-rate").innerHTML = `${anualTaxRate}%`;

  // Annual Tax Liability/Refund
  let anualTaxLiabilityRefundFormatted = anualTaxLiabilityRefund.toFixed(2);
  if (anualTaxLiabilityRefund < 0) {
    anualTaxLiabilityRefundFormatted = `-$${Math.abs(anualTaxLiabilityRefundFormatted)}`;
  } else {
    anualTaxLiabilityRefundFormatted = `$${Math.abs(anualTaxLiabilityRefundFormatted)}`;
  }
  document.getElementById("anual-tax-liability-refund").innerHTML = anualTaxLiabilityRefundFormatted;

  // Depreciation Addback/Reversal (Non Cash)
  document.getElementById("depreciation-addback-reversal").innerHTML = `$${depreciationAddbackReversal.toFixed(2)}`;

  // Annual Net Cashflow
  let anualNetCashflowFormatted = anualNetCashflow.toFixed(2);
  if (anualNetCashflow < 0) {
    anualNetCashflowFormatted = `-$${Math.abs(anualNetCashflowFormatted)}`;
  } else {
    anualNetCashflowFormatted = `$${Math.abs(anualNetCashflowFormatted)}`;
  }
  document.getElementById("annual-net-cashflow").innerHTML = anualNetCashflowFormatted;

  // Weekly Net Cashflow
  let weeklyNetCashflowFormatted = weeklyNetCashflow.toFixed(2);
  if (weeklyNetCashflow < 0) {
    weeklyNetCashflowFormatted = `-$${Math.abs(weeklyNetCashflowFormatted)}`;
  } else {
    weeklyNetCashflowFormatted = `$${Math.abs(weeklyNetCashflowFormatted)}`;
  }
  document.getElementById("weekly-net-cashflow").innerHTML = weeklyNetCashflowFormatted;

  if (resultElement) {
    resultElement.style.display = "block";
    resultElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize event listeners on page load
addEventListeners();
