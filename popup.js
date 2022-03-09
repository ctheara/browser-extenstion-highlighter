// injects 'highlight.js' which highlights the specified 'term' on the page 
function highlight(term) {

    let codeString = "var qry = \"" + term + "\";";
    
    // executes scripts on the page
    // execute codeString statement then callback function 
    chrome.tabs.executeScript(null, {code: codeString},

        // call back function runs highlight.js script
        function() { 
            chrome.tabs.executeScript(null, {file: "highlight.js"});
            window.close();
        }
    );
    
}

// Chrome extensions do not allow inline Javascript in popups for security reasons.
// Innstead we add a listener for button click, in this case calling 'highlight()'
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnHighlight").addEventListener("click", 
        function() {
            let search = document.getElementById('searchString').value;
            if (search == '') {
                return;
            }
            highlight(search);
        })
});

