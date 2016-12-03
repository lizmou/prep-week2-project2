/*
=======================================================
** Week 2 - Project 1 ** Arrays and methods of arrays

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the results can be displayed into the
HTML page. In some cases, you may want to check 
within the console for verification of the array. 

console.log();

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");



// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

var array = [];
array.unshift("red", "green");
array.push("blue","yellow");

document.getElementById("q1").innerHTML = array;


// 2. Add an additional item to the beginning of your array.

array.unshift("black");
document.getElementById("q2").innerHTML = array;



// 3. Remove the second and third items in your array.

var sliced = array.slice(1,3);

document.getElementById("q3").innerHTML = sliced;


// 4. Add two new items after the second item.

sliced.push("orange", "pink");

document.getElementById("q4").innerHTML = sliced;



// 5. Log to the console: 'The current length of the array is....' using the .length method
document.getElementById("q5").innerHTML = "<p>" + "The current length of the array is " + array.length + "</p>";



// Use the following Array for questions 6-9:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

things[2] = "keyboard";

document.getElementById("q6").innerHTML = things;



// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

var combine = things.join(" and ");

document.getElementById("q7").innerHTML = combine;


// 8. Remove the first item.

things.shift();

document.getElementById("q8a").innerHTML = things;



// 9. Remove all items from the things array.

var things = [];

document.getElementById("q9").innerHTML = things;



// Use the following array for question 10:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople

var orderedPeople = people.sort();

document.getElementById("q10").innerHTML = orderedPeople;



// 11. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]


var array4 = [array1, array2, array3];

document.getElementById("q11").innerHTML = array4;


// 12. Remove "Sparky" and "White" from the above array of arrays.


array4[0].splice(3,1);
array4[2].splice(0,1);

document.getElementById("q12").innerHTML = array4;



// ADVANCED TRACK
// Use the following campingItems array for question 13
var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.

var lastItem = [campingItems.pop()];
document.getElementById("q13").innerHTML = lastItem;


// 14. Add two new items to lastItem, one at the beginning and one at the end.

lastItem.push("compass");
lastItem.unshift("grill");

document.getElementById("q14").innerHTML = lastItem;



// 15. Add s'mores to the lastItem array.

lastItem.push("s'mores");

document.getElementById("q15").innerHTML = lastItem;



// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.

var reversedItems = lastItem.reverse();

document.getElementById("q16").innerHTML = reversedItems;


// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var numberPets = firstArray.concat(secondArray);

document.getElementById("q17").innerHTML =  numberPets;


// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.

sortingNumbers.sort(function(a,b){
	return a-b
});

document.getElementById("q18").innerHTML =  sortingNumbers;



/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction, 
but the next step is coming up with your own arrangements to solve 
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates! 
 
Also, consider how you can add/remove CSS styles to create added presentation with the results. 

*/