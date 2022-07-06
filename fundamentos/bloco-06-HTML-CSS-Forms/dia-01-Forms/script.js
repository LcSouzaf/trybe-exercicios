// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function hrefClick (event){
    event.preventDefault();
}
 HREF_LINK.addEventListener('click',hrefClick)

 function clickCheckBox (event){
    event.preventDefault()
 }

 INPUT_CHECKBOX.addEventListener('click',clickCheckBox)

 function clickInputText (event){
    event.preventDefault();
    event.key
 }
 INPUT_TEXT.addEventListener('keypress' , clickInputText)