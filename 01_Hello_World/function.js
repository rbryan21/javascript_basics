// Moves image around
$('body').click(function(e){
    $('#demog').animate({
        top: e.pageY,
        left: e.pageX
     }, 1000);
     $("#demog").css(
         "border-radius", "50%"
     );
});

// Function for adding text
var textList = 
{
    text: [],
    addText: function(textValue)
    {
        this.text.push({
            textValue: textValue
        });
    }
};

// Adds text to HTML
var handlers = 
{
    addText: function()
    {
        var addTextInput = document.getElementById('addTextInput');
    }
}
