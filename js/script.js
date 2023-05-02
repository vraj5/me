// ========== pop-up ==========

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".pop-up").style.display = "block";
        },
        1000
    )
});

document.querySelector('#cancle').addEventListener("click", function(){
    document.querySelector(".pop-up").style.display = "none";
});

document.querySelector('#allow').addEventListener("click", function(){
    document.querySelector(".pop-up").style.display = "none";
});

// ========= Number Counter =========

let valueDisplays = document.querySelectorAll(".num");
let interval = 8000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let Counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(Counter);
        }
    }, duration);
});