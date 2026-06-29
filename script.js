```javascript
function searchFish() {
    const input = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const fish = card.querySelector("h2").textContent.toLowerCase();

        if (fish.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
```
```javascript
function searchFish() {
    const input = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const fish = card.querySelector("h2").textContent.toLowerCase();

        if (fish.includes(input)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}
```
