document.addEventListener("DOMContentLoaded", function () {

  // Get the input elements
  const landTaxEntityType = document.querySelectorAll('input[name="entity-type"]');
  const landValueInput = document.querySelector('input[name="land-value"]');
  const landTaxRateInput = document.querySelector('input[name="land-tax-rate"]');

console.log(landTaxEntityType)

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

    // Get the selected entity type (individual or company/trust)
    let selectedEntityType = "";
    landTaxEntityType.forEach(function (radio) {
      if (radio.checked) {
        selectedEntityType = radio.value;
      }
    });

    
    let landTax = 0;

    console.log(landValue, landTaxRateValue, selectedEntityType)
    // Switch based on the selected entity type
    switch (selectedEntityType) {
      case "individual":
        if (landValue >= 10000000) {
          landTax = 150000 + (parseFloat(landTaxRateValue) / 100) * (landValue - 10000000);
        } else if (landValue >= 5000000) {
          landTax = 62500 + (parseFloat(landTaxRateValue) / 100) * (landValue - 5000000);
        } else if (landValue >= 3000000) {
          landTax = 37500 + (parseFloat(landTaxRateValue) / 100) * (landValue - 3000000);
        } else if (landValue >= 1000000) {
          landTax = 4500 + (parseFloat(landTaxRateValue) / 100) * (landValue - 1000000);
        } else if (landValue >= 600000) {
          landTax = 500 + (parseFloat(landTaxRateValue) / 100) * (landValue - 600000);
        } else {
          landTax = 0;
        }

        break;
  
      case "company-trust":
        if (landValue >= 10000000) {
          landTax = 187500 + (parseFloat(landTaxRateValue) / 100) * (landValue - 10000000);
        } else if (landValue >= 5000000) {
          landTax = 75000 + (parseFloat(landTaxRateValue) / 100) * (landValue - 5000000);
        } else if (landValue >= 2250000) {
          landTax = 33750 + (parseFloat(landTaxRateValue) / 100) * (landValue - 2250000);
        } else if (landValue >= 350000) {
          landTax = 1450 + (parseFloat(landTaxRateValue) / 100) * (landValue - 350000);
        } else {
          landTax = 0;
        }
        break;
  
      default:
        landTaxRateInput.value = 0;
    }
    

    return landTax;
  }


  // Calculate land tax rate based on land value and set it to the land tax rate input
  function calculateLandTaxRate() {
    const landValue = Number(landValueInput.value);
    
    // Get the selected entity type (individual or company/trust)
    let selectedEntityType = "";
    landTaxEntityType.forEach(function (radio) {
      if (radio.checked) {
        selectedEntityType = radio.value;
      }
    });
  
    // Switch based on the selected entity type
    switch (selectedEntityType) {
      case "individual":
        if (landValue >= 10000000) {
          landTaxRateInput.value = 2.25;
        } else if (landValue >= 5000000) {
          landTaxRateInput.value = 1.75;
        } else if (landValue >= 3000000) {
          landTaxRateInput.value = 1.25;
        } else if (landValue >= 1000000) {
          landTaxRateInput.value = 1.65;
        } else if (landValue >= 600000) {
          landTaxRateInput.value = 1.0;
        } else {
          landTaxRateInput.value = 0;
        }
        break;
  
      case "company-trust":
        if (landValue >= 10000000) {
          landTaxRateInput.value = 2.75;
        } else if (landValue >= 5000000) {
          landTaxRateInput.value = 2.25;
        } else if (landValue >= 2250000) {
          landTaxRateInput.value = 1.5;
        } else if (landValue >= 350000) {
          landTaxRateInput.value = 1.7;
        } else {
          landTaxRateInput.value = 0;
        }
        break;
  
      default:
        landTaxRateInput.value = 0;
    }
  }
  

  // Add event listener to calculate land tax rate when land value changes
  landValueInput.addEventListener("change", calculateLandTaxRate);

  // Add event listener for entity type selection (individual or company/trust)
  landTaxEntityType.forEach(function (radio) {
    radio.addEventListener("change", calculateLandTaxRate);
  });

});
