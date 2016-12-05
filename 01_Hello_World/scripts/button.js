

//You said it would probably take 10 minutues, but instead I learned some jquery. :)
$(document).ready(function(){
  var numClicks = 1;

  $("#left").on('click',function(){
          $("#moveableText").animate({'marginLeft' : '-=75px'});
      });

  $("#right").on('click',function(){
          $("#moveableText").animate({'marginRight' : '-=75px'});
      });

  $("#middle").on('click',function(){
      var rep = ["<h1 id=\"moveableText\">Bunny Text</h1>", "<h1 id=\"moveableText\">Mouse Text</h1>",
                  "<h1 id=\"moveableText\">Aligator Text</h1>", "<h1 id=\"moveableText\">Duck Text</h1>",
                  "<img src=\"http://img.memecdn.com/silly-owl_o_279086.jpg\" id=\"moveableText\">"];

      $("#moveableText").replaceWith( rep[numClicks] );
      if(numClicks != rep.length-1){
      numClicks++;
    }

    for(var i = numClicks; i<=6; i++) {
          //create for loop that isnt handled in jquery.... imposiible?

         $("#moveableText").animate({'fontSize' : '+=3px'});
    }
  });
});
