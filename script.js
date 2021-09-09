const rating = document.querySelector("#rating");
function rate(e){
    const stars = document.querySelectorAll(".star");
    [...stars].map((star)=> star.classList.remove("hovered"));
    e. classList.add("hovered");
    let points=["poor", "fair", "good", "verygood", "average"];
    rating.innerHTML=points[e.getAttribute("data-value") - 1];
    console.log(e.getAttribute("data-value"));
}
