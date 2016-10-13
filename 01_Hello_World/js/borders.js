// borders3.js
// An example of a functon called by color,font,style selectors 
// it will determine the color, font and style of the table's contents

function formatColor(value) {            
    document.getElementById("tbl").style.backgroundColor = "#" + value;    
}


function formatSize(value) {
    document.getElementById("tbl").style.fontSize = value + "px";
}

function formatStyle(value) {
    document.getElementById("tbl").style.fontStyle = value;
}