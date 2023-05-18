const delButtonFavorite = async (event) => {
  console.log("hitDelete", event.target);
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/favorites/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/favorite");
    } else {
      console.log("broken");
      //   alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".my-container")
  .addEventListener("click", delButtonFavorite);
