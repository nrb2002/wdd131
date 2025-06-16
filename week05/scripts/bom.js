/*Declare three (3) variables that hold references to the input, button, 
and list elements*/
const input = document.getElementById("favchap");
const ul = document.getElementById("list");
const addchapButton = document.getElementById("addchap");

/**
 * Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList
 * Add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing.
 */
let chaptersArray = getChapterList() || [];

/** 
 * Populate the displayed list of chapters. 
 * Use a forEach on the chaptersArray to process each entry named chapter. 
 * Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. 
 * That way each entry will be processed.
*/
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

/* Create a click event listener for the Add Chapter button using an 
 addEventListener.*/
addchapButton.addEventListener("click", () => {
    /**
     * Within the Add Chapter button click event function block, between the 
     * opening and closing of the callback function argument { ... }, do the 
     * following:
     */

    /**Check to make sure the input is not blank before completing the remaining tasks in this list */
    if(input.value.trim()!==""){
        displayList(input.value); //Call displayList with the input.value argument
        chaptersArray.push(input.value); //Push the input.value into the chaptersArray
        setChapterList(); //Update the localStorage with the new array by calling a function named setChapterList
        input.value =""; //Clear the input
        input.focus(); //Set the focus back to the input
    }else{
        alert("Please enter a chapter to proceed. ");
    }     
});

//Create a function that displays the list of chapters
function displayList(item){   
    const li = document.createElement("li"); /* Create a li element that will hold each entry's chapter title and an associated delete button.*/
    const deleteButton = document.createElement("button"); // Create a delete button.

    // Populate the li element variable's textContent or innerHTML with the input value
    li.textContent = item;

    deleteButton.classList.add("delete"); //Add the delete class to the delete button
    deleteButton.ariaLabel = `Remove ${li.textContent}`;  //Create a aria-label attribute on the button
    deleteButton.textContent = "❌";  //Populate the button textContent with a ❌.

    //Add an event listener to the delete button that removes the li element 
    // when clicked.
    deleteButton.addEventListener('click', function () {
        let msg = "Do you really want to remove this chapter? ";
        if(confirm(msg) == true){
            ul.removeChild(li);
            msg = "Chapter deleted successfully!";

            deleteChapter(li.textContent); //This function removes the chapter from the array in the localStorage. 
            input.focus();
        }            
    });
    console.log("I like to try difficult things!")

    //Append the li element variable with the delete button.
    li.append(deleteButton);

    //Append the li element variable to the unordered list in your HTML
    ul.append(li);
}

//Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, you will need to use JSON.parse on the string.
function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

//Finally, define the deleteChapter function with a parameter named chapter that does three things.
/** 
 * Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when you called the deleteChapter function. Use string.slice() method to extract the last character.
 * Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
 * Call the setChapterList function to update the localStorage item.
 */ 
function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1); // this slices off the last character
    chaptersArray = chaptersArray.filter(item => item !== chapter); //return everything except the chapter to be removed
    setChapterList(); //update the localStorage
}






