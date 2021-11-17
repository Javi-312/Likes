var likes = [9, 12, 9];
var spans = [
    document.querySelector("#note-1"),
    document.querySelector("#note-2"),
    document.querySelector("#note-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "likes";
}