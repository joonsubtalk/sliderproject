var slideIndex = 1;
var step = 1;

showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("basic");
    if(n > x.length) {slideIndex = 1};
    if(n < 1) {slideIndex = x.length};
    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


function slideit() {
    document.images.slide.src = eval("image" + step + ".src");
    if (step < 2)
        step++;
    else
        step = 1;
    setTimeout("slideit()", 2500);
}
slideit();