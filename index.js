var output = document.getElementById("output");
//Declared a orderSmoothie() function 
function orderSmoothie() {

  //by using document.getElement getting the size of smoothie from the dropdown list 
  var sizeSelect = document.getElementById("size");
  var size = sizeSelect.options[sizeSelect.selectedIndex].value;
//by using document.getElement getting the size of smoothie from the dropdown list 
  var baseRadios = document.getElementsByName("base");
  var base = "";

  //using for loop to go through every radio button
  for (var i = 0; i < baseRadios.length; i++) {

    //using if statement to check which radio button is pressed
    if (baseRadios[i].checked) {
      base = baseRadios[i].value;
      break;
    }
  }
//
  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  //declared empty variable to store the selected ingredients & extras
  var ingredients = [];
  var extras = [];

  var basicIngredients = [
    "Banana", "Strawberry", "Mango", "Spinach",
    "Blueberry", "Kiwi", "Dragon fruit", "Raspberry", "Pineapple"
  ];
//using for loop to check which ingredient is selected by loop through each checkbox value 
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var value = checkboxes[i].value;

      //for separating the ingredients and extras using if else 
      if (basicIngredients.indexOf(value) !== -1) {
        ingredients.push(value);
      } else {
        extras.push(value);
      }
    }
  }
//by using if else statement calculating the price on behalf of size 
  var basePrice = 0;
  if (size === "Small") {
    basePrice = 3;
  } else if (size === "Medium") {
    basePrice = 3.50;
  } else if (size === "Large") {
    basePrice = 3.98;
  }
//adding 0.5 for the each ingredient and 1 for extra protein source 
  var ingredientPrice = ingredients.length * 0.5;
  var extrasPrice = extras.length * 1;

  //for showing the total price 
  var totalPrice = basePrice + ingredientPrice + extrasPrice;

  output.innerHTML = "";

  //for showing the order details 
  var details = document.createElement("div");
  details.className = "smoothie-details";

  var html = "<h2>Your Order Detail</h2>";
  html += "<p><strong>Size:</strong> " + size + "</p>";
  html += "<p><strong>Base:</strong> " + base + "</p>";
  html += "<p><strong>Ingredients:</strong> " + (ingredients.length ? ingredients.join(", ") : "None") + "</p>";
  html += "<p><strong>Extras:</strong> " + (extras.length ? extras.join(", ") : "None") + "</p>";
  html += "<p><strong>Total Price:</strong> $" + totalPrice.toFixed(2) + "</p>";

  details.innerHTML = html;
  output.appendChild(details);


    //for showing the image along with the order details
  var img = document.createElement("img");
  img.src = "download.jpeg";
  img.alt = "Smoothie image";
  img.height = 160;
  img.style.borderRadius = "15px";
  output.appendChild(img);
}
