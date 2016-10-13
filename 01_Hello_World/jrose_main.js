$(document).ready(function () {
   
    var names = ["John", " Bob", " Ted", " William"];
    var textDisplay = "";

    $("#btn1").click(function () {
        var i;
        for (i = 0; i < names.length; i++) {
        textDisplay += names[i] + "<br>";
        }
        alert("The current names in the array: " + names);
        document.getElementById("name_textbox").innerHTML = textDisplay;
    });
    
    $("#btn2").click(function () {
      
        alert("Why did you click this button?");
     
    });
        
    $("#btn3").click(function () {
        var input = $("#input_1").text();
        names.push(input);
       
    });
    
}); 

