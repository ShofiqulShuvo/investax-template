document.addEventListener("DOMContentLoaded", function () {

  // Get the input elements
  const landValueInput = document.querySelector('input[name="land-value"]');
  const landTaxRateInput = document.querySelector('input[name="land-tax-rate"]');



  // Calculate and show the result
  function calculateAndShowResult() {

    // Validate the land value input
    const landValue = parseFloat(landValueInput.value);
    if (isNaN(landValue) || landValue <= 0) {
      // Show error message if the input is invalid
      landValueInput.classList.add("not-valid");
      return;
    } else {
      // Hide error message if the input is valid
      landValueInput.classList.remove("not-valid");
    }

    // Get the land tax rate value
    const landTaxRateValue = parseFloat(landTaxRateInput.value);

    // Calculate the land tax
    const landTax = calculateLandTax(landValue, landTaxRateValue);

    // Display the result
    console.log(landTax)
    displayResult(landTax, landValue, landTaxRateValue)
  }


  // display result function
  function displayResult(landTax, landValue, landTaxRateValue) {

    // show land tax in large elemnt
    const resultInLargeElement = document.querySelector('#calculated-land-tax-in-large-size')


    resultInLargeElement.textContent = landTax.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    // show land tax in large elemnt end



    // show land value
    const landValueElement = document.querySelector('.land-value')

    landValueElement.textContent = landValue.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    // show land value end

    
    // show land value
    const landTaxRateElement = document.querySelector('.land-tax-rate')

    landTaxRateElement.textContent = landTaxRateValue
    // show land value end
    
    // show land value
    const landTaxValueInDescription = document.querySelector('.calculated-land-tax-in-description')

    landTaxValueInDescription.textContent = landTax.toLocaleString('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 2 })
    // show land value end
    
  }
  // display result function end



  // Add event listener to the calculate button
  document.querySelector(".calculate-btn").addEventListener("click", calculateAndShowResult);

  // Function to calculate land tax
  function calculateLandTax(landValue, landTaxRateValue) {
    
    let landTax = 0;
    if (landValue > 6571000) {
      landTax = 88036 + (parseFloat(landTaxRateValue) / 100) * (landValue - 6571000);
    } else if (landValue > 1075000) {
      landTax = 100 + (parseFloat(landTaxRateValue) / 100) * (landValue - 1075000);
    } else {
      landTax = 0;
    }

    return landTax;
  }


  // Calculate land tax rate based on land value and set it to the land tax rate input
  function calculateLandTaxRate() {
    const landValue = Number(landValueInput.value);
    if (landValue) {
      if (landValue > 6571000) {
        landTaxRateInput.value = 2.0;
      } else if (landValue > 1075000) {
        landTaxRateInput.value = 1.6;
      } else {
        landTaxRateInput.value = 0;
      }
    }
  }

  // Add event listener to calculate land tax rate when land value changes
  landValueInput.addEventListener("change", calculateLandTaxRate);

});
