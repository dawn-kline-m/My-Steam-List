const newReviewHandler = async (event) => {
  event.preventDefault();

  const game_title = document.querySelector("#game-title").value.trim();
  const rating = document.querySelector("#rating").value.trim();
  const review = document.querySelector("#reviewArea").value.trim();

  if (game_title && rating && review) {
    const response = await fetch(`/api/reviewRoutes/`, {
      method: "POST",
      body: JSON.stringify({ game_title, rating, review }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/favorite");
    } else {
      alert("Failed to create review");
    }
  }
  console.log(newReviewHandler);
};

document
  .querySelector("createButton")
  .addEventListener("click", newReviewHandler);
