// This script highlights all occurences of 'qry'. The variable 'qry' should
// be set before calling this script

// original qry
var qry1 = qry

// escape characters which have special meanings in regular expressions
qry =  qry.replace(/([-()\[\]{}+?*.$\^,:#<!\\])/g, '\\$1').
      replace(/\x08/g, '\\x08');

console.log("highlighter is running with qry = " + qry + "...");

// get all HTML from the body
var text = document.body.innerHTML;

// Create a regular expression to find all occurences of the 
var findWord = RegExp("("+qry+")" + '(?![^<]*>)', "gi"); 

m = text.match(findWord);

if (m != null) {

    console.log("Search for " + qry + " finds " + m.length + " matches");

    // add <span> tags and background-color for each match (stored in $1)
    text = text.replace(findWord, "<span style ='background-color:yellow'>$1</span>");

    // reset the inner HTML of the body
    document.body.innerHTML = text;
}





//show summary to founded term
// create unordered list string 
var term1c = RegExp("("+term1+")" + '(?![^<]*>)', "gi"); 
var term2c = RegExp("("+term2+")" + '(?![^<]*>)', "gi"); 
var term3c = RegExp("("+term3+")" + '(?![^<]*>)', "gi"); 

a = text.match(term1c);
b = text.match(term2c);
c = text.match(term3c);

term1Count = 0;
term2Count = 0;
term3Count = 0;

if (a != null) {term1Count = a.length}
if (b != null) {term2Count = b.length}
if (c != null) {term3Count = c.length}

let string = '<p>Match Count</p>';
if (term3 != ""){
    string += "<p>"+term1 +": "+ term1Count +", "+term2 + ": " + term2Count +", "+ term3 + ": "+ term3Count +"</p>";
}
else if (term2 != ""){
        string += "<p>"+term1 +": "+ term1Count +", "+term2 + ": " + term2Count +"</p>";     
}
else {
        string += "<p>"+term1 +": "+ term1Count +"</p>";

}









// create a div to hold the elements
let div = document.createElement('div');

// set the links string to the innerHTML
div.innerHTML = string;

// style the div
div.className = 'summary-box';
div.style.zIndex = '1000';
div.style.fontSize = 'small';
div.style.position = 'fixed';
div.style.top = '0%';
div.style.right = '0%';
div.style.backgroundColor = 'yellow';
div.style.padding = '1%';
div.style.border = 'solid 1px black';

// append the div to the body so that it is displayed on the page
document.body.append(div);



