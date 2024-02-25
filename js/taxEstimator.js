const taxableRates = [
  {
    minimumAmount: 180001,
    rates: 0.45,
    baseAmount: 51667,
  },
  {
    minimumAmount: 120001,
    rates: 0.37,
    baseAmount: 29467,
  },
  {
    minimumAmount: 45001,
    rates: 0.325,
    baseAmount: 5092,
  },
  {
    minimumAmount: 18201,
    rates: .19,
    baseAmount: 0,
  },
  
];


const estimatorForm = document.getElementById("estimator-form");

if (estimatorForm) {
  estimatorForm.addEventListener("submit", (e) => {
    e.preventDefault();


    // validate form
    const allInputs = estimatorForm.querySelectorAll('input[type="number"]');

    allInputs.forEach((input) => {
      const value = parseFloat(input.value);

      input.classList.remove("not-valid");

      if (isNaN(value) || value < 0) {
        input.classList.add("not-valid");
        return;
      }
    });
    // validate form end
    
    const data = new FormData(e.target);

    const moreThanYear = data.get("more-than-year");
    const purchasePrice = parseFloat(data.get("purchase-price"));
    const soldPrice = parseFloat(data.get("sold-price"));
    const costPurchase = parseFloat(data.get("cost-purchase"));
    const costSelling = parseFloat(data.get("cost-selling"));
    const currentTaxableIncome = parseFloat(data.get("current-taxable-income"));

    let capitalGain;
    let taxableCapitalGain;
    let capitalGainTaxPayable;

    // calculate capital gain
    capitalGain = soldPrice - purchasePrice - costPurchase - costSelling;

    console.log(`capitalGain - ${capitalGain}`)


    // calculate taxable capital gain
    if (moreThanYear === "true") {
      taxableCapitalGain = capitalGain / 2;
    } else {
      taxableCapitalGain = capitalGain;
    }

    console.log(`taxableCapitalGain - ${taxableCapitalGain}`)



    // total current taxable income
    const totalCurrentTaxableIncome = taxableCapitalGain + currentTaxableIncome;


    // calculate Capital gain tax payable
    capitalGainTaxPayable = calulateCapitalGainPayable(currentTaxableIncome, taxableRates);


    function calulateCapitalGainPayable(income, taxRates) {
        const applicableRates = taxRates.find(rates =>  rates.minimumAmount <= income);

        if(!applicableRates){
            return 0;
        }

        console.log(`applicableRates.rates - ${applicableRates.rates}`)
        console.log(`applicableRates.baseAmount - ${applicableRates.baseAmount}`)
        console.log(`totalCurrentTaxableIncome - ${totalCurrentTaxableIncome}`)

        return (totalCurrentTaxableIncome   - applicableRates.minimumAmount ) * applicableRates.rates + applicableRates.baseAmount
    }


    console.log(`capitalGainTaxPayable - ${capitalGainTaxPayable}`)
    console.log(`currentTaxableIncome - ${currentTaxableIncome}`)


    // adding calculated data to result paragraph;
    const resultCurentIncome = document.querySelector(".calculated-result .current-income");

    if(resultCurentIncome) {
        resultCurentIncome.innerHTML = currentTaxableIncome;
    }

    const resultPurchasePrice = document.querySelector(".calculated-result .purchase-price");

    if(resultPurchasePrice) {
        resultPurchasePrice.innerHTML = purchasePrice;
    }

    const resultSoldPrice = document.querySelector(".calculated-result .sold-price");

    if(resultSoldPrice) {
        resultSoldPrice.innerHTML = soldPrice;
    }
    //  adding calculated data to result paragraph end
    
    // adding calculated data to result summery
    const summeryCapitalGain = document.querySelector(".calculated-result .summary .capital-gain");

    if(summeryCapitalGain) {
        summeryCapitalGain.innerHTML = capitalGain;
    }

    const summeryCexableCapitalGain = document.querySelector(".calculated-result .summary .texable-capital-gain");
    
    if(summeryCexableCapitalGain) {
        summeryCexableCapitalGain.innerHTML = taxableCapitalGain;
    }

    const summeryCurrentTaxableIncome = document.querySelector(".calculated-result .summary .current-taxable-income");
    
    if(summeryCurrentTaxableIncome) {
        summeryCurrentTaxableIncome.innerHTML = currentTaxableIncome;
    }
    // adding calculated data to result summery end

    
  });
}
