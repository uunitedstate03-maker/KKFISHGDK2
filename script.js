```javascript
function order(fishName) {
    const phone = "917036010302";

    const message =
        "Hello KK AQUARIUM FISH,\n\n" +
        "I want to order: " + fishName + ".\n\n" +
        "Please tell me the availability.";

    const url =
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

function searchFish() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let fish = cards[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

        if (fish.includes(input)) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
```
