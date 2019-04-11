"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Melinda Chirila
   Date:   4/11/2019
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

//displays the current date when it is loaded by the browser
window.addEventListener("load", function() { 
      var orderForm = document.forms.orderForm; 
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();
      });

      //for the Calcorder function
      function calcOrder() { var orderForm = document.forms.orderForm;

      // Calculate the initial cost of the order 
      var mIndex = orderForm.elements.model.selectedIndex; 
      var mCost = orderForm.elements.model.options[mIndex].value; 
      var qIndex = orderForm.elements.qty.selectedIndex; 
      var quantity = orderForm.elements.qty[qIndex].value;

      // Initial cost = cost x quantity 
      var initialCost = mCost*quantity; 
      orderForm.elements.initialCost.value = initialCost;

      orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

      orderForm.elements.protectionCost.value = formatNumber(pCost, 2);

      orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);

      orderForm.elements.salesTax.value = formatNumber(salesTax, 2);

      orderForm.elements.totalCost.value = formatUSCurrency(totalCost);

      // Calculate the cost of the order 
      calcOrder();

      // Retrieve the cost of the user's protection plan 
      var pCost = document.querySelector('input[name=”protection”]: checked').value*quantity; 
      orderForm.elements.protectionCost.value = pCost;

      // Calculate the order subtotal 
      orderForm.elements.subtotal.value = initialCost + pCost;

      // Calculate the sales tax 
      var salesTax = 0.05*(initialCost + pCost); 
      orderForm.elements.salesTax.value = salesTax;

      // Calculate the cost of the total order 
      var totalCost = initialCost + pCost + salesTax; 
      orderForm.elements.totalCost.value = totalCost;

      }
      
      function formatNumber(val, decimals) { 
            return val.toLocaleString(undefined,
                  {minimumFractionDigits: decimals, maximumFractionDigits: decimals});
            }
            
            function formatUSCurrency(val) { 
            return val.toLocaleString('en-US',
            {style: "currency", currency: "USD"} );

            
            
   
            }
            




