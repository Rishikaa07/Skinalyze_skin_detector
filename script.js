function suggestIngredients() {
  const type = document.getElementById("skinType").value;
  const suggestionBox = document.getElementById("suggestion-box");
  const precautionsBox = document.getElementById("precautions-box");
  const ingredientList = document.getElementById("ingredientList");

  const ingredients = {
    dry: ["Hyaluronic Acid", "Shea Butter", "Ceramides"],
    oily: ["Niacinamide", "Salicylic Acid", "Green Tea Extract"],
    combination: ["Centella Asiatica", "Squalane", "Lactic Acid"],
    sensitive: ["Aloe Vera", "Panthenol", "Oat Extract"],
    normal: ["Vitamin C", "Jojoba Oil", "Glycerin"]
  };

  if (type && ingredients[type]) {
    suggestionBox.classList.remove("hidden");
    precautionsBox.classList.remove("hidden");

    ingredientList.innerHTML = "";
    ingredients[type].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ingredientList.appendChild(li);
    });
  } else {
    suggestionBox.classList.add("hidden");
    precautionsBox.classList.add("hidden");
  }
}
