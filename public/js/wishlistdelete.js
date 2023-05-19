const delButtonWishlist = async (event) => {
  console.log("hitDelete", event.target);
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/wishlist/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/wishlist");
    } else {
      console.log("broken");
      //   alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".container")
  .addEventListener("click", delButtonWishlist);

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".materialboxed");
  var instances = M.Materialbox.init(elems);
});
