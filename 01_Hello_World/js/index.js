// JavaScript Document
$(document).ready(function() {
var o = "o"
var count = 0;
var o_enter = 0;
$('#oOoActivity li').click(function(){

  if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o'))
   {
	 alert('Yay. You clicked all 3 boxes.')
	 $("#oOoActivity li").text("+");
	$("#oOoActivity li").removeClass('disable')
	$("#oOoActivity li").removeClass('o')
	$("#oOoActivity li").removeClass('btn-primary')
	$("#oOoActivity li").removeClass('btn-info')

  }
  else if ($(this).hasClass('disable'))
  {
    alert('Already selected')
  }
  else  (count%2 == 0)
  {
	  count++
	  $(this).text(o)
      $(this).addClass('disable o btn-primary')
	    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o'))
	    {
	   alert('You did it')
	   count = 0
	   o_enter++
$('#o_enter').text(o_enter)
        }


  }

   });
    $("#reset").click(function () {
    $("#oOoActivity li").text("+");
	$("#oOoActivity li").removeClass('disable')
	$("#oOoActivity li").removeClass('o')
	$("#oOoActivity li").removeClass('btn-primary')
	$("#oOoActivity li").removeClass('btn-info')
	count = 0

  });
});
