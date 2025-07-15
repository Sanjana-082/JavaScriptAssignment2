var output = document.getElementById("output");

function orderSmoothie() {
  var sizeSelect = document.getElementById("size");
  var size = sizeSelect.options[sizeSelect.selectedIndex].value;

  var baseRadios = document.getElementsByName("base");
  var base = "";
  for (var i = 0; i < baseRadios.length; i++) {
    if (baseRadios[i].checked) {
      base = baseRadios[i].value;
      break;
    }
  }

  var checkboxes = document.querySelectorAll("input[type='checkbox']");
  var ingredients = [];
  var extras = [];

  var basicIngredients = [
    "Banana", "Strawberry", "Mango", "Spinach",
    "Blueberry", "Kiwi", "Dragon fruit", "Raspberry", "Pineapple"
  ];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var value = checkboxes[i].value;
      if (basicIngredients.indexOf(value) !== -1) {
        ingredients.push(value);
      } else {
        extras.push(value);
      }
    }
  }

  var basePrice = 0;
  if (size === "Small") {
    basePrice = 3;
  } else if (size === "Medium") {
    basePrice = 4;
  } else if (size === "Large") {
    basePrice = 5;
  }

  var ingredientPrice = ingredients.length * 0.5;
  var extrasPrice = extras.length * 1;
  var totalPrice = basePrice + ingredientPrice + extrasPrice;

  output.innerHTML = "";

  var img = document.createElement("img");
  img.src = "download.jpeg";
  img.alt = "Smoothie image";
  img.height = 160;
  img.style.borderRadius = "15px";
  output.appendChild(img);

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
}
