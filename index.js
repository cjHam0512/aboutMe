const button = document.getElementById("button1");
const frame = document.querySelector("iframe");

let count = 0;
button.onclick = (event) => {
    count++;
    if(count > 2) count = 0;
    switch(count) {
        case 0:
            frame.setAttribute("src", "./html/first.html");
            break;
        case 1:
            frame.setAttribute("src", "./html/second.html");
            break;
        case 2:
            frame.setAttribute("src", "./html/third.html");
            break;
        }
}