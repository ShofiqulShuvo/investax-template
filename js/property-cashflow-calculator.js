// Function to get the input value and parse it as a float
function getInputValue(name) {
  const input = document.querySelector(`input[name="${name}"]`);
  return input && input.value ? parseFloat(input.value) : 0;
}

// Function to calculate land tax
function calculateLandTax(landValue) {
  let landTax = 0;

  if (landValue > 6571000) {
    landTax = 88036 + (0.02 * (landValue - 6571000));
    return landTax
  } else if (landValue > 1075000) {
    landTax =  100 + (0.016 * (landValue - 1075000));
    return landTax
  } else {
    return landTax;
  }
}

// Main calculation function
function calculate() {
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

  // Calculate interest on loans
  const interestOnMortgage = parseFloat((mortgageLoanAmount * (interestRateMortgageLoan / 100)));

  
  const interestOnLoan = parseFloat((equityLoan * (interestRateEquityLoan / 100)));

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
    calculateLandTax(landValue) +
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
  if(taxableIncomeOrLosses < 0) {
    anualNetCashflow *= -1
  }

 


  // Calculate weekly net cashflow
  const weeklyNetCashflow = parseFloat((anualNetCashflow / 52));

  
  // show result
  document.getElementById("anual-tax-rate").innerHTML = `${anualTaxRate}%`;

  // Annual Tax Liability/Refund
  let anualTaxLiabilityRefundFormatted = anualTaxLiabilityRefund.toFixed(2);
  if(anualTaxLiabilityRefund < 0) {
    anualTaxLiabilityRefundFormatted = `-$${Math.abs(anualTaxLiabilityRefundFormatted)}`
  } else {
    anualTaxLiabilityRefundFormatted = `$${Math.abs(anualTaxLiabilityRefundFormatted)}`
  }
  document.getElementById("anual-tax-liability-refund").innerHTML = anualTaxLiabilityRefundFormatted;

  // Depreciation Addback/Reversal (Non Cash)
  document.getElementById("depreciation-addback-reversal").innerHTML = `$${depreciationAddbackReversal.toFixed(2)}`;

  // Annual Net Cashflow
  let anualNetCashflowFormatted = anualNetCashflow.toFixed(2);
  if(anualNetCashflow < 0) {
    anualNetCashflowFormatted = `-$${Math.abs(anualNetCashflowFormatted)}`
  } else {
    anualNetCashflowFormatted = `$${Math.abs(anualNetCashflowFormatted)}`
  }
  document.getElementById("annual-net-cashflow").innerHTML = anualNetCashflowFormatted;

  // Weekly Net Cashflow
  let weeklyNetCashflowFormatted = weeklyNetCashflow.toFixed(2);
  if(weeklyNetCashflow < 0) {
    weeklyNetCashflowFormatted = `-$${Math.abs(weeklyNetCashflowFormatted)}`
  } else {
    weeklyNetCashflowFormatted = `$${Math.abs(weeklyNetCashflowFormatted)}`
  }
  document.getElementById("weekly-net-cashflow").innerHTML = weeklyNetCashflowFormatted;

}











