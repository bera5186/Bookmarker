console.log('Script is connected');

// Listen to the submit event
document.getElementById('submit-btn').addEventListener("click", saveBookmark, false);

// Function for listening to the event
function saveBookmark(e){
    console.log('its working');
    // getting the values from the form element
    var siteName = document.getElementById('siteName').value;
    var siteURL  = document.getElementById('siteurl').value;

    var bookMark = {
        name : siteName,
        url  : siteURL
    }
    console.log(bookMark)
    
    e.preventDefault();
}