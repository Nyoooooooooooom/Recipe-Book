// Recipe display and filtering functions
function displayRecipes(category = null) {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const recipeCardsContainer = document.getElementById("recipe-cards");
    
    if (!recipeCardsContainer) return;
    
    recipeCardsContainer.innerHTML = "";

    const filteredRecipes = category && category !== 'All' 
        ? recipes.filter(recipe => recipe.category === category)
        : recipes;

    filteredRecipes.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeCardsContainer.appendChild(recipeCard);
    });
}

function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.className = "recipe-card";
    
    card.innerHTML = `
        ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}">` : ''}
        <h3>${recipe.name}</h3>
        <p class="info">
            <span class="time">${recipe.time} minutes</span>
            <span class="category">${recipe.category}</span>
        </p>
    `;

    card.addEventListener('click', () => showRecipeModal(recipe));
    return card;
}

function showRecipeModal(recipe) {
    // ... your existing modal code ...
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
    // Get current page category from URL or data attribute
    const pageCategory = document.body.dataset.category || null;
    displayRecipes(pageCategory);
});