function suggestIngredients() {
  const type = document.getElementById("skinType").value;
  const suggestionBox = document.getElementById("suggestion-box");
  const precautionsBox = document.getElementById("precautions-box");
  const ingredientList = document.getElementById("ingredientList");
  const suggestionList = document.getElementById("suggestionList");

  const ingredients = {
    dry: ["Hyaluronic Acid", "Shea Butter", "Ceramides"],
    oily: ["Niacinamide", "Salicylic Acid", "Green Tea Extract"],
    combination: ["Centella Asiatica", "Squalane", "Lactic Acid"],
    sensitive: ["Aloe Vera", "Panthenol", "Oat Extract"],
    normal: ["Vitamin C", "Jojoba Oil", "Glycerin"]
  };

  const suggestions = {
    dry: [
      "Use thick moisturizers twice a day.",
      "Avoid long hot showers.",
      "Apply hyaluronic acid before creams."
    ],
    oily: [
      "Use oil-free gel moisturizers.",
      "Avoid comedogenic products.",
      "Cleanse twice a day with a gentle cleanser."
    ],
    combination: [
      "Use a balancing toner for T-zone.",
      "Moisturize dry areas more.",
      "Exfoliate 1-2 times weekly."
    ],
    sensitive: [
      "Avoid fragrances and alcohol-based products.",
      "Always patch test new products.",
      "Use calming ingredients like chamomile."
    ],
    normal: [
      "Maintain your routine consistently.",
      "Apply sunscreen daily.",
      "Hydrate internally with water intake."
    ]
  };

  if (type && ingredients[type]) {
    suggestionBox.classList.remove("hidden");
    precautionsBox.classList.remove("hidden");

    // Update ingredients
    ingredientList.innerHTML = "";
    ingredients[type].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientList.appendChild(li);
    });

    // Update suggestions
    suggestionList.innerHTML = "";
    suggestions[type].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      suggestionList.appendChild(li);
    });
  } else {
    suggestionBox.classList.add("hidden");
    precautionsBox.classList.add("hidden");
  }
}

