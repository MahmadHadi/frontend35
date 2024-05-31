let work1 = document.querySelector(".work1");
let work2 = document.querySelector(".work2");
let work3 = document.querySelector(".work3");
let work4 = document.querySelector(".work4");

let workImg1 = document.querySelector(".work1-img");
let workImg2 = document.querySelector(".work2-img");
let workImg3 = document.querySelector(".work3-img");
let workImg4 = document.querySelector(".work4-img");


// work1.onmouseover = function() {
// }

function overmouse(work, workImg) {
    workImg.style.display = "inline-block"
    work.style.padding = "1rem 2.5rem"
}
function movemouse(work, workImg, dets) {
    workImg.style.left = dets.clientX + "px";
    workImg.style.top = dets.clientY + "px";
}
function leavemouse(work, workImg) {
    workImg.style.display = "none"
    work.style.padding = "1rem 3.5rem"
}

work1.onmouseover = function() {
    overmouse(work1, workImg1);
}

work1.onmousemove = function(dets) {
    // console.log(dets.clientX, dets.clientY);
    // workImg1.style.left = dets.clientX + "px";
    // workImg1.style.top = dets.clientY + "px";
    movemouse(work1, workImg1, dets);
}

work1.onmouseleave = function() {
    // workImg1.style.display = "none"
    // work1.style.padding = "1rem 3.5rem"

    leavemouse(work1, workImg1);
}


work2.onmouseover = function() {
    overmouse(work2, workImg2);
}

work2.onmousemove = function(dets) {
    movemouse(work2, workImg2, dets);
}

work2.onmouseleave = function() {
    // work2.style.padding = "1rem 3.5rem"
    leavemouse(work2, workImg2);
}


work3.onmouseover = function() {
    // work3.style.padding = "1rem 2.5rem"
    overmouse(work3, workImg3);
}

work3.onmousemove = function(dets) {
    movemouse(work3, workImg3, dets);
}

work3.onmouseleave = function() {
    // work3.style.padding = "1rem 3.5rem"
    leavemouse(work3, workImg3);
}


work4.onmouseover = function() {
    // work4.style.padding = "1rem 2.5rem"
    overmouse(work4, workImg4);
}

work4.onmousemove = function(dets) {
    movemouse(work4, workImg4, dets);
}
work4.onmouseleave = function() {
    leavemouse(work4, workImg4);
    // work4.style.padding = "1rem 3.5rem"
}