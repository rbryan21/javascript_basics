// JavaScript function definition here
/**
* The main function
*/
function display(){
  console.log("button clicked");
  var temp = forloop();
  $(".mainDIV").append("<p>No... now here is your forLoop, Ya JERK. "+ temp +"</p>");
}
/**
* The loop as requested
*/
function forloop(){
  var temp="";
  var array = [0];
  for(i=0;i<9;i++){
    //push a random value into the array
    array.push(Math.floor(Math.random()*10));
  }
  console.log(array);
  return array;
}
