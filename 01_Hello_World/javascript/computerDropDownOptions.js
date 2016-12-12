/**
 * The purpose of this file is to populate the <option> tags in the computerDropDown select drop down list
 *
 * The idea was to provide the user the ability to see the 3 different models of the Color Computer
 *
 * @Author: Patrik Williams
 * @Note: Code help from W3School
 * @File: computerDropDownOptions.js
 */
var cocoTypes = ["Original Color Computer", "Color Computer 2", "Color Computer 3"];
var cocoImages = ["tandy-coco-1.jpg","tandy-coco-2.jpg","tandy-coco-3.jpg"];

select = document.getElementById('computerDropDown');

// Populate the option tags for the select
for (var counter = 0; counter < cocoTypes.length; counter++) {
    var opt = document.createElement('option');
    opt.value = "images/" + cocoImages[counter];
    opt.innerHTML = cocoTypes[counter];
    select.appendChild(opt);
}