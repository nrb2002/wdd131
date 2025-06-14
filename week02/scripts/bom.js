/*Declare three (3) variables that hold references to the input, button, 
and list elements*/
const input = document.getElementById("favchap");
const ul = document.getElementById("list");
const addchapButton = document.getElementById("addchap");

/* Create a click event listener for the Add Chapter button using an 
 addEventListener.*/
addchapButton.addEventListener("click", function(){
    /**
     * Within the Add Chapter button click event function block, between the 
     * opening and closing of the callback function argument { ... }, do the 
     * following:
     */
    /**Check to make sure the input is not blank before completing the 
     * remaining tasks in this list */
    if(input.value.trim()!==""){
        /* Create a li element that will hold each entry's chapter title and an 
        associated delete button.*/
        const li = document.createElement("li");

        // Populate the li element variable's textContent or innerHTML with the input value
        li.textContent = input.value;

        // Create a delete button.
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");

        //Create a aria-label attribute on the button
        deleteButton.ariaLabel = `Remove ${li.textContent}`;

        //Populate the button textContent with a ❌.
        deleteButton.textContent = "❌";

        //Add an event listener to the delete button that removes the li element 
        // when clicked.
        deleteButton.addEventListener('click', function () {
            let msg = "Do you really want to remove this chapter? ";
            if(confirm(msg) == true){
                ul.removeChild(li);
                msg = "Chapter deleted successfully!"
            }
            
        });

        //Append the li element variable with the delete button.
        li.append(deleteButton);

        //Append the li element variable to the unordered list in your HTML
        ul.append(li);        
    }else{
        alert("Please enter a chapter to proceed. ");
    }
      
    /**
     * Change the input value to nothing or the empty string to clean up the 
     * interface for the user.
     */ 
    input.value = ""; 

    //Send the focus to the input field
    input.focus();
});



