// when the user clicks the purchase button. render out
// "something went wrong , please try again" in the paragraph
// that has the id="error"









// answer
// when the user clicks the purchase button. render out
// "something went wrong , please try again" in the paragraph
// that has the id="error"

let errorel= document.getElementById("error");

function sayerror(){
    errorel.textContent="something went wrong , please try again"
}