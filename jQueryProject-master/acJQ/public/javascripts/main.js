

// Now comes the code that must wait to run until the document is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {

function getOption(){
    selectElement =
        document.querySelector('invItems');
    output = selectElement.Value;
    document.querySelector('.output').textContent=output;
}
});  



