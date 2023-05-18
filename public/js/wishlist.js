const newWishlistHandler = async (event) => {
  event.preventDefault();

  const game_title = document.querySelector("#game-title").value.trim();
  const price = document.querySelector("#price").value.trim();
  const review = document.querySelector("#reviewArea").value.trim();

  if (game_title && price && review) {
    const response = await fetch(`/api/wishlistAddRoutes/`, {
      method: "POST",
      body: JSON.stringify({ game_title, price, review }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/wishlist");
    } else {
      alert("Failed to create new Wishlist Item");
    }

    console.log(response); // Move this line inside the if-else block
  }
};

document
  .querySelector("#wishlistButton")
  .addEventListener("click", newWishlistHandler);
