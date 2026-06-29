```javascript
// WhatsApp Message Button
function order(fishName) {

    const phone = "917036010302";

    const message =
`🐠 Hello KK AQUARIUM FISH!

I am interested in:

🐟 Fish : ${fishName}

📍 Shipping : Telangana

Please send me more details.`;

    const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

    window.open(url,"_blank");
}


// Search Bar
function searchFish(){

    let input =
    document.getElementById("search").value.toUpperCase();

    let cards =
    document.getElementsByClassName("card");

    for(let i=0;i<cards.length;i++){

        let fish =
        cards[i].getElementsByTagName("h2")[0];

        let txt =
        fish.textContent || fish.innerText;

        if(txt.toUpperCase().indexOf(input)>-1){

            cards[i].style.display="block";

        }else{

            cards[i].style.display="none";

        }

    }

}
```
