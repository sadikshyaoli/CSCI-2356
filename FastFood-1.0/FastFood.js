/** 
 * FastFood Library - Custom CSS Framework
 *
 * This JavaScript file encompasses the functionality of the FastFood library,
 * a custom CSS framework designed for enhancing accessibility and user
 * experience, especially for our client.
 */


/** Functionality for custom dropdown 
 * 
 * This script manages the behavior of a custom dropdown interface. 
 * It displays all options when clicked and, upon selection, displays 
 * the chosen option. It enhances user interaction and accessibility.
 */
document.addEventListener("DOMContentLoaded", function (){
  const toggleButton= document.getElementById("toggle-btn");
  const dropdownOptions = document.getElementById("dropdown-options");


  toggleButton.addEventListener("click", function() {
      if (dropdownOptions.style.display === "none" || dropdownOptions.style.display === "") {
          dropdownOptions.style.display = "block";
          dropdownOptions.scrollIntoView({"behavior":"smooth"})
        } else {
          dropdownOptions.style.display = "none";
        }
    });

    const options = dropdownOptions.getElementsByClassName("option");

    for(let i = 0; i < options.length; i++){
      options[i].addEventListener("click",function () {
          const data = options[i].innerHTML;
           toggleButton.innerHTML = data;
           dropdownOptions.style.display = "none";
      })
    }
})

/** Functionality for selecting card 
* This script enhances user interaction by indicating which card has been selected. 
* It ensures that at most, only one card can be selected among multiple cards.
*/
const btnSelects = document.querySelectorAll(".big-card .btn-select");

btnSelects.forEach(function(btnSelect) {
    btnSelect.addEventListener('click', function() {
        const parentCard = btnSelect.closest('.big-card');
        
        // Remove selected class from all cards
        document.querySelectorAll(".big-card").forEach(function(card) {
            if (card !== parentCard) {
                card.classList.remove('selected');
            }
        });
        
        // Add selected class to the parent card of the clicked button
        parentCard.classList.add('selected');
    });
});