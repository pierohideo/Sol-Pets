document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.getElementById("filterBtn");
    const filterOptions = document.getElementById("filterOptions");

    filterBtn.addEventListener("click", () => {
        filterOptions.style.display = filterOptions.style.display === "none" ? "block" : "none";
    });

    const dealsContainer = document.getElementById("deals");
    const scrollLeft = document.querySelector(".scroll-btn.left");
    const scrollRight = document.querySelector(".scroll-btn.right");

    scrollLeft.addEventListener("click", () => {
        dealsContainer.scrollBy({ left: -200, behavior: "smooth" });
    });

    scrollRight.addEventListener("click", () => {
        dealsContainer.scrollBy({ left: 200, behavior: "smooth" });
    });
});
