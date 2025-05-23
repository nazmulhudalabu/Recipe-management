document.addEventListener("DOMContentLoaded", () => {
  const recipeId = new URLSearchParams(window.location.search).get("id");

  const recipes = {
    1: {
      title: "Biriyani",
      image: "../Asset/Image/biriyani.jpg",
      description: "Aromatic basmati rice layered with spicy chicken masala."
    },
    2: {
      title: "Shutki Bhuna",
      image: "../Asset/Image/shutki.jpg",
      description: "Dry fish cooked with onions, garlic, and chilies."
    },
    3: {
      title: "Shorshe Ilish",
      image: "../Asset/Image/ilish.jpg",
      description: "Hilsha fish in mustard gravy, a Bengali classic."
    },
    4: {
      title: "Begun Bharta",
      image: "../Asset/Image/begun.jpg",
      description: "Mashed eggplant with mustard oil, green chili, and garlic."
    }
  };

  const data = recipes[recipeId];
  if (data) {
    document.getElementById("recipe-title").textContent = data.title;
    document.getElementById("recipe-image").src = data.image;
    document.getElementById("recipe-description").textContent = data.description;
  }

  const stars = document.querySelectorAll("#star-rating span");
  const ratingDisplay = document.getElementById("rating-value");
  const storageKey = `rating_${recipeId}`;
  let selectedRating = parseInt(localStorage.getItem(storageKey)) || 0;

  function updateStars(rating) {
    stars.forEach(star => {
      const val = parseInt(star.dataset.value);
      star.classList.toggle("active", val <= rating);
    });
    ratingDisplay.textContent = `Your rating: ${rating}`;
  }

  stars.forEach(star => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.dataset.value);
      localStorage.setItem(storageKey, selectedRating);
      updateStars(selectedRating);
    });
  });

  
  updateStars(selectedRating);
});
