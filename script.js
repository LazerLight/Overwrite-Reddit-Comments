/*
STEP 0:

Make sure you are logged in to your Reddit account and go to your comments history 
and open your browser console (ctrl + shift + i on Chrome or Firefox)

*/

/*
STEP 1:

Copy and paste, in the browser console, the below code only up to MY next comment. 
This will open all your comments for editing. Wait until all are open before proceeding to the next step.

*/
(function clickEdit() {
    let currentTime = 0;
    let aTags = document.querySelectorAll("a.edit-usertext");
    console.log(53)
    for (const key of Object.keys(aTags)) {
        if (aTags[key].textContent === "edit") {
            currentTime = currentTime + 400;
            setTimeout(function() {
                aTags[key].click();
            }, currentTime);
            
        }
    } 
})();

/*
STEP 2: 

Copy and paste, in the browser console, the below code only up to MY next comment. 
This will replace all your comments with a random number. Wait until all the
comments are overwritten before proceeding to the next step.

*/

(function changeText() {
    let textAreas = document.querySelectorAll("textarea");
    let currentTime = 0;
    for (const key of Object.keys(textAreas)) {
        currentTime = currentTime + 400;
        setTimeout(function() {
            textAreas[key].value = Math.pow(Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1);
        }, currentTime);
    }
})();

/*
STEP 3: 

Copy and paste this last bit in the browser console
This will save all your new comments. Wait until all the
comments are saved before repeating this on the next comments page.
Repeat steps 1 - 3 for all your comment pages.

*/

(function saveText() {
    let saveButtons = document.querySelectorAll("button.save");
    let currentTime = 0;
    for (const key of Object.keys(saveButtons)) {
        currentTime = currentTime + 1400;
        setTimeout(function() {
            saveButtons[key].click();
        }, currentTime);
    }
})()
