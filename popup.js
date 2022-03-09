// injects 'highlight.js' which highlights the specified 'term' on the page 
function highlight(searchText1,searchText2,searchText3) {
    let codeString = '';

    if (searchText2 == ''){
        codeString = "var qry = \"" + searchText1 + "\";";
    }
    else if (searchText3 == ""){
        codeString = "var qry = \"" + searchText1 + "|" + searchText2+"\";";
    }
    else {
        codeString = "var qry = \"" + searchText1 + "|" + searchText2 + "|" + searchText3 +"\";";
    }


    
    // executes scripts on the page
    // execute codeString statement then callback function 
    chrome.tabs.executeScript(null, {code: codeString},
        // call back function runs highlight.js script
        function() { 
            chrome.tabs.executeScript(null, {file: "highlight.js"});
            window.close();
        }
    );

    let term1 = "var term1 = \"" + searchText1 + "\";";
    let term2 = "var term2 = \"" + searchText2 + "\";";
    let term3 = "var term3 = \"" + searchText3 + "\";";

    chrome.tabs.executeScript(null, {code: term1},
        function() { }
    );
    chrome.tabs.executeScript(null, {code: term2},
        function() { }
    );
    chrome.tabs.executeScript(null, {code: term3},
        function() { }
    );


    
}

//Action listener for highlight button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnHighlight").addEventListener("click", 
        function() {
            let searchText1 = document.getElementById('searchString1').value;
            let searchText2 = document.getElementById('searchString2').value;
            let searchText3 = document.getElementById('searchString3').value;
  
            if (searchText1 == '') {
                return;
            }
            highlight(searchText1,searchText2,searchText3);
        })
});




//Add action listener for plus button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnPlus1").addEventListener("click", 
        function() {
            
            document.getElementById('searchString2').hidden = false;
            document.getElementById('searchString2').autofocus = true;
        })
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnPlus2").addEventListener("click", 
        function() {
            
            document.getElementById('searchString3').hidden = false;
        })
});



//Show plus button when value in input box
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchString1").addEventListener("beforeinput", 
        function() {
            
            document.getElementById('btnPlus1').hidden = false;
        })
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchString2").addEventListener("beforeinput", 
        function() {
            
            document.getElementById('btnPlus2').hidden = false;
        })
});




//Hide input box if empty and lose focus
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchString2").addEventListener("blur", 
        function() {       
            if (document.getElementById("searchString2").value == "") {
                document.getElementById('searchString2').hidden = true;
                document.getElementById('btnPlus2').hidden = true;
                document.getElementById('searchString3').hidden = true;
            }         
        })
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("searchString3").addEventListener("blur", 
        function() {       
            if (document.getElementById("searchString3").value == "") {
                document.getElementById('searchString3').hidden = true;
            }         
        })
});
