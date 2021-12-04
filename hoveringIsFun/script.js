let frame = document.querySelector(".frame");
let maskTop = document.querySelector("#mask-top");


frame.addEventListener("mousemove", e =>{
    var rect = frame.getBoundingClientRect();

    // /400 because it's the height of the frame
    // *100 to have a value in %
    var y = Math.round((e.clientY - rect.top)/4);

    maskTop.style.height = y + "%"

})

frame.addEventListener("mouseleave", () => {
    maskTop.style.height = "50%"
})