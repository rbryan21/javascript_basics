var myArray = [500, 500, 500, 500, 500];

var total = 0;

for ( var i = 0 ; i < myArray.length ; i++ )
	{
		//add the current element to the total
		total = total + myArray[i];
	}

alert("Given an array of 5 set to 500 each, the total ammount is: " + total);
