/**
 * The purpose of this file is to provide a couple of function for index.html.
 *
 *
 * @Author: Patrik Williams
 * @Note: Code help from W3School
 * @File: computerDropDownOptions.js
 */

/**
 * The countTo function is a representation of my first program.
 * It modifies the id=demo2 paragraph tag
 * @returns {string} of text to inner HTML.
 */
function countTo() {
    var text = "";
    for (var i = 1; i <= 255; i++) {
        text += i + "<br>";
    }
    return text;
}

/**
 * The purpose is to do the magic of changing the <img src=""> tag to point to a new picture when
 * the user changes the drop down
 */
function setPicture() {
    var dropDown = document.getElementById("computerDropDown");
    var value = dropDown.options[dropDown.selectedIndex].value;

    var img = document.getElementById("computerCocoImage");
    img.src = value;
}
