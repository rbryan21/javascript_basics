

function countTo() {
    var text = "";
    for (var i = 1; i <= 255; i++) {
        text += i + "<br>";
    }
    return text;
}


function setPicture() {
    var dropDown = document.getElementById("computerDropDown");
    var value = dropDown.options[dropDown.selectedIndex].value;

    var img = document.getElementById("computerCocoImage");
    img.src = value;

}
