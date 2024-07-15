// Function to get the input value and parse it as a float
function getInputValue(name) {
    const input = document.querySelector(`input[name="${name}"]`);
    return input && input.value ? parseFloat(input.value) : 0;
  }
  
  // Function to calculate land tax
  function calculateLandTax(landValue) {
    if (landValue > 6571000) {
      return 88036 + 0.02 * (landValue - 6571000);
    } else if (landValue > 1075000) {
      return 100 + 0.016 * (landValue - 1075000);
    } else {
      return 0;
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
  
    // Calculate interest on loans
    const interestOnMortgage = (mortgageLoanAmount * interestRateMortgageLoan).toFixed(2);
    const interestOnLoan = (equityLoan * interestRateEquityLoan).toFixed(2);
  
    // Calculate gross rental income
    const grossRentalIncome = (potentialRentPerWeek * projectedRentalWeeks).toFixed(2);
  
    // Calculate total expenses
    const totalExpenses = (
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
      sundryRentalExpenses
    ).toFixed(2);
  
    // Calculate net rental income
    const taxableIncomeOrLosses = (grossRentalIncome - totalExpenses).toFixed(0);

    // Calculate tax
    const anualTaxRate = (30/100);
    const anualTaxLiabilityRefund = (anualTaxRate * grossRentalIncome).toFixed(0);

    // Calculate depreciation addback/reversal
    const depreciationAddbackReversal = (capitalAllowances * capitalWorkDeduction).toFixed(0);

    // Calculate net cashflow
    const anualNetCashflow = (taxableIncomeOrLosses - anualTaxLiabilityRefund - depreciationAddbackReversal).toFixed(0);

    // Calculate weekly net cashflow
    const weeklyNetCashflow = (anualNetCashflow / 52).toFixed(0);
  
    
    // show result

    // Annual Tax Liability/Refund
    document.getElementById("anual-tax-liability-refund").innerHTML = anualTaxLiabilityRefund;

    // Depreciation Addback/Reversal (Non Cash)
    document.getElementById("depreciation-addback-reversal").innerHTML = depreciationAddbackReversal;

    // Annual Net Cashflow
    document.getElementById("annual-net-cashflow").innerHTML = anualNetCashflow;

    // Weekly Net Cashflow
    document.getElementById("weekly-net-cashflow").innerHTML = weeklyNetCashflow;

  }
  