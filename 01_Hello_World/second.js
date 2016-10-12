var cocoTypes = ["Original Color Computer", "Color Computer 2", "Color Computer 3"];
var cocoImages = ["300px-TRS-80_Color_Computer_1_front_right.jpg","images.jpeg","tandy-coco-3.jpg"];

select = document.getElementById('computerDropDown');

// Populate the option tags for the select
for (var counter = 0; counter < cocoTypes.length; counter++) {
    var opt = document.createElement('option');
    opt.value = cocoImages[counter];
    opt.innerHTML = cocoTypes[counter];
    select.appendChild(opt);
}