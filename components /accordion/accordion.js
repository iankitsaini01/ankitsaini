let stop_accordion = false;
var accordionTimer;
const accordionItem = document.getElementsByClassName("caccordion-item");
const accordionItemContent = document.getElementsByClassName("caccordion-item-content");
const accordion_length = accordionItem.length;
let accordionItem_index = 0;

for (let index = 0; index < accordion_length; index++) {
        accordionItem[index].addEventListener("mouseover",()=>{ hoverOnAccrodionItem(index);});
        accordionItem[index].addEventListener("mouseleave",()=>{hoverOutAccordionItem(index);});
}

window.addEventListener("load",expand(accordionItem_index));

function accordionRun(index) {
    collapseAll();
    accordionItem_index = (index + 1)% accordion_length;
    expand(accordionItem_index);
}
function collapseAll(){
    for (let index = 0; index < accordion_length; index++) {
        accordionItem[index].classList.remove("caccordion-item--default");
    }
    for (let index = 0; index < accordionItemContent.length; index++) {
        accordionItemContent[index].classList.remove("caccordion-item-content-expand");
    }
}
function expand(accordionItem_index) {
    accordionItem[accordionItem_index].classList.add("caccordion-item--default");
    accordionItemContent[accordionItem_index].classList.add("caccordion-item-content-expand");
}
function hoverOnAccrodionItem(index) {
    stop_accordion = true;
    clearInterval(accordionTimer)
    collapseAll();
    expand(index);
}
function hoverOutAccordionItem(index) {
    stop_accordion = false
    accordionRun(index);
    timer();
    
}

function timer(){
    accordionTimer = setInterval(function () {
        stop_accordion || accordionRun(accordionItem_index);
    }, 4000);
}
timer()

