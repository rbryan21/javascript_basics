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