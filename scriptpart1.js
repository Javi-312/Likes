var likes = [0]
var spans = [
    document.querySelector("#note")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "likes";
}