
console.log("This is the first file");

function countTo() {
    var text = "";
    for (var i = 1; i <= 255; i++) {
        text += i + "<br>";
    }
    return text;
}


function setPicture() {
    var dropdown = document.getElementById("computerDropDown");
    var value = dropdown.options[dropdown.selectedIndex].value;
    alert(value);

    var img = document.getElementById("computerCocoImage");
    img.src = value;

}
